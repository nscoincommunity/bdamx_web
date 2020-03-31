const CryptoJS = require('crypto-js');
var key = CryptoJS.enc.Base64.parse("#base64Key#");
var iv_new  = CryptoJS.enc.Base64.parse("#base64IV#");
const mongoose = require('mongoose');
const request = require('request');
var crypto = require('crypto');
var config = require("../Nodedetails/config");
let jwtToken = config.jwtToken;
let jwt = require('jsonwebtoken');
var getJSON = require('get-json');
const currency      = require('../model/currency');
const userWallet    = require('../model/userWallet');
const speakeasy = require('speakeasy');
var redis = require("redis"),


client = redis.createClient(config.redisdata);
//client = redis.createClient();
let password = config.passPhrase;
let algorithm = config.algorithm;
let iv = config.iv;

var async          = require('async');
var Request = require("request");
const fs = require('fs');
var socket = 0;
const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');      
const fetch = require('node-fetch');                                    
const { TextEncoder1, TextDecoder1 } = require('util');                 
const { TextEncoder, TextDecoder } = require('text-encoding');          


exports.SocketInit = function (socketIO)
{
   socket = socketIO;
}
client.on("error", function (err) {
});





exports.encrypt = (value) => {
    var cipher = crypto.createCipheriv(algorithm, password, iv)
    var crypted = cipher.update(value, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

exports.TFAverify = (verifykey,verifytoken) => {
    var verified = speakeasy.totp.verify({
      secret  : verifykey,
      encoding: 'base32',
      token   : verifytoken,
      window  : 4
    });
    return verified
}

exports.decrypt = (value) => {
    var decipher = crypto.createDecipheriv(algorithm, password, iv)
    var dec = decipher.update(value, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

exports.encrypt_new = (value) => {
    var cipher = CryptoJS.AES.encrypt(value, key, {iv: iv_new}).toString(); 
    return cipher;
}

exports.decrypt_new = (value) => {
    var decipher = CryptoJS.AES.decrypt(value, key, {iv: iv_new})
    var decrypt_val = decipher.toString(CryptoJS.enc.Utf8);
    return decrypt_val;
}

exports.createPayload = (key) => {
    console.log(key)
    let payload = { subject: key }
    let token = jwt.sign(payload, jwtToken)
    return token;
}

var checkedOnce = 0;
let logsWrite = exports.logsWrite = (key) => {
    if(checkedOnce==0)
    {
        checkedOnce = 1;
        fs.readFile("./logs/combined1.outerr.log", "utf-8", (err, data) => {
            if (!err && data != '') {
              var logs = data;
            }
            else {
              var logs = '';
            }
            if (typeof key != 'object' && typeof key != 'array') {
                logs = logs + ' ' + key+'\n';
            }
            else
            {
                logs = logs + ' , ' + JSON.stringify(key)+'\n';
            }
            fs.writeFile("./logs/combined1.outerr.log", logs, (err) => {
                checkedOnce = 0;
            });
        });
    }
    else
    {
        setTimeout(function(){logsWrite(key)},3000);
    }
}


// check the blocked mails 
exports.blocked_mail = function(mail_id){
    console.log("emil",mail_id)
   var block_mail = require('./disposal_email.json');
   var mail_value = mail_id.split("@")
   var mail_value3 = mail_value[1].toLowerCase()
   var index_val = block_mail.indexOf(mail_value3.trim());
   if(index_val == -1) {
      return "ok";
   } else {
      return "not_ok";
   }
}


exports.userWalletCreation = async function(userId){
  let wallet = [];
    var currencyList = await currency.find();
    for(let i=0; i<currencyList.length; i++){
        wallet.push({'currencyid': currencyList[i]._id, 'amount':0})
        
    }
    let walletData = {
        user_id:userId,
        wallet:wallet
    }
    await userWallet.create(walletData);
}


exports.check_captcha = function(key, callback){
    var RECAPTCHA_SECRET = '6LcvA8YUAAAAAAVXd9hRs2myBynM2WQa6aSHdC0d';
        var recaptcha_url = "https://www.google.com/recaptcha/api/siteverify?";
        recaptcha_url += "secret=" + RECAPTCHA_SECRET + "&";
        recaptcha_url += "response=" + key ;
        request(recaptcha_url, function(error, resp, body) {
            console.log("Response",JSON.parse(resp.body).success)
            // body = JSON.parse(body);
            if(JSON.parse(resp.body).success==true) {
                    console.log("body ---->",JSON.parse(resp.body).success)
                    callback("ok")
              
            }else{
                console.log("not_ok ---->",JSON.parse(resp.body).success)
                callback("not_ok")
              
            }
        });
    }




exports.tokenMiddleware = (request, res, next) => {
    if (!request.headers.authorization) {
        return res.status(401).send('unauthorized')
    }
    let token = request.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('unauthorized')
    } else {
        let payload = jwt.verify(token, jwtToken)
        if (!payload) {
            return res.status(401).send('unauthorized')
        }
        request.userId = payload.subject;
        next();
    }
    }
    exports.insertActivity = function (userId, comment, type,role,req) {

        var ua = req.headers['user-agent'];
var browser= '';
if( /firefox/i.test(ua) )
  browser = 'firefox';
else if( /chrome/i.test(ua) )
  browser = 'chrome';
else if( /safari/i.test(ua) )
  browser = 'safari';
else if( /msie/i.test(ua) )
  browser = 'msie';
else
  browser = 'unknown';

var ip = req.connection.remoteAddress;

    let activityDB = mongoose.model('AdminActivity');
    let useractivityDB = mongoose.model('Useractivity');
        var ip = ip;
        var location = '';
        var browser = browser;
        let activityJson = {
            user_id: userId,
            ip: ip,
            location: location,
            browser: browser,
            type: type,
            comment: comment,
            

        }
        if(role == 'admin')
        {
        activityDB.create(activityJson, function (err, resData) {
        });
        }
        else{
          useractivityDB.create(activityJson, function (err, resData) {
        });  
        }
    
}
let redisConfig = exports.redisConfig = function (key, type, callback) {
    var types = [];
    if (type != '') {
        var types = type.split(",");
    }
    if (typeof types[0] == undefined || typeof types[0] == 'undefined') {
        types[0] = '';
    }
    if (typeof types[1] == undefined || typeof types[1] == 'undefined') {
        types[1] = '';
    }
    if (types.length == 2) {
        var column = types[0];
        var value = types[1];

        client.get(key, function (err, reply) {
           
            if (err || !reply || JSON.parse(reply).length == 0 || ((value != '' && isNaN(value) && !(JSON.parse(reply)[value])))) {
                let redisModel = mongoose.model(key);
                var getFrom = [];
                redisModel.find().exec((userErr, userRes) => {
                    if (userRes) {
                        for (i = 0; i < userRes.length; i++) {
                            if (column != "") {
                                if(isNaN(userRes[i][column]))
                                {
                                    var keys = userRes[i][column];
                                }
                                else
                                {
                                    var keys = i;
                                }
                            }
                            else {
                                var keys = i;
                            }
                            getFrom[keys] = userRes[i];
                        }
                        var response = JSON.stringify(getFrom);
                        client.set(key, response);
                        if (value != '' && isNaN(value)) {
                            callback(getFrom[value]);
                        }
                        else {
                            callback(res(getFrom,column,value));
                        }
                    }
                    else {
                        callback(false);
                    }
                });
            }
            else {
               
                if (value != '' && isNaN(value)) {
                    callback(JSON.parse(reply)[value]);
                }
                else {
                    callback(res(JSON.parse(reply),column,value));
                }
            }
        });
    }
    else {

        callback(false);
    }
}

let SetredisConfig = exports.SetredisConfig = function (key, type, callback) {
    var types = [];
    if (type != '') {
        var types = type.split(",");
    }
    if (typeof types[0] == undefined || typeof types[0] == 'undefined') {
        types[0] = '';
    }
    if (typeof types[1] == undefined || typeof types[1] == 'undefined') {
        types[1] = '';
    }
    if (types.length == 2) {
        var column = types[0];
        var value = types[1];
        let redisModel = mongoose.model(key);
        var getFrom = [];
        redisModel.find().exec((userErr, userRes) => {
            if (userRes) {
                for (i = 0; i < userRes.length; i++) {
                    if (column != "") {
                        if(isNaN(userRes[i][column]))
                        {
                            var keys = userRes[i][column];
                        }
                        else
                        {
                            var keys = i;
                        }
                    }
                    else {
                        var keys = i;
                    }
                    getFrom[keys] = userRes[i];
                }
                var response = JSON.stringify(getFrom);
                client.set(key, response);
                if (value != '' && isNaN(value)) {
                    callback(getFrom[value]);
                }
                else {
                    callback(res(getFrom,column,value));
                }
            }
            else {
                callback(false);
            }
        });
    }
    else {
        callback(false);
    }
}
let res = exports.sendRes = function (datas,column,value) {
    if(column!=''&&value!='')
    {
        var push = [];
        var inC = 0;
        for (i = 0; i < datas.length; i++) {
            if(datas[i][column] == value)
            {
                push[inC] = datas[i];
                inC++;
            }
        }
    }
    else
    {
        var push = datas;
    }
    return push;
}
exports.redisTradeunset = function(pair,callback){
    client.get('Trade', function(err, reply) {
        if(pair)
        {
            if(pair!='' && typeof JSON.parse(reply)[pair] != 'undefined' && typeof JSON.parse(reply)[pair] != undefined)
            {
                var allPairs = JSON.parse(reply);
                delete allPairs[pair];
                var response = JSON.stringify(allPairs);
                client.set('Trade', response);
                callback('success');
            }
            else
            {
                callback('success');            
            }
        }
        else
        {
            client.set('Trade', JSON.stringify({}));
            callback('success');            
        }
    })
}
exports.redisTradeMarketPrice = function(value){
    client.get('Trade', function(err, reply) {
        if(!err && reply)
        {
            var getTrades = JSON.parse(reply);
            if(getTrades)
            {
                for (var i = 0; i < value.length; i++) {
                    if(typeof getTrades[value[i].pair] != 'undefined' && typeof getTrades[value[i].pair] != undefined)
                    {
                        getTrades[value[i].pair].marketPrice = value[i].price;
                    }
                }
                sendToUsers(getTrades);
                var response = JSON.stringify(getTrades);
                client.set('Trade', response);
            }
        }
    });
}
let tradeToarray = exports.redisTradeConfig = function(value,callback){
    client.get('Trade', function(err, reply) {
        if(err || !reply || ((value!='' && !(JSON.parse(reply)[value])) || value == ''))
        {
            if(err || !reply)
            {
                var getTrades = {};
            }
            else
            {
                var getTrades = JSON.parse(reply);                
            }
            var where = {};

            if(value)
            {
                var pair = value;
                var pairs = pair.split('_');
                if(pairs.length == 2)
                {
                    where = { "fromCurrency.currencySymbol": pairs[0] , "toCurrency.currencySymbol": pairs[1] , "fromCurrency.status": 1 , "toCurrency.status": 1 , "status": 1};
                }
            }

             
            let pairDB     = mongoose.model('pairs');
            pairDB.aggregate([
              { $lookup:
                {
                  from: 'currency',
                  localField: 'fromCurrency',
                  foreignField: '_id',
                  as: 'fromCurrency'
                }
              },
              { $lookup:
                {
                  from: 'currency',
                  localField: 'toCurrency',
                  foreignField: '_id',
                  as: 'toCurrency'
                }
              },
              {
                $match: where
              }
            ]).exec(function (err, res) {
                
                var length = res.length;
                var loaded = 0;
              
                if(length > 0)
                {
                    for (var i = 0; i < length; i++) {

                        trade(res[i],i,(tradeDetails) => {
                            
                            var increment = tradeDetails.autoInc;
                            var fromCurrency = res[increment].fromCurrency[0].currencySymbol;
                            var toCurrency = res[increment].toCurrency[0].currencySymbol;
                            var inputData = res[increment];
                            var fromdata = inputData.fromCurrency[0];
                            var todata = inputData.toCurrency[0];
                            delete inputData.fromCurrency;
                            delete inputData.toCurrency;
                            inputData.fromCurrency = fromdata;
                            inputData.toCurrency = todata;
                            inputData.pair = fromCurrency+'_'+toCurrency;
                            inputData.buyOrders = tradeDetails.BuyOrder;
                            inputData.sellOrders = tradeDetails.SellOrder;
                            inputData.tradeHistory = tradeDetails.TradeHistory;
                            getTrades[fromCurrency+'_'+toCurrency] = inputData
                            loaded = loaded + 1;
                            

                            if(loaded == length)
                            {
                               
                                sendToUsers(getTrades);
                                var response = JSON.stringify(getTrades);
                              
                                client.set('Trade', response);
                                if(value != '')
                                {
                                    callback(JSON.parse(response)[value]);
                                }
                                else
                                {
                                    objToarray(JSON.parse(response),(tradeDetails) => {
                                        callback(tradeDetails);
                                    });
                                }
                            }
                        });
                    }
                }
                else
                {
                    callback([]);
                }
            });
        }
        else
        {
            if(value != '')
            {
                callback(JSON.parse(reply)[value]);
            }
            else
            {
                objToarray(JSON.parse(reply),(tradeDetails) => {
                    callback(tradeDetails);
                });
            }
        }
    });
}
let tradeUpdateToarray = exports.tradeUpdateToarray = function(){
    var getTrades = {};
    var where = { "fromCurrency.status": 1 , "toCurrency.status": 1,"status": 1 };       
    let pairDB     = mongoose.model('pairs');
    pairDB.aggregate([
      { $lookup:
        {
          from: 'currency',
          localField: 'fromCurrency',
          foreignField: '_id',
          as: 'fromCurrency'
        }
      },
      { $lookup:
        {
          from: 'currency',
          localField: 'toCurrency',
          foreignField: '_id',
          as: 'toCurrency'
        }
      },
      {
        $match: where
      }
    ]).exec(function (err, res) {                
        var length = res.length;
        var loaded = 0;               
        if(length > 0)
        {
            for (var i = 0; i < length; i++) {
                trade(res[i],i,(tradeDetails) => {                            
                    var increment = tradeDetails.autoInc;
                    var fromCurrency = res[increment].fromCurrency[0].currencySymbol;
                    var toCurrency = res[increment].toCurrency[0].currencySymbol;
                    var inputData = res[increment];
                    var fromdata = inputData.fromCurrency[0];
                    var todata = inputData.toCurrency[0];
                    delete inputData.fromCurrency;
                    delete inputData.toCurrency;
                    inputData.fromCurrency = fromdata;
                    inputData.toCurrency = todata;
                    inputData.pair = fromCurrency+'_'+toCurrency;
                    inputData.buyOrders = tradeDetails.BuyOrder;
                    inputData.sellOrders = tradeDetails.SellOrder;
                    inputData.tradeHistory = tradeDetails.TradeHistory;
                    getTrades[fromCurrency+'_'+toCurrency] = inputData
                    loaded = loaded + 1;                            
                    if(loaded == length)
                    {                               
                        sendToUsers(getTrades);
                        var response = JSON.stringify(getTrades);
                        client.set('Trade', response);
                    }
                });
            }
        }
    });
}
let pairs = exports.redisPairsConfig = function(callback){
    client.get('Pairs', function(err, reply) {
        if(err || !reply)
        {
          let pairsDB = mongoose.model('pairs');
          var where = { "frompair.status": 1 , "topair.status": 1,"status": 1 };       
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
            if(resData.length > 0)
            {
                var pairsData = [];
                for (var i = 0; i < resData.length; i++) {
                    var pair_details = resData[i];
                    pair_details.frompair = pair_details.frompair[0];
                    pair_details.topair = pair_details.topair[0];
                    pair_details.pair = pair_details.frompair.currencySymbol+'_'+pair_details.topair.currencySymbol;
                    pairsData[i] = pair_details;
                }
                var response = JSON.stringify(pairsData);
                client.set('Pairs', response);
                callback(pairsData);
            }
            else
            {
                callback([]);
            }
          });
        }
        else
        {
            callback(JSON.parse(reply));
        }
    });
}
exports.updateCurrencyPair = function(){
    SetredisConfig('currency','status,1', (curnRes) => {});
    pairsUpdate();
    tradeUpdateToarray();
}
let pairsUpdate = exports.redisPairsConfigUpdate = function(){
  let pairsDB = mongoose.model('pairs');
  var where = { "frompair.status": 1 , "topair.status": 1,"status": 1 };       
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
    if(resData.length > 0)
    {
        var pairsData = [];
        for (var i = 0; i < resData.length; i++) {
            var pair_details = resData[i];
            pair_details.frompair = pair_details.frompair[0];
            pair_details.topair = pair_details.topair[0];
            pair_details.pair = pair_details.frompair.currencySymbol+'_'+pair_details.topair.currencySymbol;
            pairsData[i] = pair_details;
        }
        var response = JSON.stringify(pairsData);
        client.set('Pairs', response);
    }
  });
}
let trade = exports.getPairInfo = function (pair,inc,callback) {
    let orderDB     = mongoose.model('CoinOrder');
    let mapDb     = mongoose.model('mapping');
    whereCondn = { pair:mongoose.mongo.ObjectId(pair._id),Type : 'buy', $or:[{status:'active'},{status:'partially'}]}
    whereCondnSell = { pair:mongoose.mongo.ObjectId(pair._id),Type : 'sell', $or:[{status:'active'},{status:'partially'}]}
    async.parallel({
          BuyOrder : function(cb){
            orderDB.aggregate([
                {
                    $match : whereCondn
                },
                 { $sort : { Price : -1 } },
                {
                    $project : {
                      Amount : 1,
                      Price : 1,
                      filledAmount : 1
                    }
                },
                {
                    $group : {
                        '_id' : '$Price',
                        'Amount' : { $sum : '$Amount' },
                        'filledAmount' : { $sum : '$filledAmount' }
                    }
                },
                { $sort : { _id : -1 } }
            ]).exec(cb) 
        },
        SellOrder : function (cb){
            orderDB.aggregate([
                {
                    $match : whereCondnSell
                },
                { $sort : { Price : 1 } },
                {
                    $project : {
                      Amount : 1,
                      Price : 1,
                      filledAmount : 1
                    }
                },
                {
                    $group : {
                        '_id' : '$Price',
                        'Amount' : { $sum : '$Amount' },
                        'filledAmount' : { $sum : '$filledAmount' }
                    }
                },
                { $sort : { _id : 1 } }
            ]).exec(cb)
        },
        TradeHistory : function(cb){
            mapDb.find({pair:mongoose.mongo.ObjectId(pair._id)}).sort({datetime : -1}).limit(50).exec(cb)
        }
    },function(err,results){
       results.autoInc = inc;
       
       callback(results);
    })
}
let objToarray = exports.ObjectToArray = function (obj,callback) {
    pairs((pairsDetails) => {
        var result = [];
        var j=0;
        for (var i = 0; i < pairsDetails.length; i++) {
            if(typeof obj[pairsDetails[i].pair] != 'undefined' && typeof obj[pairsDetails[i].pair] != undefined)
            {
                result[j] = obj[pairsDetails[i].pair];
                j++;
            }
            else
            {
                tradeToarray(pairsDetails[i].pair,(pairsDetails) => {
                });
            }
        }
        callback(result);
    });
}

