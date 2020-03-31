var express 		= require('express');
var router 			= express.Router();
var mongoose = require('mongoose');
var ObjectId= mongoose.Types.ObjectId;
const userWallet 	= require('../model/userWallet');
const currency   	= require('../model/currency');
const coinAddress 	= require('../model/coinAddress');
const adminAddress  = require('../model/adminAddress');
const user 			= require('../model/users');
var async          	= require('async');
var rpc 			= require('../Nodedetails/rpc');
const common 		= require('./common');
var Client 			= require('node-rest-client').Client;
const jsonrpc 		= require('node-json-rpc2');
const deposit 		= require('../model/deposit');
const withdraw 		= require('../model/Withdraw');
const adminWithdraw = require('../model/adminwithdraw')
var WAValidator 	= require('wallet-address-validator');
const admin 		= require('../model/admin');
const sitesettings  = require('../model/sitesettingsdb');
const exchangeDB  = require('../model/exchange');
var emailtemplate 	= require('../model/Emailtemplate');
var speakeasy       = require('speakeasy');
var qrcode    		= require('qrcode');
var mail 			= require('../helpers/mailHelper');
var pairs     = require('../model/pairs');
var exchange  = require('../model/exchange');
var ipblock  = require('../model/ipblock');
var profit    = require('../model/profit');
var Web3      = require('web3');
var config    = require('../Nodedetails/config');
var oArray=[]	;
var api_hit_url    = config.api_hit_url_config;
let margetprice_graph    = mongoose.model('marketpricecurrency_chart');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

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

router.post('/createAdminAddress', async function(req,res){
	var created = await adminAddress.create(req.body);
	res.json({status:true,data:created})
})

router.post('/createWalletAddress',common.tokenMiddleware, async function(req,res){
  console.log('createwalletttttttttttttttttttttttttttttttttttt')
	const data = req.body;
	coinAddress.find({user_id:mongoose.mongo.ObjectId(req.userId), currencyname: data.currencyName}).exec(async function(err,resData) {
    console.log(resData,'ressssssssssssssssssssssfromcoinaddress')
    let currencyName = data.currencyName;
		if(resData.length == 0){

			if(currencyName === 'ETH' || currencyName === 'USDT' || currencyName === 'EOS'){
      
				var host = await common.decrypt_new(rpc.ethconfig.host);
        var port = await common.decrypt_new(rpc.ethconfig.port);
        var password = await common.decrypt_new(rpc.ethconfig.password);
		    port = +port;
            var client = new Client();
            var url = "http://"+host+":"+port;
            var urlsss = "http://192.168.1.56:8565";
           
           // return false;
		        var args = {
		          data: {"jsonrpc":"2.0","method":"personal_newAccount","params":[password],"id":1},
		          headers: {
		            "Content-Type": "application/json;charset=utf-8"
		          }
		        };

		        client.post(url, args, async function (new_acc,rep_eth_address){
		        	if(!new_acc) {
			            res.json({
			              status : false,
			              data   : { "coinaddress" : ""},
			              message : 'Something Went wrong server error',
			              sub_message : new_acc
			            });
	          		}

	          		 if(new_acc) {
                  var currencyArr = ['ETH','USDT','EOS'];
                  for(let i=0; i<currencyArr.length; i++){
                    var currencyAddress = await currency.findOne({currencySymbol:currencyArr[i]}).lean();
                    switch (currencyAddress.currencySymbol) {
                       case 'ETH': 
                       var ethId = currencyAddress._id;
                       break;
                       
                       case 'EOS': 
                       var eosId = currencyAddress._id;
                       break;
                          
                       case 'USDT': 
                       var usdtId = currencyAddress._id;
                       break;
                    }
                  }
                    
		              var addrObj_eth = {"user_id" : req.userId,"currencyid" : ethId,"address": new_acc.result,"currencyname":"ETH"};  
		              var addrObj_usdt = {"user_id" : req.userId,"currencyid" : usdtId,"address": new_acc.result,"currencyname":"USDT"}; 
                  var addrObj_eos = {"user_id" : req.userId,"currencyid" : eosId,"address": new_acc.result,"currencyname":"EOS"}; 

			            
			            if(new_acc.result!=null || new_acc.result!=''){
			              coinAddress.insertMany([addrObj_eth,addrObj_usdt,addrObj_eos], function (err, results) {
			                if (err) {
			                  res.json({
			                    status : false,
			                    data   : { "coinaddress" : ""},
			                    message : 'Something Went wrong. Please contact admin'
			                  });
			                } 
			                else {
			                  res.json({
			                    status : true,
			                    data   : { "coinaddress" : new_acc.result},
			                    message : 'Address Added Successfully'
			                  });
			                }
			              });
			            } 
			            else {
			              res.json({
			                status : false,
			                data   : { "coinaddress" : ""},
			                message : 'Something Went wrong server error'
			              });
			            }
	          		}
		        })
			}
			else if(currencyName === 'BTC'){
            var btc = {};
	       	  btc.protocol = common.decrypt_new(rpc.btcconfig.protocol);
	          btc.host = common.decrypt_new(rpc.btcconfig.host);
	          btc.user = common.decrypt_new(rpc.btcconfig.user);
	          btc.password = common.decrypt_new(rpc.btcconfig.password);
	          btc.port = common.decrypt_new(rpc.btcconfig.port); 
	          btc.port = +btc.port;
	          rpcclient = new jsonrpc.Client(btc);
	          var method = 'getnewaddress';
		        rpcclient.call({
		          method:method,
		          id:'1',
		          jsonrpc:'2.0'
		        },(cerr, btc_address)=>{
              console.log(cerr,'cerrrrrrrrrrrrrrrrrrrrrrrrrrrr')
		        	
		          if(cerr){
		            res.json({
		                status : false,
		                data   : {"coinaddress" : ""},
		                message : 'Something Went wrong. Please contact admin',
		                err:cerr
		              });
		          } else {
		        
		            var tcaddress = btc_address.result;
		            var addrObj = {"user_id" : req.userId,"currencyid" : data.currencyid,"address": tcaddress,"currencyname":currencyName};
		            coinAddress.create(addrObj, function (cerr, results) {
		            if (cerr) return res.status(500).send(cerr);
		              res.json({
		                status : true,
		                data   : {"coinaddress" : tcaddress},
		                message : 'Address Added Successfully'
		              });
		            });
		          }
		        });
	      	}
		    else{

		    }
		}
		else{
	      res.json({
	        status : true,data   : { "coinaddress" : resData[0].address,"tag": resData[0].tag,"memo":resData[0].memo},message : 'Address Added Successfully'
	      });
    	}
	});
});

