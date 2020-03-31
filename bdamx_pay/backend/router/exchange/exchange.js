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
const adminDB = mongoose.model('admin');
const TokenDB  = mongoose.model('Tokendetails');
const WithdrawDB  = mongoose.model('Withdraw');
const depositDB  = mongoose.model('deposit');
const userWallet = mongoose.model('userWallet');
const curencyDB = mongoose.model('currency');
const emailDB = mongoose.model('Emailtemplate');
const users_table = mongoose.model('users');
const exchange_table = mongoose.model('exchange');
const ObjectId = require('mongodb').ObjectID;
const profitDB  = mongoose.model('profit');


let ErrorData = {
	status : 0,
	verify_type : ""
}

let SuccessData = {
	status : 1
}

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/sample', (req, res) => {
	try{
	
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});


router.get('/sample', (req, res) => {
	try{
		
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});


let exchange_checkid = []
router.post('/exchange_confirm',  async (req,res) => {
	try{
		let Indata = req.body

		let data =  {
			status : '1',
			status_date : new Date()
		}
		var check_value = exchange_checkid.indexOf(Indata.exchanger)
		if (check_value === -1) {
			exchange_checkid.push(Indata.exchanger);
			var exchange_data = await exchange_table.findOne({_id:Indata.exchanger,status:"3"}).lean();
			if(exchange_data){
				
				// let detactwallet  =  await userWallet.updateMany({"user_id":new ObjectId(exchange_data.user_id),"wallet.currencyid":new ObjectId(exchange_data.fromcurrency)},{"$inc":{'wallet.$.amount':-exchange_data.total_amount }});
				let updatewallet  =  await userWallet.updateMany({"user_id":new ObjectId(exchange_data.user_id),"wallet.currencyid":new ObjectId(exchange_data.tocurrency)},{"$inc":{'wallet.$.amount':+exchange_data.receive_amount }});
				let updata= {status:'1',status_date:new Date()}
				let exchangeupdate = await exchange_table.updateOne({"_id":exchange_data._id,status:"3"},{"$set":updata});
				if(exchange_data.fees_type == 'percentage'){
					var feeType = '%'
					var feeAmount = exchange_data.fees/100 * exchange_data.price;
				}else{
					var feeAmount = exchange_data.fees;
					var feeType = '';
				}
				var values={
				"profit_type":"Exchange",
				"user_id":exchange_data.user_id,
				"currencyid":exchange_data.tocurrency,
				"profitamt":feeAmount
				}
			
				let userDetails = await users_table.findOne({ _id: new ObjectId(exchange_data.user_id) })
				let etempdata = await emailDB.findOne({ title: "adminexchange_approve" } )
				let etempdataDynamic = etempdata.mailcontent.replace(/###EMAIL###/g,userDetails.email).replace(/###FCURRENCY###/g,exchange_data.pairs.split("/")[0]).replace(/###CURRENCY###/g,exchange_data.pairs.split("/")[1]).replace(/###PAIR###/g, exchange_data.pairs).replace(/###PRICE###/g,exchange_data.price.toFixed(8)).replace(/###EXCHANGE_AMOUNT###/g,exchange_data.total_amount.toFixed(8)).replace(/###FEES###/g,values.profitamt.toFixed(8)).replace(/###FT###/g,exchange_data.fees+feeType).replace(/###R_AMOUNT###/g,exchange_data.receive_amount.toFixed(8)).replace(/###STIME###/g,updata.status_date);
				mail.sendMail({ to: userDetails.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
					profitDB.create(values,function(errprofit,resdataprofit){});
					setTimeout(checkid_values, 3000, Indata.exchanger,exchange_checkid); 
					res.send({status:true,Msg:"Exchange approved successfully"})
				})
			}
			
		}else{
			res.send({status:false,verify_type:"timeout",Msg : "Processing"});	
		}

	
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});



router.post('/exchange_rejcet',  async (req,res) => {
	try{
		let Indata = req.body
		let data =  {
			status : '2',
			rejected_reason : Indata.rejcet_reason,
			status_date : new Date()
		}
		var check_value = exchange_checkid.indexOf(Indata.exchanger)
		if (check_value === -1) {
			exchange_checkid.push(Indata.exchangerd);
			var exchange_data = await exchange_table.findOne({_id:Indata.exchanger,status:"3"}).lean();
			if(exchange_data){
			let detactwallet  =  await userWallet.updateMany({"user_id":new ObjectId(exchange_data.user_id),"wallet.currencyid":new ObjectId(exchange_data.fromcurrency)},{"$inc":{'wallet.$.amount':+exchange_data.total_amount }});
			// let updatewallet  =  await userWallet.updateMany({"user_id":new ObjectId(exchange_data.user_id),"wallet.currencyid":new ObjectId(exchange_data.tocurrency)},{"$inc":{'wallet.$.amount':-exchange_data.price }});
			let exchangeupdate = await exchange_table.updateOne({"_id":exchange_data._id,status:"3"},{"$set":data});
				if(exchangeupdate){
					let userDetails = await users_table.findOne({ _id: new ObjectId(exchange_data.user_id) })
					let etempdata = await emailDB.findOne({ title: "adminexchange_reject" } )
					if(exchange_data.fees_type == 'percentage'){
						var feeType = '%'
						var feeAmount = exchange_data.fees/100 * exchange_data.price;
					}else{
						var feeType = '';
						var feeAmount = exchange_data.fees;
					}

					let etempdataDynamic = etempdata.mailcontent.replace(/###EMAIL###/g,userDetails.email).replace(/###FCURRENCY###/g,exchange_data.pairs.split("/")[0]).replace(/###CURRENCY###/g,exchange_data.pairs.split("/")[1]).replace(/###PAIR###/g, exchange_data.pairs).replace(/###PRICE###/g,exchange_data.price.toFixed(8)).replace(/###EXCHANGE_AMOUNT###/g,exchange_data.total_amount.toFixed(8)).replace(/###FT###/g,exchange_data.fees+feeType).replace(/###FEES###/g,feeAmount.toFixed(8)).replace(/###R_AMOUNT###/g,exchange_data.receive_amount.toFixed(8)).replace(/###REASON###/g,Indata.rejcet_reason
					).replace(/###STIME###/g,exchange_data.status_date);
					mail.sendMail({ to: userDetails.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
						setTimeout(checkid_values, 3000, Indata.exchanger,exchange_checkid); 
						res.send({status:true,Msg:"Exchange rejected successfully"})
					})
				}
			}
			
		}else{

			res.send({status:false,verify_type:"timeout",Msg : "Processing"});	
		}

	
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});


function checkid_values(value,datacheck) {
  var index = datacheck.indexOf(value);
  if (index > -1) {
    datacheck.splice(index, 1);
  }
}


// router.post('/exchange_list', (req, res) => {
// 	try{
// 		var skip = req.body.page.pageNumber *  req.body.page.size;
// 		var limit = req.body.page.size;
// 		let prop1= req.body.sorting.prop;
// 		console.log("prop1",prop1)

// 		var dir= req.body.sorting['dir'];
// 		console.log("dir",dir)
// 		var srt = {}
// 		srt[prop1] = dir == 'desc' ? -1 : 1;
// 		console.log(srt[prop1])
// 		// sort[prop1]=-1
// 		var cnt;
// 		var search = req.body.search;
// 		if(req.body.search != ""){
// 		cnt = {$or:[{'username': { $regex: '.*' + search + '.*',$options: 'i' }},{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }},
// 		{'fromcurrency': { $regex: '.*' + search + '.*',$options: 'i' }},{'tocurrency_name': { $regex: '.*' + search + '.*',$options: 'i' }},
// 		{'tocurrency_name': { $regex: '.*' + search + '.*',$options: 'i' }},{'amount':  search},{'receive_amount':search},{'fees':search},
// 		{'status': { $regex: '.*' + search + '.*',$options: 'i' }},{'oder_type': { $regex: '.*' + search + '.*',$options: 'i' }}]};
// 		}
// 		else{
// 		cnt = {};
// 		}
// 		async.parallel({
// 		bannerTotalCount:function(cb) {
// 		exchange_table.aggregate([
// 		{
// 		$lookup: {
// 		from        : "users",
// 		localField  : "user_id",
// 		foreignField: "_id",
// 		as          : "username"
// 		},

// 		},
// 		{
// 		$lookup: {
// 		from        : "currency",
// 		localField  : "fromcurrency",
// 		foreignField: "_id",
// 		as          : "currency"
// 		},

// 		},
// 		{
// 		$project:{
// 		"username":"$username.user_name",
// 		"emailid":"$username.email",
// 		"fromcurrency":"$currency.currencySymbol",
// 		"amount":"$receive_amount",
// 		"receive_amount":"$receive_amount",
// 		"fees":"$fees",
// 		"status":"$status",
// 		"oder_type":"$oder_type",
// 		"pairs"  :"$pairs",
// 		"created_date":"$created_date"
// 		}
// 		},

// 		{ $match:cnt},

// 		]).exec(cb)
// 		},
// 		bannerData:function(cb) {
// 		exchange_table.aggregate([
// 		{
// 		$lookup: {
// 		from        : "users",
// 		localField  : "user_id",
// 		foreignField: "_id",
// 		as          : "username"
// 		},

// 		},
// 		{
// 		$lookup: {
// 		from        : "currency",
// 		localField  : "fromcurrency",
// 		foreignField: "_id",
// 		as          : "currency"
// 		},

// 		},
// 		{
// 		$project:{
// 		"username":"$username.user_name",
// 		"emailid":"$username.email",
// 		"fromcurrency":"$currency.currencySymbol",
// 		"amount":"$receive_amount",
// 		"receive_amount":"$receive_amount",
// 		"fees":"$fees",
// 		"status":"$status",
// 		"oder_type":"$oder_type",
// 		"pairs"  :"$pairs",
// 		"created_date":"$created_date"
// 		}
// 		},

// 		{ $match:cnt},

// 		]).exec(cb)
// 		}

// 		},function(err,results){
// 		if (err) return res.status(500).send(err);
// 		console.log(results.bannerData)
// 		apiresponse.data = [];
// 		apiresponse.status = true;
// 		apiresponse.data = results.bannerData;
// 		apiresponse.bannerTotalCount = results.bannerTotalCount.length;
// 		apiresponse.message = "";
// 		res.json(apiresponse);
// 		})
// 	}catch(e){
		
// 		ErrorData.verify_type = "catch"
// 		ErrorData.Msg = e
// 		res.send(ErrorData)

// 	}
// });



  router.post('/exchange_list', function(req, res) {
	try {
	  var skip  = req.body.page.pageNumber * req.body.page.size;
	  var limit = req.body.page.size;
	  let prop1 = req.body.sorting.prop;
	  var dir   = req.body.sorting['dir'];
	  var srt   = {}
	  srt[prop1] = dir == 'desc' ? -1 : 1;

	  var cnt;
	  var search = req.body.search;



	  if(req.body.search != ""){
		if(search == "Completed" || search == "completed"){
		cnt = { status:'1' }
		}else if(search == "Pending" || search == "pending"){
		cnt = { status:'3' }
		}else if(search == "Rejected" || search == "rejected"){
		cnt = { status:'2' }
		}else{
			cnt = {$or:
				[
				{'username': { $regex: '.*' + search + '.*',$options: 'i' }},
				{'emailid': { $regex: '.*' + search + '.*',$options: 'i' }},
				{'fromcurrency': { $regex: '.*' + search + '.*',$options: 'i' }},
				{'tocurrency_name': { $regex: '.*' + search + '.*',$options: 'i' }},
				{'tocurrency_name': { $regex: '.*' + search + '.*',$options: 'i' }},
				{'amount':  search},
				{'receive_amount':search},
				{'fees':search},
				{'oder_type': { $regex: '.*' + search + '.*',$options: 'i' }}
				]
		      };	
		}
		
	  }else{
		cnt = {};
	}     
	  
	async.parallel({
	  bannerTotalCount:function(cb) {  
	  exchange_table.aggregate([
		{
		  $lookup:
		  {
			from: 'currency',
			localField: 'fromcurrency',
			foreignField: '_id',
			as: 'currency'
		  },
		  
		},
		{
			$lookup:
		  {
			from: 'users',
			localField: 'user_id',
			foreignField: '_id',
			as: 'username'
		  },
		},
		{
		  $project: {

		"fromcurrency":"$currency.currencySymbol",
		"amount":"$receive_amount",
		"receive_amount":"$receive_amount",
		"fees":"$fees",
		"rejected_reason":"$rejected_reason",
		"status":"$status",
		"oder_type":"$oder_type",
		"pairs"  :"$pairs",
		"created_date":"$created_date",
		"username": { $arrayElemAt: ["$username.user_name", 0] },
		"usermail": { $arrayElemAt: ["$username.email", 0] },
		"currency": { $arrayElemAt: ["$currency._id", 0] },
		"currencySymbol": { $arrayElemAt: ["$currency.currencySymbol", 0] },

			
		  }
		},
		{ $match : cnt},
	  ]).exec(cb);          
		// pairsDB.find( cnt ).countDocuments().exec(cb);
	  },
	  bannerData:function(cb) {
		exchange_table.aggregate([
		  {
			$lookup:
			{
			  from: 'currency',
			  localField: 'fromcurrency',
			  foreignField: '_id',
			  as: 'currency'
			},
			
		  },
		  {
			$lookup:
		  {
			from: 'users',
			localField: 'user_id',
			foreignField: '_id',
			as: 'username'
		  },
		},
		{
			$lookup:
		  {
			from: 'currency',
			localField: 'tocurrency',
			foreignField: '_id',
			as: 'scurrency'
		  },
		},
		  {
			$project: {
			"fromcurrency_name":{ $arrayElemAt: ["$currency.currencySymbol", 0] },
			"tocurrency_name":{ $arrayElemAt: ["$scurrency.currencySymbol", 0] },
			"fromcurrency_type":{ $arrayElemAt: ["$currency.curnType", 0] },
			"tocurrency_type":{ $arrayElemAt: ["$scurrency.curnType", 0] },
			"amount":"$receive_amount",
			"receive_amount":"$receive_amount",
			"total_amount":"$total_amount",
			"fees":"$fees",
			"status":"$status",
			"price":"$price",
			"rejected_reason":"$rejected_reason",
			"oder_type":"$oder_type",
			"pairs"  :"$pairs",
			"fees_type":"$fees_type",
			"created_date":"$created_date",
			"username": { $arrayElemAt: ["$username.user_name", 0] },
			"usermail": { $arrayElemAt: ["$username.email", 0] },
			"currency": { $arrayElemAt: ["$currency._id", 0] },
			"currencySymbol": { $arrayElemAt: ["$currency.currencySymbol", 0] },
			}
		  },
		  { $match : cnt},
		  { "$sort": srt },
		  { "$skip" : skip },
		  { "$limit" : limit },           
		]).exec(cb);
	  }
	  },function(err,results){ 
			var arrayval = {};

			arrayval.count = results.bannerTotalCount.length;
			arrayval.dephis = results.bannerData;
			
			res.json({
			  status: true,
			  "Message": arrayval,
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




module.exports = router;