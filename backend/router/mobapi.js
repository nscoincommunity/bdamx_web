const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var device = require('../model/deviceDetails');
var async          = require('async');
let common = require('../helpers/common');
var notification = require('../model/notification');

router.post('/deviceRegistration', (req, res) => {
  try{
  	device.create(req.body,function(err,deviceDetails){
  		res.json({status:true,data:deviceDetails})
  	})
  }
  catch(e){
    console.log('deviceRegistration',e);
  }
});

router.post('/notificationGet', (req, res) => {
  try{
  	notification.find({userId:req.body.userId},function(err,notificationData){
      if(!err){
        res.json({status:true,data:notificationData})
      } else {
        res.json({status:false,error:err});
      }
  		
  	})
  }
  catch(e){
    console.log('notificationGet',e);
  }
});

router.post('/notificationAdd', (req, res) => {
  try{
    notification.create(req.body,function(err,notificationData){
      if(!err){
        res.json({status:true,data:notificationData})
      } else {
        res.json({status:false,error:err});
      }
    })
  }
  catch(e){
    console.log('notificationGet',e);
  }
});

router.post('/notifyStatus', (req, res) => {
	const reqData = req.body;
  try{
  	notification.update({_id:reqData._id},{$set: { "status" : reqData.status}},function(err,notificationData){
  		if(!err){
        res.json({status:true,data:notificationData})
      } else {
        res.json({status:false,error:err});
      }
  	})
  }
  catch(e){
    console.log('notifyStatus',e);
    res.json({status:false,error:e})
  }
});


module.exports = router;