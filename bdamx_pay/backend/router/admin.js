const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var admin = require('../model/admin');
var adminaddress = require('../model/adminAddress');
var adminactivity = require('../model/AdminActivity');
var walletactivity = require('../model/walletactivity');
var async          = require('async');
const CryptoJS = require('crypto-js');
var crypto = require('crypto');
var config = require('../Nodedetails/config')
var key = CryptoJS.enc.Base64.parse("#base64Key#");
var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
let common = require('../helpers/common');
var currency = mongoose.model('currency');

var generator = require('generate-password');
let emailDB = mongoose.model('Emailtemplate');
let mail = require('../helpers/mailHelper');

let apiresponse = {
	
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


router.post('/forgetPwdAdmin', (req, res) => {
	try{
		var datas = {},
		values = req.body;

		admin.find(values).exec(function(err,resData){
			if(resData.length == 0) {
				res.json({
					status : false,
					msg    : "no_mail",
					error : "Email id does not belong to our website"
				});
			}
			else{
				if(resData[0].status == 1){
					res.json({ status : false , error : "You have been deactivated by admin"});
				}
				else{
					var cipher = crypto.createCipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
					var crypted = cipher.update(resData[0]._id.toString(), 'utf8', 'hex')
					crypted += cipher.final('hex');	
					var link = config.adminhost+'reset-password/'+crypted
					admin.updateOne(values,{ "$set": {"reset_password": 1,"reset_password_timer":new Date()}},{new: true}).exec(function(err, resUpdate){
						emailDB.findOne({ "title": 'forgotpwd' }).exec(function(etemperr,etempdata){
							console.log(etempdata)
							var etempdataDynamic = etempdata.mailcontent.replace(/###LINK###/g, link).replace(/###EMAIL###/g, req.body.admin_emailid);
							console.log(etempdataDynamic)
							mail.sendMail({ to: req.body.admin_emailid, subject: etempdata.mailsubject, html: etempdataDynamic },function(mailRes){
								res.json({ status : true , success    : "success",});
							});
						});
					});
				}
			}
		});
	}
	catch(e)
	{
		console.info("forgetPwdAdmin", e)
	}

})

router.post('/check_time', (req, res) => {
	try{
		var cipher = crypto.createDecipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
		var crypted = cipher.update(req.body._id, 'hex', 'utf8')
		crypted += cipher.final('utf8');	
		admin.findOne({"_id":crypted}).exec(function(err,resData){
			if(resData == null){
				res.json({success:false})
			}
			else if(resData.reset_password == 0){
				res.json({success:false})
			}
			else{
		    var today = new Date(req.body.current_date);
		    var Christmas = new Date(resData.reset_password_timer);
		    var diffMs = (today - Christmas);
		    var diffDays = Math.floor(diffMs / 86400000); // days
		    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
		    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
		    if(diffDays == 0 && diffHrs == 0 && diffMins<=15){
					res.json({success:true,data:resData})
		    }
		    else{
		    	res.json({success:false})
		    }
			}
		});
	}
	catch(e)
	{
		console.info("check_time", e)
	}

})

router.post('/send_failed_otp', (req, res) => {
	try{
		var cipher = crypto.createDecipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
		var crypted = cipher.update(req.body._id, 'hex', 'utf8')
		crypted += cipher.final('utf8');	
		admin.findOne({"_id":crypted}).exec(function(err,resData){
			if(resData == null){
				res.json({success:false})
			}
			else if(resData.failed < 5){
				res.json({success:false})
			}
			else{
				var password = generator.generate({
					length: 10,
					numbers: true,
					uppercase: true,
				}); 	
				admin.updateOne({"_id":crypted},{$set:{"failed_otp":password}}).exec(function(err,resData1){
					emailDB.findOne({ title: "OTP" }).exec(function (etemprErr, etempdata) {
						var etempdataDynamic = etempdata.mailcontent.replace(/###OTP###/g, password).replace(/###EMAIL###/g, resData.admin_emailid);
						mail.sendMail({ to: resData.admin_emailid, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
						 res.json({success:true,data:resData, "Message": "OTP sent to your mail id"})						
						})
					})				
				})
			}
		});
	}
	catch(e)
	{
		console.info("send_failed_otp", e)
	}

})

router.post('/check_opt_failed', (req, res) => {
	try{
		admin.findOne({"_id":req.body._id}).exec(function(err,resData){
			if(resData.failed_otp == req.body.new_pwd){
				admin.updateOne({"_id":req.body._id},{$set:{"failed":0}}).exec(function(err,resData){
					res.json({success:true, "Message": "Your account has been activated"})						
				})				
			}
			else{
				res.json({success:false, "Message": "OTP doesn't match"})
			}
		});
	}
	catch(e)
	{
		console.info("check_opt_failed", e)
	}

})


router.post('/check_subadmin', (req, res) => {
	try{
		var cipher = crypto.createDecipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
		var crypted = cipher.update(req.body._id, 'hex', 'utf8')
		crypted += cipher.final('utf8');	
		admin.findOne({"_id":crypted}).exec(function(err,resData){
			if(resData == null){
				res.json({success:false})
			}
			else if(resData.set_password == 1){
				res.json({success:false})
			}
			else{
				res.json({success:true,data:resData})
			}
		});
	}
	catch(e)
	{
		console.info("check_subadmin", e)
	}

})


router.post('/resetpassword', (req, res) => {
	try{
		var encryptednewpass = CryptoJS.AES.encrypt(req.body.new_pwd, key, {iv: iv}).toString();
		admin.updateOne({'_id':req.body._id},{$set:{"reset_password": 0,"admin_password":encryptednewpass}}).exec(function(err,resData){
			res.json({'status':true})
		})
	}
	catch(e)
	{
		console.info("resetpassword", e)
	}

})

router.post('/setnewpassword', (req, res) => {
	try{
		var encryptednewpass = CryptoJS.AES.encrypt(req.body.new_pwd, key, {iv: iv}).toString();
		admin.updateOne({'_id':req.body._id},{$set:{"set_password": 1,"admin_password":encryptednewpass}}).exec(function(err,resData){
			res.json({'status':true})
		})
	}
	catch(e)
	{
		console.info("setnewpassword", e)
	}

})

router.post('/checkLogin', (req, res) => {
	try{
		var g = req.body.raw3;
		var values = req.body;
		var encerypt_id  = req.body.raw3;
		var deOtp  = CryptoJS.AES.decrypt(encerypt_id, key, {iv: iv});
		var OTP  = deOtp.toString(CryptoJS.enc.Utf8)
		var category = OTP;
		admin.find({admin_emailid : req.body.admin_emailid,admin_password : req.body.admin_password}).exec(function(err,resData){
			if (err) return res.status(500).send(err);
			if(resData.length > 0){
				if(resData[0].admin_pattern == req.body.admin_pattern){
					if(resData[0].failed < 5){
						if(resData[0].status == 1){
							datas = {
								status : false,
								error  : "You have been deactivated by admin"
							};
							res.json(datas); 						
						}
						else{
							var r = require('ua-parser').parse(req.headers['user-agent']);
							var	ip = req.ip.replace('::ffff:', '');
							var mydata ={
								"user_id"   : resData[0]._id,
								"ip"   : ip,
								"location"   : "",
								"browser"   : r.ua.toString(),
								"os"   : r.os.toString(),
								"type"   : 'Login',
							} 
							var mydatas = new adminactivity(mydata)
							mydatas.save();					
							datas = {
								status  : true,
								data    : resData[0],
								session : resData[0]._id,
								name    : resData[0].admin_name,
								role    : resData[0].role,
								success : "You are logging in. Please Wait"
							};
							res.json(datas);
						}
					}
					else{
						datas = {
							status : false,
							error  : "Enter otp in link to activate the user"
						};
						res.json(datas);
					}
				}
				else{
					if(resData[0].failed >= 5){
						var cipher = crypto.createCipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
						var crypted = cipher.update(resData[0]._id.toString(), 'utf8', 'hex')
						crypted += cipher.final('hex');	
						var link = config.adminhost+'otp-verification/'+crypted							
						emailDB.findOne({ "title": 'failed' }).exec(function(etemperr,etempdata){
							var etempdataDynamic = etempdata.mailcontent.replace(/###PASSWORD###/g, link).replace(/###EMAIL###/g, req.body.admin_emailid);
							mail.sendMail({ to: req.body.admin_emailid, subject: etempdata.mailsubject, html: etempdataDynamic },function(mailRes){
								datas = {
									status : false,
									error  : "Enter otp in link to activate the user"
								};
								res.json(datas); 
							});
						});
					}
					else{
						var i = resData[0].failed;
						i +=1;
						admin.updateOne({admin_emailid : req.body.admin_emailid},{$set:{failed:i}}).exec(function(err,resData1){
							datas = {
								status : false,
								error  : "Invalid Patternlock"
							};
							res.json(datas);  								
						})								
					}					
				}
			}
			else{
				admin.find({admin_emailid : req.body.admin_emailid}).exec(function(err,resData1){
					if(resData1.length == 0){
						datas = {
							status : false,
							error  : "Invalid Email id"
						};
						res.json(datas);        
					}
					else{
						if(resData1[0].admin_password != req.body.admin_password){
							if(resData1[0].failed >= 5){
								var cipher = crypto.createCipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
								var crypted = cipher.update(resData1[0]._id.toString(), 'utf8', 'hex')
								crypted += cipher.final('hex');	
								var link = config.adminhost+'otp-verification/'+crypted											
								emailDB.findOne({ "title": 'failed' }).exec(function(etemperr,etempdata){
									var etempdataDynamic = etempdata.mailcontent.replace(/###PASSWORD###/g, link).replace(/###EMAIL###/g, req.body.admin_emailid);
									mail.sendMail({ to: req.body.admin_emailid, subject: etempdata.mailsubject, html: etempdataDynamic },function(mailRes){
										datas = {
											status : false,
											error  : "Enter otp in link to activate the user"
										};
										res.json(datas); 
									});
								});
							}
							else{
								var i = resData1[0].failed;
								i +=1;
								admin.updateOne({admin_emailid : req.body.admin_emailid},{$set:{failed:i}}).exec(function(err,resData1){
									datas = {
										status : false,
										error  : "Invalid password"
									};
									res.json(datas);  								
								})								
							}
						}
					}
				})			
			}
		});
	}
	catch(e){
	console.info("checkLogin", e)
	}
});

router.post('/wallet_login', (req, res) => {
	try{
		admin.find({admin_emailid : req.body.admin_emailid,admin_password : req.body.admin_password}).exec(function(err,resData){
			if (err) return res.status(500).send(err);
			if(resData.length > 0){
				if(resData[0].admin_pattern == req.body.admin_pattern){
					if(resData[0].role == 1){
						var r = require('ua-parser').parse(req.headers['user-agent']);
						var	ip = req.ip.replace('::ffff:', '');
						var mydata ={
							"user_id"   : resData[0]._id,
							"ip"   : ip,
							"location"   : "",
							"browser"   : r.ua.toString(),
							"os"   : r.os.toString(),
							"type"   : 'Login',
						} 
						var mydatas = new walletactivity(mydata)
						mydatas.save();					
						datas = {
							status  : true,
							data    : resData[0],
							session : resData[0]._id,
							name    : resData[0].admin_name,
							role    : resData[0].role,
							success : "You are logging in. Please Wait"
						};
						res.json(datas);
					}
					else{
						datas = {
							status : false,
							error  : "You dont have access to login"
						};
						res.json(datas); 						
					}
				}
				else{
					if(resData[0].failed >= 5){
						var cipher = crypto.createCipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
						var crypted = cipher.update(resData[0]._id.toString(), 'utf8', 'hex')
						crypted += cipher.final('hex');	
						var link = config.adminhost+'otp-verification/'+crypted									
						emailDB.findOne({ "title": 'failed' }).exec(function(etemperr,etempdata){
							var etempdataDynamic = etempdata.mailcontent.replace(/###PASSWORD###/g, link).replace(/###EMAIL###/g, req.body.admin_emailid);
							mail.sendMail({ to: req.body.admin_emailid, subject: etempdata.mailsubject, html: etempdataDynamic },function(mailRes){
								datas = {
									status : false,
									error  : "Enter otp in link to activate the user"
								};
								res.json(datas); 
							});
						});
					}
					else{
						var i = resData[0].failed;
						i +=1;
						admin.updateOne({admin_emailid : req.body.admin_emailid},{$set:{failed:i}}).exec(function(err,resData1){
							datas = {
								status : false,
								error  : "Invalid Patternlock"
							};
							res.json(datas);  								
						})								
					}
				}
			}
			else{
				admin.find({admin_emailid : req.body.admin_emailid}).exec(function(err,resData1){
					if(resData1.length == 0){
						datas = {
							status : false,
							error  : "Invalid Email id"
						};
						res.json(datas);        
					}
					else{
						if(resData1[0].admin_password != req.body.admin_password){
							if(resData1[0].failed >= 5){
								var cipher = crypto.createCipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
								var crypted = cipher.update(resData1[0]._id.toString(), 'utf8', 'hex')
								crypted += cipher.final('hex');	
								var link = config.adminhost+'otp-verification/'+crypted									
								emailDB.findOne({ "title": 'failed' }).exec(function(etemperr,etempdata){
									var etempdataDynamic = etempdata.mailcontent.replace(/###PASSWORD###/g, link).replace(/###EMAIL###/g, req.body.admin_emailid);
									mail.sendMail({ to: req.body.admin_emailid, subject: etempdata.mailsubject, html: etempdataDynamic },function(mailRes){
										datas = {
											status : false,
											error  : "Enter otp in link to activate the user"
										};
										res.json(datas); 
									});
								});
							}
							else{
								var i = resData1[0].failed;
								i +=1;
								admin.updateOne({admin_emailid : req.body.admin_emailid},{$set:{failed:i}}).exec(function(err,resData1){
									datas = {
										status : false,
										error  : "Invalid password"
									};
									res.json(datas);  								
								})								
							}
						}
					}
				})	
			}
		});
	}
	catch(e){
		console.info("wallet_login", e)
	}
});

router.post('/change', (req, res) => {
	try{
	  admin.findOne({"_id":req.body.idd}, 
	    function(err, resData) {
	    if(err) return handleError(err);
	    if(resData.admin_password == req.body.pass)
	    {
	      admin.updateOne({"_id":req.body.idd},
	      {$set:{"admin_password": req.body.npass}}, function(err, resupdate) {
	          if(err) return handleError(err);
	             res.json({
	              success:true
	           });
	       });
	    }
	    else
	    {
	      res.json({
	        success:false
	      })
	    }
	  })
	}
	catch(e){
		console.info("change", e)
	}
})

router.post('/get_admindetail', (req, res) => {
	try{
	  admin.findOne({"_id":req.body._id},{'admin_password':0},function(err, resData) {
	  	res.json(resData)
	  })
	}
	catch(e){
		console.info("get_admindetail", e)
	}	

})

router.post('/add_history_wallet', (req, res) => {
	try{
		var r = require('ua-parser').parse(req.headers['user-agent']);
		var	ip = req.ip.replace('::ffff:', '');
		var mydata ={
			"user_id"   : req.body.id,
			"ip"   : ip,
			"location"   : "",
			"browser"   : r.ua.toString(),
			"os"   : r.os.toString(),
			"type"   : 'Log out',
		} 
		var mydatas = new walletactivity(mydata)
		mydatas.save();	
		res.json({success:true})
	}
	catch(e){
		console.info("add_history_wallet", e)
	}		

})


router.post('/add_history', (req, res) => {
	try{
		var r = require('ua-parser').parse(req.headers['user-agent']);
		var	ip = req.ip.replace('::ffff:', '');

		var mydata ={
			"user_id"   : req.body.id,
			"ip"   : ip,
			"location"   : "",
			"browser"   : r.ua.toString(),
			"os"   : r.os.toString(),
			"type"   : 'Log out',
		} 
		var mydatas = new adminactivity(mydata)
		mydatas.save();	
		res.json({success:true})
	}
	catch(e){
		console.info("add_history", e)
	}		

})

router.post('/update_info', (req, res) => {
	try{
		admin.updateOne({"_id":req.body.idd},{$set:{
			"admin_emailid": req.body.mail,
			"admin_name": req.body.name,
			"admin_pattern": req.body.pattern,
		}}, function(err, resupdate) {
				if(err) return handleError(err);
				res.json({
					success:true
				});
		});
	}
	catch(e){
		console.info("update_info", e)
	}
})

router.post('/getallactivity_wallet', (req, res) => {
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
			cnt = {$and:[{'user_id': { $regex: '.*' + req.body.id + '.*',$options: 'i' }},{'ip': { $regex: '.*' + search + '.*',$options: 'i' }}]};
		}
		else{
			cnt = {'user_id': { $regex: '.*' + req.body.id + '.*',$options: 'i' }};
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  walletactivity.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  walletactivity.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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
		console.log("getallactivity_wallet",e);
	}
});

router.post('/getallactivity', (req, res) => {
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
			cnt = {$and:[{'user_id': { $regex: '.*' + req.body.id + '.*',$options: 'i' }},{'ip': { $regex: '.*' + search + '.*',$options: 'i' }}]};
		}
		else{
			cnt = {'user_id': { $regex: '.*' + req.body.id + '.*',$options: 'i' }};
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  adminactivity.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  adminactivity.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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

router.post('/getsubadmins', (req, res) => {

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
			cnt = {$and:[{'role': 0 },{$or:[{'admin_name': { $regex: '.*' + req.body.id + '.*',$options: 'i' }},{'admin_emailid': { $regex: '.*' + search + '.*',$options: 'i' }}]}]};
		}
		else{
			cnt = {'role': 0 }
		}

		async.parallel({
			bannerTotalCount:function(cb) {      
			  admin.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  admin.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
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

router.post('/updatestatus',(req,res)=>{
	try{
		admin.updateOne({'_id':req.body._id},{$set:{"status":req.body.status}},function(err,resp){
			res.json({'success':true})
		})
	}
	catch(e){
		console.log('updatestatus',e)
	}
})

router.post('/addadmin',(req,res)=>{
	try{
		admin.findOne({'admin_emailid':req.body.admin_emailid},function(err,check){
			if(check != null){
				res.json({success:false,'message':'Email already exists'})
			}
			else{
				var adddata=req.body
				var enc_password = CryptoJS.AES.encrypt(req.body.admin_password, key, {iv: iv}).toString();
				adddata.admin_password = enc_password;
				var myData = new admin(adddata);      
				myData.save()
				.then(item => {
  				var cipher = crypto.createCipheriv('aes-256-ctr', 'T1Bt0Lx5jA9ML6AJ8523IAv0anRd03Ya', 'S19h8AnT21H8n14I')
					var crypted = cipher.update(item._id.toString(), 'utf8', 'hex')
					crypted += cipher.final('hex');	
					var link = config.adminhost+'set-password/'+crypted				
					emailDB.findOne({ title: "subadmin" }).exec(function (etemprErr, etempdata) {
						
						console.log(link,adddata)
						var etempdataDynamic = etempdata.mailcontent.replace(/###EMAIL###/g, req.body.admin_emailid).replace(/###LINK###/g, link);
						console.log(etempdataDynamic)
						mail.sendMail({ to: req.body.admin_emailid, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
							res.json({success:true,'message':'Sub admin added successfully'})
						})
					})					
 				})
				.catch(err => {
					console.log(err)
					res.json({success:false,'message':'Error occured'})
				})    				
			}
		})
	}
	catch(e){
		res.json({success:false,'message':'Error occured'})
	}
})

router.post('/edit_admin', (req, res) => {
	try{
	  admin.updateOne({ "_id": req.body._id },{$set:{
	    "sub_admin":req.body.sub_admin,
	    "admin_withdraw":req.body.admin_withdraw,
	    "currency_details":req.body.currency_details,
	    "pair_details":req.body.pair_details,
	    "site_settings":req.body.site_settings,
	    "email_template":req.body.email_template,
	    "cms_page":req.body.cms_page,
	    "faq":req.body.faq,
	    "faqcategory":req.body.faqcategory,
	    "benefits":req.body.benefits,
	    "news":req.body.news,
	    "markets":req.body.markets,
	    "feature":req.body.feature,
	    "paidin":req.body.paidin,
	    "partners":req.body.partners,
	    "customers":req.body.customers,
	    "type":req.body.type,
	    "admin_bank_details":req.body.admin_bank_details,
	    "admin_bank_info":req.body.admin_bank_info,
	    "meta_content":req.body.meta_content,
	    "deposit":req.body.deposit,
	    "withdraw":req.body.withdraw,
	    "exchangehistory":req.body.exchangehistory,
	    "usermanage":req.body.usermanage,
	    "ipblock":req.body.ipblock,
	    "trade_history":req.body.trade_history,
	    "history_active":req.body.history_active,
	    "history_cancelled":req.body.history_cancelled,
	    "profit":req.body.profit,
	    "currency_profit":req.body.currency_profit,
	    "user_details":req.body.user_details,
	    "token_details":req.body.token_details,
	    "contact_us":req.body.contact_us,
	    "modifieddate": new Date()
	  }}).exec(function(err, resUpdate){
			res.json({success:true})
		});
	}
	catch(e){
		console.log('edit_admin',e)
	}
});

router.post('/getsubadmin',(req,res)=>{
	try{
		admin.findOne({'_id':req.body._id},{'admin_password':0,'admin_pattern':0},function(err,resdata){
			res.json(resdata);
		})
	}
	catch(e){
		console.log('getsubadmin',e)		
	}
})

router.get('/getadminaddress',(req,res)=>{
	try{
		adminaddress.findOne({},function(err,resdata){
			res.json(resdata);
		})
	}
	catch(e){
		console.log('geradminaddress',e)		
	}
})

router.post('/getbalance',(req,res)=>{
	try{
		var cur_whr = { "currencySymbol": "BTC" };
			currency.findOne(cur_whr).exec(function (cur_err, cur_res) {
				common.getbalance(req.body.address, cur_res._id, function (balance) {
					res.json(balance)
				});
		});
	}
	catch(e){
		console.log('getbalance',e)
	}
})

module.exports = router;