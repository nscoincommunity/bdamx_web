const express = require('express');
const router = express.Router();

const config = require("../../Nodedetails/config");
const common_helper = require('../../helpers/common');
const custom_helper = require('../../helpers/custom');
const mail = require('../../helpers/mailHelper');

const mongoose = require('mongoose');
const validator = require('node-validator');
const getJSON = require('get-json');
const rpc = require('node-json-rpc2');
const async          = require('async');
const adminBank = require('../../model/adminbankdetails');
const adminBankInfo = require('../../model/adminbankinfo');
const userBank = require('../../model/userbankdetails');
const userBankInfo = require('../../model/userbankinfo');
const ipblock = require('../../model/ipblock');
const TokenDB  = mongoose.model('Tokendetails');
const WithdrawDB  = mongoose.model('Withdraw');
const depositDB  = mongoose.model('deposit');
const wallet = mongoose.model('userWallet');
const curencyDB = mongoose.model('currency');
const emailDB = mongoose.model('Emailtemplate');
const users_table = mongoose.model('users');
const exchange_table = mongoose.model('exchange');
const common = require('../../helpers/common');
const siteSettings = require('../../model/sitesettingsdb');
const ObjectId = require('mongodb').ObjectID;

let ErrorData = {
	status : false,
	verify_type : ""
}

let SuccessData = {
	status : true
}

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/addadminbank', async function(req, res){
	try{
		var addDetails = await adminBank.create(req.body);
		res.json({status:true, msg:'Added Successfully'});
	
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});

