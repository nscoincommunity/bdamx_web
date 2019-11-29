var express = require('express');
var router = express.Router();
var config = require("../Nodedetails/config");
const mongoose = require('mongoose');
let adminDB = mongoose.model('admin');
let common = require('../helpers/common');
let mail = require('../helpers/mailHelper');
var validator = require('node-validator');
let TokenDB  = mongoose.model('Tokendetails');
let WithdrawDB  = mongoose.model('Withdraw');
let depositDB  = mongoose.model('deposit');
var fs = require('fs');
var wallet = mongoose.model('userWallet');
var getJSON = require('get-json');
var PrivateKey = '0x8A02EA55877F3C23305E6413CDBE2D0B56462B77D2E436D8086843712A8C7918';
let pushNotify = require('../helpers/pushNotification');
let notificationDB = require('../model/notification');

/* GET users listing. */
router.post('/addtoken', function(req, res) {
   try{
 let getdet = req.body;
 let contactJson = {
  name: getdet.name,
  symbol: getdet.symbol,
  decimal: getdet.decimal,
  conaddress: getdet.conaddress,
  pairlist: getdet.pairlist,
  user_id: getdet.user_id,
  logo: getdet.logo,

}
var check = validator.isObject()

.withRequired('name', validator.isString())
.withRequired('symbol', validator.isString())
.withRequired('decimal', validator.isNumber())
.withRequired('conaddress', validator.isString())
.withRequired('pairlist', validator.isString())
.withRequired('user_id', validator.isString())
.withRequired('logo', validator.isString());
validator.run(check, getdet, function (errorCount, errors) {
  if (errorCount == 0) {
   TokenDB.findOne({ symbol: getdet.symbol }).exec((tokenErr, tokenRes) => {
    if (!tokenRes) {
     TokenDB.create(contactJson, function (err, resData) {
      if (resData) {
        res.json({status: true,Message: 'Token added successfully'});
      }
      else{
        res.json({status: false,Message: 'Token not created.please try again'});
      }

    });

   }
   else{
     res.json({status: false,Message: 'Token symbol already exists .please try with different token'});
   }
 })
 }
 else{
  res.json({status: false,Message: 'Please provide all details'});
}
})
}
  catch (err)
  {
    console.log("addtoken", err)
  }
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/withdrawrequest', function(req, res) {

  let CurrencyDB  = mongoose.model('currency');
  try{
    var getdet = req.body;
    if(getdet)
    {
      if(getdet.withamount != "")
      {
        
        if(getdet.withamount > 0)
        {
          CurrencyDB.findOne({ _id: mongoose.Types.ObjectId(getdet.withcurrency)}).exec((curenerr, curncydet) => {
            if (curncydet) {
              var minamt =  curncydet.minwithamt;
              var maxamt =  curncydet.maxwithamt;
              var Tokenid =  curncydet.TokenId;
              if(getdet.withamount >= minamt)
              {

                if(getdet.withamount <= maxamt)
                {
                  var feeper = curncydet.withdrawfee;
                  var feetype = curncydet.feetype;
                  if(feetype == 1)
                  {
                    var feescal = getdet.withamount * feeper/100;
                  }
                  else{
                    var feescal = feeper;
                  }
                  var totalamount = getdet.withamount - feescal;
                  common.getbalance(getdet.useraddress.toLowerCase(), getdet.withcurrency, function (balances) {
                    if(balances) {
                      var balance = balances.amount;
                      if(balance >= getdet.withamount)
                      {

                        if(curncydet.baseCoin == "EOS")
                        { 
                          let settingDB =  require('../model/Sitekeys');
                          settingDB.findOne().exec((adminerr, admindet) => {

                            common.Scatterwithdraw(totalamount,admindet.Scatterprivate,admindet.Scatteradminacc,getdet.useraddress,curncydet.currencySymbol, function (transDetails) {
                              console.log("transDetails",transDetails)
                              getdet.receiveamount = totalamount;
                              getdet.withfee = feescal;
                              getdet.status = 'Completed';
                              getdet.txid = transDetails;
                              WithdrawDB.create(getdet, function (err, resData) {
                                var balupdate = balance - getdet.withamount;
                                common.updateUserBalance(getdet.useraddress.toLowerCase(), getdet.withcurrency,balupdate,balance,resData._id,'withdraw', function (balance) {
                                  let sellOrderProfitToAdmin ={
                                    type        : 'Withdraw',
                                    userid      : getdet.useraddress.toLowerCase(),
                                    currencyid  : getdet.withcurrency,
                                    fees        : feescal.toFixed(8),
                                    fullfees    : feescal.toFixed(8),
                                    orderid     : resData._id,
                                  }
                                  let profitDb    = mongoose.model('profit');
                                  profitDb.create(sellOrderProfitToAdmin,function(profitErr,profitRes){
                                    res.json({status: true,Message: 'Withdraw request sent successfully',txid:transDetails});
                                  });  
                                });
                              });
                            })

                         
                          })
                        }
                        else
                        {
                        var Web3 = require('web3');
                        var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/682d21aed8204bfe8370b50a93aed124'));
                        try{
                         
                          // if(response == response1)
                          // {
                            var milliseconds = (new Date).getTime();
                            
                            const Tx = require('ethereumjs-tx');
                            let settingDB =  require('../model/Sitekeys');
                            settingDB.findOne().exec((adminerr, admindet) => {
                              var PrivateKey = admindet.AdminprivateKey;
                                if( PrivateKey.substring(0,2) == "0x"){
                                  PrivateKey = PrivateKey.substring(2);
                                }
                                else{
                                  PrivateKey = PrivateKey;
                                }
                                console.log(PrivateKey,'privatekey')
                                var contractAddress = admindet.adminAddress;
                                var Admincode = admindet.Admincode;
                                var address = admindet.Adminkeyaddress;
                                var transferAmount = totalamount * Math.pow(10, getdet.decimals);
                                common.contractIntraction(getdet.useraddress,Admincode,Tokenid,contractAddress,address,PrivateKey,transferAmount.toString(),curncydet.TokenId,'user',(transDetails) => {
                                  if(transDetails){
                                    getdet.receiveamount = totalamount;
                                    getdet.withfee = feescal;
                                    getdet.status = 'Completed';
                                    getdet.txid = transDetails;
                                    WithdrawDB.create(getdet, function (err, resData) {
                                      const addData = {
                                        userId: getdet.useraddress,
                                        notification_type:'withdraw',
                                        status:0,
                                        amount:getdet.withamount
                                      }
                                      notificationDB.create(addData).exec(function(err,notificationAdded){
                                        console.log(err);
                                        console.log(notificationAdded);
                                      });
                                      var balupdate = balance - getdet.withamount;
                                      common.updateUserBalance(getdet.useraddress.toLowerCase(), getdet.withcurrency,balupdate,balance,resData._id,'withdraw', function (balance) {
                                        let sellOrderProfitToAdmin ={
                                          type        : 'Withdraw',
                                          userid      : getdet.useraddress.toLowerCase(),
                                          currencyid  : getdet.withcurrency,
                                          fees        : feescal.toFixed(8),
                                          fullfees    : feescal.toFixed(8),
                                          orderid     : resData._id,
                                        }
                                        let profitDb    = mongoose.model('profit');
                                        profitDb.create(sellOrderProfitToAdmin,function(profitErr,profitRes){
                                          res.json({status: true,Message: 'Withdraw request sent successfully',txid:transDetails});
                                        });  
                                      });
                                    });
                                  }
                                  else{
                                    res.json({status: false,Message: 'Transaction falied.Please try again.'});
                                  }
                                });
                              });
                            // }
                            // else{
                            //   res.json({status: false,Message: 'Please enter your account private key'});
                            // }
                        }
                        catch(e){
                          console.log(e)
                          res.json({status: false,Message: 'Please enter valid private key'});
                        }
                      }
                      }
                      else{
                        res.json({status: false,Message: 'Insufficient balance'});
                      }
                    }
                    else{
                      res.json({status: false,Message: 'Invalid request'});
                    }
                  });
                }
                else{
                  res.json({status: false,Message: 'Maximum amount should be '+curncydet.maxwithamt});
                }
              }
              else{
                res.json({status: false,Message: 'Minimum amount should be '+curncydet.minwithamt});
              }
            }
            else{
              res.json({status: false,Message: 'Invalid currency request'});
            }
          });



        }
        else{
          res.json({status: false,Message: 'Enter valid amount'});
        }
      }
      else{
        res.json({status: false,Message: 'Enter a valid amount'});
      }
    }
    else{
      res.json({status: false,Message: 'Invalid details'});
    }
  }
  catch (err)
  {
    console.log("withdrawrequest", err)
  }
});

