const express = require('express');
const router = express.Router();

const config = require("../../Nodedetails/config");
const common_helper = require('../../helpers/common');
const custom_helper = require('../../helpers/custom');
const mail = require('../../helpers/mailHelper');
var async          = require('async');
const mongoose = require('mongoose');
const validator = require('node-validator');
const getJSON = require('get-json');
const rpc = require('node-json-rpc2');
const userActivity = require('../../model/userActivity');
const adminDB = mongoose.model('admin');
const TokenDB  = mongoose.model('Tokendetails');
const WithdrawDB  = mongoose.model('Withdraw');
const depositDB  = mongoose.model('deposit');
const wallet = mongoose.model('userWallet');
const curencyDB = mongoose.model('currency');
const emailDB = mongoose.model('Emailtemplate');
const users_table = mongoose.model('users');
const ObjectId = require('mongodb').ObjectID;
const ipblock  = mongoose.model("ipblock");

let ErrorData = {
	status : false,
	verify_type : ""
}
let SuccessData = {
	status : true
}

let reg_check_id = [];

let apiresponse = {
	
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};


//new user register
router.post('/enroll', function(req, res) {
	try{

		var Indata = req.body
		common_helper.check_captcha(Indata.captcha_value, function (response) {
		if (response == "ok") {
			Indata.email = Indata.email.toLowerCase()
			Indata.user_name = Indata.user_name.toLowerCase()
			Indata.remote_ip = req.connection.remoteAddress.replace("::ffff:", "")
			var check_value = reg_check_id.indexOf(Indata.email)
			if (check_value === -1) {
				reg_check_id.push(Indata.email); 
				var validateData = {
					email:Indata.email,
					password:Indata.password,
					//mobile : Indata.mobile
				}
			
				var Mail_check = common_helper.blocked_mail(validateData.email)
				if (Mail_check == "ok") {
					var Indata_validate = validator.isObject()
					.withRequired('email', validator.isString({ regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email.' }))
					.withRequired('password', validator.isString({ regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, message: 'Invalid password.' }))
					//.withRequired('mobile', validator.isString({ regex: /^(\+\d{1,3}[- ]?)?\d{15}$/ , message: 'Invalid mobile number.' }))
					validator.run(Indata_validate, validateData, function (validate_errorCount, validate_errors) {
						if (validate_errorCount == 0) {
							
							var find_mobile = {mobile:Indata.mobile}
							var get_mobile = {_id:1}
							users_table.findOne(find_mobile,get_mobile).exec(function (find_mobile_Err, find_mobile_Data) {
								if(find_mobile_Data){
									setTimeout(checkid_values, 2000, Indata.email,reg_check_id);
									ErrorData.verify_type = "mobilealready";
									ErrorData.Msg =  "This Mobile number is already exists";
									res.send(ErrorData)	
								}else{
									//find already username
									var find_username = {user_name:Indata.user_name}
									var get_username = {_id:1}
									users_table.findOne(find_username,get_username).exec(function (find_username_Err, find_username_Data) {
										
										if(find_username_Data){
											setTimeout(checkid_values, 2000, Indata.email,reg_check_id);
											ErrorData.verify_type = "usernamealready";
											ErrorData.Msg =  "Username has been already exists";
											res.send(ErrorData)	
										}else{

											//find already register email
											var find_registered_mail = {email:Indata.email}
											var get_registered_mail = {_id:1}
											users_table.findOne(find_registered_mail,get_registered_mail).exec(function (find_registered_Err, find_registered_resData) {
												if(find_registered_resData){
													setTimeout(checkid_values, 2000, Indata.email,reg_check_id);
													ErrorData.verify_type = "mailalready";
													ErrorData.Msg =  "Email has been already registered";
													res.send(ErrorData)	
												}else{

													var values = {

														email : Indata.email,
														user_name : Indata.user_name,
														secure_pass : common_helper.encrypt(Indata.password),
														mobile : Indata.mobile,
														region_code : Indata.region,
														region : Indata.region.split(",")[0],
														mobile_code : Indata.region.split(",")[1],
														terms : Indata.terms,
														ipaddress : Indata.remote_ip
													}
												
													users_table.create(values,function(Err,insData){
														common_helper.userWalletCreation(insData._id);
														if(insData){
																emailDB.findOne({ title: "Register" }).exec(function (etemprErr, etempdata) {
																var enc=common_helper.encrypt(insData._id.toString()) 
																var reg_verify_link = config.Host+"signup/"+enc
																var etempdataDynamic = etempdata.mailcontent.replace(/###EMAIL###/g, Indata.email).replace(/###LINK###/g,reg_verify_link);
																mail.sendMail({ to: Indata.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
																	setTimeout(checkid_values, 3000, Indata.email,reg_check_id);
																	SuccessData.Msg = "Registration has been successfully completed activation link sent to your email"
																	res.send(SuccessData)	
																})
																})
															
														}else{
															setTimeout(checkid_values, 2000, Indata.email,reg_check_id);
															ErrorData.verify_type = "notregister";
															ErrorData.Msg =  "Registration has been faild";
															res.send(ErrorData)		
														}

													});


												}
											});
										}

									});
								}
							});
						
						}else{
							
							ErrorData.verify_type = "details";
							ErrorData.Msg =  "Please enter valid details";
							setTimeout(checkid_values, 3000, Indata.email,reg_check_id);
							res.send(ErrorData)
						}
					});
				}else{
					ErrorData.verify_type = "mailrestrict"
					ErrorData.Msg = "Your email-id is not allow in our site. Kindly use another email-id"
					setTimeout(checkid_values, 2000, Indata.email,reg_check_id);
					res.send(ErrorData)
				}
				//setTimeout(checkid_values, 3000, Indata.email,reg_check_id);
			}else{
				ErrorData.verify_type = "timeout"
				ErrorData.Msg = "Please try after 5 seconds"
				res.send(ErrorData);
				return false;
			}
		}else{
			ErrorData.verify_type = "captcha"
			ErrorData.Msg = "Invalid Access"
			res.send(ErrorData)
			return false;
		}
	});
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
		return false;
	}

});

//user login
router.post('/step_in', async function(req, res) {
	try{

		let Indata = req.body
		Indata.email = Indata.email.toLowerCase();
		let ipblockData = {
		user_ip:Indata.ipconfig,
		loginattempt : 1
		}
		common_helper.check_captcha(Indata.captcha_value,async function (response) {
		if (response == "ok") {
		var Email_find =  {email : Indata.email}
		var Email_get = {email:1,secure_pass:1,emailverify:1,status:1,_id:1,user_name:1,tfaenable:1}
			users_table.findOne(Email_find,Email_get).exec(async function (Email_find_Err, Email_find_Data) {
				if(Email_find_Data){

					await users_table.updateOne({email : Indata.email},{$set:{login_status:Indata.login_status}});
					if(Email_find_Data.secure_pass === common_helper.encrypt(Indata.password)){
						if(Email_find_Data.emailverify === 0){
							emailDB.findOne({ title: "Register" }).exec(async function (etemprErr, etempdata) {
							var enc=common_helper.encrypt(Email_find_Data._id.toString()) 
							var reg_verify_link = config.Host+"signup/"+enc
							var etempdataDynamic = etempdata.mailcontent.replace(/###EMAIL###/g, Indata.email).replace(/###LINK###/g,reg_verify_link);
							mail.sendMail({ to: Indata.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
							ErrorData.verify_type = "emailverify"
							// ErrorData.Msg = "Email verifictaion is not completed please check your registered email and activate your account,Activation link sent to your email";
							ErrorData.Msg = "Your Account is deactivated. Please contact site manager";
							res.send(ErrorData)
							})
							})
						}else if(Email_find_Data.emailverify === 1){
							if(Email_find_Data.status === 0){
								ErrorData.verify_type = "deactive"
								ErrorData.Msg = "Your email has been deactivated contact site admin"
								res.send(ErrorData)
								
							}else if(Email_find_Data.tfaenable === 1){
							    SuccessData.tfatype = "tfa"
								SuccessData.data = common_helper.encrypt(Email_find_Data.email)
								res.send(SuccessData)
								SuccessData.tfatype = ""
								return false
							}else if(Email_find_Data.status === 1){
								
								let Ipblock_update = await ipblock.updateOne({"user_ip":ipblockData.user_ip,"status":0},{"$set":{loginattempt:0}});
								var sendData = {
									origin : common_helper.createPayload(Email_find_Data._id)
								}


								var UserdetailsEmit = {
									verifyToken: sendData.origin,
									user_mail:Email_find_Data.email,

								}
								io.emit('browserLogout', UserdetailsEmit);
								var r = require('ua-parser').parse(req.headers['user-agent']);
								//var	ip = req.ip.replace('::ffff:', '');
								var	ip = ipblockData.user_ip
								
								var mydata ={
									"user_id"   : Email_find_Data._id,
									"ip"   : ip,
									"location"   : "",
									"browser"   : r.ua.toString(),
									"os"   : r.os.toString(),
									"type"   : 'Login',
									"username":Email_find_Data.user_name,
									"useremail":Email_find_Data.email
								} 
								var mydatas = new userActivity(mydata)
								mydatas.save();			
								SuccessData.Msg = "Login successfully"
								SuccessData.successData = sendData
								res.send(SuccessData)

							}else{
								return false
							}
							
						}else{
							return false
						}

					}else{
						
						
						let get_ip  =  await ipblock.findOne({"user_ip":ipblockData.user_ip},{user_ip:1,loginattempt:1,status:1})
						if(get_ip){
							if(get_ip.loginattempt<6){
							
								if(get_ip.loginattempt >= 5){
									
									let Ipblock_update = await ipblock.updateOne({"user_ip":ipblockData.user_ip},{"$set":{status:1}});
									//console.log("Ipblock_update",Ipblock_update)
									let Ipblocked_date = {
										blocker:ipblockData.user_ip,
										status:true
									}
									ErrorData.verify_type = "Incorrect_pass"
									ErrorData.Msg = "Incorrect password website has been blocked"
									res.send(ErrorData)
									io.emit('Useripblocker', Ipblocked_date);
									return false;
									
								}else{
									let updata = {
										loginattempt : get_ip.loginattempt + 1
									}

									let Ipblock_update = await ipblock.updateOne({"user_ip":ipblockData.user_ip},{"$set":updata});
									//console.log(Ipblock_update)
									if(get_ip.loginattempt >= 3){
										let chceler = 5 - get_ip.loginattempt
										//console.log("chceler",chceler)
										ErrorData.verify_type = "Incorrect_pass"
										ErrorData.Msg = "Incorrect password website has been blocked "+ chceler +" attempts remain"
										res.send(ErrorData)
										return false;	
									}else{
										ErrorData.verify_type = "Incorrect_pass"
										ErrorData.Msg = "Invalid Credentials"
										res.send(ErrorData)
										return false;		
									}
									
									
								}
							}

						}else{
							ipblock.create(ipblockData,function(ipblockerr,ipblock_data){});
							ErrorData.verify_type = "Incorrect_pass"
							ErrorData.Msg = "Invalid Credentials"
							res.send(ErrorData)
							return false;
						}
							
					}

				}else{
					ErrorData.verify_type = "unregister"
					ErrorData.Msg = "Email is not registered please signup now"
					res.send(ErrorData)
					return false;
				}
			});
		}else{

			ErrorData.verify_type = "captcha"
			ErrorData.Msg = "Invalid Access"
			res.send(ErrorData)
			return false;

		}
	});

	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
		return false;
	}
});

router.post('/tfaverify', function(req, res) {
	try{
		let Indata = req.body
	
		common_helper.check_captcha(Indata.captcha_value, function (response) {
			if (response == "ok") {
			var Email_find =  {email :common_helper.decrypt(Indata.tfaauth)}
			var Email_get = {email:1,emailverify:1,status:1,_id:1,user_name:1,tfaenable:1,tfaenablekey:1}
				users_table.findOne(Email_find,Email_get).exec(function (Email_find_Err, Email_find_Data) {
					if(Email_find_Data){
						tfaverify = common_helper.TFAverify(Email_find_Data.tfaenablekey,Indata.tfacode)
						if(tfaverify){
							 if(Email_find_Data.status === 1){
								var sendData = {
									origin : common_helper.createPayload(Email_find_Data._id)
								}
								var UserdetailsEmit = {
									user_id:Email_find_Data._id,
									user_name:Email_find_Data.user_name,
									user_mail:Email_find_Data.email,
								}
								SuccessData.Msg = "Login successfully"
								SuccessData.successData = sendData
								res.send(SuccessData)

							}else{
								return false
							}
						}else{
							ErrorData.verify_type = "tfaincorrect"
							ErrorData.Msg = "Incorrect TFA code"
							res.send(ErrorData)
							return false;
						}
					}else{
						ErrorData.verify_type = "unregister"
						ErrorData.Msg = "Email is not registered please signup now"
						res.send(ErrorData)
						return false;
					}
				});
			}else{
				ErrorData.verify_type = "captcha"
				ErrorData.Msg = "Invalid Access"
				res.send(ErrorData)
				return false;
			}
		});

	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
		return false;
	}
});

//User verify Email
router.post('/verify_email', function(req, res) {
	try{
		var Indata =req.body
		Indata.user_id = common_helper.decrypt(Indata.user_id)
		
		common_helper.check_captcha(Indata.captcha_value, function (response) {
		if (response == "ok") {
			var Find_email = {_id:new ObjectId(Indata.user_id),emailverify:0,status:0}
			var Get_email = { _id:1,email:1,emailverify:1,status:1 }
			users_table.findOne(Find_email,Get_email).exec(function (Find_emailverify_err, Find_emailverify_Data) {
				if(Find_emailverify_Data){

					var email_verify_update = {_id:new ObjectId(Indata.user_id),emailverify:0,status:0}
					var email_verify_update_value = {"$set": {emailverify:1,status:1}}
					users_table.updateOne(email_verify_update,email_verify_update_value).exec(function (verify_Err,verify_Data) {
						if(verify_Data){
							// common_helper.userWalletCreation(Indata.user_id)
							SuccessData.Msg = "Email verifictaion completed please login"
							res.send(SuccessData)
						}else{
							ErrorData.verify_type = "verify_fail"
							ErrorData.Msg = "Email verifictaion faild please contact admin"
							res.send(ErrorData)
							
						}
					});
				}else{
					ErrorData.verify_type = "email_verified"
					ErrorData.Msg = "Email already activated Please login"
					res.send(ErrorData)
					
				}
			});

		}else{
			ErrorData.verify_type = "captcha"
			ErrorData.Msg = "Invalid Access"
			res.send(ErrorData)
			return false;
		}
	});

	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
		return false;
	}
});

//user forgot password

let forget_email_check = []
router.post('/forget_pass', function(req, res) {
	try{

		var Indata = req.body;
		Indata.email = Indata.email.toLowerCase();
		var check_value = forget_email_check.indexOf(Indata.email)
		common_helper.check_captcha(Indata.captcha_value, function (response) {
		if (response == "ok") {
			if (check_value === -1) {
				forget_email_check.push(Indata.email); 
				var Find_email = { email : Indata.email}
				var Get_email = {email:1,reset_password:1,status:1,emailverify:1,_id:1,}
				users_table.findOne(Find_email,Get_email).exec(function (find_mail_err, find_mail_data) {
					if(find_mail_data){
						if(find_mail_data.emailverify === 0){
							setTimeout(checkid_values, 2000, Indata.email,forget_email_check);
							ErrorData.verify_type = "email_verified"
							ErrorData.Msg = "Email verification is not completed can't able change password,Kindly contact site administartor"
							res.send(ErrorData);						
						}else if(find_mail_data.status === 0){
							setTimeout(checkid_values, 2000, Indata.email,forget_email_check);
							ErrorData.verify_type = "deactive_status"
							ErrorData.Msg = "Account status deactive can't change password , Kindly contact site administartor"
							res.send(ErrorData);						
						}else{
							
							if(find_mail_data.emailverify === 1 && find_mail_data.status === 1){
								
								var find_forgot = {_id:new ObjectId(find_mail_data._id)}
								var update_forgot = { "$set" : {secure_pass : "",reset_password : 1,reset_time : Indata.validate } }

								users_table.updateOne(find_forgot,update_forgot).exec(function (forgot_Err,forgot_Data) {
									if(forgot_Data){
										var gen_link = config.Host+"forgot/"+common_helper.encrypt(find_mail_data._id.toString())
										emailDB.findOne({ title: "user_forgot_password" }).exec(function (etemprErr, etempdata) {
										
											if(etempdata){
												var etempdataDynamic = etempdata.mailcontent.replace(/###EMAIL###/g, Indata.email).replace(/###LINK###/g,gen_link);
												mail.sendMail({ to: Indata.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
													SuccessData.Msg= "Reset link has been sent your email please check"
													setTimeout(checkid_values, 600000, Indata.email,forget_email_check);
													res.send(SuccessData)
												})	
											}
										})
										
									}else{
										ErrorData.verify_type = "forgot_query_fail"
										ErrorData.Msg = forgot_Err
										setTimeout(checkid_values, 2000, Indata.email,forget_email_check);
										res.send(ErrorData);
									}
								});

							}else{
								ErrorData.verify_type = "forgot_query_fail"
								ErrorData.Msg = "Forgot request fail"
								setTimeout(checkid_values, 2000, Indata.email,forget_email_check);
								res.send(ErrorData);
							}
						}
					}else{
						setTimeout(checkid_values, 2000, Indata.email,forget_email_check);
						ErrorData.verify_type = "unknownemail"
						ErrorData.Msg = "Email is not registered please sign up now"
						res.send(ErrorData);
						
					}
				});
			}else{
				ErrorData.verify_type = "timeout"
				ErrorData.Msg = "Password reset link already sent to your email.Please reset within 15 mins."
				res.send(ErrorData);
				
			}
		}else{
			ErrorData.verify_type = "captcha"
			ErrorData.Msg = "Invalid Access"
			res.send(ErrorData)
			return false;
		}	
		});		
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData);
		return false;
	}
});


router.post('/reset_linkverify', (req, res) => {
	try{

		var inData = {
			_id:common_helper.decrypt(req.body.user_id),
			currenttime : req.body.validate ,
		}

		var where ={ _id : new ObjectId(inData._id),reset_password:1 }
        var gets ={_id:1,status:1,reset_password:1,reset_time:1}
        users_table.findOne(where,gets).exec(function (reset_find_err, reset_find) {
        	
        	if(reset_find){
				var validate_time = reset_find.reset_time.replace(/-/gi, "/");
				var curentvalidate_time = inData.currenttime.replace(/-/gi, "/");
				var checktime = new Date(validate_time);
				var currenttime =new Date(curentvalidate_time);
				var current_year = currenttime.getFullYear();
				var current_month = +currenttime.getMonth() + 1;
				current_month = +(current_month < 10 ? "0" : "") + current_month;
				var current_day  = +currenttime.getDate();
				current_day = +(current_day < 10 ? "0" : "") + current_day;
				var current_dates = current_day+"/"+current_month+"/"+current_year;
				var check_year = checktime.getFullYear();
				var check_month = +checktime.getMonth() + 1;
				check_month = +(check_month < 10 ? "0" : "") + check_month;
				var check_day  = +checktime.getDate();
				check_day = +(check_day < 10 ? "0" : "") + check_day;
				var check_dates = check_day+"/"+check_month+"/"+check_year;
				var difference =currenttime.getTime() - checktime.getTime();
				var resultInMinutes = Math.round(difference / 60000);

				if(current_dates==check_dates && resultInMinutes <= 16){
					SuccessData.Msg ='link active'
					res.send(SuccessData);
				}else{

					var find_reset = {_id:new ObjectId(reset_find._id)}
					var update_reset = {"$set" : {reset_password : 0 } }
					users_table.updateOne(find_forgot,update_forgot).exec(function (forgot_Err,forgot_Data) {
						if(forgot_Data){
							ErrorData.verify_type = "timeout"
							ErrorData.Msg = 'Link has been expired'
							res.send(ErrorData);
						}
					});
					
				}

        	}else{
				ErrorData.verify_type = "expiry"
				ErrorData.Msg = 'Link has been expired'
				res.send(ErrorData)
        	}
        });


	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});



//user reset password 
router.post('/reset_pass', (req, res) => {
	try{
		var inData = req.body	
		var where = {_id:common_helper.decrypt(inData.u_id),reset_password:1};
		var gets = {_id:1,email:1}
		users_table.findOne(where,gets).exec(function (user_find_err, user_find) {
			if(user_find){
				var find_reset = {_id:user_find._id}
				var update_reset = {"$set" : {secure_pass:common_helper.encrypt(inData.password),reset_password : 0 } }
				users_table.updateOne(find_reset,update_reset).exec(function (reset_update_Err,reset_update) {
				if(reset_update){
					SuccessData.Msg ='Your password has been reset successfully'
					res.send(SuccessData);
					setTimeout(checkid_values, 1000, user_find.email ,forget_email_check);
				}else{
					ErrorData.Msg = "Your password is not reset"
					res.send(ErrorData)
				}
				});		
			}else{
				setTimeout(checkid_values, 1000, user_find.email ,forget_email_check);
				ErrorData.Msg = "Link has been expired"
				res.send(ErrorData)

			}
		});
		
	}catch(e){
		
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)

	}
});

router.post('/logout_status', async function(req,res){
	var updataUser = await users_table.updateOne({_id:req.body.id},{$set:{login_status:0}});
	res.json({status:true,message:0});
});

router.post('/getallactivity', async (req, res) => {
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
			cnt = 
			{$or:
				[
				{'username': { $regex: '.*' + search + '.*',$options: 'i' }}
				]
			}
		}
		// else{
		// 	cnt = {'user_id': { $regex: '.*' + req.body.id + '.*',$options: 'i' }};
		// }

		async.parallel({
			bannerTotalCount:function(cb) {      
			  userActivity.find( cnt ).countDocuments().exec(cb);
			},
			bannerData:function(cb) {
			  userActivity.find( cnt ).limit(limit).skip(skip).sort( srt ).lean().exec(cb);
	   	},
		},async function(err,results){
		  if (err) return res.status(500).send(err);
		  for(let i=0; i<results.bannerData.length; i++){
		  	var userDetails = await users_table.findOne({_id:results.bannerData[i].user_id});
		  	results.bannerData[i].username = userDetails.user_name;
		  }
		  var resultData = results.bannerData;
		  apiresponse.data     = [];
		  apiresponse.status   = true;
		  apiresponse.data     = resultData;
		  apiresponse.bannerTotalCount = results.bannerTotalCount;
		  apiresponse.message  = "";
		  res.json(apiresponse);

		})
	}
	catch(e){
		console.log("getfaqlist",e);
	}
});

router.post('/userlogout',common_helper.tokenMiddleware, async (req,res) =>{
	try{
		var r = require('ua-parser').parse(req.headers['user-agent']);
		var	ip = req.ip.replace('::ffff:', '');
		var userDetails = await users_table.findOne({_id:req.userId}).lean();
		var mydata ={
			"user_id"   : req.userId,
			"ip"   : ip,
			"location"   : "",
			"browser"   : r.ua.toString(),
			"os"   : r.os.toString(),
			"type"   : 'Log out',
			"username":userDetails.user_name,
			"useremail":userDetails.email
		} 
		var mydatas = new userActivity(mydata)
		mydatas.save();	
		res.json({success:true})
	}
	catch(e){
		console.info("add_history", e)
	}		
})

router.post('/change_pass',common_helper.tokenMiddleware, async function(req,res){
	try{
		var pass_change = common_helper.encrypt(req.body.password);
		console.log(pass_change,'already present');
		var userData = await users_table.findOne({_id:req.userId}).lean();
		if(pass_change == userData.secure_pass){
			var new_pass = common_helper.encrypt(req.body.newpass);
			console.log(new_pass,'newpass');
			if(new_pass == pass_change){
				res.json({status:false,msg:'Same password not allowed'});
			}else{
				var changePassword = await users_table.updateOne({_id:req.userId},{$set:{secure_pass:new_pass}});
				if(changePassword){
					res.json({status:true,msg:'Password updated Successfully!'});
				}else{
					res.json({status:false,msg:'Unable to Update'});
				}
			}
		}else{
			res.json({status:false,msg:'Please Enter Correct password'});
		}
	}
	catch(e){
		console.info("change_pass", e);
	}	
})


function checkid_values(value,datacheck) {
  var index = datacheck.indexOf(value);
  if (index > -1) {
    datacheck.splice(index, 1);
  }
}


module.exports = router;