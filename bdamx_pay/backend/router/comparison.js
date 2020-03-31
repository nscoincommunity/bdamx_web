const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var comparison = require('../model/comparison');
var comparisonCategory = require('../model/comparisonCategory');
var comparisontype = require('../model/comparisontype');
var async          = require('async');
let common = require('../helpers/common');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

router.get('/getcmprcategory', (req, res) => {
  try{
  	comparisonCategory.find({},function(err,categoryList){
  		res.json({status:true,data:categoryList})
  	})
  }
  catch(e){
    console.log('getcmprcategory',e);
  }
});

router.post('/getcmprcategoryList', (req, res) => {
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
    // cnt = {$or:[{'page_name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
  }
  else{
    cnt = {};
  }

  async.parallel({
    categoryCount:function(cb) {      
    comparisonCategory.find( cnt ).countDocuments().exec(cb);
    },
   categoryData:function(cb) {
     comparisonCategory.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
       },
    },function(err,resData){
      if (err) return res.status(500).send(err);
      apiresponse.data     = [];
      apiresponse.status   = true;
      apiresponse.data     = resData.categoryData;
      apiresponse.cmscount = resData.categoryCount;
      apiresponse.message  = "";
      res.json(apiresponse);
    
  });
}catch(e){
  console.log("getcomparison",e);
}
});

router.post('/addCategory', (req, res) => {
  try{
    var reqData = req.body
    comparisonCategory.create(reqData,function(err,categoryList){
      res.json({status:true,Msg:'Category Created Successfully'})
    })
  }
  catch(e){
    console.log('addCategory',e);
  }
});

