const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var faq = require('../model/faq');
var async          = require('async');
let common = require('../helpers/common');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/getfaqlist', (req, res) => {
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
			cnt = {$or:[{'question': { $regex: '.*' + search + '.*',$options: 'i' }}]};
		}
		else{
			cnt = {};
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  faq.find( cnt ).count().exec(cb);
			},
			bannerData:function(cb) {
			  faq.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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

router.get('/getfaq', (req, res) => {
	try{
		faq.find({"status":0},{'question':1,'answer':1}).sort({_id:-1}).exec(function(err,news){
			res.json({status:true,data:news})
		})
	}
	catch(e){
		console.log('getfaq',e)
	}
});

router.post('/faqupload',(req, res) => {
	try{
		var values = req.body;

		faq.create(values, function (err, resData) {
		   res.json({ status : true,data: resData });
	  });
	}
	catch(e){
		console.log("faqupload",e);
	}
})

router.post('/faqlist', (req, res) => {
	faq.updateOne({ "_id": req.body._id },{ $set:{
		"question": req.body.question,
		"answer": req.body.answer,
		"modifieddate": new Date()
		}}).exec(function(err, resUpdate){
		try
		{
			if(err) {
				res.status(500).send(err);
			} 
			else {
				faq.find({ "_id": req.body._id }).exec(function(err,resData){
					if (err) return res.status(500).send(err);
					apiresponse.data = [];
					apiresponse.data = resData;
					apiresponse.message = "FAq  Updated Successfully";
					res.json(apiresponse);
				});
			}
		}
		catch (err){
			console.info("faq", err)
		}
	});
});

router.post('/faqstatus', (req,res) => {
	try{
		faq.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "status": req.body.status,
		"modifieddate": new Date()}},{multi: true}).exec(function(err,resData){
			res.json({ status:true, data:resData})
		})
	}
	catch(e){
		console.log("faqstatus",e);
	}
})

router.post('/deletefaq', (req, res) => {

	faq.findOneAndRemove({"_id": req.body._id}).exec(function(err,resData){
		try{
			if (err) return res.status(500).send(err);
			apiresponse.data    = [];
			apiresponse.data    = resData;
			apiresponse.message = "Faq has been  deleted successfully";
			res.json(apiresponse);
		}
		catch (err){
			console.info("deletefaq", err)
		}
	});
});


module.exports = router;