let sendToUsers = exports.sendToUsers = function (obj) {
    var pairarr = {};
    var valarr = [];
    var result = [];
   
    pairs((pairsDetails) => {
        var j=0;
        for (var i = 0; i < pairsDetails.length; i++) {
            if(typeof obj[pairsDetails[i].pair] != 'undefined' && typeof obj[pairsDetails[i].pair] != undefined)
            {
                
                if(!pairarr[pairsDetails[i].topair.currencySymbol])
                {
                   
                    pairarr[pairsDetails[i].topair.currencySymbol] =[];
                }
                pairarr[pairsDetails[i].topair.currencySymbol].push(obj[pairsDetails[i].pair]);
                result[j] = obj[pairsDetails[i].pair];
                j++;
            }
            else
            {

                tradeToarray(pairsDetails[i].pair,(pairsDetails) => {
                });
            }
        }
        var j = 0;
        Object.keys(pairarr).map(function(key) {
            valarr[j] = {'currency':key,'pairs':pairarr[key]};
            j++;
        });
       
        socket.sockets.emit('emitPairsResponse', {'trade':valarr,"others":result});
    });
}
exports.getbalance = function(userId,currency,callback){
    userId = userId.toLowerCase();
    var Currency = currency;
    let WalletDB = mongoose.model('userWallet');
    WalletDB.findOne({user_id : (userId)},{wallet: { $elemMatch: { currencyid: Currency } }}).exec(function(err,resdata1){
        if(resdata1&&resdata1.wallet.length > 0){
            callback(resdata1.wallet[0]);
        }
        else{
            WalletDB.findOne({user_id : (userId)}).exec(function(err,resdata1){
                if(resdata1)
                {
                    WalletDB.updateOne({ user_id: userId },{ $push: { "wallet": {"currencyid": Currency,"amount": 0,"hold": 0} }}).exec( (err,resDataw) => {
                        WalletDB.findOne({user_id : (userId)},{wallet: { $elemMatch: { currencyid: Currency } }}).exec(function(err,resdata2){           
                            callback(resdata2.wallet[0]);
                        })
                    })
                }
                else
                {
                    var createwallet = { "wallet": [], "user_id": userId };
                    createwallet.wallet.push({"currencyid": Currency,"amount": 0,"hold": 0});
                    WalletDB.create(createwallet, function (err_w, postres_w) {
                        callback({ "currencyid": Currency,"amount": 0,"hold": 0});
                    });
                }
            });
        }
    });
};
exports.getbalanceTrade = function(userId,currency,callback){
    userId = userId.toLowerCase();
    let WalletDB = mongoose.model('userWallet');
    WalletDB.findOne({user_id : (userId)},{wallet: { $elemMatch: { currencyid: currency } }}).exec(function(err,resdata1){
        if(resdata1&&resdata1.wallet.length > 0){
            callback(resdata1.wallet[0]);
        }
        else{
            callback(0);
        }
    });
};

