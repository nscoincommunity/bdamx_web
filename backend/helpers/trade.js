const mongoose = require('mongoose');
let common       = require('./common');
var validator  = require('node-validator');
let pairsDB = mongoose.model('pairs');
let orderDB    = mongoose.model('CoinOrder');
let mapDb    = mongoose.model('mapping');
let profitDb    = mongoose.model('profit');
var oArray=[];
var async          = require('async');
const fs = require('fs');
var mapTrade = function(){};
let _tradeMap = new mapTrade();
var socket = 0;
var referPercentage = 0;
var symbolsDatabase = require("../router/user/symbols_database");
var RequestProcessor = require("../router/user/request-processor").RequestProcessor;
var requestProcessor = new RequestProcessor(symbolsDatabase);
exports.SocketInit = function (socketIO)
{
   common.SocketInit(socketIO);
   socket = socketIO;
}
mapTrade.prototype._intervalFunc = (orderwith) => {
  var index = oArray.indexOf(orderwith);
  if (index > -1) {
    oArray.splice(index, 1);
  }
}
exports.createOrder = function (data)
{
    try{
        var response = {};
        response['status'] = 0,
        response['type'] = data['type'],
        response['msg'] = '',
        response['ordertype'] = data['ordertype'],
        response['pair'] = data['pair'],
        response['user_id'] = data['user_id'];
        var amount=data['amount'],
        user_id =data['user_id'],
        price=data['price'],
        pair=data['pair'],
        ordertype=data['ordertype'],
        type=data['type'];
        
        var orderwith = oArray.indexOf(user_id);
        if(orderwith == -1){
        oArray.push(user_id)
        setTimeout( _tradeMap._intervalFunc, 5000,user_id);

        console.log("socketdataaaadata",data,typeof(data['ordertype']),typeof(data['amount']),
          typeof(data['price']),typeof(data['pair']),typeof(data['ordertype']),typeof(data['type']))

        var check = validator.isObject()
        .withRequired('user_id', validator.isString())
        .withOptional('amount', validator.isNumber())
        .withOptional('price', validator.isNumber())
        .withOptional('pair', validator.isString())
        .withOptional('ordertype', validator.isString())
        .withOptional('type', validator.isString());
        validator.run(check, data, function(errorCount, errors) {
        if(errorCount==0)
        {
          where = { "frompair.status": 1 , "topair.status": 1,"status": 1, "_id": mongoose.mongo.ObjectId(pair) };       
          pairsDB.aggregate([
          {
            $lookup:
            {
              from: 'currency',
              localField: 'fromCurrency',
              foreignField: '_id',
              as: 'frompair'
            }
          },
          {
            $lookup:
            {
              from: 'currency',
              localField: 'toCurrency',
              foreignField: '_id',
              as: 'topair'
            }
          },
          {
            $project: {
              "from_symbol_id": "$fromCurrency",
              "to_symbol_id": "$toCurrency",
              "min_trade_amount": "$minTrade",
              "fees": "$fee",
              "takerFee": "$takerFee",
              "makerFee": "$makerFee",
              "status": "$status",
              "_id": "$_id",
              "topair": "$topair",
              "frompair": "$frompair",
              "fromcurrency": { $arrayElemAt: ["$frompair._id", 0] },
              "tocurrency": { $arrayElemAt: ["$topair._id", 0] },
            }
          },
          {
            $match: where
          },
          ]).exec(function (err, resData) {
            if(resData.length == 1)
            {
              var pair_details = resData[0];
              pair_details.frompair = pair_details.frompair[0];
              pair_details.topair = pair_details.topair[0];
              var min_trade_amount = pair_details.min_trade_amount;
              var total = amount * price;
              if (total < min_trade_amount) {
                response['msg'] = "Total must be "+min_trade_amount;
                _tradeMap._createResponse(response);
              }
              else
              {
                if (type == "buy") {
                  var currency = pair_details.tocurrency;
                } else {
                  var currency = pair_details.fromcurrency;
                }
                var pairName = pair_details.fromcurrency+'_'+pair_details.tocurrency;
                if (amount == 0 || price == 0 || amount == "" || price == "") {
                  response['msg'] = "Please enter valid amount and price";
                  _tradeMap._createResponse(response);
                } else {
                    common.getbalance(user_id, currency, function (balance) {
                      var curBalance = balance.amount;
                        
                       if ((total <= curBalance && type == "buy") || (amount <= curBalance && type == "sell"))
                       {
                          if (ordertype == 'stop') {
                            var status = "stoporder";
                          } else {
                            var status = "active";
                          }
                          var valueHold = 0;
                          if (type == "buy") {
                            var Balance = curBalance - total;
                            valueHold = total;
                          } else {
                            var Balance = curBalance - amount;
                            valueHold = amount;
                          }
                          let orderJson = {
                            userId    : (user_id),
                            Amount    : amount,
                            Price     : price,
                            Type      : type,
                            makerFee  : pair_details.makerFee,
                            takerFee  : pair_details.takerFee,
                            Total     : total,
                            pendingTotal: total,
                            ordertype : ordertype,
                            pair      : mongoose.mongo.ObjectId(pair_details._id),
                            pairName      : pairName,
                            status    : status
                          }
                          orderDB.create(orderJson,function(insertErr,insertRes){
                              common.updateUserBalance(user_id, currency, Balance, curBalance,insertRes._id,'trade - creation', function (balance) {
                                common.updateHoldAmount(user_id,currency,valueHold);
                                response['status'] = 1;
                                response['insertId'] = insertRes._id;
                                response['order'] = insertRes;
                                response['success'] = true;
                                response['msg'] = "Order Created Successfully";
                                _tradeMap._createResponse(response,pair_details);
                              });
                          });
                       }
                       else{
                        response['success'] = false;
                        response['msg'] = "Insufficient balance";
                         _tradeMap._createResponse(response);
                       }
                    });
                }
              }
            }
            else
            {
              response['success'] = false;
              response['msg'] = "Not a valid pair";
              _tradeMap._createResponse(response);
            }
          })
        }
        else
        {
          console.log("errors",errors)
          response['success'] = false;
          response['msg'] = "Please fill all fields";
          _tradeMap._createResponse(response);
        }
        });
    }
    else{
        response['success'] = false;
        response['msg'] = "Trade after 5 seconds";
        _tradeMap._createResponse(response);
    }
    }
    catch (e) {
        console.log('createOrder',e)
        response['success'] = false;
        response['msg'] = "Please fill all fields";
      _tradeMap._createResponse(response);
    }
}
mapTrade.prototype._createResponse= function (response,pairs = '') {
    if(response['status']==1)
    {
    //   if(response['ordertype'] == 'stop')
    //   {
    //     response['msg'] = "Stop order created successfully";
    //     _tradeMap._sendResponse(pairs,response.order.userId,'pairemit');
    //   }
    //   else
    //   {
        _tradeMap.mapOrder(response.order,pairs, function(res) {
        });
    //   }   
    }
    socket.sockets.emit('createResponse', response);
  };