router.post('/deposithistory',common.tokenMiddleware, async function(req,res){
	var data = req.body;
  const condtn = {};
  if(data.useraddress){
    condtn.cryptoaddress = data.useraddress;
  }
  if(data.currency){
    condtn.currency = data.currency;
    condtn.userId = req.userId;
  }
	var depositResult = await deposit.find(condtn).sort({createddate:-1}).lean();
	res.json({status:true,data:depositResult});
});

router.post('/walletbalance',common.tokenMiddleware, async function(req, res){
	var data = req.body;
	var walletBalance = await userWallet.findOne({user_id : (req.userId)},{wallet: { $elemMatch: { currencyid: data.currencyId }}});
  var currencDetails   = await currency.findOne({_id:data.currencyId});
	res.json({status:true,data:walletBalance,currencySymbol:currencDetails.currencySymbol});
});

router.post('/userbalance',common.tokenMiddleware, async function(req, res){
  var currencyName=[],amount=[];
  var walletBalance = await userWallet.findOne({user_id : req.userId}).lean();

  for(let i=0; i<walletBalance.wallet.length; i++){
    var currencyDetails = await currency.findOne({_id:walletBalance.wallet[i].currencyid, curnType:req.body.type, status:1}).lean();
    if(currencyDetails){
      currencyName.push(currencyDetails.currencySymbol  +  " - "  + walletBalance.wallet[i].amount.toFixed(8));
      amount.push(walletBalance.wallet[i].amount.toFixed(8));
    }
  }
  if(currencyName.length > 0){
    res.json({status:true, name:currencyName, amount:amount});
  } else {
    res.json({status:false, errorMsg:'No data found'});
  }
  
});


function intervalFunc(orderwith) {
  var index = oArray.indexOf(orderwith);
  if (index > -1) {
    oArray.splice(index, 1);
  }
}