exports.updateUserBalance = function(userId,currId,amount, OldBal, LastId,type,callback){
    let BalanceUpdation = mongoose.model('BalanceUpdation');
    var difference = amount-OldBal;
    let referral ={
                    userId      : userId,
                    currId      : currId,
                    amount      : amount,
                    difference  : difference,
                    OldBal      : OldBal,
                    LastId      : LastId,
                    Type        : type
                  }
    BalanceUpdation.create(referral,function(referErr,referRes){ 
    })
    let WalletDB = mongoose.model('userWallet');
    WalletDB.updateOne({user_id : (userId),"wallet.currencyid": currId},{"$set":{"wallet.$.amount": +amount}},{multi:true}).exec(function(balErr,balRes){
        if(balRes){
            callback(balRes)
        } else {
            callback(false)
        }
    });
}
exports.updateHoldAmount = function(userId,currId,amount){
    let WalletDB = mongoose.model('userWallet');
    WalletDB.updateOne({user_id : (userId),"wallet.currencyid": currId},{"$inc":{"wallet.$.hold": amount}},{multi:true}).exec(function(balErr,balRes){});
}
exports.findParticularOrder = (OrderId,callback) => {
    let orderDB    = mongoose.model('CoinOrder');
    orderDB.findOne({_id : OrderId}).select('filledAmount').exec(function(err,resData){
        if(resData){
            callback(resData.filledAmount)
        } else {
            callback(false)
        }
    })
}
exports.ContractTrade= (Type,Tradeid) => {
    let orderDB     = mongoose.model('CoinOrder');
 if(Type == "cancel")
 {
    orderDB.findOne({_id : mongoose.mongo.ObjectId(Tradeid)}).exec(function(err,rescancel){
        if(err)
        {
            console.log("ContractTrade",err);return false;
        }
    })
 }
 else{
    let mapDb     = mongoose.model('mapping');
  var coinorder = [];
  var maporder = [];

    orderDB.findOne({_id : mongoose.mongo.ObjectId(Tradeid)}).exec(function(err,resdata1){

        if(err)
        {
            console.log("err create coin order",err);return false;
        }
        
        mapDb.find( { $or: [ { sellorderId: mongoose.mongo.ObjectId(Tradeid) }, { buyorderId: mongoose.mongo.ObjectId(Tradeid) } ] } ).exec(function(err1,resdatamap){
            if(err1)
            {
                console.log("err create map order",err);return false;
            }

            coinorder = resdata1
            maporder = resdatamap
            //contract initiation
        })
    })
 }
}
exports.findUserBalance = (userId,currId,callback) => {
    let WalletDB = mongoose.model('userWallet');
    WalletDB.findOne({user_id : (userId)},{wallet: { $elemMatch: { currencyid: currId } }}).exec(function(err,resData){
        if(resData && resData.wallet && resData.wallet[0]){
            let amount = resData.wallet[0].amount;
            callback(amount)
        } else {
            callback(false)
        }
    });
}