router.get('/logs', (req,res) => {
  var path         = require('path');
  var file = path.join(__dirname, '../logs/pm2/combined.outerr.log')
  res.download(file);
  // fs.readFile(file, "utf-8", (err, datas) => {
  //   res.json(datas);
  // });
})
router.get('/logs1', (req,res) => {
  var path         = require('path');
  var file = path.join(__dirname, '../logs/combined1.outerr.log')
  fs.readFile(file, "utf-8", (err, datas) => {
    res.send(datas);
  });
})
router.get('/emptyLog', (req, res) => {
  var path         = require('path');
  var file = path.join(__dirname, '../logs/pm2/combined.outerr.log')
  fs.writeFile(file, '', (err) => {
    res.send('success');
  });
});
router.get('/emptyLog1', (req, res) => {
  var path         = require('path');
  var file = path.join(__dirname, '../logs/combined1.outerr.log')
  fs.writeFile(file, '', (err) => {
    res.send('success');
  });
});
router.post('/history', function(req, res) {
  try {
   var getdet = req.body;

    TokenDB.find({ user_id: getdet.useraddress }).sort({datetime : -1}).exec((tokErr, tokRes) => {
 cnt = { 'useraddress': (req.body.useraddress) };
  cnt1 = { 'userId': (req.body.useraddress) };
         WithdrawDB.aggregate([
          {
            $lookup:
            {
              from: 'currency',
              localField: 'withcurrency',
              foreignField: '_id',
              as: 'currencydet'
            },
          },
          {
            $project: {
              "datetime": "$datetime",
              "withamount": "$withamount",
              "useraddress": "$useraddress",
              "status": "$status",
              "withfee": "$withfee",
              "txid": "$txid",
              "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
            }
          },

          { $match: cnt },
          {
            $sort : { datetime : -1 }
        },
         
        ]).exec(function (withErr, withRes) {

         depositDB.aggregate([
          {
            $lookup:
            {
              from: 'currency',
              localField: 'currency',
              foreignField: '_id',
              as: 'currencydet'
            },
          },
          {
            $project: {
              "createddate": "$createddate",
              "depamt": "$depamt",
              "userId": "$userId",
              "depto": "$depto",
              "depstatus": "$depstatus",
              "txnid": "$txnid",
              "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
            }
          },

          { $match: cnt1 },
          {
            $sort : { createddate : -1 }
        },
        ]).exec(function (depErr, depRes) {
// TokenDB
// WithdrawDB
// depositDB
if(tokErr || withErr || depErr)
{
 res.json({
  status: true,
  getdet: getdet,
  "Message": "Error occured while getting history deatils"
})
}
else{
var arrayval = {};
arrayval.tokenhis = tokRes;
arrayval.withhis = withRes;
arrayval.dephis = depRes;

 res.json({
  status: true,
  getdet: getdet,
  "Message": arrayval,
})
  
}
})
})
})

  }
  catch (e) {
    res.json({
      status: false,
      "Message": "Something went wrong",
    })
  }
});


