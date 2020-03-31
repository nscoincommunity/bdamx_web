const express = require('express');
const router = express.Router();

const config = require("../../Nodedetails/config");
const common_helper = require('../../helpers/common');
const custom_helper = require('../../helpers/custom');
const mail = require('../../helpers/mailHelper');

const mongoose = require('mongoose');
const validator = require('node-validator');
const getJSON = require('get-json');
const rpc = require('node-json-rpc2');

const adminDB = mongoose.model('admin');
const TokenDB  = mongoose.model('Tokendetails');
const WithdrawDB  = mongoose.model('Withdraw');
const depositDB  = mongoose.model('deposit');
const wallet = mongoose.model('userWallet');
const curencyDB = mongoose.model('currency');
const emailDB = mongoose.model('Emailtemplate');
const users_table = mongoose.model('users');
const ObjectId = require('mongodb').ObjectID;

let ErrorData = {
	status : false,
	verify_type : ""
}
let SuccessData = {
	status : true
}

let reg_check_id = [];

router.get('/countrylist', function(req, res) {
	try{

		let conutryList = [{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+537","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"},{"name":"land Islands","dial_code":"","code":"AX"},{"name":"Antarctica","dial_code":null,"code":"AQ"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cote d'Ivoire","dial_code":"+225","code":"CI"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Korea, Democratic People's Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Lao People's Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Réunion","dial_code":"+262","code":"RE"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan, Province of China","dial_code":"+886","code":"TW"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"}]
		res.send ({status:1,data:conutryList})
	}catch(e){

	}
});



//new user register
router.post('/enroll', function(req, res) {
	try{

		var Indata = req.body
		
			Indata.email = Indata.email.toLowerCase()
			Indata.user_name = Indata.user_name.toLowerCase()
			Indata.remote_ip = req.connection.remoteAddress.replace("::ffff:", "")
			var check_value = reg_check_id.indexOf(Indata.email)
			if (check_value === -1) {
				reg_check_id.push(Indata.email); 
				var validateData = {
					email:Indata.email,
					password:Indata.password,
					mobile : Indata.mobile
				}
				console.log(Indata)
				var Mail_check = common_helper.blocked_mail(validateData.email)
				if (Mail_check == "ok") {
					var Indata_validate = validator.isObject()
					.withRequired('email', validator.isString({ regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email.' }))
					.withRequired('password', validator.isString({ regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, message: 'Invalid password.' }))
					.withRequired('mobile', validator.isString({ regex: /^(\+\d{1,3}[- ]?)?\d{10}$/ , message: 'Invalid mobile number.' }))
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
													console.log(values)
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
		
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
		return false;
	}

});

//user login
router.post('/step_in', function(req, res) {
	try{

		let Indata = req.body
		console.log(Indata)
		Indata.email = Indata.email.toLowerCase();
		console.log(common_helper.encrypt(Indata.password))
		
		var Email_find =  {email : Indata.email}
		var Email_get = {email:1,secure_pass:1,emailverify:1,status:1,_id:1,user_name:1}
			users_table.findOne(Email_find,Email_get).exec(function (Email_find_Err, Email_find_Data) {
				if(Email_find_Data){
					console.log(common_helper.encrypt(Indata.password))
					if(Email_find_Data.secure_pass === common_helper.encrypt(Indata.password)){
						if(Email_find_Data.emailverify === 0){
							ErrorData.verify_type = "emailverify"
							ErrorData.Msg = "Email verifictaion is not completed please check your registered email and activate your account"
							res.send(ErrorData)
							
						}else if(Email_find_Data.emailverify === 1){
							if(Email_find_Data.status === 0){
								ErrorData.verify_type = "deactive"
								ErrorData.Msg = "Your email has been activated contact site admin"
								res.send(ErrorData)
								
							}else if(Email_find_Data.status === 1){
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
							return false
						}

					}else{
						ErrorData.verify_type = "Incorrect_pass"
						ErrorData.Msg = "Incorrect password"
						res.send(ErrorData)
						return false;	
					}

				}else{
					ErrorData.verify_type = "unregister"
					ErrorData.Msg = "Email is not registerd please signup now"
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
		console.log(Indata)
		
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

		var Indata = req.body
		Indata.email = Indata.email.toLowerCase();
		var check_value = forget_email_check.indexOf(Indata.email)
		
			if (check_value === -1) {
				forget_email_check.push(Indata.email); 
				var Find_email = { email : Indata.email}
				var Get_email = {email:1,reset_password:1,status:1,emailverify:1,_id:1,}
				users_table.findOne(Find_email,Get_email).exec(function (find_mail_err, find_mail_data) {
					if(find_mail_data){
						if(find_mail_data.emailverify === 0){
							setTimeout(checkid_values, 2000, Indata.email,forget_email_check);
							ErrorData.verify_type = "email_verified"
							ErrorData.Msg = "Email verifictaion is not completed con't able change password"
							res.send(ErrorData);						
						}else if(find_mail_data.status === 0){
							setTimeout(checkid_values, 2000, Indata.email,forget_email_check);
							ErrorData.verify_type = "deactive_status"
							ErrorData.Msg = "Account status deactive con't change password"
							res.send(ErrorData);						
						}else{
							
							if(find_mail_data.emailverify === 1 && find_mail_data.status === 1){
								
								var find_forgot = {_id:new ObjectId(find_mail_data._id)}
								var update_forgot = { "$set" : {reset_password : 1,reset_time : Indata.validate } }

								users_table.updateOne(find_forgot,update_forgot).exec(function (forgot_Err,forgot_Data) {
									if(forgot_Data){
										var gen_link = config.Host+"forgot/"+common_helper.encrypt(find_mail_data._id.toString())
										console.log(gen_link)
										emailDB.findOne({ title: "user_forgot_password" }).exec(function (etemprErr, etempdata) {
										console.log("etempdata",etempdata)
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
						ErrorData.Msg = "Email is not registerd please sign up now"
						res.send(ErrorData);
						
					}
				});
			}else{
				ErrorData.verify_type = "timeout"
				ErrorData.Msg = "Password reset link already sent your registered email & please try after 15 mins"
				res.send(ErrorData);
				
			}
				
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
        console.log(where,gets)
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




function checkid_values(value,datacheck) {
  var index = datacheck.indexOf(value);
  if (index > -1) {
    datacheck.splice(index, 1);
  }
}


module.exports = router;