exports.contractIntraction = function (UserAddr,Admincode,Tokenid,contractAddress,address,privateKey,amtwei,tokenAddress,type,callback) {
    try{
        // let staticContent = mongoose.model('staticContent');
        // staticContent.findOne({}).exec(function (userErr, UserRes) {
            //var wallPass = decyper(UserRes.content);
            var wallPass = Admincode;
            const Web3 = require('web3');
            var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/682d21aed8204bfe8370b50a93aed124"));
            var milliseconds = (new Date).getTime();
            const messtring = address+milliseconds;
            const mes =wallPass+messtring;
            //var h = address.substr(3)+milliseconds;
           //const sig = web3.eth.accounts.sign(mes, '0x9DB018024BA95213D880A662347FDC91646C2AAFB86918295BE1679BC4E17763')
            var sig=web3.eth.accounts.sign(mes,"0x"+privateKey);
            
            var v=Number(sig.v);
            var r=sig.r;
            var s=sig.s;
      
            getJSON("https://ropsten.etherscan.io/api?module=contract&action=getabi&address="+contractAddress+'&apikey=YourApiKeyToken', function(errorBal,response){
                const contractJson =response.result;
                const contract = new web3.eth.Contract(JSON.parse(contractJson),contractAddress);
                web3.eth.getTransactionCount(address).then(_nonce => {
                    nonce = _nonce;
                    if(tokenAddress == '')
                    {
                        tokenAddress = '0x0000000000000000000000000000000000000000';
                        var Ttype = 0;
                    }
                    else
                    {
                        tokenAddress = Tokenid;
                        var Ttype = 1;
                    }
                    if(type=='user')
                    {
                        var datares = contract.methods.withdraw(messtring, v, r, s, Ttype, tokenAddress, UserAddr, amtwei).encodeABI();
                    }
                    else{
                        //1 - token,0-eth
                        var datares = contract.methods.profitWithdraw(Ttype, tokenAddress, amtwei).encodeABI();
                    }
                    var gas = 4000000000;
                    var gaslimit = 4000000;
                    const tx = {
                        from: address,
                        to: contractAddress,
                        gasPrice: '0x' +gas.toString(16),
                        gasLimit:gaslimit,
                        data: datares,
                        nonce: '0x' +nonce.toString(16),
                        value:"0x00"
                    };
                    web3.eth.accounts.signTransaction(tx, "0x"+privateKey).then(signed => {
                        const tran = web3.eth.sendSignedTransaction(signed.rawTransaction).on('transactionHash', hash => {
                            callback(hash);
                        })
                    });
                });
            });
        // });
    }
    catch(e){
        callback(false);
    }
}
exports.ProfitWithdraw = function (Tokenid,contractAddress,amtwei,tokenAddress,callback) {
    try{
        const Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/682d21aed8204bfe8370b50a93aed124"));
        getJSON("https://api.etherscan.io/api?module=contract&action=getabi&address="+contractAddress+'&apikey=YourApiKeyToken', function(errorBal,response){
            const contractJson =response.result;
            const contract = new web3.eth.Contract(JSON.parse(contractJson),contractAddress);
        if(tokenAddress == '')
        {
            tokenAddress = 0;
            var Ttype = 0;
        }
        else
        {
            tokenAddress = Tokenid;
            var Ttype = 1;
        }
        var datares = contract.methods.profitWithdraw(Ttype, tokenAddress, amtwei).encodeABI();
    })
    }
    catch(e)
    {

    }
}




