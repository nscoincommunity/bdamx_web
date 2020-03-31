const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var learnmore_table = mongoose.model('learnmore');
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
			cnt = {$or:[{'title': { $regex: '.*' + search + '.*',$options: 'i' }}]};
		}
		else{
			cnt = {};
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  learnmore_table.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  learnmore_table.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
	   	},
		},function(err,results){
		console.log(results);
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


router.get('/getfaqlistcms', (req, res) => {
	try{
		async.parallel({
			bannerData:function(cb) {
			  learnmore_table.find().exec(cb);
	   	},
		},function(err,results){
		console.log(results);
		  if (err) return res.status(500).send(err);
		  apiresponse.data     = [];
		  apiresponse.status   = true;
		  apiresponse.data     = results.bannerData;
		  apiresponse.message  = "";
		  res.json(apiresponse);

		})
	}
	catch(e){
		console.log("getfaqlistcms",e);
	}
});



router.get('/getnews', (req, res) => {
	try {
			common.redisConfig('learnmore', '', (resData) => {
				var resp=[];
				for(var i=0;i<resData.length;i++){
					if(resData[i].status == 0){
						var datas={
							title:resData[i].title,
							description:resData[i].description,
							image:resData[i].image,
							content:resData[i].content,
							status:resData[i].status,
							_id:resData[i]._id,
							createddate:resData[i].createddate,
							modifieddate:resData[i].modifieddate
						}
						resp.push(datas)
					}
				}
				res.json({status:true,data:resp})				
		 })
	}
	catch (e) {
			res.json({
					status: false,
					"Message": "Something went wrong",
			})
	}
})

router.get('/getnewspage', (req, res) => {
	try{
		learnmore_table.find({"status":0},{'title':1,"description":1,"modifieddate":1,"content":1}).sort({_id:-1}).exec(function(err,news){
			res.json({status:true,data:news})
		})
	}
	catch(e){
		console.log('getnewspage',e)
	}
});

router.post('/faqupload',(req, res) => {
	try{
		var values = req.body;
		learnmore_table.create(values, function (err, resData) {
		   res.json({ status : true,data: resData });
	  });
	}
	catch(e){
		console.log("faqupload",e);
	}
})

router.post('/updateimage', (req, res) => {
	try{
		db.updateOne({},{ $set:{"image":req.body.image}}).exec(function(err, resUpdate){
				common.SetredisConfig('learnmore', '', (resData) => {
					if(err){
						res.json({ "status": false});
					}
					else{
						res.json({ "status": true});
					}
				});	
		});
	}
	catch(e){
		console.log('updateimage',e)
	}
});

router.post('/updateimage_nw', (req, res) => {
  learnmore_table.updateOne({ "_id": req.body._id },{$set:{
    "image": req.body.image,
    "modified_date": new Date()
  }}).exec(function(err, resUpdate){
      try
      {
        common.SetredisConfig('learnmore', '', (resData) => {
         if(err) {
             res.status(500).send(err);
         } else {
             res.json({success:true});
         }
        });           
      }
      catch (err)
      {
         console.info("updateimage_nw", err)
      }
    });
});

router.post('/faqlist', (req, res) => {
	learnmore_table.updateOne({ "_id": req.body._id },{ $set:{
		"title": req.body.title,
		"description": req.body.description,
		"content": req.body.content,
		"modifieddate": new Date()
		}}).exec(function(err, resUpdate){
		try
		{
			common.SetredisConfig('learnmore', '', (resData) => {
				if(err){
					res.json({ "status": false});
				}
				else{
					learnmore_table.find({ "_id": req.body._id }).exec(function(err,resData){
						if (err) return res.status(500).send(err);
						apiresponse.data = [];
						apiresponse.data = resData;
						apiresponse.message = "Feature  Updated Successfully";
						res.json(apiresponse);
					});
				}
			});				
		}
		catch (err){
			console.info("faqlist", err)
		}
	});
});

router.post('/faqstatus', (req,res) => {
	try{
		learnmore_table.updateOne({ "_id": req.body._id },{ "$set": { "status": req.body.status,
		"modifieddate": new Date()}},{multi: true}).exec(function(err,resData){
			common.SetredisConfig('learnmore', '', (resData) => {
				if(err){
					res.json({ "status": false});
				}
				else{
					learnmore_table.find({ "_id": req.body._id }).exec(function(err,resData){
						res.json({ status:true, data:resData})
					});
				}
			});				
		})
	}
	catch(e){
		console.log("faqstatus",e);
	}
})

router.post('/deletefaq', (req, res) => {

	learnmore_table.findOneAndRemove({"_id": req.body._id}).exec(function(err,resData){
		try{
			common.SetredisConfig('learnmore', '', (resData) => {
				if(err){
					res.json({ "status": false});
				}
				else{
					if (err) return res.status(500).send(err);
					apiresponse.data    = [];
					apiresponse.data    = resData;
					apiresponse.message = "Feature has been  deleted successfully";
					res.json(apiresponse);
				}
			});				
		}
		catch (err){
			console.info("deletebanner", err)
		}
	});
});


module.exports = router;