mapTrade.prototype._sendResponse= function (pair,user_id,type) {

  if(type=='pairemit')
  {

    var pairSymbol = pair.frompair.currencySymbol+'_'+pair.topair.currencySymbol;
    common.redisTradeunset(pairSymbol, (etempdata) => {
      common.redisTradeConfig(pairSymbol, (etempdata) => {
       
        socket.sockets.emit('pairResponse', etempdata);
      });
    });
  }
 
  _tradeMap._userEmit(user_id,pair._id,pair.frompair._id,pair.topair._id);
};
mapTrade.prototype.mapOrder = (lastInsertOrder,pairs,callback) => {
    var globalPairDetails = pairs;
    let whereCondn;
    let sorting;
    if(lastInsertOrder.Type == 'buy'){
        whereCondn = { pair:mongoose.mongo.ObjectId(globalPairDetails._id),Type : "sell", Price: {$lte : lastInsertOrder.Price}, $or:[{status:'active'},{status:'partially'}]}
        sorting = {datetime : 1}
    } else {
        whereCondn = { pair:mongoose.mongo.ObjectId(globalPairDetails._id),Type : "buy", Price: {$gte : lastInsertOrder.Price}, $or:[{status:'active'},{status:'partially'}]}
        sorting = {datetime : 1}
    }
    orderDB.find(whereCondn).sort(sorting).exec(function(getactiveErr,getactiveRes){
        if(getactiveRes.length > 0){           
          _tradeMap.mappingLoop(globalPairDetails,lastInsertOrder,getactiveRes,0,(_loopRes) =>{})
        }else{
          _tradeMap._sendResponse(pairs,lastInsertOrder.userId,'pairemit'); // contract create order
        }
    })
}