exports.Scatterwithdraw = function (amount,Scatterprivate,adminacc,toacc,curncy,callback)
{
    try
    {
        const defaultPrivateKey = Scatterprivate; // bob
        const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
        const rpc = new JsonRpc('https://jungle2.cryptolions.io:443', { fetch });
        
        const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

        (async () => {
            const result = await api.transact({
              actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: adminacc,
                  permission: 'active',
                }],
                data: {
                  from: adminacc,
                  to: toacc,
                  quantity: +amount.toFixed(4)+' '+curncy,
                  memo: '',
                },
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30,
            });
           callback(result.transaction_id)
          })();
        
    }
    catch(e)
{

}

}
exports.contractChangeKey = function (contractAddress,address,privateKey,text,callback) {
    try{
        const Web3 = require('web3');
        var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/682d21aed8204bfe8370b50a93aed124"));
        console.log("my om key",text)
        var key = (web3.utils.fromAscii(text));
        key = key.split("").reverse().join("");
        key = trailingzeroes(key);
        key = key.split("").reverse().join("");
        console.log('changedkey',key);
        getJSON("https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address="+contractAddress+'&apikey=YourApiKeyToken', function(errorBal,response){
            const contractJson =response.result;
            const contract = new web3.eth.Contract(JSON.parse(contractJson),contractAddress);
            web3.eth.getTransactionCount(address).then(_nonce => {
                console.log("my up key",key)
                var nonce = _nonce;
                var datares = contract.methods.updateBytes(key).encodeABI();
                var gas = 4000000000;
                var gaslimit = 4000000;
                const tx = {
                    from: address,
                    to: contractAddress,
                    gasPrice: '0x' +gas.toString(16),
                    gasLimit:gaslimit,
                    data: datares,
                    nonce: '0x' +nonce.toString(16),
                    value:"0x00"
                };
                console.log("fin private",privateKey)
                web3.eth.accounts.signTransaction(tx, '0x'+privateKey).then(signed => {
                    const tran = web3.eth.sendSignedTransaction(signed.rawTransaction).on('transactionHash', hash => {
                        callback(hash);
                    })
                });
            });
        });
    }
    catch(e){
        console.log('changekey error',e)
        callback(false);
    }
}
function trailingzeroes(s) {
    while (s.substr(0,1) == '0' && s.length>1) { s = s.substr(1,9999); }
    return s;
}