router.post('/withdraworder',common.tokenMiddleware,(req, res) => {
	var data = req.body
  try{
    var  orderwith = oArray.indexOf(req.userId);
    if(orderwith ==-1){
          oArray.push(req.userId)
    setTimeout(intervalFunc, 50000, req.userId);
  var user_id    = req.userId;
  var currencyid = data.curr_id;
  // var currencyname = req.body.cursym;
  // var emailid = req.body.emailid;
 var amt     = +data.reqamt;
if(amt>0){
  user.find({_id:req.userId}).exec(function(err,resdata){
    var uname=resdata[0].user_name
      if(resdata){
      currency.find({"_id" : data.curr_id}).exec(function(curerr,resDatacur){
      
      if(resDatacur) {
      if(resDatacur[0].feetype== 1){
        var fees= +data.reqamt*resDatacur[0].withdrawfee/100
        var receiveamt=(+data.reqamt)- +fees;
      }
      else{
          var feeper        = resDatacur[0].withdrawfee;
          var fees          = +feeper;
          var receiveamt    = (+data.reqamt)-+fees;
      }
   
      var checkcurncy = data.cursym;
      var valid;
      if(checkcurncy != 'USDT')
      {
        
       valid = WAValidator.validate(data.accnumber, data.cursym,'testnet');
      }
      
      else{
         valid = 1;
      }
  
    // var valid = WAValidator.validate(req.body.accnumber, req.body.cursym ,'testnet');

      if(valid){
      var withdraword   = {
        payment_method : "Crypto currency transaction",
        transaction_id : "",
        useraddress        : mongoose.mongo.ObjectId(req.userId),
        currency_name  : resDatacur[0].currencySymbol,
        withamount   : data.reqamt,
        fees           : fees,
        feeType : resDatacur[0].fee_type,
        receiveamount : receiveamt,
        toAddress : data.accnumber,
        status         : 3,
        withcurrency     : data.curr_id,
        username       : uname,
        comments       : data.comment,
        coin_address   : data.accnumber,
        type           : data.wdtype,
        currencytype   :"crypto",
        tag            : data.tag ? data.tag : '',
        memo           :data.memo ? data.memo:''

      };
      
      if (fees<amt) {
      userWallet.findOne({user_id : req.userId},{wallet: { $elemMatch: { currencyid: data.curr_id } }}).exec(function(walerr,wllresdata){

          if(wllresdata){

          var wallbalance=wllresdata.wallet[0].amount;
         
          
          if(+wallbalance >= +data.reqamt){

      withdraw.create(withdraword,function(ord_err,resdata){
        if(resdata) {
          var fromamount          = data.reqamt;
          var walletBalance       = wallbalance;
          var newbal              = +walletBalance - +fromamount;
          var user_id             = req.userId;
          var currencyname        = data.curr_id;
          var dataToSet           = {};
          dataToSet[currencyname] = newbal;
          var walletuser          = { 'user_id' : user_id};
          // console.log(dataToSet);
          userWallet.updateOne({ 'user_id': req.userId,"wallet.currencyid":currencyname},{ "$set": { 'wallet.$.amount': +newbal}},function(balerr, updateData){
            // if(updateData) {
              admin.findOne({"role":"admin"}).exec(function(usrErr,usrDet){
                var usrDet = usrDet;
                sitesettings.find().select('site_logo').exec(function(err_site,data_site){
                  var logo = data_site[0].site_logo;
                    // if(resDatacur[0].withdraw_limit<=req.body.reqamt){
                      user.findOne({_id:req.userId}).exec(function (userErr, userdata) {
                        emailtemplate.findOne({ title: "userwithdraw" }).exec(function (etemprErr, etempdata) {
                          sitesettings.findOne({},function(err,admin){
                            var approveLink = config.Host+"withdraw/"+resdata._id+"/approve";
                            var rejectLink = config.Host+"withdraw/"+resdata._id+"/reject";
                            var email = userdata.email;
                            var etempdataDynamic = etempdata.mailcontent.replace(/###WFEE###/g, ((resdata.fees)).toFixed(8) +" "+ resdata.currency_name).replace(/###WRECEIVE###/g, resdata.receiveamount +" "+ resdata.currency_name).replace(/###WREQTIME###/g, resdata.created_date).replace(/###WAMOUNT###/g, resdata.withamount+" "+ resdata.currency_name ).replace(/###WID###/g, resdata._id).replace(/###EMAIL###/g, email).replace(/###APPROVE###/g,approveLink).replace(/###REJECT###/g,rejectLink);
                            mail.sendMail({ to: email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
                              res.json({status:true,message:"Your withdraw request submitted Successfully"});
                            })
                          })
                        });
                      });
                    
                  });
                    // }
                    // else{
                    //   emailtemplate.find({ "title": 'UserWithdraw Request' }).exec(function(etemperr,etempdata){
                    //     var etempdataDynamic = etempdata[0].mailcontent.replace(/###USERNAME###/g, resdata[0].user_name).replace(/###CURRENCY###/g, resDatacur[0].currencySymbol).replace(/###AMOUNT###/g, withdraword.withamount).replace(/###FEES###/g, withdraword.fees).replace(/###FINAL###/g, withdraword.receive_amount).replace(/###LOGO###/g, logo);
                    //   mail.sendMail('UserWithdraw Request Admin way',{to:resdata[0].email,html:etempdataDynamic},function(mailRes){  
                    //   });
                    // });
                    // }
                 
                   



                  //    emailtemplate.find({ "title": 'withdraw' }).exec(function(etemperr,etempdata){
                  // console.log("kkkkkkkk",usrDet.admin_emailid)
                  //     var etempdataDynamicadmin = etempdata[0].mailcontent.replace(/###USERNAME###/g, resdata[0].username).replace(/###CURRENCY###/g, resDatacur[0].currencySymbol).replace(/###AMOUNT###/g, withdraword.total_amount).replace(/###FEES###/g, withdraword.fees).replace(/###FINAL###/g, withdraword.receive_amount).replace(/###LOGO###/g, logo);
                  //     var data={
                  //       to:"keerthana.r@cryptoexchangescript.com",
                  //       html:etempdataDynamicadmin
                  //     }
                  //     console.log("EMAIL",data)
                  //     mail.sendMail('withdraw',{to:usrDet.admin_emailid,html:etempdataDynamicadmin},function(mailRes){

                  //     });
                  // });

                     // res.json({
                     //          status : true,
                     //          message : 'Your Withdraw Request has been sent',
                     //          data:resdata
                     //    });
                   });
          
            // });
            // }
            // else{
            //   res.json({status : false,errMsg:balerr})
            //   return
            // }
           });
          }
          else{
            res.json({status : false,errMsg:'order_err'})
              return
          }
      });  

    }
    else{
       res.json({status : false,errMsg:'Insufficient balance'})
      return

    }

    }
    else{
 res.json({status : false,errMsg:'Error in getting balance'})
      return

    }


      });
    }
    else{
       res.json({status : false,errMsg:'Amount should be greater than fee'})
      return
    }

}
else{
   res.json({
          status: false,
          errMsg: 'Invalid Address',
          checkcurncy: 'checkcurncy'
        })
}
    } 
    else {
      res.json({status : false,errMsg:'Invalid currency'})
      return
    }
  });
    }
    else{
       res.json({status : false,errMsg:'Invalid user'})
      return
    }

  })

  
}
else{
  res.json({status : false,errMsg:'Invalid withdraw amount'})
      return
}
}
else
{
  res.json({status : false,errMsg:'Create withdraw after 5 seconds'})
      return
}
}
catch(e){
  console.log("withdraworder",e);
}
});


router.post('/ethwithdraw', function(req, res) {

      var getdet = req.body;
      adminAddress.findOne({}, function(err,adwal_data){
          var admin_address = getdet.useraddress;
          var to_address  = getdet.address;
          var withdrawamt = getdet.withamount;
          var web3 = new Web3(new Web3.providers.HttpProvider("http://"+common.decrypt_new(rpc.ethconfig.host)+":"+common.decrypt_new(rpc.ethconfig.port)));
          var send_amount  = Web3.utils.toWei(withdrawamt.toString());
          var ethcoinadminpassword = common.decrypt_new(rpc.ethconfig.adminpassword);
          
          web3.eth.getBalance(admin_address,function(err, balance) {
          
            if(err) {
              res.json({
                status : false,
                message : err
              });
            }
            if(balance) {
              if(+balance > +send_amount) {
                web3.eth.personal.unlockAccount(admin_address, ethcoinadminpassword, 2000, function(lock_err, lock_res) {
            
                  if(lock_err) {
                    res.json({
                      status : false,
                      message : lock_err
                    });
                  }

                  if(lock_res) {
                    var trans_det = { from : admin_address, to : to_address, value : send_amount,gas:30000,gasPrice:20000000000};
                    web3.eth.sendTransaction(trans_det,function(trans_err,txid) {
                      // console.log("errrrrrrrrrrrrrr",trans_err)
                      // console.log("taxxxxxxxxx",txid)
                      if(trans_err) {
                        res.json({
                          status : false,
                          message : trans_err
                        });
                      }
                      var transaction_id = txid;
                      // console.log("tranasctionnnnnnnnnnn",transaction_id)
                      transaction_id= transaction_id.toString();
                      // sendWithdrawStatusEmail(user_id, amount,currencyname);
                      if(transaction_id){
                        var newwithdraw = {
                          currency: "ETH",
                          depamt: withdrawamt,
                          from_address: getdet.useraddress,
                          to_address: getdet.address,
                          txnid: transaction_id,
                          status: "completed"
                        }
                    adminWithdraw.create(newwithdraw, function (insErr, insData) {
                      var balupdate = adwal_data.eth_balance - withdrawamt;
                      adminAddress.update({},{$set:{eth_balance:balupdate}}, function (err, balance) {
                          res.json({
                            status:true,
                            message: "Transaction Completed Successfully!"
                          })
                        });
                    });
                      } else{
                        res.json({
                          status:false,
                          message: "Transaction failed. Try again sometime."
                        })
                      }

                    });
                  }
                });
              } 
              else {
                res.json({
                  status : false,
                  message : "Not enough balance",
                  data : balance,
                  with_amt : send_amount
                });
              }
            }
          });
          })
          
       
});

//admin usdt withdraw

router.post('/usdtwithdraw', function(req, res) {

        if(req.body.currency === 'USDT'){
          var currencySymbol  = 'USDT';
          var decimals        = 100000000;
        } else {
          var currencySymbol  = 'EOS';
          var decimals        = 1000000000000000000;
        }

        var getdet = req.body;
        var usdt_hostname= common.decrypt_new(rpc.ethconfig.host)
        var usdt_portname= common.decrypt_new(rpc.ethconfig.port)
        var password = common.decrypt_new(rpc.ethconfig.adminpassword)
       
        var currency = mongoose.model('currency');
        var getJSON = require('get-json');
        var address  = getdet.address;
        var amount = getdet.withamount;

        adminAddress.findOne().exec(function (err_adwal, resData_adwal) {
          currency.findOne({currencySymbol:currencySymbol }).exec((curError, curRes) => {
            var currencyResponse = JSON.parse(JSON.stringify(curRes));
            var eth_address = resData_adwal.eth_address;
            getJSON(api_hit_url+"api?module=account&action=tokenbalance&contractaddress=" + currencyResponse.contractAddress + "&address=" + eth_address + "&tag=latest", function (errorBal, response) {
              if (errorBal) res.json({status: false,message: 'Transaction Failed.Please try again.'});
              try {
                if (response.message == 'OK' && response.result > 0) {
                  getJSON(api_hit_url+"api?module=contract&action=getabi&address=" + currencyResponse.contractAddress, function (errorAbi, abiResponse) {
                    if (errorAbi) res.json({status: false,message: 'Transaction Falied.Please try again.'});
                    if (abiResponse.message == 'OK' && abiResponse.result != '') {
                      var admin_address = resData_adwal.eth_address;
                      var to_address = address;

                      var withdraw = amount;
                      var contract_address = currencyResponse.contractAddress;

                      var web3 = new Web3(new Web3.providers.HttpProvider("http://" + usdt_hostname + ":" + usdt_portname));
                      // var send_amount = Web3.utils.toWei(withdraw.toString());
                      var send_amount = withdraw*decimals;
                      const abi = JSON.parse(abiResponse.result);
                      const contract_ins = new web3.eth.Contract(abi, contract_address, { from: admin_address, gas: 100000, gasPrice: "20000000000" });
                      getJSON(api_hit_url+"api?module=account&action=tokenbalance&contractaddress="+currencyResponse.contractAddress +"&address="+ eth_address+"&tag=latest",function(err,balance){

                        if (err) {
                          res.json({status: false,message: 'Transaction Falied.Please try again.'});
                        }
                        if (balance.result) {
                          if (+balance.result > +send_amount) {
                            web3.eth.personal.unlockAccount(admin_address, password, 2000, function (lock_err, lock_res) {
                                                  
                              if (lock_err) {
                                res.json({status: false,message: 'Transaction Falied.Please try again.'});
                              }
                              if (lock_res) {
                                contract_ins.methods.transfer(to_address, send_amount).send(function (trans_err, txid) {
                                  if (trans_err) {
                                  }
                                  var transaction_id = txid;
                                  if (txid != '' && txid!=null) {
                                  var newwithdraw = {
                                      currency: currencySymbol,
                                      depamt: withdraw,
                                      from_address: admin_address,
                                      to_address: getdet.address,
                                      txnid: transaction_id,
                                      status: "completed"
                                    }
                                adminWithdraw.create(newwithdraw, function (insErr, insData) {
                                  var balupdate = resData_adwal.usdt_balance - withdraw;
                                  adminAddress.update({},{$set:{usdt_balance:balupdate}}, function (err, balance) {
                                 
                                      res.json({
                                        status:true,
                                        message: "Transaction Completed Successfully!"
                                      })
                                    });
                                });
                                                              
                                  } else {
                                    res.json({status: false,message: 'Transaction Falied.Please try again.'});
                                  }
                                });
                              }
                            });
                          } else {
                          
                                    res.json({
                                        status: false,
                                        message: "XLAB Token network error.please try again sometime",
                                        data: balance,
                                        with_amt: send_amount
                                    });
                           
                          }
                        }
                        else{
                          res.json({status: false,message: 'Transaction Falied.Please try again.'});
                        }
                      });
                    }
                    else {
                      res.json({status: false,message: 'Transaction Falied.Please try again.'});
                    }
                  });
                }
                else {
                  res.json({status: false,message: 'Transaction Falied.Please try again.'});
                }
              }
              catch (err) {
                res.json({status: false,message: 'Transaction Falied.Please try again.'});
              }
            })
          });
        })
})




router.post('/withdrawhistory',common.tokenMiddleware, async function(req,res){
	try{
		var withdrawList = await withdraw.find({useraddress:req.userId,currency_name:req.body.currency}).sort({created_date:-1});
		if(withdrawList){
			res.json({status:true, data:withdrawList});
		} else {
			res.json({status:true, data :'No Data Available'});
		}
	} catch(e){
		res.json({status:false,error:e});
	}
	
})


router.get('/getqrcode',common.tokenMiddleware, (req, res) => {
  try{
    user.findOne({"_id":req.userId}).exec(function(err,resData){
      var emailid = resData.email;
      if(resData.tfaenablekey ==''){
      var secret = speakeasy.generateSecret({
        length: 10,
        // name: "bitrockz"
        name: "BDAMPAY"+emailid
      });
    
        qrcode.toDataURL(secret.otpauth_url, function(err, image_data) {
        var base64 = image_data;
        var token = speakeasy.totp({
          secret: secret.base32,
          encoding: 'base32'
        });
        var secret1 = secret;
        var url = base64;
        var onecode = token;
        res.json({"status": true,"secret": secret1,"url":url,"onecode":onecode,"otpauth_url":secret.otpauth_url,
          "admin_emailid":emailid,"tfaenable":resData.tfaenable});
    
      });
      
    }
    else{
       apiresponse.data = [];
      apiresponse.data = resData;
      apiresponse.message = "";
      var url='otpauth://totp/SecretKey?secret=';

    res.json({"status": false,"tfaenablekey":resData.tfaenablekey,
      "url":url+resData.tfaenablekey,"otpauth_url":'otpauth://totp/BDAMPAY%20%3A%20'+emailid+'?secret='+resData.tfaenablekey,"admin_emailid":emailid,"tfaenable":resData.tfaenable})

    }
    
   });
  
  }
  catch(e)
  {
    console.log("getqrcode",e);
  }

});
router.post('/verifytfq',common.tokenMiddleware, (req, res) => {

  try{
    var verified = speakeasy.totp.verify({
      secret  : req.body.tfaenablekey,
      encoding: 'base32',
      token   : req.body.tfaonecode,
      window  : 4
    });
    // if(verified == true){
    if(verified){
      console.log("KKK",verified == true)
      user.findOneAndUpdate({ "_id": req.userId },
      { "$set": {"tfaenable": 1,"tfaenablekey":req.body.tfaenablekey}},{new: true}).
      exec(function(err, resUpdate){
         if(err) {
           res.status(500).send(err);
         }
         else {
          res.json({"status": true,"resData":verified});
         }
      });
    }
    else{
      console.log("LLL",verified == false)
      res.json({"status": false,"resData": verified});
    }
  }
  catch(e)
  {
    console.log("verifytfq",e);
  }
});


router.post('/disabletfa',common.tokenMiddleware, (req, res) => {
  try{
    var verified = speakeasy.totp.verify({
      secret  : req.body.tfaenablekey,
      encoding: 'base32',
      token   : req.body.tfaonecode,
      window  : 4
    });

    if(verified == true){
    user.findOneAndUpdate({ "_id": req.userId},
    { "$set": {"tfaenable": 0,"tfaenablekey": ""}},{multi: true}).
    exec(function(err, resUpdate){
       if(err) {
         res.status(500).send(err);
       }
       else {
        res.json({"status": true});
       }
    });
    }
    else{
    res.json({"status": false});
    }
  }
  catch(e)
  {
    console.log("disabletfa",e);
  }

});


router.get('/getuser',common.tokenMiddleware, async (req, res)=>{
	try{
		var userData = await user.findOne({_id:req.userId});
		res.json({status:true,data:userData});
	} catch(e){
		console.log('getuser',e)
	}
});


router.post('/updateprofile',common.tokenMiddleware, async(req,res)=>{
  var userDetail = req.body;
  try{
    var updatedUser = await user.updateOne({_id:req.userId},{$set:userDetail});
    if(updatedUser){
      res.json({status:true,msg:'Updated Successfully!'});
    }
  } catch(e){
    console.log('getuser',e)
  }
})

router.post('/loginverifytfa',common.tokenMiddleware, (req,res)=>{
try{
user.findOne({"_id":req.userId}).exec(function(err,resdata){
 var verified = speakeasy.totp.verify({
      secret  : resdata.tfaenablekey,
      encoding: 'base32',
      token   : req.body.tfaonecode
    });
    var d = new Date();
    var n = d.getSeconds();
    if(verified == true){
      res.json({"status": true,"resData":verified});
    }
    else{
      res.json({"status": false,"resData": verified});
    }
});
}
catch(e){
  console.log("loginverifytfa",e)
}
});


router.post('/userwithdrawapprove', (req ,res) => {
  try{
     orderwith = oArray.indexOf(req.body.user_id);
    if(orderwith == -1){
 oArray.push(req.body.user_id)
    setTimeout(intervalFunc, 50000, req.body.user_id);
  withdraw.find({"_id":req.body.id,"user_id":req.body.user_id}).select('status').exec(function(err_with,res_with){
    if(res_with.length >0){
      if(res_with[0].status == 1){
        res.json({status : false, message:"Withdraw request already Completed"});
      }
      else if(res_with[0].status == 2){
        res.json({status : false, message:"Withdraw request already cancelled"});
      }
      else{
         withdraw.find({"_id":req.body.id,"user_id":req.body.user_id}).exec(function(err,resData){
          updateWalletBalance(resData[0].currency_name, resData[0].currencyid, +resData[0].receive_amount, resData[0].to_address, 1, req.body.user_id, res, resData[0].tag,resData[0].fees,'',resData[0]._id,resData[0].xmr_payId);
         });
      }
    }

  });
}
else{
  res.json({ status: false, message: ' please Approve withdraw after 5 seconds' });
    return false;
}
}
catch(e){
  console.log("userwithdrawapprove",e);
}
});

router.post('/userwithdrawcancel', (req ,res) => {
  try{
 
    orderwith = oArray.indexOf(req.body.user_id);
     if (orderwith == -1) {
    oArray.push(req.body.user_id)
    setTimeout(intervalFunc, 50000, req.body.user_id);
  withdraw.find({ "_id": mongoose.mongo.ObjectId(req.body.id),"user_id":new ObjectId(req.body.user_id) }).select('status').select('receive_amount').exec(function(err_with,res_with){    

    if(res_with.length >0){
      if(res_with[0].status == 2){
        res.json({status : false, error:"Withdraw request already cancelled"});
      }
      else if(res_with[0].status == 1){
        res.json({status : false, error:"Withdraw request already Confirmed"});
      }
      else{
        wallet.aggregate([
        {$unwind: "$wallet"},
        {
          $match: {
          "user_id": new ObjectId(req.body.user_id),
          "wallet.currencyid": new ObjectId(req.body.currencyid[0])
          }
        },
      
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "userstatus"
          }
        },
        {
          $lookup: {
            from: "currency",
            localField: "wallet.currencyid",
            foreignField: "_id",
            as: "currencyid"
          }
        },

        {$project : {
          "walletbalance":"$wallet.amount"
        }}
        ]).exec(function(tracwalerrsell,trackwallressell){
           var walletamount = +trackwallressell[0].walletbalance + +req.body.totalamount;
            wallet.updateOne(
              { 'user_id': mongoose.mongo.ObjectId(req.body.user_id),"wallet.currencyid":req.body.currencyid[0]},
              { "$set": { 'wallet.$.amount': walletamount}},function(balerr, updateData){
            });
            withdraw.update({ "_id": mongoose.mongo.ObjectId(req.body.id) },
            { "$set": {"status": 2,"reject_reason":req.body.reject_reason}},{multi: true}).exec(function(err, resUpdate){
             
              if(err) {
                  res.json({status : false, error:"Invalid Request"});
              } 
              else{              
              res.json({status : true, message:"Withdraw request cancelled Successfully"});
               
              }
          });
      });
      }
    }
    else{
      res.json({status : true, error:""});
    }
  });
}
else{
 res.json({ status: false, msg: 'Please cancel withdraw after 5 seconds' });
    return false;
}
}
catch(e){
  console.log("userwithdrawcancel",e);
}
});


