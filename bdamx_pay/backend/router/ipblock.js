const express      = require('express')
const mongoose       = require('mongoose');
const router       = express.Router();
const faq = require('../model/ipblock');
const ipblock_table = require('../model/ipblock');
const async          = require('async');
const common = require('../helpers/common');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/getiplist', (req, res) => {
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
		console.log("getiplist",e);
	}
});


router.post('/ip_add',async (req, res) => {
try{
	let Indata = req.body
	let get_ip = await ipblock_table.findOne({user_ip:Indata.blocker},{user_ip:1,status:1,loginattempt:1})
	console.log(get_ip)
	if(get_ip){
		res.send({status:false,Msg:"Ip already exits"})
	}else{
		let insdata  = {
			user_ip : Indata.blocker,
			status: 1
		}
		ipblock_table.create(insdata, function (err,Insert_ip) {
				res.json({ status : true,Msg:"Ip blocked successfully"});
		});	
	}


}catch(e){
	res.json({ status : false,Msg:e});
}
});

router.post('/getfaq', (req, res) => {
	try{
		faq.find({categoryName:req.body.category}).exec(function(err,news){
			res.json({status:true,data:news})
		})
	}
	catch(e){
		console.log('getfaq',e)
	}
});

router.post('/bankupload',async (req, res) => {
	try{
		var values = req.body;
		let getalready = await faq.findOne({currencysymbol:values.currencysymbol,bank:values.bank})
		if(getalready){
			res.json({ status : false,Msg: "Bank already exits" });
		}else{
			faq.create(values, function (err, resData) {
				res.json({ status : true,Msg:"Bank added successfully",data: resData });
			});	
		}
	}
	catch(e){
		console.log("bankupload",e);
	}
})


router.post('/getcurrencybank',async (req, res) => {
	
});



router.post('/banklist',async (req, res) => {
	var values = req.body;
	let getalready = await faq.findOne({ "currencysymbol": { $ne: values.currencysymbol }, "bank": { $ne: values.bank }})
	if(getalready){
		res.json({ status : false,Msg: "Bank already exits" });
	}else{
		faq.updateOne({ "_id": req.body._id },{ $set:{
		"currencysymbol":req.body.currencysymbol,
		"bank": req.body.bank,
		"status":0,
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
		faq.findOneAndUpdate({ "_id": req.body._id },{ "$set": { "status": req.body.status,
		"modifieddate": new Date()}},{multi: true}).exec(function(err,resData){
			res.json({ status:true, data:resData})
		})
	}
	catch(e){
		console.log("faqstatus",e);
	}
})

router.post('/deleteinfo', (req, res) => {

	faq.findOneAndRemove({"_id": req.body._id}).exec(function(err,resData){
		try{
			if (err) return res.status(500).send(err);
			apiresponse.data    = [];
			apiresponse.data    = resData;
			apiresponse.message = "Admin Bank Details deleted successfully";
			res.json(apiresponse);
		}
		catch (err){
			console.info("deleteinfo", err)
		}
	});
});


module.exports = router;