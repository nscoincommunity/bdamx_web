const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var db = require('../model/metacontentdb');
var async          = require('async');
let common = require('../helpers/common');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/getmetalist', (req, res) => {
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
			cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
		}
		else{
			cnt = {};
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  db.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  db.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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
		console.log("getmetalist",e);
	}
});

router.post('/getmeta', (req, res) => {
	try{
    common.redisConfig('metacontent', '', (resData) => {
      var resp=[];
      for(var i=0;i<resData.length;i++){
        if(resData[i].keyword == req.body.keyword){
          var datas={
            title:resData[i].title,
            description:resData[i].description
          }
      		res.json({status:true,data:datas})       		
        }
      }
     })
		// db.findOne({"keyword": req.body.keyword},{title:1,description:1},function(err,news){
		// 	res.json({status:true,data:news})
		// })
	}
	catch(e){
		console.log('getmeta',e)
	}
});


router.post('/updatemeta', (req, res) => {
	db.updateOne({ "_id": req.body._id },{ $set:{
		"title": req.body.title,
		"keyword": req.body.keyword,
		"description": req.body.description,
		"modifieddate": new Date()
		}}).exec(function(err, resUpdate){
		try
		{
			common.SetredisConfig('metacontent', '', (resData) => {
				if(err) {
					res.status(500).send(err);
				} 
				else {
					db.find({ "_id": req.body._id }).exec(function(err,resData){
						if (err) return res.status(500).send(err);
						apiresponse.data = [];
						apiresponse.data = resData;
						apiresponse.message = "metacontent  Updated Successfully";
						res.json(apiresponse);
					});
				}
			});			
		}
		catch (err){
			console.info("updatemeta", err)
		}
	});
});




module.exports = router;