router.post('/getBalance', async function(req, res){
	var data = req.body;
	try{
		var currencyDetails = await currency.find({status:1}).lean();
		for(let i=0;i<currencyDetails.length;i++){
			var walletBalance = await userWallet.findOne({user_id : (data.userId)},{wallet: { $elemMatch: { currencyid: currencyDetails[i]._id }}});
		
			if(walletBalance.wallet[0] && walletBalance.wallet[0].amount){
				currencyDetails[i].balance = walletBalance.wallet[0].amount;
			} else {
				currencyDetails[i].balance = 0;
			}
		}
		res.json({status:true, data:currencyDetails})
	} catch(e){
		console.log('getBalance',e)
	}
});



router.get('/getBalance',common.tokenMiddleware,async function(req, res){

  var data = req.body;
  var user = req.userId

  try{
    var currencyDetails = await currency.find({status:1}).lean();
    for(let i=0;i<currencyDetails.length;i++){
      var walletBalance = await userWallet.findOne({user_id : req.userId},{wallet: { $elemMatch: { currencyid: currencyDetails[i]._id }}});
      // console.log(walletBalance.wallet,'balance')
      if(walletBalance.wallet[0] && walletBalance.wallet[0].amount){
        currencyDetails[i].balance = walletBalance.wallet[0].amount;
      } else {
        currencyDetails[i].balance = 0;
      }
    }
    res.json({status:true, data:currencyDetails})
  } catch(e){
    console.log('getBalance',e)
  }
});