router.post('/categorystatus', (req,res) => {
  try{
    comparisonCategory.updateOne({ "_id": req.body._id },{ "$set": { "status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).exec(function(err,resData){
      common.SetredisConfig('ComparisonCategory', '', (resData) => {
        if(err){
          res.json({ "status": false});
        }
        else{
          comparisonCategory.find({ "_id": req.body._id }).exec(function(err,resData){
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



router.post('/editCategory', (req, res) => {
  console.log(req.body,'bbb')
  comparisonCategory.update({ "_id": req.body._id },{$set:{
    "categoryName": req.body.categoryName
    // "modified_date": new Date()
  }}).exec(function(err, resUpdate){
      try
      {
        common.SetredisConfig('ComparisonCategory', '', (resData) => {
           if(err) {
               res.status(500).send(err);
           } else {
             comparisonCategory.find({ "_id": req.body._id }).exec(function(err,resData){
               if (err) return res.status(500).send(err);
               apiresponse.data = [];
               apiresponse.data = resData;
               apiresponse.message = "Category Updated Successfully";
               res.json(apiresponse);
             });
           }
        });         
      }
      catch (err)
      {
         console.info("editCategory", err)
      }
    });
});

router.post('/deletecategory', (req, res) => {

  comparisonCategory.findOneAndRemove({"_id": req.body._id}).exec(function(err,resData){
    try{
      common.SetredisConfig('ComparisonCategory', '', (resData) => {
        if(err){
          res.json({ "status": false});
        }
        else{
          if (err) return res.status(500).send(err);
          apiresponse.data    = [];
          apiresponse.data    = resData;
          apiresponse.message = "Category has been  deleted successfully";
          res.json(apiresponse);
        }
      });       
    }
    catch (err){
      console.info("deletebanner", err)
    }
  });
});


// comparison type

router.get('/getcmprtype', (req, res) => {
  try{
    comparisontype.find({},function(err,typeList){
      res.json({status:true,data:typeList})
    })
  }
  catch(e){
    console.log('getcmprtype',e);
  }
});

router.post('/getcmprtypeList', (req, res) => {
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
    // cnt = {$or:[{'page_name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
  }
  else{
    cnt = {};
  }

  async.parallel({
    categoryCount:function(cb) {      
    comparisontype.find( cnt ).countDocuments().exec(cb);
    },
   categoryData:function(cb) {
     comparisontype.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
       },
    },function(err,resData){
      if (err) return res.status(500).send(err);
      apiresponse.data     = [];
      apiresponse.status   = true;
      apiresponse.data     = resData.categoryData;
      apiresponse.cmscount = resData.categoryCount;
      apiresponse.message  = "";
      res.json(apiresponse);
    
  });
}catch(e){
  console.log("getcmprtypeList",e);
}
});

router.post('/addType', (req, res) => {
  try{
    var reqData = req.body
    comparisontype.create(reqData,function(err,categoryList){
      res.json({status:true,Msg:'Type Created Successfully'})
    })
  }
  catch(e){
    console.log('addType',e);
  }
});

router.post('/typestatus', (req,res) => {
  try{
    comparisontype.updateOne({ "_id": req.body._id },{ "$set": { "status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).exec(function(err,resData){
      common.SetredisConfig('ComparisonCategory', '', (resData) => {
        if(err){
          res.json({ "status": false});
        }
        else{
          comparisontype.find({ "_id": req.body._id }).exec(function(err,resData){
            res.json({ status:true, data:resData})
          });
        }
      });       
    })
  }
  catch(e){
    console.log("typestatus",e);
  }
})



router.post('/editType', (req, res) => {
  comparisontype.update({ "_id": req.body._id },{$set:{
    "title": req.body.title,
    "image":req.body.image
    // "modified_date": new Date()
  }}).exec(function(err, resUpdate){
      try
      {
        common.SetredisConfig('comparisontype', '', (resData) => {
           if(err) {
               res.status(500).send(err);
           } else {
             comparisonCategory.find({ "_id": req.body._id }).exec(function(err,resData){
               if (err) return res.status(500).send(err);
               apiresponse.data = [];
               apiresponse.data = resData;
               apiresponse.message = "Type Updated Successfully";
               res.json(apiresponse);
             });
           }
        });         
      }
      catch (err)
      {
         console.info("editType", err)
      }
    });
});

router.post('/deletetype', (req, res) => {

  comparisontype.findOneAndRemove({"_id": req.body._id}).exec(function(err,resData){
    try{
      common.SetredisConfig('comparisontype', '', (resData) => {
        if(err){
          res.json({ "status": false});
        }
        else{
          if (err) return res.status(500).send(err);
          apiresponse.data    = [];
          apiresponse.data    = resData;
          apiresponse.message = "Type has been  deleted successfully";
          res.json(apiresponse);
        }
      });       
    }
    catch (err){
      console.info("deletetype", err)
    }
  });
});


// router.post('/getcomparison', (req, res) => {
//   try{
//     comparison.find({}, (err,resData) => {
//       for(var i=0;i<resData.length;i++){
//         comparisonCategory.findOne({_id:resData[i].categoryId}, (err,category)=>{
//           if(category){
//             resData[i]['category'] = category.categoryName;
//           }
//         });
//         res.json({status:true,data:resData});       
//       }
//    })
//   }
//   catch(e){
//     console.log('getcomparison',e)
//   }
// });


router.post('/getcomparison', (req, res) => {
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
    // cnt = {$or:[{'page_name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
  }
  else{
    cnt = {};
  }

  async.parallel({
    cmscount:function(cb) {      
    comparison.find( cnt ).countDocuments().exec(cb);
    },
   bannerData:function(cb) {
     comparison.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
       },
    },function(err,resData){
      if (err) return res.status(500).send(err);
      for(var i=0;i<resData.length;i++){
        comparisonCategory.findOne({_id:resData[i].categoryId}, (err,category)=>{
          if(category){
            resData[i]['category'] = category.categoryName;
          }
        });
        // res.json({status:true,data:resData});       
      }
      apiresponse.data     = [];
      apiresponse.status   = true;
      apiresponse.data     = resData.bannerData;
      apiresponse.cmscount = resData.cmscount;
      apiresponse.message  = "";
      res.json(apiresponse);
    
  });
}catch(e){
  console.log("getcomparison",e);
}
});

router.post('/addComparison', (req, res) => {
  try{
    var reqData = req.body
    comparison.create(reqData,function(err,categoryList){
      res.json({status:true,Msg:'Comparison Created Successfully'})
    })
  }
  catch(e){
    console.log('addCategory',e);
  }
});

router.post('/editcomparison', (req, res) => {
  comparison.updateOne({ "_id": req.body._id },{$set:{
    "categoryId": req.body.categoryId,
    "type": req.body.type,
    "value": req.body.value
    // "modified_date": new Date()
  }}).exec(function(err, resUpdate){
      try
      {
        common.SetredisConfig('comparison', '', (resData) => {
           if(err) {
               res.status(500).send(err);
           } else {
             comparison.find({ "_id": req.body._id }).exec(function(err,resData){
               if (err) return res.status(500).send(err);
               apiresponse.data = [];
               apiresponse.data = resData;
               apiresponse.message = "comparison Updated Successfully";
               res.json(apiresponse);
             });
           }
        });         
      }
      catch (err)
      {
         console.info("editcomparison", err)
      }
    });
});

router.post('/deletecomparison', (req, res) => {

  comparison.findOneAndRemove({"_id": req.body._id}).exec(function(err,resData){
    try{
      common.SetredisConfig('comparison', '', (resData) => {
        if(err){
          res.json({ "status": false});
        }
        else{
          if (err) return res.status(500).send(err);
          apiresponse.data    = [];
          apiresponse.data    = resData;
          apiresponse.message = "Category has been  deleted successfully";
          res.json(apiresponse);
        }
      });       
    }
    catch (err){
      console.info("deletecomparison", err)
    }
  });
});

router.post('/comparisonstatus', (req,res) => {
  try{
    comparison.updateOne({ "_id": req.body._id },{ "$set": { "status": req.body.status,
    "modifieddate": new Date()}},{multi: true}).exec(function(err,resData){
      common.SetredisConfig('comparison', '', (resData) => {
        if(err){
          res.json({ "status": false});
        }
        else{
          comparisonCategory.find({ "_id": req.body._id }).exec(function(err,resData){
            res.json({ status:true, data:resData})
          });
        }
      });       
    })
  }
  catch(e){
    console.log("comparisonstatus",e);
  }
})



module.exports = router;