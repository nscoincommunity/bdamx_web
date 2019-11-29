var express = require('express');
var router = express.Router();
var config = require("../../Nodedetails/config");
const mongoose = require('mongoose');
let adminDB = mongoose.model('admin');
let common = require('../../helpers/common');
let mail = require('../../helpers/mailHelper');
const multer = require("multer");
/* GET users listing. */
let TokenDB  = mongoose.model('Tokendetails');
let CurrencyDB  = mongoose.model('currency');
let userDB  = mongoose.model('users');
let PairDB  = mongoose.model('pairs');
var cloudinary = require('cloudinary');
let WithdrawDB  = mongoose.model('Withdraw');
let AdminWithdrawDB  = require('../../model/adminwithdraw');
let notificationDB = require('../../model/notification');
let profitDB  = mongoose.model('profit');
let depositDB  = mongoose.model('deposit');
let ContactDB = mongoose.model('Contact');
var getJSON = require('get-json');
var async          = require('async');
cloudinary.config({
	cloud_name: config.cloudinaryData.cloud_name,
	api_key: config.cloudinaryData.api_key,
	api_secret: config.cloudinaryData.api_secret
});

var storage = multer.diskStorage({
	filename: function (req, file, cb) {

	  cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post('/upload', upload.single('myImage'), function(req, res, next) {
	try{
   cloudinary.uploader.upload(req.file.path, function (result) {
	res.json({ "status": true, "result": result });
});
   }
  catch (err)
  {
	console.log("upload", err)
  }
});
router.get('/checkpatern', (req, res) => {
	try {
		
		adminDB.findOne( {role: 'admin'},  {wallpat:1, _id:0}).exec(function (userErr, UserRes) {
			var strval = UserRes.wallpat;

	var splitString = strval.split(""); 
 
	var reverseArray = splitString.reverse(); 
   
	var joinArray = reverseArray.join(""); 
 
			UserRes.wallpat=joinArray+ "jwt" +"34567IPM09456NBijPls";
			// UserRes.wallpat=UserRes.wallpat ;
			res.json({
				status: true,
				value: UserRes
			})
		})
		
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})
router.post('/', function(req, res) {

try{
   adminDB.findOne({ role: 'admin' }).exec(function (userErr, UserRes) {
	let getdet = req.body;

	let checkencrypt = common.encrypt(getdet.password);
	if(UserRes.email == getdet.email && UserRes.password == checkencrypt)
	{
		if(UserRes.wallpat == getdet.wallpat)
		{
	   
		let date = Date.now();

		common.insertActivity(UserRes._id,'Admin login', 'Login','admin',req);

		let origin = common.createPayload(UserRes._id);

		res.json({ "status": true, "Message": "Login successfully", "origin": origin });
	}
	else{
 res.json({ "status": false, "Message": "Invalid pattern code" });    
	}

	}
	else{
	 
	   res.json({ "status": false, "Message": "Invalid Email/Password" });	
   }

});
   }
  catch (err)
  {
	console.log("withdrawrequest", err)
  }
});

router.get('/getsitedetails', (req, res) => {
	try {

		common.redisConfig('sitesettingsdb', '', (resData) => {

			data = resData;
			res.json({
				status: true,
				value: data
			})
		})
		
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})
router.get('/metadetails', (req, res) => {
	try {

		common.redisConfig('Meta', '', (resData) => {

			data = resData;
			res.json({
				status: true,
				value: data
			})
		})
		
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})

router.get('/getadminactivity', common.tokenMiddleware, (req, res) => {
	try {

		if (req.userId) {
			let activityDB = mongoose.model('AdminActivity');
			activityDB.find({ "user_id": req.userId }).sort( { datetime: -1 } ).exec(function (err, resData) {
				
				data = resData;
				res.json({
					status: true,
					value: data
				})
			})
		}
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})

router.get('/getdashboardcount', (req, res) => {
	try {
		async.parallel({
			depositCount : function(cb){
				depositDB.countDocuments().exec(cb) 
			},
			withdrawCount : function(cb){
				WithdrawDB.countDocuments().exec(cb) 
			},
			currencyCount : function(cb){
				CurrencyDB.countDocuments().exec(cb) 
			},
			userCount : function(cb){
				userDB.countDocuments().exec(cb) 
			},            
			contactCount : function(cb){
				ContactDB.countDocuments().exec(cb) 
			},
		},function(err,results){
		   res.json({status: false,value: results})
		})
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})

router.get('/getdashboardcount_wallet', (req, res) => {
	try {
		PairDB.find({},{pair:1}).exec(function(err,results){
		   res.json({status: false,value: results})
		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})

router.post('/profileupdate', common.tokenMiddleware, function(req, res) {

	try {
	 let getdet = req.body;
	 let oldpassword = getdet.oldpassword;
	 let activityDB = mongoose.model('admin');

	 adminDB.findOne({ role: 'admin' }).exec(function (userErr, UserRes) {

		 if(userErr)
		 {
			res.json({ "status": false, "Message": "Something went wrong" });
		}
		if(UserRes.password != common.encrypt(oldpassword))
		{
			res.json({ "status": false, "Message": "Incorrect old password" });return false;
		}

		if(UserRes.password == common.encrypt(getdet.password))
		{
			res.json({ "status": false, "Message": "Old password and new password should not be same" });return false;
		}


		activityDB.findOneAndUpdate({ role: 'admin' }, { "$set": { password: common.encrypt(getdet.password) } }, { multi: true }).exec(function (upErr, upRes) {
			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });return false;
			}
			else{
			   res.json({ "status": true, "Message": "Password updated successfully" });
		   }

	   });
	});

 }
 catch (e) {
	res.json({
		status: false,
		"Message": "Error occured",
	})
}
});

router.post('/Metaupdate', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;

		let MetaDB = mongoose.model('Meta');
		MetaDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			common.SetredisConfig('Meta', '', (resData) => {

				if(upErr)
				{
					res.json({ "status": false, "Message": "Something went wrong" });
				}
				else{
				   res.json({ "status": true, "Message": "Meta content updated successfully" });
			   }

		   });
		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});
router.post('/settingupdate', function(req, res) {
	let getdet = req.body;

	try {
	 let getdet = req.body;

	 let settingDB = mongoose.model('sitesettingsdb');

	 settingDB.update({ "_id": mongoose.Types.ObjectId('5c8cbfd6e4855b586c68117b') }, req.body).exec(function (upErr, upRes) {

		common.SetredisConfig('sitesettingsdb', '', (resData) => {

			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}
			else{
			   res.json({ "status": true, "Message": "Site settings updated successfully" });
		   }

	   });
	});
 }
 catch (e) {
	res.json({
		status: false,
		"Message": "Error occured",
	})
}
});

router.get('/emailtemplatedetails', (req, res) => {
	try {

		common.redisConfig('Emailtemplate', '', (resData) => {

			data = resData;
			res.json({
				status: true,
				value: data
			})
		})
		
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})

router.post('/emailtemplateupdate', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;

		let MetaDB = mongoose.model('Emailtemplate');
		MetaDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			common.SetredisConfig('Emailtemplate', '', (resData) => {

				if(upErr)
				{
					res.json({ "status": false, "Message": "Something went wrong" });
				}
				else{
				   res.json({ "status": true, "Message": "Email template content updated successfully" });
			   }

		   });
		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});
router.get('/CMSdetails', (req, res) => {
	try {

		common.redisConfig('CMS', '', (resData) => {

			data = resData;
			res.json({
				status: true,
				value: data
			})
		})
		
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})

router.post('/CMSupdate', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;
		
		let MetaDB = mongoose.model('CMS');
		MetaDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			common.SetredisConfig('CMS', '', (resData) => {

				if(upErr)
				{
					res.json({ "status": false, "Message": "Something went wrong" });
				}
				else{
				   res.json({ "status": true, "Message": "CMS content updated successfully" });
			   }

		   });
		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});

router.get('/faqdetails', (req, res) => {
	try {

		common.redisConfig('FAQ', '', (resData) => {

			data = resData;
			res.json({
				status: true,
				value: data
			})
		})
		
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})

router.post('/editfaq', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;
		
		let FAQDB = mongoose.model('FAQ');
		FAQDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			common.SetredisConfig('FAQ', '', (resData) => {

				if(upErr)
				{
					res.json({ "status": false, "Message": "Something went wrong" });
				}
				else{
				   res.json({ "status": true, "Message": "FAQ content updated successfully" });
			   }

		   });
		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});
router.post('/addfaq', function(req, res) {
	let getdet = req.body;

	try {

	 let FAQDB = mongoose.model('FAQ');
	 FAQDB.create(getdet, function (err, resData) {

		common.SetredisConfig('FAQ', '', (resData) => {

			if(err)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}
			else{
			   res.json({ "status": true, "Message": "FAQ added successfully" });
		   }

	   });
	});
 }
 catch (e) {
	res.json({
		status: false,
		"Message": "Error occured",
	})
}
});


router.get('/getCurrencyProfit', (req, res) => {
  try {
	
	CurrencyDB.find({baseCoin:{ $ne: 'BTC'}},{currencySymbol:1,balance:1}).exec(function (err, resData) {
	  profitDB.aggregate([{$group:{'_id':'$currencyid','total':{$sum:'$fees'}}}]).exec(function (err, data) {
		var profits = [];
		var currencies = [];
		if(data.length > 0){
		  for (var i = 0; i < data.length; i++) {
			profits[data[i]._id] = data[i].total;
		  }
		}
		if(resData.length > 0){
		  for (var j = 0; j < resData.length; j++) {
			currencies[j] = resData[j];
			if(typeof profits[resData[j]._id] != undefined && typeof profits[resData[j]._id] != 'undefined'){
			  currencies[j].balance = profits[resData[j]._id];
			}
		  }
		}
		res.json({status:true,result:currencies});
	  })
	})
  }
  catch (e) {
	res.json({status: false})
  }
});


router.post('/withdrawBalance', function (req, res) {
	try {
			var getdet = req.body;
			if (getdet) {
					if (getdet.amount > 0) {
							CurrencyDB.findOne({ _id: mongoose.Types.ObjectId(getdet._id) }).exec((curenerr, curncydet) => {
									if (curncydet) {
										var db = require('../../model/Sitekeys');
										db.findOne({},{
											"ProfitAddress":1,
									
											},function(err,responseset){
												console.log("responseset",responseset)
															var Amount = parseFloat(getdet.amount);
															var totalamount = Amount.toFixed(8);
														
																			var createData = { from_address: "",to_address: responseset.ProfitAddress, currency: getdet._id, depamt: totalamount, txnid: getdet.txid,status:"Completed" }
																		
																			var AdminWithdrawDB = require('../../model/adminwithdraw');
																			AdminWithdrawDB.create(createData, function (err, resData) {
																					let adminProfit = {
																							type: 'Admin Withdraw',
																							userid: responseset.ProfitAddress,
																							currencyid: getdet._id,
																							txid: getdet.txid,
																							fees: -totalamount,
																							fullfees: -totalamount,
																							orderid: resData._id
																					}
																					let profitDb = require('../../model/profit');
																					profitDb.create(adminProfit, function (profitErr, profitRes) {
																							res.json({ status: true, Message: 'Your profit withdraw confirmed successfully' });
																					});
																			});
																			});
																
									}
									else {
											res.json({ status: false, Message: 'Invalid currency request' });
									}
							});
					}
					else {
							res.json({ status: false, Message: 'Enter a valid amount' });
					}
			}
			else {
					res.json({ status: false, Message: 'Invalid details' });
			}
	}
	catch (err) {
			console.log('err', err);
			res.json({ status: false, Message: 'Invalid details' });
	}
});


router.get('/contactdetails', (req, res) => {
	try {

	   ContactDB.find().sort( { datetime: -1 } ).exec(function (resDataErr, resData) {
		if(resDataErr)
		{
			res.json({ "status": false, "Message": "Something went wrong" });
		}

		data = resData;
		res.json({
			status: true,
			value: data
		})
	})
	   
   }
   catch (e) {
	res.json({
		status: false,
		"Message": "Something went wrong",
	})
}
})

router.post('/tradedetails', (req, res) => {
  try{
	let CoinOrder = mongoose.model('CoinOrder');
	if(req.body.type=='cancel')
	{
	 var where = {'status':'cancelled'};
	}
	else
	{
	  var where = {$or:[{'status': { $regex: '.*' + 'active' + '.*',$options: 'i' }},{'status': { $regex: '.*' + 'partially' + '.*',$options: 'i' }}]};
	}    
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$and:[{'userId': { $regex: '.*' + search + '.*',$options: 'i' }},where]};
	}
	else{
	  cnt = where;
	}

	async.parallel({
	  bannerTotalCount:function(cb) {      
		CoinOrder.aggregate([
		  {
			$lookup:
			{
			  from: 'pairs',
			  localField: 'pair',
			  foreignField: '_id',
			  as: 'pairsdet'
			},
		  },
		  {
			  $project: {
				"Price": "$Price",
				"Amount": "$Amount",
				"total": "$Total",
				"Type": "$Type",
				"ordertype": "$ordertype",
				"datetime": "$datetime",
				"userId": "$userId",
				"makerFee":"$makerFee",
				"takerFee":"$takerFee",
				"status": "$status",
				"pairNames": { $arrayElemAt: ["$pairsdet.pair", 0] },
			  }
			},
		  { $match : cnt},
	   ]).exec(cb);  
	  },
	  bannerData:function(cb) {
		CoinOrder.aggregate([
		  {
			$lookup:
			{
			  from: 'pairs',
			  localField: 'pair',
			  foreignField: '_id',
			  as: 'pairsdet'
			},
		  },
		  {
			  $project: {
				"Price": "$Price",
				"Amount": "$Amount",
				"total": "$Total",
				"Type": "$Type",
				"ordertype": "$ordertype",
				"datetime": "$datetime",
				"makerFee":"$makerFee",
				"takerFee":"$takerFee",                
				"userId": "$userId",
				"status": "$status",
				"pairNames": { $arrayElemAt: ["$pairsdet.pair", 0] },
			  }
			},
		  { $match : cnt},
		  { "$sort": srt },
		  { "$skip" : skip },
		  { "$limit" : limit },
	   ]).exec(cb);    
	  },
	},function(err,results){
	  if (err) return res.status(500).send(err);
		res.json({
			status: true,
			value: results.bannerData,
			count:results.bannerTotalCount.length
		})

	})
  }
  catch(e){
	console.log("tradedetails",e);
  }  
})

router.get('/orderdetails', (req, res) => {
	try {
	   let mapping = mongoose.model('mapping');


	   mapping.aggregate([
		{ $sort : { datetime : -1 } },
		{
		  $lookup:
		  {
			from: 'pairs',
			localField: 'pair',
			foreignField: '_id',
			as: 'pairsdet'
		  },
		},
		{
			$project: {
			  "tradePrice": "$tradePrice",
			  "filledAmount": "$filledAmount",
			  "total": "$total",
			  "buyFee": "$buyFee",
			  "ordertype": "$ordertype",
			  "sellFee": "$sellFee",
			  "datetime": "$datetime",
			  "sellerUserid": "$sellerUserid",
			  "buyerUserid": "$buyerUserid",
			  "pair": { $arrayElemAt: ["$pairsdet.pair", 0] },
			}
		  }
	   
	  ]).exec(function (resDataErr, resData) {

		if(resDataErr)
		{
			res.json({ "status": false, "Message": "Something went wrong" });
		}
		data = resData;
		res.json({
			status: true,
			value: data
		})
	})
	   
   }
   catch (e) {
	res.json({
		status: false,
		"Message": "Something went wrong",
	})
}
})

router.post('/orderdetails', (req, res) => {
  let mapping = mongoose.model('mapping');
  try{
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$or:[{'pair': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	}
	else{
	  cnt = {};
	}
	async.parallel({
	  bannerTotalCount:function(cb) {      
	   mapping.aggregate([
		{
		  $lookup:
		  {
			from: 'pairs',
			localField: 'pair',
			foreignField: '_id',
			as: 'pairsdet'
		  },
		},
		{
			$project: {
			  "tradePrice": "$tradePrice",
			  "filledAmount": "$filledAmount",
			  "total": "$total",
			  "buyFee": "$buyFee",
			  "ordertype": "$ordertype",
			  "sellFee": "$sellFee",
			  "datetime": "$datetime",
			  "sellerUserid": "$sellerUserid",
			  "buyerUserid": "$buyerUserid",
			  "pair": { $arrayElemAt: ["$pairsdet.pair", 0] },
			}
		  },
		  {$match:cnt},
	  ]).exec(cb)
	  },
	  bannerData:function(cb) {
	   mapping.aggregate([
		{
		  $lookup:
		  {
			from: 'pairs',
			localField: 'pair',
			foreignField: '_id',
			as: 'pairsdet'
		  },
		},
		{
			$project: {
			  "tradePrice": "$tradePrice",
			  "filledAmount": "$filledAmount",
			  "total": "$total",
			  "buyFee": "$buyFee",
			  "ordertype": "$ordertype",
			  "sellFee": "$sellFee",
			  "datetime": "$datetime",
			  "sellerUserid": "$sellerUserid",
			  "buyerUserid": "$buyerUserid",
			  "pair": { $arrayElemAt: ["$pairsdet.pair", 0] },
			}
		  },
		  {$match:cnt},
		  { "$sort": srt },
		  { "$skip" : skip },
		  { "$limit" : limit },             
	  ]).exec(cb);        
	  },
	},function(err,results){
		res.json({
			status: true,
			value: results.bannerData,
			count:results.bannerTotalCount.length
		})

	})
  }
  catch(e){
	console.log("orderdetails",e);
  }  
})

router.post('/contactrpy', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;
		
		ContactDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}
			else{
 ContactDB.findOne({  "_id": mongoose.Types.ObjectId(getid) }).exec(function (ConErr, ConRes) {
	if(ConErr)
	{
		res.json({ "status": false, "Message": "Error in sending reply" }); return false;
	}

				  common.redisConfig('Emailtemplate', 'title,contactresponse', (etempdata) => {
					  var etempdataDynamic = etempdata.mailcontent.replace(/###USERNAME###/g, ConRes.name).replace(/###MESSAGE###/g, getdet.reply);
					  mail.sendMail({ to: ConRes.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
 ContactDB.find().sort({datetime: -1}).exec(function (ConsErr, ConsRes) {

					   res.json({ "status": true, "Message": "Contact reply send successfully to the user","ConsRes":ConsRes });

				   })
				   })
				  })


				  })

			  
		   }

	   });
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});


router.post('/forgotpassword', function(req, res) {
try{
   adminDB.findOne({ role: 'admin' }).exec(function (userErr, UserRes) {
	let getdet = req.body;

	if(UserRes.email == getdet.email)
	{
		var start = Date.now();
		adminDB.findOneAndUpdate({ role: 'admin' }, { "$set": { forgotid: start } }, { multi: true }).exec(function (upErr, upRes) {
			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}

			common.redisConfig('Emailtemplate', 'title,adminreset', (etempdata) => {

			 var etempdataDynamic = etempdata.mailcontent.replace(/###USERNAME###/g,'Admin').replace(/###EMAIL###/g, getdet.email).replace(/###LINK###/g, config.Host + '/#/resetpassword/' + start);
			 mail.sendMail({ to: getdet.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
				 res.json({ "status": true, "Message": "Reset link send to your mail id" });
			 });
		 });
		});


	}
	else{
	  res.json({ "status": false, "Message": "The email you given is not your login email" });   
  }

});
   }
  catch (err)
  {
	console.log("forgotpassword", err)
  }
});

router.post('/forgotidcheck', function(req, res) {
try{
   adminDB.findOne({ role: 'admin' }).exec(function (userErr, UserRes) {
	let getdet = req.body;

	if(UserRes.forgotid == getdet.forgotid)
	{

		if(userErr)
		{
			res.json({ "status": false, "Message": "Something went wrong" });
		}

		res.json({ "status": true, "Message": "valid forgotid" });


	}
	else{
	  res.json({ "status": false, "Message": "Invalid URL" });   
  }

});
	 }
  catch (err)
  {
	console.log("forgotidcheck", err)
  }
});

router.post('/restpwdupdate', function(req, res) {
try{
   adminDB.findOne({ role: 'admin' }).exec(function (userErr, UserRes) {
	let getdet = req.body;
	var start = '';
	let pwdencrypt = common.encrypt(getdet.password);
	adminDB.findOneAndUpdate({ role: 'admin' }, { "$set": { forgotid: start,password:pwdencrypt } }, { multi: true }).exec(function (upErr, upRes) {
		if(upErr)
		{
			res.json({ "status": false, "Message": "Something went wrong" });
		}

		res.json({ "status": true, "Message": "Password reset successfully" });

	});

});
   }
  catch (err)
  {
	console.log("forgotidcheck", err)
  }
});


router.post('/gettokendetails', (req, res) => {
  try{
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$or:[{'conaddress': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	}
	else{
	  cnt = {};
	}

	async.parallel({
	  bannerTotalCount:function(cb) {      
		TokenDB.find( cnt ).countDocuments().exec(cb);
	  },
	  bannerData:function(cb) {
		TokenDB.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
	  },
	},function(err,results){
	  if (err) return res.status(500).send(err);
			res.json({
				status: true,
				value: results.bannerData,
				bannerTotalCount:results.bannerTotalCount
			})

	})
  }
  catch(e){
	console.log("getfaqlist",e);
  }  
	// try {
	 
	//     TokenDB.find().sort( { datetime: -1 } ).exec(function (resDataErr, resData) {
	//         if(resDataErr)
	//         {
	//             res.json({ "status": false, "Message": "Something went wrong" });
	//         }

	//         data = resData;
	//         res.json({
	//             status: true,
	//             value: data
	//         })
	//     })
		
	// }
	// catch (e) {
	//     res.json({
	//         status: false,
	//         "Message": "Something went wrong",
	//     })
	// }
})
router.post('/approvetoken', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;
	   

			   TokenDB.findOne({  "_id": mongoose.Types.ObjectId(getid) }).exec(function (TokenErr, TokenRes) {

				   if(TokenErr)
				   {
					res.json({ "status": false, "Message": "Something went wrong" });
					return false;
				}

 var abiget = getJSON("https://api.etherscan.io/api?module=contract&action=getabi&address="+TokenRes.conaddress, function(errorBal,response){
	
	if(response.status != 0)
	{
	  if (!errorBal)
	  {
				var tokendet = {
					currencyName:TokenRes.name,
					curnType:2,
					currencySymbol:TokenRes.symbol,
					image:TokenRes.logo,
					minwithamt:getdet.minimum,
					maxwithamt:getdet.maximum,
					withdrawfee:getdet.fee,
					EstimatedBTC:0,
					EstimatedUSD:0,
					feetype:1,
					status:1,
					decimals:TokenRes.decimal,
					contractAddress:TokenRes.conaddress,
					baseCoin:'ETH',
					abiArray:response.result,
					
				}
				CurrencyDB.create(tokendet, function (err, resData1) {
					if (resData1) {

						var pairget = TokenRes.pairlist;
						var inc = 0;
						var lengthVal = pairget.split(",").length;
						if(lengthVal>0)
						{
							var arr = pairget.split(",").map(function (val) { 


								var arr = val.split("/");

								CurrencyDB.findOne({ currencySymbol: arr[0]}).exec((fromcurErr, fromcurRes) => {
									if (fromcurRes) {

										CurrencyDB.findOne({ currencySymbol: arr[1]}).exec((tocurErr, tocurRes) => {
											if (tocurRes) {

											   var pairdet = {
												marketPrice:0,
												status:1,
												minTrade:0,
												makerFee:0,
												takerFee:0,
												fee:0,
												feeType:1,
												calculate_market_price:0,
												percentage:0,
												percentage_amount:0,
												option:1,
												price:0,
												usdprice:0,
												change: 0,
												high: 0,
												low: 0,
												fromCurrency: fromcurRes._id,
												toCurrency: tocurRes._id,
												
											}

											PairDB.create(pairdet, function (err, resData3) {
											   inc +=1;
											   if (inc==length) {
												common.updateCurrencyPair();
											   }
										   });

										}
										else
										{
											inc +=1;
											if (inc==length) {
												common.updateCurrencyPair();
											}
										}
									});
									}
									else
									{
										inc +=1;
										if (inc==length) {
											common.updateCurrencyPair();
										}
									}
								});
							});
						}
						else
						{
						   common.updateCurrencyPair();
						}
 TokenDB.find().sort( { datetime: -1 } ).exec(function (TokensErr, TokensRes) {

	 TokenDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}
			else{
						res.json({ "status": true, "Message": "Token approved successfully","TokenRes":TokensRes });
					}
				});
					})
					}


				});
			}
			else{
				 res.json({
			status: false,
			"Message": "Error occured on abi array",
		});
				  return false;
			}
		}
		else{
		   res.json({
			status: false,
			"Message": "Invalid contract address",
		}) 
		 return false; 
		}
		});

			});
		 

	   
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});
router.post('/rejecttoken', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;
		
		TokenDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {
 TokenDB.find().exec(function (TokenErr, TokenRes) {
			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}
			else{
				res.json({ "status": true, "Message": "Token rejected successfully","TokenRes":TokenRes });
			}

		});
		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});