router.post('/checkingAddress',common.tokenMiddleware, async function(req, res){
  var data = req.body
  try{
    var address = await coinAddress.findOne({user_id:req.userId, currencyname:data.currency});
    res.json({status:true, data:address});
  } catch(err){
    console.log('checkingAddress',err)
  }
});





router.post('/exchangepairs',common.tokenMiddleware,async function(req,res){
  try{
    if(req.body.pair!="" && req.body.amt!="" && req.body.spendamt!=""){
      var userData =  await user.findOne({"_id":req.userId});
      if(userData){
        var pairData = await pairs.findOne({"pair":req.body.pair});
        if((+pairData.min_amt<= +req.body.spendamt) && (+pairData.max_amt >= +req.body.spendamt)){
         
          var fromCurrencyWallet = await userWallet.findOne({user_id:(userData._id)},{wallet:{$elemMatch:{currencyid:pairData.fromCurrency}}});
          // var toCurrencyWallet = await userWallet.findOne({user_id:(userData._id)},{wallet:{$elemMatch:{currencyid:pairData.toCurrency}}});
           if(+fromCurrencyWallet.wallet[0].amount >= +req.body.spendamt){
            if(pairData.feeType=="1"){
              var feeamt= +req.body.amt*pairData.fee/100;
              var totalamt= +req.body.amt-feeamt;
            }
            else{
              var feeamt=pairData.fee;
              var totalamt= +req.body.amt-pairData.fee;
            }

          
             if(totalamt>feeamt){

              var cryptodetect= fromCurrencyWallet.wallet[0].amount - req.body.spendamt;
              // var faitdec=toCurrencyWallet.wallet[0].amount+totalamt;

              await userWallet.updateMany({"user_id":userData._id,"wallet.currencyid":pairData.fromCurrency},{"$set":{'wallet.$.amount':+cryptodetect }});
              // await userWallet.updateMany({"user_id":userData._id,"wallet.currencyid":pairData.toCurrency},{"$set":{'wallet.$.amount':+faitdec }});

              res.json({status:true,Msg:'Exchange completed',data:pairData});

               var obj={
                  "user_id":userData._id,
                  "receive_amount":totalamt.toFixed(8),
                  "fees":pairData.fee,
                  "fees_type":"percentage",
                  "fromcurrency":pairData.fromCurrency,
                  "tocurrency":pairData.toCurrency,
                  "pairs":req.body.pair,
                  "total_amount":req.body.spendamt,
                  "price":req.body.amt,
                  "status":3
                  }

                  exchange.create(obj,function(errcre,resdatacreste){

                   
                  });
              // var values={
              //     "profit_type":"Exchange",
              //     "user_id":userData._id,
              //     "currencyid":pairData.toCurrency,
              //     "profitamt":feeamt
              //   }
              // profit.create(values,function(errprofit,resdataprofit){});

            }
            else{
                res.json({status : false,message:'Amount should be greater than fee'})
              }
        

           }else{
            res.json({status: false, message:'Insufficient Balance'});
          }

        } else{
        res.json({status: false, message:'Your Exchange amount needs to statisfy the minimum and maximum exchange amount'});
      }
      }else{
        res.json({status:false,errMsg:'User Does not exists'});
      }
    }
  }catch(e){
    console.log("exchangepairs",e);
  }
});

