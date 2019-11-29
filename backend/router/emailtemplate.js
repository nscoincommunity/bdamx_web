const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
let emailDB = mongoose.model('Emailtemplate');
var async          = require('async');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

router.post('/gettemplate', (req, res) => {
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
    cmscount:function(cb) {      
    emailDB.find( cnt ).countDocuments().exec(cb);
    },
   bannerData:function(cb) {
     emailDB.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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
  console.log("gettemplate",e);
}
});

router.post('/edittemplate', (req, res) => {
  emailDB.findOneAndUpdate({ "_id": req.body._id },{$set:{
    "mailsubject": req.body.mailsubject,
    "mailcontent": req.body.mailcontent,
    "modified_date": new Date()
  }}).exec(function(err, resUpdate){
      try
      {
         if(err) {
             res.status(500).send(err);
         } else {
           emailDB.find({ "_id": req.body._id }).exec(function(err,resData){
             if (err) return res.status(500).send(err);
             apiresponse.data = [];
             apiresponse.data = resData;
             apiresponse.message = "Email Template Updated Successfully";
             res.json(apiresponse);
           });
         }
      }
      catch (err)
      {
         console.info("edittemplate", err)
      }
    });
});



module.exports = router;