mapTrade.prototype.mappingLoop = (globalPairDetails,lastInsertOrder,dbMatchingOrders,inc,callback) => {
    let maporder       = dbMatchingOrders[inc]
    let maporderId     = maporder._id
    let mapAmount      = maporder.Amount;
    let maporderPrice  = maporder.Price
    let orderId        = lastInsertOrder._id;
    let orderAmount    = lastInsertOrder.Amount;
    let orderPrice     = lastInsertOrder.Price
    _tradeMap._orderTempChecking(maporderId,maporder.Type, (result) => {
        if(result > 0){
            mapAmount = mapAmount-result;
        }
        _tradeMap._orderTempChecking(orderId,lastInsertOrder.Type, (result) => {
            if(result > 0){
                orderAmount = orderAmount-result;
            }
            if (orderAmount >= mapAmount) {
                var amount = mapAmount;
            }
            else{
                var amount = orderAmount;
            }
            amount = amount.toFixed(8);
            if (mapAmount > 0 && orderAmount > 0) {
                if (maporder.datetime < lastInsertOrder.datetime) {
                    var OrderPrice = maporderPrice;
                } else {
                    var OrderPrice = orderPrice;
                }
                var Tot = amount * OrderPrice;
                if(lastInsertOrder.Type == 'buy'){
                    var BuyOrder = lastInsertOrder; 
                    var SellOrder = maporder; 
                    var buyAmount    = orderAmount;
                    var sellAmount    = mapAmount;
                }
                else{
                    var SellOrder = lastInsertOrder; 
                    var BuyOrder = maporder; 
                    var buyAmount    = mapAmount;
                    var sellAmount    = orderAmount;
                }
                var buyorderid    = BuyOrder._id;
                var buyuserid     = BuyOrder.userId;
                var buyprice      = BuyOrder.Price;
                var buyType       = BuyOrder.Type;
                var sellorderid   = SellOrder._id;
                var selluserid    = SellOrder.userId;
                var sellprice     = SellOrder.Price;
                var sellType      = SellOrder.Type;
                sellAmount        = sellAmount.toFixed(8);
                buyAmount         = buyAmount.toFixed(8);
                 if (BuyOrder.datetime < SellOrder.datetime) {
                    var buyFees  = BuyOrder.makerFee
                    var sellFees =  SellOrder.takerFee
                    var ordertype = 'Sell';
                } else {
                    var buyFees  = BuyOrder.takerFee
                    var sellFees =  SellOrder.makerFee
                    var ordertype = 'Buy';
                }
                var pairName = globalPairDetails.fromcurrency+'_'+globalPairDetails.tocurrency;
                var filledprice = amount * OrderPrice;
                var buynewfee = (amount * buyFees) / 100;
                var sellnewfee = (filledprice * sellFees) / 100; 
                let insertTempDbJson = {
                    sellorderId  : sellorderid,
                    sellerUserid : selluserid,
                    tradePrice   : OrderPrice,
                    filledAmount : amount,
                    buyorderId   : buyorderid,
                    buyerUserid  : buyuserid,
                    pair         : globalPairDetails._id,
                    pairName      : pairName,
                    total        : Tot,
                    buyFee       : buynewfee,
                    sellFee      : sellnewfee,
                    ordertype    : ordertype
                }
                mapDb.create(insertTempDbJson,function(tempErr,tempRes){
                    if(tempRes){
                       const addData = {
                          userId: ordertype === 'Sell' ? insertTempDbJson.sellerUserid : insertTempDbJson.buyerUserid,
                          notification_type:'trade',
                          status:0,
                          amount:amount,
                          price:OrderPrice
                        }
                        notificationDB.create(addData).exec(function(err,notificationAdded){
                          console.log(err);
                          console.log(notificationAdded);
                        });
                        var tempId = tempRes._id;
                        var theftprice = 0;
                        if(buyprice > sellprice){
                            var price1 = buyprice - sellprice;
                            theftprice = amount * price1;
                        }
                        //sell order profit
                        let sellOrderProfitToAdmin ={
                            type        : 'Trade Sell',
                            userid      : selluserid,
                            currencyid  : globalPairDetails.to_symbol_id,
                            fees        : sellnewfee.toFixed(8),
                            fullfees        : sellnewfee.toFixed(8),
                            orderId     : sellorderid
                        }
                        profitDb.create(sellOrderProfitToAdmin,function(profitErr,profitRes){
                        })
                        var refund = parseFloat((sellnewfee * referPercentage)/100);
                        refund  = refund.toFixed(8);
                       
                          //buy order profit
                          let buyOrderProfitToAdmin ={
                              type        : 'Trade Buy',
                              userid      : buyuserid,
                              currencyid  : globalPairDetails.from_symbol_id,
                              fees        : buynewfee.toFixed(8),
                              fullfees        : buynewfee.toFixed(8),
                              orderId     : buyorderid
                          }
                          profitDb.create(buyOrderProfitToAdmin,function(profitErr,profitRes){
                          })
                          var refund = parseFloat((buynewfee * referPercentage)/100);
                          refund  = refund.toFixed(8);
                                                                   
                            //seller balance update
                            var tradedBalance = filledprice - +sellnewfee;
                            var tradeduserId  = selluserid;
                            common.getbalance(tradeduserId, globalPairDetails.to_symbol_id, function (balance) {
                                var curBalance = balance.amount;
                                var Balance = curBalance + tradedBalance;
                                common.updateUserBalance(tradeduserId, globalPairDetails.to_symbol_id, Balance, curBalance,tempId,'mapping sell', function (balance) {
                                    var filledprice = amount * OrderPrice;      
                                    common.updateHoldAmount(buyuserid,globalPairDetails.to_symbol_id,-filledprice);
                                    //buyer balance update                                  
                                    var tradedBalance = amount - +buynewfee;
                                    var tradeduserId  = buyuserid;
                                    common.getbalance(tradeduserId, globalPairDetails.from_symbol_id, function (balance) {
                                        var curBalance = balance.amount;
                                        var Balance = curBalance + tradedBalance;
                                        common.updateUserBalance(tradeduserId, globalPairDetails.from_symbol_id, Balance, curBalance,tempId,'mapping buy', function (balance) {
                                            common.updateHoldAmount(selluserid,globalPairDetails.from_symbol_id,-amount);
                                            //theft balance update
                                            if(theftprice>0)// && lastInsertOrder.Type == 'buy'
                                            {
                                                if (BuyOrder.datetime > SellOrder.datetime) {
                                                    var theftuser = buyuserid;
                                                    var tradedBalance = theftprice;
                                                    common.getbalance(theftuser, globalPairDetails.to_symbol_id, function (balance) {
                                                        var curBalance = balance.amount;
                                                        var Balance = curBalance + tradedBalance;
                                                        common.updateUserBalance(theftuser, globalPairDetails.to_symbol_id, Balance, curBalance,tempId,'mapping buy - theft price', function (balance) {
                                                            common.updateHoldAmount(buyuserid,globalPairDetails.to_symbol_id,-tradedBalance);
                                                        });
                                                    });
                                                }
                                                else{
                                                    var theftuser = selluserid;
                                                }
                                               
                                            }
                                            requestProcessor.clearcache();
                                             async.parallel({
                                                hourChange : function (cb){
                                                    mapDb.aggregate([
                                                        {
                                                            $match : {
                                                                "pair": globalPairDetails._id,
                                                                "datetime": {
                                                                    $lte: new Date(),
                                                                    $gte: new Date(new Date().setDate(new Date().getDate()-1))
                                                                }
                                                            }
                                                        },
                                                        {
                                                            $sort : { datetime : 1 }
                                                        },
                                                        {
                                                            $group : {
                                                                _id : null,
                                                                first : { $first : '$tradePrice'},
                                                                last : { $last : '$tradePrice'},
                                                                high : { $max : '$tradePrice' },
                                                                low : { $min : '$tradePrice' },
                                                                Total : { $sum : '$total' },
                                                                value : { $sum : '$filledAmount' },
                                                            }
                                                        }
                                                    ]).exec(cb)
                                                },
                                                yesterDaychange : function (cb){
                                                    mapDb.findOne({"pair": globalPairDetails._id,"datetime": {$lte: new Date(new Date().setDate(new Date().getDate()-1))}}).select({tradePrice : 1}).sort({datetime : -1}).exec(cb)
                                                },
                                                yesterDaychangeLast : function (cb){
                                                    mapDb.findOne({"pair": globalPairDetails._id,"datetime": {$gte: new Date(new Date().setDate(new Date().getDate()-1))}}).select({tradePrice : 1}).sort({datetime : 1}).exec(cb)
                                                },
                                  
                                                },function(err,results){
                                                  let hourChangeData = results.hourChange[0]
                                                  if(hourChangeData){
                                                      let yesterday = results.yesterDaychange
                                                      if(yesterday){
                                                          var elsPrice = results.yesterDaychange.tradePrice
                                                      } else {
                                                          var elsPrice = results.yesterDaychangeLast.tradePrice
                                                      }
                                                      let elsePrice = elsPrice
                                                      let high =  hourChangeData.high
                                                      let low  =  hourChangeData.low

                                                      let volume  =  hourChangeData.Total
                                                      let value  =  hourChangeData.value
                                                      let usdprice  =  globalPairDetails.topair.EstimatedUSD * OrderPrice
                                                      let newLast = (((OrderPrice - elsePrice) / elsePrice) *100 )
                                                      let updatePairJson = {
                                                          price : OrderPrice,
                                                          change : newLast,
                                                          high : high,
                                                          low : low,
                                                          usdprice : usdprice,
                                                          volume : volume,
                                                          value : value
                                                      }
                                                      
                                                      var d = new Date();
                                                      var n = (d.getTime())*1000;
                                                      var chartdetarray = [Date.now(),hourChangeData.first,hourChangeData.high,hourChangeData.low,hourChangeData.last];
                                                      var pairSymbol = globalPairDetails.frompair.currencySymbol+'_'+globalPairDetails.topair.currencySymbol;
                                                      //highchartdata(pairSymbol,chartdetarray);
                                                      pairsDB.updateOne({_id : globalPairDetails._id},{$set : updatePairJson},{multi:true}).exec(function(errBal,resBal){     
                                                        // updateimg the order status
                                                        var newbuyAmount = buyAmount - +amount;
                                                        var newsellAmount= sellAmount - +amount;
                                                        newbuyAmount  = newbuyAmount.toFixed(8);
                                                        newsellAmount = newsellAmount.toFixed(8);
                                                        let uptquery;
                                                        if(newbuyAmount == 0){
                                                            uptquery = 'filled';
                                                        } else {
                                                            uptquery = 'partially'
                                                        }
                                                       
                                                        orderDB.updateOne({_id:mongoose.mongo.ObjectId(buyorderid)},{"$set" : {status : uptquery}},{multi:true}).exec(function(updateError,updateRes){
                                                        });
                                                        let selluptquery;
                                                        if(newsellAmount == 0){
                                                            selluptquery = 'filled'
                                                        } else {
                                                            selluptquery = 'partially'                            
                                                        }
                                                        orderDB.updateOne({_id:mongoose.mongo.ObjectId(sellorderid)},{"$set" : {status : selluptquery}},{multi:true}).exec(function(updateError,updateRes){
                                                        });

                                                        //filled amount Update
                                                        common.findParticularOrder(buyorderid,(callback) => {
                                                            let amountCalc = callback;
                                                            let newbuyAmountCalc = +amountCalc + +amount;
                                                            let newbuyTotalCalc = (BuyOrder.Amount - newbuyAmountCalc) * BuyOrder.Price;
                                                            orderDB.updateOne({_id : buyorderid},{$set : {filledAmount: newbuyAmountCalc,pendingTotal: newbuyTotalCalc}},{multi:true}).exec(function(errBal,resBal){

                                                        common.findParticularOrder(sellorderid,(callback) => {
                                                            let amountsellCalc = callback;
                                                            let newsellAmountCalc = +amountsellCalc + +amount;
                                                            let newsellTotalCalc = (SellOrder.Amount - newsellAmountCalc) * SellOrder.Price;
                                                            orderDB.updateOne({_id : sellorderid},{$set : {filledAmount: newsellAmountCalc,pendingTotal: newsellTotalCalc}},{multi:true}).exec(function(errBal,resBal){
                                                        var firstId =  (lastInsertOrder.userId).toString();
                                                        var secondId =  (maporder.userId).toString();
                                                       
                                                        if(firstId != secondId)
                                                        {
                                                          _tradeMap._sendResponse(globalPairDetails,maporder.userId,'useremit');
                                                        }

                                                        // _tradeMap._stopOrderGet(OrderPrice,globalPairDetails);


                                                        let checkAmount;
                                                        if(lastInsertOrder.Type == 'buy'){
                                                            checkAmount = newbuyAmount;
                                                        } else {
                                                            checkAmount = newsellAmount;
                                                        }

                                                        if(checkAmount != 0){
                                                          
                                                            let inc1 = inc+1;
                                                            if(dbMatchingOrders[inc1]){
                                                                _tradeMap.mappingLoop(globalPairDetails,lastInsertOrder,dbMatchingOrders,inc1,(_loopRes) =>{
                                                                })
                                                            }
                                                            else
                                                            {
                                                              // contract map order
                                                              _tradeMap._sendResponse(globalPairDetails,lastInsertOrder.userId,'pairemit');
                                                            }
                                                        }
                                                        else
                                                        {
                                                         // contract map order
                                                          _tradeMap._sendResponse(globalPairDetails,lastInsertOrder.userId,'pairemit');
                                                        }
                                                                                
                                                            })
                                                        })
                                                            })
                                                        })
                                                    })
                                                  }                            
                                                })                          
                                        });
                                    });
                                });
                            });
                         
                      
                    }
                })                
            }
        });
    })
}