router.get('/exchangehistory',common.tokenMiddleware, async function(req, res){
  try{
    var exchangeDetails = await exchange.find({user_id:req.userId}).sort({created_date:-1}).lean();
    res.json({status:true,data:exchangeDetails});
  } catch(e){
    console.log(e,'exchangehistory');
  }
});

router.post('/addpair', async function(req,res){
  try{
    var pairDetails = await pairs.create(req.body);
    res.json({status:true,data:pairDetails});
  } catch(e){
    console.log(e,'getpairs')
  }
})


router.post('/getpairs', async function(req,res){
  try{
    var pairDetails = await pairs.findOne({pair:req.body.pair}).lean();
    res.json({status:true,data:pairDetails});
  } catch(e){
    console.log(e,'getpairs')
  }
  
});


router.get('/getallPair', async function(req,res){
  try{
    var pairDetails = await pairs.find();
    res.json({status:true,data:pairDetails});
  } catch(e){
    console.log(e,'getpairs')
  }
});

router.get('/getuser',common.tokenMiddleware, async function(req,res){
  try{
    var userDetails = await user.find({_id:req.userId});
    res.json({status:true,data:userDetails});
  }catch(e){
    console.log(e,'getuser')
  }
});

router.get('/currencyusd', async function(req,res){
  try{
    var currencyDetails = await currency.find().lean();
    for(let i=0; i<currencyDetails.length; i++){
      var pairData = await pairs.findOne({pair:currencyDetails[i].currencyName+'/USD'}).lean();
      if(pairData){
        currencyDetails[i].volume = pairData.volume;
        currencyDetails[i].change = pairData.change;
      } else {
        currencyDetails[i].volume = 0;
        currencyDetails[i].change = 0;
      }
    }
    res.json({status:true,data:currencyDetails});
  }catch(e){
      console.log(e,'currencyusd');
  }
});


