const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var bankDetails = require('../model/bankDetails');
var async          = require('async');
let common = require('../helpers/common');
const adminBank = require('../model/adminbankinfo');


let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/getbanklist', (req, res) => {
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
			  bankDetails.find( cnt ).count().exec(cb);
			},
			bannerData:function(cb) {
			  bankDetails.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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
		console.log("getbanklist",e);
	}
});

router.post('/addbank', async function(req, res){
	try{
		var bankExists = await bankDetails.findOne({country:req.body.country,bank:req.body.bank,branch:req.body.branch});
		if(!bankExists){
			var addbank = await bankDetails.create(req.body);
			res.json({status:true,Msg:'Added Successfully!'})
		}else{
			res.json({status:false,Msg:'Bank already Exists'});
		}
	}
	catch(e){
		console.log('getfaq',e)
	}
});


router.post('/getbanks', async function(req, res) {
	try{
		var countrybasedBank = await bankDetails.find({country:req.body.country})
			res.json({status:true,data:countrybasedBank});
	}
	catch(e){
		console.log('getfaq',e)
	}
});

router.post('/getbranch', async function(req, res) {
	try{
		var BranchDetails = await bankDetails.find({country:req.body.country,bank:req.body.bank})
			res.json({status:true,data:BranchDetails});
	}
	catch(e){
		console.log('getfaq',e)
	}
});

router.post('/getdetail', async function(req, res) {
	try{
		var BranchDetails = await bankDetails.findOne({country:req.body.country,bank:req.body.bank,branch:req.body.branch})
			res.json({status:true,data:BranchDetails});
	}
	catch(e){
		console.log('getfaq',e)
	}
});

router.post('/getadminbankinfo', async function(req, res){
	try{
		var data = req.body;
		var BranchDetails = await adminBank.find({country:data.country,bank:data.bank,branch:data.branch}).lean()
		console.log(BranchDetails,'ddddd')
			res.json({status:true,data:BranchDetails});
	}
	catch(e){
		console.log('getfaq',e)
	}
})


router.post('/updatebanklist',async (req, res) => {
	var values = req.body;
	let getalready = await bankDetails.findOne({country:values.country,bank:values.bank,branch:values.branch})
	if(getalready){
		res.json({ status : false,Msg: "Bank already exists" });
	}else{
		bankDetails.updateOne({ "_id": req.body._id },{ $set:values}).exec(function(err, resUpdate){
		try
		{
			if(err) {
				res.status(500).send(err);
			} 
			else {
				bankDetails.find({ "_id": req.body._id }).exec(function(err,resData){
					if (err) return res.status(500).send(err);
					apiresponse.data = [];
					apiresponse.data = resData;
					apiresponse.message = "Bank Detail  Updated Successfully";
					res.json(apiresponse);
				});
			}
		}
		catch (err){
			console.info("bankdetail", err)
		}
	});	
	}
	
});

router.post('/detailstatus', (req,res) => {
	try{
		bankDetails.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "status": req.body.status,
		"datetime": new Date()}},{multi: true}).exec(function(err,resData){
			res.json({ status:true, data:resData})
		})
	}
	catch(e){
		console.log("faqstatus",e);
	}
})

router.post('/deleteinfo', (req, res) => {

	bankDetails.findOneAndRemove({"_id": req.body._id}).exec(function(err,resData){
		try{
			if (err) return res.status(500).send(err);
			apiresponse.data    = [];
			apiresponse.data    = resData;
			apiresponse.message = "Bank Details deleted successfully";
			res.json(apiresponse);
		}
		catch (err){
			console.info("deleteinfo", err)
		}
	});
});


module.exports = router;