router.post('/profit', function(req, res) {
 try{
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$or:[{'useraddress': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	}
	else{
	  cnt = {};
	}

	async.parallel({
	  bannerTotalCount:function(cb) {      
		profitDB.aggregate([
		  {
			$lookup:
			{
			  from: 'currency',
			  localField: 'currencyid',
			  foreignField: '_id',
			  as: 'currencydet'
			},
		  },
		  {
			$project: {
			  "datetime": "$date",
			  "fees": "$fees",
			  "useraddress": "$userid",
			  "type": "$type",
			  "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
			}
		  },
		  { $match: cnt }           
		]).exec(cb);
	  },
	  bannerData:function(cb) {
		profitDB.aggregate([
		  {
			$lookup:
			{
			  from: 'currency',
			  localField: 'currencyid',
			  foreignField: '_id',
			  as: 'currencydet'
			},
		  },
		  {
			$project: {
			  "datetime": "$date",
			  "fees": "$fees",
			  "useraddress": "$userid",
			  "type": "$type",
			  "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
			}
		  },
		  { $match: cnt },
		  { "$sort": srt },
		  { "$skip" : skip },
		  { "$limit" : limit }             
		]).exec(cb);        
	  }
	},function(err,results){
		res.json({
			status: true,
			Message: results.bannerData,
			count: results.bannerTotalCount.length
		})
	})
  }
  catch (e) {
	res.json({
	  status: false,
	  Message: "Something went wrong",
	})
  }
});

router.post('/Adminwithhistory', (req, res) => {
  try{
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$or:[{'currencySymbol': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	}
	else{
	  cnt = {};
	}

	async.parallel({
	  bannerTotalCount:function(cb) {      
		AdminWithdrawDB.aggregate([
		  {
			$lookup:
			{
			  from: 'currency',
			  localField: 'currency',
			  foreignField: 'currencySymbol',
			  as: 'currencydet'
			},
		  },
		  {
			$project: {
			  "datetime": "$createddate",
			  "useraddress": "$to_address",
			  "withamount": "$depamt",
			  "txid": "$txnid",
			 
			  "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
			}
		  },
		  { $match: cnt },
		  ]).exec(cb);
	  },
	  bannerData:function(cb) {
		AdminWithdrawDB.aggregate([
		  {
			$lookup:
			{
			  from: 'currency',
			  localField: 'currency',
			  foreignField: 'currencySymbol',
			  as: 'currencydet'
			},
		  },
		  {
			$project: {
			  "datetime": "$createddate",
			  "useraddress": "$to_address",
			  "withamount": "$depamt",
			  "txid": "$txnid",
			 
			  "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
			}
		  },
		  { $match: cnt },
		  { "$sort": srt },
		  { "$skip" : skip },
		  { "$limit" : limit },         
		  ]).exec(cb);        
	  }
	},function(err,results){
		var pairsData = [];
		pairsData = results.bannerData
		res.json({status: true,value: pairsData,bannerTotalCount:results.bannerTotalCount.length})
	})
  }
  catch(e){
	console.log("Adminwithhistory",e);
  }
});

// router.get('/Adminwithhistory1', function(req, res) {
//     try {
  
  
//         AdminWithdrawDB.aggregate([
//             { $sort : { datetime : -1 } },
//             {
//               $lookup:
//               {
//                 from: 'currency',
//                 localField: 'withcurrency',
//                 foreignField: '_id',
//                 as: 'currencydet'
//               },
//             },
//             {
//               $project: {
//                 "datetime": "$datetime",
//                 "useraddress": "$address",
//                 "withamount": "$withamount",
//                 "txid": "$txid",
			   
//                 "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
//               }
//             },
  
		   
		   
//           ]).exec(function (withErr, withRes) {
  
	   
			
//   // TokenDB
//   // WithdrawDB
//   // depositDB
//   if(withErr)
//   {
//    res.json({
//     status: true,
//     "Message": "Error occured while getting history deatils"
//   })
//   }
//   else{
//   var arrayval = {};
  
//   arrayval.withhis = withRes;
  
  
//    res.json({
//     status: true,
//     "Message": arrayval,
//   })
	
//   }
 
//   })
  
  
//     }
//     catch (e) {
//       res.json({
//         status: false,
//         "Message": "Something went wrong",
//       })
//     }
//   });


  router.post('/history_deposit', function(req, res) {
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
		cnt = {$or:[{'userId': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	  }
	  else{
		cnt = {};
	  }      
	async.parallel({
	  bannerTotalCount:function(cb) {  
	  depositDB.aggregate([
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
			"createddate": "$createddate",
			"depamt": "$depamt",
			"userId": "$userId",
			"depto": "$depto",
			"depstatus": "$depstatus",
			"txnid": "$txnid",
			"currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
		  }
		},
		{ $match : cnt},
	  ]).exec(cb);          
		// pairsDB.find( cnt ).countDocuments().exec(cb);
	  },
	  bannerData:function(cb) {
		depositDB.aggregate([
		  {
			$lookup:
			{
			  from: 'currency',
			  localField: 'currency',
			  foreignField: '_id',
			  as: 'currencydet1'
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
			  "currencySymbol1": { $arrayElemAt: ["$currencydet1.currencySymbol", 0] },
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

  router.post('/history_withdraw', function(req, res) {
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
		cnt = {$or:[{'useraddress': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	  }
	  else{
		cnt = {};
	  }      
	async.parallel({
	  bannerTotalCount:function(cb) {  
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
			"withfee": "$withfee",
			"receiveamount":"$receiveamount",
			"useraddress": "$useraddress",
			"status": "$status",
			"txid": "$txid",
			"currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
		  }
		},
		{ $match : cnt},
	   ]).exec(cb);          
	  },
	  bannerData:function(cb) {
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
			  "withfee": "$withfee",
			  "receiveamount":"$receiveamount",
			  "useraddress": "$useraddress",
			  "status": "$status",
			  "txid": "$txid",
			  "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
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
			arrayval.withhis = results.bannerData;
			arrayval.count = results.bannerTotalCount.length;
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


router.get('/history_old', function(req, res) {
  try {


		 WithdrawDB.aggregate([
		  { $sort : { datetime : -1 } },
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
			  "withfee": "$withfee",
			  "useraddress": "$useraddress",
			  "status": "$status",
			  "txid": "$txid",
			  "currencySymbol": { $arrayElemAt: ["$currencydet.currencySymbol", 0] },
			}
		  },

		 
		 
		]).exec(function (withErr, withRes) {

		 depositDB.aggregate([
		  { $sort : { createddate : -1 } },
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

		]).exec(function (depErr, depRes) {
		  
// TokenDB
// WithdrawDB
// depositDB
if(withErr || depErr)
{
 res.json({
  status: true,
  "Message": "Error occured while getting history deatils"
})
}
else{
var arrayval = {};

arrayval.withhis = withRes;
arrayval.dephis = depRes;

 res.json({
  status: true,
  "Message": arrayval,
})
  
}
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
router.get('/getallcurrency', (req, res) => {
	try {
		CurrencyDB.find().exec(function (err, resData) {
			
			data = resData;
			res.json({
				status: true,
				value: data
			})
		})
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})
router.post('/currencyupdate', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;
	   
		CurrencyDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}
			else{
				common.updateCurrencyPair();
 CurrencyDB.find().exec(function (CurnErr, CurnRes) {

					   res.json({ "status": true, "Message": "Currency details updated successfully","CurnRes":CurnRes });

				   })
				  
		   }

	   });
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});
router.get('/getallpairs', (req, res) => {
	try {

	   let pairsDB = mongoose.model('pairs');
			 
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
			   res.json({
					status: true,
					value: pairsData
				})
			}
			else
			{
				 res.json({
			status: false,
			"Message": "No pair found",
		})
			}
		  });
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Something went wrong",
		})
	}
})
router.post('/pairupdate', function(req, res) {
	let getdet = req.body;

	try {
		const getid = getdet.id;
		delete getdet.id;
	   
		PairDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

			if(upErr)
			{
				res.json({ "status": false, "Message": "Something went wrong" });
			}
			else{
common.updateCurrencyPair();
  PairDB.aggregate([
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
		 
		  ]).exec(function (err, PairRes) {

					   res.json({ "status": true, "Message": "Pair details updated successfully","PairRes":PairRes });

				   })
				  
		   }

	   });
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});

router.post('/changests',(req,res)=>{
	userDB.updateOne({'_id':req.body._id},{$set:{"status":req.body.status}},function(err,resdata){
		res.json(resdata)
	})
})

router.post('/getusr',(req,res)=>{
	userDB.findOne({'address':req.body.address},{'status':1},function(err,resdata){
		res.json(resdata)
	})
})

router.post('/getallusers', (req, res) => {
  try{
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$and:[{'regstatus':1},{$or:[{'email': { $regex: '.*' + search + '.*',$options: 'i' }}]}]}
	}
	else{
	  cnt = {'regstatus':1};
	}

	async.parallel({
	  bannerTotalCount:function(cb) {      
		userDB.find( cnt ).countDocuments().exec(cb);
	  },
	  bannerData:function(cb) {
		userDB.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
	  },
	},function(err,results){
	  if (err) return res.status(500).send(err);
	  res.json({
		status:true,
		data:results.bannerData,
		bannerTotalCount:results.bannerTotalCount
	  })
	})
  }
  catch(e){
	console.log("getallusers",e);
  }
});

var bitcoin_rpc = require('node-bitcoin-rpc');
var admindeposit = require('../../model/adminDeposit');
var adminwithdraw = require('../../model/adminwithdraw');

router.post('/btcwithdraw', function(req, res) {
	if(req.body.type == 'user'){
	  // let CurrencyDB  = mongoose.model('currency');
	  try{
		var getdet = req.body;
		if(getdet)
		{
		  if(getdet.withamount != "" && getdet.toAddress != "")
		  {
					bitcoin_rpc.init(config.bitcoin_rpc.host, config.bitcoin_rpc.port, config.bitcoin_rpc.user, config.bitcoin_rpc.password);
					bitcoin_rpc.call('validateaddress', [getdet.toAddress], function (err, address) {
						console.log(address,'aaddrrrr')
						if (address.result.isvalid == true) {
					if(getdet.withamount > 0)
					{
					  CurrencyDB.findOne({ 'currencySymbol' : 'BTC'}).exec((curenerr, curncydet) => {
						if (curncydet) {
						  var minamt =  curncydet.minwithamt;
						  var maxamt =  curncydet.maxwithamt;
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
							  common.getbalance(getdet.useraddress.toLowerCase(), curncydet._id, function (balances) {
								if(balances) {
								  var balance = balances.amount;
								  if(balance >= getdet.withamount)
								  {
									  var response = getdet.toAddress.toLowerCase();
									  var response1 = getdet.useraddress.toLowerCase();
										var transferAmount = +totalamount 
										bitcoin_rpc.call('walletpassphrase', ["Suren@123",120], function (err1, value) {
										if(!err1){
									  bitcoin_rpc.call('sendtoaddress', [getdet.toAddress, +transferAmount.toFixed(8)], function (berr, btsucc) {
										  if(!berr){
											getdet.receiveamount = Number(totalamount);
											getdet.withfee = Number(feescal);
											getdet.status = 'Completed';
										  getdet.withcurrency = curncydet._id;
											getdet.txid = btsucc.result;
											WithdrawDB.create(getdet, function (err, resData) {
											  var balupdate = balance - getdet.withamount;
											  const addData = {
							                    userId: getdet.useraddress,
							                    notification_type:'withdraw',
							                    status:0,
							                    amount:getdet.withamount
							                  }
							                  notificationDB.create(addData, function(err,notificationAdded){
							                    console.log(err);
							                    console.log(notificationAdded);
							                  });
											  common.updateUserBalance(getdet.useraddress.toLowerCase(), getdet.withcurrency,balupdate,balance,resData._id,'withdraw', function (balance) {
												let sellOrderProfitToAdmin ={
												  type        : 'Withdraw',
												  userid      : getdet.useraddress.toLowerCase(),
												  currencyid  : getdet.withcurrency,
												  fees        : Number(feescal),
												  fullfees    : Number(feescal),
												  orderid     : resData._id,
												}
												let profitDb    = mongoose.model('profit');
												profitDb.create(sellOrderProfitToAdmin,function(profitErr,profitRes){
												  res.json({status: true,Message: 'Withdraw request send successfully',txid:btsucc.result});
												});  
											  });
											});
										  }
										  else{
											res.json({status: false,Message: 'Transaction falied.Please try again.'});
										  }
									  })
																}	
																else{
																	res.json({status: false,Message: 'Transaction falied.Please try again.'});
																}
															});

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
						else {
							res.json({status: false,Message: 'Enter a valid BTC address'});
						}
					});
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
	}
	else if(req.body.type == 'admin'){
	  // let CurrencyDB  = mongoose.model('currency');
	  try{
		var getdet = req.body;
		if(getdet)
		{
		  if(getdet.withamount != "" && getdet.toAddress != "")
		  {
					bitcoin_rpc.init(config.bitcoin_rpc.host, config.bitcoin_rpc.port, config.bitcoin_rpc.user, config.bitcoin_rpc.password);
					bitcoin_rpc.call('validateaddress', [getdet.toAddress], function (err, address) {
						if (address.result.isvalid == true) {
					if(getdet.withamount > 0)
					{
					  CurrencyDB.findOne({ 'currencySymbol' : 'BTC'}).exec((curenerr, curncydet) => {
						if (curncydet) {
					  var totalamount = getdet.withamount;
					  common.getbalance(getdet.useraddress.toLowerCase(), curncydet._id, function (balances) {
						if(balances) {
						  var balance = balances.amount;
						  if(balance > getdet.withamount)
						  {
						  var response = getdet.toAddress.toLowerCase();
						  var response1 = getdet.useraddress.toLowerCase();
						  var transferAmount = +totalamount 
							bitcoin_rpc.call('walletpassphrase', ["Suren@123",120], function (err1, value) {
							if(!err1){
							  bitcoin_rpc.call('sendtoaddress', [getdet.toAddress, +transferAmount.toFixed(8)], function (berr, btsucc) {
								  if(!berr){
												var newwithdraw = {
												  currency: "BTC",
												  depamt: totalamount,
												  from_address: getdet.useraddress,
												  to_address: getdet.toAddress,
												  txnid: btsucc.result,
												  status: "completed"
												}
												adminwithdraw.create(newwithdraw, function (insErr, insData) {
									  var balupdate = balance - getdet.withamount;
									  common.updateUserBalance(getdet.useraddress.toLowerCase(), curncydet._id,balupdate,balance,insData._id,'withdraw', function (balance) {
										res.json({status:true,Message:'Transaction completed successfully'})
									  });
												});
								  }
								  else{
									res.json({status: false,Message: 'Transaction falied.Please try again.'});
								  }
							  })
														}	
														else{
															res.json({status: false,Message: 'Transaction Falied.Please try again.'});
														}
													});

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
						  res.json({status: false,Message: 'Invalid currency request'});
						}
					  });
					}
					else{
					  res.json({status: false,Message: 'Enter valid amount'});
					}
						}
						else {
							res.json({status: false,Message: 'Enter a valid BTC address'});
						}
					});
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
	}
});

router.post('/getadminwithdraw', function(req, res) {
 try{
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$or:[{'txnid': { $regex: '.*' + search + '.*',$options: 'i' }},{'to_address': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	}
	else{
	  cnt = {};
	}
		async.parallel({
			bannerTotalCount:function(cb) {      
			  adminwithdraw.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  adminwithdraw.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
		},
	},function(err,results){
		res.json({
			status: true,
			Message: results.bannerData,
			count: results.bannerTotalCount
		})
	})
  }
  catch (e) {
	res.json({
	  status: false,
	  Message: "Something went wrong",
	})
  }
});

router.post('/getadmindeposit', function(req, res) {
 try{
	var skip  = req.body.page.pageNumber * req.body.page.size;
	var limit = req.body.page.size;
	let prop1 = req.body.sorting.prop;
	var dir   = req.body.sorting['dir'];
	var srt   = {}
	srt[prop1] = dir == 'desc' ? -1 : 1;

	var cnt;
	var search = req.body.search;
	if(req.body.search != ""){
	  cnt = {$or:[{'txnid': { $regex: '.*' + search + '.*',$options: 'i' }},{'from_address': { $regex: '.*' + search + '.*',$options: 'i' }}]};
	}
	else{
	  cnt = {};
	}
		async.parallel({
			bannerTotalCount:function(cb) {      
			  admindeposit.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  admindeposit.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
		},
	},function(err,results){
		res.json({
			status: true,
			Message: results.bannerData,
			count: results.bannerTotalCount
		})
	})
  }
  catch (e) {
	res.json({
	  status: false,
	  Message: "Something went wrong",
	})
  }
});

router.post('/getpair',function(req,res){
	PairDB.findOne({$or:[{"fromCurrency":req.body.id},{"toCurrency":req.body.id}]}).exec(function(err,resp){
		res.json(resp)
	})
})
router.post('/walletupdate', function (req, res) {
	try {
			const Web3 = require('web3');
			var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/682d21aed8204bfe8370b50a93aed124"));
			let getdet = req.body;
			let privatekey = getdet.privatekey;
		
			let settingDB = mongoose.model('Sitekeys');
			settingDB.findOne().exec((adminerr, admindet) => {
					if (admindet) {
							var adminkeyaddress = admindet.ProfitAddress;

								//content - old
								//content 2 -new
									if (admindet.Admincode ==(getdet.password)) {
											res.json({ "status": false, "Message": "Old password and new password should not be same" }); return false;
									}
									var content = (admindet.content1);
									var newContent = (getdet.password + content);
									try {
											var account = web3.eth.accounts.privateKeyToAccount(privatekey);
									}
									catch (e) {
										
											res.json({ status: false, Message: 'Invalid Private Key' }); return;
									}
								//58d
								console.log(account.address.toLowerCase(), '==', adminkeyaddress.toLowerCase())
									if (account.address.toLowerCase() == adminkeyaddress.toLowerCase()) {
											var contractAddress = admindet.adminAddress;
											common.contractChangeKey(contractAddress, account.address, privatekey.substring(2), getdet.password, (receipt) => {
													if (receipt) {
														settingDB.findOneAndUpdate({}, { "$set": { content1: content, Admincode: newContent } }, { multi: true }).exec(function (upErr, upRes) {
																	if (upErr) {
																			res.json({ "status": false, "Message": "Something went wrong" });
																	}
																	else {
																			res.json({ "status": true, "Message": "Byte code updated successfully" });
																	}
															});
													}
													else {
															res.json({ "status": false, "Message": "Something went wrong" });
													}
											});
									}
									else {
											res.json({ status: false, Message: 'Invalid Private Key' }); return;
									}
						
					}
			});
	}
	catch (e) {
			console.log('changekey error', e);
			res.json({
					status: false,
					"Message": "Error occured",
			})
	}
});
module.exports = router;