router.get('/createAdminAddress',(req, res) => {
  try{
        rpc.ethconfig.host = common.decrypt_new(rpc.ethconfig.host);
        rpc.ethconfig.port = common.decrypt_new(rpc.ethconfig.port);
        rpc.ethconfig.password = "ETHADMIN";
        rpc.ethconfig.port = +rpc.ethconfig.port;
 
        var client = new Client();
        var url = "http://"+rpc.ethconfig.host+":"+rpc.ethconfig.port;
        var args = {
          data: {"jsonrpc":"2.0","method":"personal_newAccount","params":[rpc.ethconfig.password],"id":1},
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          }
        };

        client.post(url, args, function (new_acc,rep_eth_address) {
          if(!new_acc) {
            res.json({
              status : false,
              data   : { "coinaddress" : ""},
              message : 'Something Went wrong server error',
              sub_message : new_acc
            });
          }
          if(new_acc) {
            
            console.log("ETH ADDRESSS",new_acc)
           
          }       
        });

   
          rpc.btcconfig.protocol = common.decrypt_new(rpc.btcconfig.protocol);
          rpc.btcconfig.host = common.decrypt_new(rpc.btcconfig.host);
          rpc.btcconfig.user = common.decrypt_new(rpc.btcconfig.user);
          rpc.btcconfig.password = common.decrypt_new(rpc.btcconfig.password);
          rpc.btcconfig.port = common.decrypt_new(rpc.btcconfig.port);      
          rpc.btcconfig.port = +rpc.btcconfig.port;
          rpcclient = new jsonrpc.Client(rpc.btcconfig);        
        // }
        var method = 'getnewaddress';
        rpcclient.call({
          method:method,
          id:'1',
          jsonrpc:'2.0'
        },(cerr, btc_address)=>{
          console.log("BTC address",btc_address,cerr)
        })
 
}
catch(e){
  console.log("createAddress",e);
}
});

