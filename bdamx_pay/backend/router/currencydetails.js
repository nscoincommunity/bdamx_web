const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
let CurrencyDB  = mongoose.model('currency');
var async          = require('async');
var cloudinary = require('cloudinary');
var multer       =   require('multer');
var config = require('../Nodedetails/config');
var common = require('../helpers/common');
var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

cloudinary.config({
  cloud_name: config.cloudinaryData.cloud_name,
  api_key: config.cloudinaryData.api_key,
  api_secret: config.cloudinaryData.api_secret
});

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

router.post("/uploadPhoto",upload.array("uploads[]", 12), function (req, res) {
	try{
		if(req.files.length > 0){
			cloudinary.uploader.upload(req.files[0].path, function(result) {
				res.json({"status": true,"result":result});
			});
		}
		else{
			res.json({"status": false});
		}
	}
	catch(e){
		console.log("uploadPhoto",e);
	}
});


router.post('/getallcurrency', (req, res) => {
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
			cnt = {$or:[{'currencyName': { $regex: '.*' + search + '.*',$options: 'i' }}]};
		}
		else{
			cnt = {};
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  CurrencyDB.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  CurrencyDB.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
	   	},
		},function(err,results){
		  if (err) return res.status(500).send(err);
		  apiresponse.data     = [];
		  apiresponse.status   = true;
		  apiresponse.data     = results.bannerData;
		  apiresponse.bannerTotalCount = results.bannerTotalCount;
		  apiresponse.message  = "";
		  res.json(apiresponse);

		})
	}
	catch(e){
		console.log("getfaqlist",e);
	}
});


router.post('/update_currency', (req, res) => {
	CurrencyDB.updateOne({ "_id": req.body._id },{ $set:{
		"minwithamt": req.body.minwithamt,
		"maxwithamt": req.body.maxwithamt,
		"withdrawfee": req.body.withdrawfee,
		"feetype": req.body.feetype,
		"image":req.body.image,
		"coinImage":req.body.coinImage
		}}).exec(function(err, resUpdate){
		try
		{
			if(err) {
				res.status(500).send(err);
			} 
			else {
				common.updateCurrencyPair();
				CurrencyDB.find({ "_id": req.body._id }).exec(function(err,resData){
					if (err) return res.status(500).send(err);
					apiresponse.data = [];
					apiresponse.data = resData;
					apiresponse.message = "currency  Updated Successfully";
					res.json(apiresponse);
				});
			}
		}
		catch (err){
			console.info("faq", err)
		}
	});
});

router.post('/currencystatus', (req,res) => {
	try{
		CurrencyDB.updateOne({ "_id": req.body._id },{ "$set": { "status": req.body.status}}).exec(function(err,resData){
			res.json({ status:true, data:resData})
		})
	}
	catch(e){
		console.log("faqstatus",e);
	}
})


router.post('/updateimage', (req, res) => {
	try{
		CurrencyDB.updateOne({},{ $set:{"image":req.body.image}}).exec(function(err, resUpdate){
				res.json({success:true})
		});
	}
	catch(e){
		console.log('updateimage',e)		
	}
})

router.post('/getCurrency', (req,res)=>{
	try{
		CurrencyDB.find({status:1}).exec(function(err, resData){
				res.json({success:true,data:resData})
		});
	}
	catch(e){
		console.log('updateimage',e)		
	}
})

router.get('/getCurrencydet', (req,res)=>{
	try{
		CurrencyDB.find({ curnType: 2 }).exec(function(err, resData){
				res.json({success:true,data:resData})
		});
	}
	catch(e){
		console.log('updateimage',e)		
	}
})



module.exports = router;