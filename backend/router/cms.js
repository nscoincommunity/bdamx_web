const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var cms = require('../model/cms');
var async          = require('async');
let common = require('../helpers/common');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

router.get('/getcms', (req, res) => {
  try{
  	cms.find({"status":0},{'page_content':1,'image_url':1,'page_name':1},function(err,cms){
  		res.json({status:true,data:cms})
  	})
  }
  catch(e){
    console.log('getcms',e)
  }
});


router.get('/getcms_home', (req, res) => {
  try{
    common.redisConfig('cms', '', (resData) => {
      var resp=[];
      for(var i=0;i<resData.length;i++){
        if(resData[i].page == 'home'){
          var datas={
            page_content:resData[i].page_content,
            image_url:resData[i].image_url,
            page_name:resData[i].page_name
          }
          resp.push(datas)
        }
      }
      res.json({status:true,data:resp})       
   })
  }
  catch(e){
    console.log('getcms_home',e)
  }
});

router.post('/get_cms', (req, res) => {
  try{
    common.redisConfig('cms', '', (resData) => {
      for(var i=0;i<resData.length;i++){
        if(resData[i].page_name == req.body.page_name && resData[i].status == 0){
          var datas={
            page_content:resData[i].page_content,
            page_heading:resData[i].page_heading
          }
          res.json({status:true,data:datas})       
        }
      }
   })
  }
  catch(e){
    console.log('get_cms',e)
  }
});


router.post('/getcmslist', (req, res) => {
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
    cnt = {$or:[{'page_name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
  }
  else{
    cnt = {};
  }

  async.parallel({
    cmscount:function(cb) {      
    cms.find( cnt ).countDocuments().exec(cb);
    },
   bannerData:function(cb) {
     cms.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
       },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.data     = [];
      apiresponse.status   = true;
      apiresponse.data     = results.bannerData;
      apiresponse.cmscount = results.cmscount;
      apiresponse.message  = "";
      res.json(apiresponse);
    
  });
}catch(e){
  console.log("getcmslist",e);
}
});

router.post('/editcms', (req, res) => {
  cms.updateOne({ "_id": req.body._id },{$set:{
    "page_heading": req.body.page_heading,
    "page_content": req.body.page_content,
    "modified_date": new Date()
  }}).exec(function(err, resUpdate){
      try
      {
        common.SetredisConfig('cms', '', (resData) => {
           if(err) {
               res.status(500).send(err);
           } else {
             cms.find({ "_id": req.body._id }).exec(function(err,resData){
               if (err) return res.status(500).send(err);
               apiresponse.data = [];
               apiresponse.data = resData;
               apiresponse.message = "Email Template Updated Successfully";
               res.json(apiresponse);
             });
           }
        });         
      }
      catch (err)
      {
         console.info("editcms", err)
      }
    });
});

router.post('/updateimage', (req, res) => {
  cms.updateOne({ "_id": req.body._id },{$set:{
    "image_url": req.body.image,
    "modified_date": new Date()
  }}).exec(function(err, resUpdate){
      try
      {
        common.SetredisConfig('cms', '', (resData) => {
         if(err) {
             res.status(500).send(err);
         } else {
             res.json({success:true});
         }
        });           
      }
      catch (err)
      {
         console.info("updateimage", err)
      }
    });
});

router.get('/getcms_fee', (req, res) => {
  try{
    common.redisConfig('cms', '', (resData) => {
      var resp=[];
      for(var i=0;i<resData.length;i++){
        if(resData[i].page == 'fee'){
          var datas={
            page_content:resData[i].page_content,
            image_url:resData[i].image_url,
            page_name:resData[i].page_name
          }
          resp.push(datas)
        }
      }
      res.json({status:true,data:resp})       
   })
  }
  catch(e){
    console.log('getcms_fee',e)
  }
});

module.exports = router;