router.get('/pricegraph', async function(req,res){
  try{
    
    var currencyData = [];
    var currencyDetails =  await currency.find({curnType:1,status:1}).lean();
    for(let i=0; i<currencyDetails.length; i++){
      var currencyPrice = [];
      // var exchangeData = await exchangeDB.find({pairs:{$regex:'/' +currencyDetails[i].currencySymbol}, "created_date":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}).lean();
      var exchangeData = await exchangeDB.find({pairs:{$regex:'/' +currencyDetails[i].currencySymbol}}).lean();
      for(let prc=0; prc<exchangeData.length;prc++){
         currencyPrice.push(exchangeData[prc].price);
      }
      currencyData.push({data:currencyPrice, label:currencyDetails[i].currencySymbol});
      
    }
    res.json({status:true,data:currencyData});
  }catch(e){
      console.log(e,'currencyusd');
  }
});



// router.get('/marketpricegraph', async function(req,res){
//   try{
    
//     var currencyData = [];
//     var currencyDetails =  await currency.find({curnType:1,status:1}).lean();
//     for(let i=0; i<currencyDetails.length; i++){
//       var currencyPrice = [];
//       var exchangeData = await margetprice_graph.find({currencySymbol:currencyDetails[i].currencySymbol, "created_date":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}).lean();
//       for(let prc=0; prc<exchangeData.length;prc++){
//         currencyPrice.push(exchangeData[prc].price);
//       }
//       currencyData.push({data:currencyPrice, label:currencyDetails[i].currencySymbol});
      
//     }
//     console.log("currencyData",currencyData)
//     res.json({status:true,data:currencyData});
//   }catch(e){
//       console.log(e,'currencyusd');
//   }
// });

router.get('/marketpricegraph/:uid', async function(req,res){
  try{
    let uid = req.params.uid
    var currencyData = [];
    var currencyDetails =  await currency.find({curnType:uid,status:1}).lean();
    for(let i=0; i<currencyDetails.length; i++){
      var currencyPrice = [];
      var exchangeData = await margetprice_graph.find({currencySymbol:currencyDetails[i].currencySymbol, "created_date":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}).lean();
      for(let prc=0; prc<exchangeData.length;prc++){
        currencyPrice.push(exchangeData[prc].price);
      }
      currencyData.push({data:currencyPrice, label:currencyDetails[i].currencySymbol});
      
    }
    console.log("currencyData",currencyData)
    res.json({status:true,data:currencyData});
  }catch(e){
      console.log(e,'currencyusd');
  }
});






router.post('/ipstatus',async function(req, res){
  var data = req.body;
  var update = await ipblock.updateOne({_id:data._id},{$set:{status:data.status}});
  var ipData = await ipblock.findOne({_id:data._id}).lean();
  res.json({status:true,data:update});
  // if(data.status == 1){
    io.emit('ipblocked',{ip:ipData.user_ip,status:data.status});
  // }
  
});

router.post('/updatelogin_attempt',async function(req,res){
  var data = req.body;
  var update = await ipblock.updateOne({ip:data.ip},{$set:{login_attempt:req.body.login_attempt}})
});

router.post('/change_tfa_status',async function(req,res){
  try{
    var updatedUser = await user.updateOne({_id:req.body._id},{$set:{tfaenable:0,tfaenablekey:''}});
    res.json({status:true,msg:'Updated Successfully!'});
  }catch(e){
    console.log(e,'errorinchange')
  }
  
})


module.exports = router;