router.post('/getadminbank', async function(req, res){
	try{
		var bankDetails = await adminBank.find({currencysymbol:req.body.currency,status:0});
		res.json({status:true, data:bankDetails});
	
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});

router.post('/getadminbanklist', async function(req, res){
	try{
		var bankDetails = await adminBankInfo.find({currencysymbol:req.body.currency});
		res.json({status:true, data:bankDetails});
	
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
})

router.post('/getadminbankinfo', async function(req, res){
	try{
		var bankDetails = await adminBankInfo.find({currencysymbol:req.body.currency,bank:req.body.bank});
		res.json({status:true, data:bankDetails});
	
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});


router.post('/addadminbankinfo', async function(req, res){
	try{
		var bankDetails = await adminBankInfo.findOne({currencysymbol:req.body.currencysymbol,bank:req.body.bank});
		if(bankDetails){
			res.json({status:false,msg:'Bank already exists'})
		} else {
			var addDetails = await adminBankInfo.create(req.body);
			res.json({status:true, msg:'Added Successfully'});
		}	
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});

router.post('/createdeposit',common.tokenMiddleware, async function(req,res){
	var data = req.body;
	data.userId = mongoose.mongo.ObjectId(req.userId);

	try{
	var txnExists = await depositDB.findOne({txnid:data.txnid});
	if(!txnExists){
		depositDB.create(data,function(err,resdata){
			if(err)return res.status(500).send(err);
			res.json({
			             status: true,
			             data: resdata,
			            message: 'deposit list'
			           });
			});
	}else{
		res.json({status:false,message:'TransactionId already exists'});
	}
	
	}
	catch(e){
	  console.log("createdeposit",e)
	}
});

router.post('/adduserbankinfo', common.tokenMiddleware, async function (req,res){
	var data = req.body;
	data.user_id = req.userId;
	try{
		var existsChecking = await userBankInfo.findOne({user_id:req.userId, currencysymbol:data.currencysymbol,bank:data.bank });
		if(existsChecking && !data._id){
			res.json({status:false,msg:'Bank Details is already present for the selected currency '})
		} else if(!data._id){
			var addDetails = await userBankInfo.create(data);
			res.json({status:true, msg:'Added Successfully'});
		} else if(data._id){
			var updateDetails = await userBankInfo.update({_id:data._id},{$set:data});
			res.json({status:true, msg:'Updated Successfully'});
		}
		
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});

router.get('/getuserbankinfo', common.tokenMiddleware, async function(req,res){
	try{
		var bankDetails = await userBankInfo.find({user_id:req.userId});
		res.json({status:true, data:bankDetails});
	
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});

router.post('/getuserbank', common.tokenMiddleware, async function(req, res){
	try{
		var bankDetails = await userBankInfo.find({user_id:req.userId, currencysymbol:req.body.currency});
		res.json({status:true, data:bankDetails});
	
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});

router.post('/getuserbankdetails', common.tokenMiddleware, async function(req, res){
	try{
		var bankDetails = await userBankInfo.find({user_id:req.userId, currencysymbol:req.body.currency, bank:req.body.bank});
		res.json({status:true, data:bankDetails});
	
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});

router.post('/withdrawfait',common.tokenMiddleware,(req,res)=>{
try{
	if(req.body.amount>0){
		   wallet.findOne({user_id : (req.userId)},{wallet: { $elemMatch: { currencyid: req.body.currencyid }}}).exec(function(err,walletdata){
		   	if(+walletdata.wallet[0].amount >= +req.body.amount){
			   	curencyDB.findOne({"_id":req.body.currencyid}).exec(function(errcurr,resdatacurr){
				    if((+req.body.amount<= +resdatacurr.maxwithamt) && (+req.body.amount >= +resdatacurr.minwithamt)){
					if(resdatacurr.feetype== 1){
					var feecal=(req.body.amount)-(req.body.amount*(resdatacurr.withdrawfee/100));
					var withfees =req.body.amount*(resdatacurr.withdrawfee/100)
					}
					else{
					var feecal=(req.body.amount)-(resdatacurr.withdrawfee);
					var withfees =resdatacurr.withdrawfee
					}
				    if(feecal < req.body.amount){
				    	var obj={
					    "user_id":mongoose.mongo.ObjectId(req.userId),
					    "withamount":req.body.amount,
					    "fees":withfees,
					    "feeType" : resdatacurr.fee_type,
					    "currencytype":'fiat',
					    "payment_type":mongoose.mongo.ObjectId(req.body.bankid),
					    "currency_name":resdatacurr.currencySymbol,
					    "withcurrency":req.body.currencyid,
					    "receiveamount":feecal,
					    "useraddress"  : req.userId,
					    "status":3
					  }
					  WithdrawDB.create(obj,function(err,resdata){
						  if(err)return res.status(500).send(err);
						  var newbal = walletdata.wallet[0].amount - obj.withamount;
						  wallet.updateOne({ 'user_id': req.userId,"wallet.currencyid":req.body.currencyid},{ "$set": { 'wallet.$.amount': +newbal}},function(balerr, updateData){});
						  users_table.findOne({_id:req.userId}).exec(function (userErr, userdata) {
						  	emailDB.findOne({ title: "userwithdraw" }).exec(function (etemprErr, etempdata) {
						  		siteSettings.findOne({},function(err,admin){
									var approveLink = config.Host+"withdraw/"+resdata._id+"/approve";
									var rejectLink = config.Host+"withdraw/"+resdata._id+"/reject";
									var email = userdata.email;
									var etempdataDynamic = etempdata.mailcontent.replace(/###WFEE###/g, (resdata.fees).toFixed(8) +" "+ resdata.currency_name).replace(/###WRECEIVE###/g, resdata.receiveamount +" "+ resdata.currency_name).replace(/###WREQTIME###/g, resdata.created_date).replace(/###WAMOUNT###/g, resdata.withamount+" "+ resdata.currency_name ).replace(/###WID###/g, resdata._id).replace(/###EMAIL###/g, email).replace(/###APPROVE###/g,approveLink).replace(/###REJECT###/g,rejectLink);
									mail.sendMail({ to: email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
										res.json({status:true,message:"Your withdraw request submitted Successfully"});
									})
								})
					  		});
						  });
					  });
				    } else{
				       res.json({status : false,errMsg:'Amount should be greater than fee'})
				       return
			    	}
			    }else{
			    	res.json({status : false,errMsg:'Amount needs to statisfy the minimum and maximum amount'});
			    	return
			    }
			  });
	   	}else{
	       	res.json({status : false,errMsg:'Insufficient balance'})
	      	return
	    }

   });
	} else{
	  res.json({status : false,errMsg:'Invalid withdraw amount'})
	  return
	}


 
}
catch(e){
  console.log("withdrawfait",e)
}
});

router.post('/updatewithstatus',common.tokenMiddleware, async(req, res)=>{
	try{
	var data = req.body;
	const condtn = {
		user_status: data.status == 'approve' ? '1' : '2'
	}
	var withdrawData = await WithdrawDB.findOne({_id:req.body.id}).lean();
	var updatedData = await WithdrawDB.update({_id:req.body.id,user_status:"0",admin_status:"0"},{$set:condtn});
	if(data.status == 'reject'){
		var withdrawDetails = await WithdrawDB.findOne({_id:req.body.id}).lean();
		var walletUpdate = await wallet.updateOne({ 'user_id': req.userId,"wallet.currencyid":withdrawDetails.withcurrency},{ "$inc": { 'wallet.$.amount': +withdrawDetails.withamount}});
	}
	
	res.json({status:true,msg:'Updated Successfully',data:withdrawData});
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});

router.post('/deleteuserbank',common.tokenMiddleware, async (req,res)=>{
	try {
	var deletedData = await userBankInfo.findOneAndRemove({_id:req.body.id});
	if(deletedData){
		res.json({status:true,msg:'Deleted Successfully!'})
	} 
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
})


router.get('/sample', (req, res) => {
	try{
	
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});


module.exports = router;