router.post('/Depositsdet', function(req, res) {
  console.log('depositcreateddddddd');
  let CurrencyDB  = mongoose.model('currency');
  var deposit = mongoose.model('deposit');
  //txid:txid,amount:amount,user:localaddress,curncyid:this.curCurrency.baseCoin
  try{
    var getdet = req.body;
    if(getdet)
    {
      if(getdet.depamount != "")
      {
        
        if(getdet.depamount > 0)
        {
          CurrencyDB.findOne({ _id: mongoose.Types.ObjectId(getdet.curncyid)}).exec((curenerr, curncydet) => {
            if (curncydet) {
              var curr_id = curncydet._id;
              var payments = {
                "userId": getdet.user,
                "depto": getdet.depto ? getdet.depto : "",
                "depamt": +getdet.depamount,
                "comment": curncydet.currencySymbol + " Payment",
                "txnid": getdet.txid,
                "currency": mongoose.Types.ObjectId(curr_id),
                "depstatus" : 'Completed'
              };
              var userdeposit_table = {"txnid": getdet.txid}
             
              deposit.find(userdeposit_table).exec(function(err2,depositData){
                if(depositData.length==0){
              deposit.create(payments, function (dep_err, dep_res) {
                  // const notifyData = pushnotify.pushNotification({title:'Testing',message:'Testing Message'});
                  // notifyData.pushNotify.push(getdet.device_token, notifyData.msg, notifyData.deviceType.ANDROID); 
                  const addData = {
                    userId: getdet.user,
                    device_token:getdet.device_token,
                    notification_type:'deposit',
                    status:0,
                    amount:payments.depamt
                  }
                  notificationDB.create(addData).exec(function(err,notificationAdded){
                    console.log(err);
                    console.log(notificationAdded);
                  });
                  //push notification
                  //notification list addition
                common.getbalance(getdet.user, curr_id, function (balance) {
                  var newBalance = +balance.amount + +getdet.depamount;
                  common.updateUserBalance(getdet.user, curr_id,newBalance,balance.amount,dep_res._id,'deposit', function (balance) {

                    res.json({
                      status: true,
                      "Message": "Deposit completed successfully",
                    })
                  })
                })
              })
            }
            else{
              res.json({
                status: false,
                "Message": "Invalid transaction ",
              })
            }
              })
            
            }
            else{
              res.json({
                status: false,
                "Message": "Invalid currency details",
              })
            }

          })
        }
        else{
          res.json({
            status: false,
            "Message": "Invalid amount",
          })
        }
      }
      else{
        res.json({
          status: false,
          "Message": "Invalid amount",
        })
      }
    }
    else{
      res.json({
        status: false,
        "Message": "Invalid request",
      })
    }
  }
  catch(e)
  {
    console.log("deposit error",2)
    res.json({
      status: false,
      "Message": "Something went wrong.please try again.",
    })
  }
})
module.exports = router;