mapTrade.prototype._orderTempChecking = (_id,type,callback) => {
    let matchCase;
    if(type == 'buy'){
        matchCase = {buyorderId :  mongoose.mongo.ObjectId(_id)}
    } else {
        matchCase = {sellorderId : mongoose.mongo.ObjectId(_id)}
    }
    mapDb.aggregate([
        {
            $match : matchCase
        },
        {
            $group : {
                _id :null,
                sum : { $sum : "$filledAmount"}
            }
        },
        {
            $project :{
                _id : 0,
                sum : 1
            }
        }
    ]).exec((err,results) =>{
        if(results.length > 0){
            if(results[0].sum){
                callback(results[0].sum)
            } else {
                callback(0)    
            }
        } else {
            callback(0)
        }
    })
}

exports.userEmit = function (values)
{
  var userId = values.userid,
  pairid = values.pairid,
  fromcurn = values.fromcurn,
  tocurn = values.tocurn;
  _tradeMap._userEmit(userId,pairid,fromcurn,tocurn);
}
mapTrade.prototype._userEmit = (userId,pairid,fromcurn,tocurn) => {
   
  var userResponse = {};
  userResponse.userId = userId;
  userResponse.pairid = pairid;

  common.getbalanceTrade(userId, fromcurn, function (balance1) {
  
      common.getbalanceTrade(userId, tocurn, function (balance2) {
        
          /*whereCondnUser = { userId : (userId), pair:mongoose.mongo.ObjectId(pairid), $or:[{status:'active'},{status:'partially'},{status:'stoporder'}]}*/
          whereCondnUser = { userId : (userId), pair:mongoose.mongo.ObjectId(pairid), $or:[{status:'active'},{status:'partially'}]}
         
          async.parallel({
            userOrders : function(cb){
              orderDB.find(whereCondnUser).sort({datetime : -1}).limit(50).exec(cb)
            },
            userTradeHistory : function (cb){
              mapDb.find({pair:mongoose.mongo.ObjectId(pairid),$or:[{buyerUserid:(userId)},{sellerUserid:(userId)}]}).sort({datetime : -1}).limit(50).exec(cb)
            }
          },function(err,results){
             
            if(balance1)
            {
              userResponse.FromBal = balance1.amount;
            }
            else
            {
              userResponse.FromBal = 0;              
            }
            if(balance2)
            {
              userResponse.ToBal = balance2.amount;
            }
            else
            {
              userResponse.ToBal = 0;              
            }
            userResponse.activeOrder = results.userOrders
            userResponse.userTradeHistory = results.userTradeHistory
           
            socket.sockets.emit('userResponse', userResponse);
          })
      });
    })
}
exports.cancelOrder = (orderId,userId,callback) => {
    var orderwith = oArray.indexOf(userId);
    if(orderwith == -1){
      oArray.push(userId)
      setTimeout( _tradeMap._intervalFunc, 5000,userId);

      orderDB.findOne({userId : (userId),_id: mongoose.mongo.ObjectId(orderId)}).exec(function(ordErr,ordRes){
        if(ordRes){
          if(ordRes.status == 'active' || ordRes.status == 'stoporder' || ordRes.status == 'partially'){
            where = {"_id": mongoose.mongo.ObjectId(ordRes.pair) };
            pairsDB.aggregate([
            {
              $lookup:
              {
                from: 'currency',
                localField: 'fromCurrency',
                foreignField: '_id',
                as: 'frompair'
              }
            },
            {
              $lookup:
              {
                from: 'currency',
                localField: 'toCurrency',
                foreignField: '_id',
                as: 'topair'
              }
            },
            {
              $project: {
                "from_symbol_id": "$fromCurrency",
                "to_symbol_id": "$toCurrency",
                "min_trade_amount": "$minTrade",
                "fees": "$fee",
                "takerFee": "$takerFee",
                "makerFee": "$makerFee",
                "status": "$status",
                "_id": "$_id",
                "topair": "$topair",
                "frompair": "$frompair",
                "fromcurrency": { $arrayElemAt: ["$frompair._id", 0] },
                "tocurrency": { $arrayElemAt: ["$topair._id", 0] },
              }
            },
            {
              $match: where
            },
            ]).exec(function (err, resData) {
              if(resData.length == 1)
              {
                var pair_details = resData[0];
                pair_details.frompair = pair_details.frompair[0];
                pair_details.topair = pair_details.topair[0];
                _tradeMap.OrderCancel(ordRes,userId,pair_details, (activeRes) => {
                  if(activeRes.status)
                  {// contract cancel order
                  _tradeMap._sendResponse(pair_details,userId,'pairemit');
                  }
                  callback(activeRes)
                })
              }
              else
              {
                callback({status: false, Msg :"SomeThing went Wrong. Please try Again"})
              }
            });
          } else {
              callback({status : false , Msg : "Order is Already Cancelled"})
          }
        } else {
            callback({status : false , Msg : "Invalid OrderId"})
        }
      })
    }
    else{
        callback({status : false , Msg : "Trade after 5 seconds"}) 
    }
}
mapTrade.prototype.OrderCancel = (orderDetails,UserId,pairInfo, callback) => {
    if(orderDetails.Type == 'buy'){
      var currency = pairInfo.to_symbol_id;
      var calculateAmount =  orderDetails.Price * (orderDetails.Amount - +orderDetails.filledAmount)
    }
    else{
      var currency = pairInfo.from_symbol_id;
      var calculateAmount =  orderDetails.Amount - +orderDetails.filledAmount
    }
    let remAmount =  orderDetails.Amount - +orderDetails.filledAmount
    common.getbalance(UserId, currency, function (balance) {
        var curBalance = balance.amount;
        var Balance = curBalance + calculateAmount;
        common.updateHoldAmount(UserId,currency,-calculateAmount);
        common.updateUserBalance(UserId, currency, Balance, curBalance,orderDetails._id,'cancel order', function (balance) {
            if(orderDetails.status == 'active' || orderDetails.status == 'stoporder'){
              var update = {status : 'cancelled'};
            }
            else{
              var update = {Amount : orderDetails.filledAmount,status : 'filled'};
              let createNew = {
                  userId : (orderDetails.userId),
                  Amount : remAmount,
                  Price  : orderDetails.Price,
                  Type   : orderDetails.Type,
                  makerFee    : orderDetails.makerFee,
                  takerFee    : orderDetails.takerFee,
                  Total     : remAmount * orderDetails.Price,
                  ordertype : orderDetails.ordertype,
                  pair      : orderDetails.pair,
                  status  : "cancelled"
              }
              orderDB.create(createNew,function(err,response){});
            }
            orderDB.updateOne({_id:mongoose.mongo.ObjectId(orderDetails._id)},{"$set" : update},{multi:true}).exec(function(updateError,updateRes){
              if(updateRes){
                callback({status: true, Msg :"Your Order is Cancelled and balance is credited to your wallet"})
              } else {
                callback({status: false, Msg :"Your Order is not Cancelled. Please Try Again"})
              }
            });
        });
    });
}
mapTrade.prototype._stopOrderGet = (tradePrice,pairs) => {
    let _globalPairDetails = pairs     
    let test = {status : "stoporder",pair : mongoose.mongo.ObjectId(_globalPairDetails._id),Type : 'sell',Price: {$gte : tradePrice }}
    let test1 = {status : "stoporder",pair : mongoose.mongo.ObjectId(_globalPairDetails._id),Type : 'buy',Price: {$lte : tradePrice }}
    var ordersLists=[];
    orderDB.find(test).exec(function(stopErr,ordersList){
      orderDB.find(test1).exec(function(stopErr1,ordersList1){
        if(!stopErr && ordersList && ordersList.length > 0){
          ordersLists = ordersLists.concat(ordersList); 
        }
        if(!stopErr1 && ordersList1 && ordersList1.length > 0){
          ordersLists = ordersLists.concat(ordersList1); 
        }
        if(ordersLists.length > 0){
            ordersLists.sort( (a,b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())
            for(let j = 0; j < ordersLists.length; j++){
                (function(){
                    let i = j;
                    let _id = ordersLists[i]._id
                    orderDB.updateOne({_id: _id},{$set : {status : 'active'}},{multi: true}).exec(function(stopMapping,stopMappingResponse){
                        if(stopMappingResponse){
                            _tradeMap.mapOrder(ordersLists[i],pairs,(_loopRes) =>{
                            });
                        }
                    })
                })()
            }
        }
      })
    })
}
let highchartdata = exports.highchartdata = (pair,chartdetarray) => {
  try{
    let path = 'public/Highchart/'+pair+'.json'; 
    var output = [];
    if (fs.existsSync(path)) {
      let rawdata = fs.readFileSync('public/Highchart/'+pair+'.json'); 
      var checkjson = JSON.parse(rawdata)
      checkjson.push((chartdetarray));
      fs.writeFileSync('public/Highchart/'+pair+'.json', JSON.stringify(checkjson));
    } 
    else{
      var newpath = __dirname;
      var newpath = newpath.replace("/helpers", "");
      fs.openSync(newpath + "/public/Highchart/"+pair+'.json', 'w');
      output.push(chartdetarray);
      fs.writeFileSync('public/Highchart/'+pair+'.json', JSON.stringify(output));
    }
  }
  catch (e) {
    console.log('highchartdata',e);
  }
}