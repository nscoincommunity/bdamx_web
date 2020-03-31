const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
let contactDB  = mongoose.model('Contact');
var async          = require('async');
let emailDB = mongoose.model('Emailtemplate');
let mail = require('../helpers/mailHelper');


let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/send_reply',function(req, res) {
	try{
		emailDB.findOne({ title: "contactresponse" }).exec(function (etemprErr, etempdata) {
			var etempdataDynamic = etempdata.mailcontent.replace(/###USERNAME###/g, req.body.name).replace(/###MESSAGE###/g, req.body.reply);
			mail.sendMail({ to: req.body.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
	    	contactDB.updateOne({'_id':req.body._id},{$set:{
	    		'reply':req.body.reply,
	    		'status':0
	    	}},function(err,resdata){
	      	res.json({success:true});
	    	})
			})
		})
	}
	catch(e){
		console.log('send_reply',e)		
	}
});

router.post('/getallcontact', (req, res) => {
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
			cnt = {$or:[{'email': { $regex: '.*' + search + '.*',$options: 'i' }},{'name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
		}
		else{
			cnt = {};
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  contactDB.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  contactDB.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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

router.post('/add_contact', (req, res) => {
	try{
		var mydata = new contactDB(req.body)
		mydata.save()
    .then(item => {
      res.json({"success":true});
    })
    .catch(err => {
      res.json({success:false});
    }) 		
	}
	catch(e){
		console.log("getfaqlist",e);
	}
});


module.exports = router;
