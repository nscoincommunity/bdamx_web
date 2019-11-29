var express = require('express');
var router = express.Router();
var config = require("../../Nodedetails/config");
const mongoose = require('mongoose');
let adminDB = mongoose.model('admin');
let curencyDB = mongoose.model('currency');
let emailDB = mongoose.model('Emailtemplate');
let common = require('../../helpers/common');
let mail = require('../../helpers/mailHelper');
var validator = require('node-validator');
const rpc = require('node-json-rpc2');
var config      = require("../../Nodedetails/config");
var getJSON = require('get-json');
let mapDb    = mongoose.model('mapping');

let pairs_table    = mongoose.model('pairs');
var Request     = require("request");

var socket = 0;

exports.SocketInit = function (socketIO)
{
   common.SocketInit(socketIO);
   socket = socketIO;
}


router.get('/getcurrency_usd', (req, res) => {
	try {
		curencyDB.find().exec(function (err, resData) {
		// common.redisConfig('currency', '', (resData) => {
			var resp=[];
			for(var i=0;i<resData.length;i++){
				var datas={
					currencySymbol:resData[i].currencySymbol,
					EstimatedUSD:resData[i].EstimatedUSD
				}
				resp.push(datas)
			}
			res.json(resp)
			// socket.sockets.emit('currencyUSD', resp);
		})		
	}
	catch (e) {
			res.json({
					status: false,
					"Message": "Something went wrong",
			})
	}
})

router.get('/home', (req, res) => {
		try {

				common.redisConfig('CMS', '', (resData) => {

						var getarray={};
						for (var i = 0; i < resData.length; i++) {

							 getarray[resData[i].pagename]=resData[i];
					 }

					 res.json({
						status: true,
						value: getarray
				})
			 })
				
		}
		catch (e) {
				res.json({
						status: false,
						"Message": "Something went wrong",
				})
		}
})


router.get('/getApiPrice', (req, res) => {


try{

	getJSON("https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken", function(errorBal,response){
		var objres = {usdprice:response.result.ethusd,gasprice:0};

		getJSON("https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=YourApiKeyToken", function(errorBal,response){
			var yourNumber = parseInt(response.result, 16);
			objres.gasprice = Math.ceil((yourNumber/1000000000));
			res.json(objres);
		});
	});
	}
	catch (err)
	{
		console.log("get api price", err)
	}
});
router.get('/metadetails', (req, res) => {
		try {

				common.redisConfig('Meta', '', (resData) => {

						var getarray={};
						for (var i = 0; i < resData.length; i++) {

							 getarray[resData[i].pagename]=resData[i];
					 }

					 res.json({
						status: true,
						value: getarray
				})
			 })
				
		}
		catch (e) {
				res.json({
						status: false,
						"Message": "Something went wrong",
				})
		}
})
router.get('/faqdetails', (req, res) => {
		try {

				common.redisConfig('FAQ', '', (resData) => {

						data = resData;
						res.json({
								status: true,
								value: data
						})
				})
				
		}
		catch (e) {
				res.json({
						status: false,
						"Message": "Something went wrong",
				})
		}
})
router.post('/contactrequest', function(req, res) {
		let getdet = req.body;


		try {
			let contactJson = {
					name: getdet.name,
					email: getdet.email,
					subject: getdet.subject,
					message: getdet.message,
					walladdress: getdet.walladdress,
					status: getdet.status
			}
			var check = validator.isObject()
			.withRequired('email', validator.isString({ regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email.' }))
			.withRequired('name', validator.isString())
			.withRequired('subject', validator.isString())
			.withRequired('message', validator.isString())
			.withRequired('walladdress', validator.isString())
			.withRequired('status', validator.isString());
			validator.run(check, getdet, function (errorCount, errors) {

					if (errorCount == 0) {
						 let ContactDB = mongoose.model('Contact');
						 ContactDB.create(contactJson, function (err, resData) {

								if(err)
								{
										res.json({ "status": false, "Message": "Something went wrong" });
								}
								else{
									 // common.redisConfig('Emailtemplate', 'title,contactrequest', (etempdata) => {
									 //    var etempdataDynamic = etempdata.mailcontent.replace(/###USERNAME###/g, getdet.name).replace(/###EMAIL###/g, getdet.email).repclace(/###SUBJECT###/g, getdet.subject).replace(/###MESSAGE###/g, getdet.message);
									 //    mail.sendMail({ to: getdet.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {

											 res.json({ "status": true, "Message": "Your request send successfully to our team" });

									//  })
									// })
							 }
					 });
				 }
				 else{
					 res.json({
							"status": false,
							"Message": "Invalid contact details",
					})
			 }

	 });
	}
	catch (e) {
		res.json({
				status: false,
				"Message": "Error occured",
		})
}
});

router.post('/RegOTPSend', function(req, res) {
	let getdet = req.body;
	try {
		let contactJson = {
			email: getdet.email,
			status: 0,
			regstatus: 0
		}
		var check = validator.isObject()
		.withRequired('email', validator.isString({ regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email.' }))
		validator.run(check, getdet, function (errorCount, errors) {
			if (errorCount == 0) {
				let usersDB = mongoose.model('users');
				let randomletters = Math.random().toString(36).substring(7);

				usersDB.find({ email: getdet.email }).exec(function (userErr, UserRes) {
					if(UserRes.length == 0)
					{
						contactJson.otp=randomletters;
						usersDB.create(contactJson, function (err, resData) {
							if(err)
							{
								res.json({ "status": false, "Message": "Something went wrong" });
							}
							else{
								emailDB.findOne({ title: "OTP" }).exec(function (etemprErr, etempdata) {
									console.log(etempdata, 'dddatatat')
									var etempdataDynamic = etempdata.mailcontent.replace(/###OTP###/g, randomletters).replace(/###EMAIL###/g, getdet.email);
									mail.sendMail({ to: getdet.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
									 res.json({ "status": true, "Message": "OTP sent to your given mail id" });
									})
								})
							}
						});
					}
					else{
						res.json({
						"status": false,
						"Message": "Email already exists",
						})
					}
				});
			}
			else{
				res.json({
				"status": false,
				"Message": "Invalid details ",
				})
			}

		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});
router.get('/btcAddress',function(req,res){
	var jsonrpc={
	'protocol' : config.bitcoin_rpc.protocol,
	'host' : config.bitcoin_rpc.host,
	'user' : config.bitcoin_rpc.user,
	'password' : config.bitcoin_rpc.password,
	'port' : config.bitcoin_rpc.port
	}
	console.log('jsonrpc',jsonrpc)
	rpcclient = new rpc.Client(jsonrpc);
	var method = 'getnewaddress';
	rpcclient.call({
		method: method,
		id: '1',
		jsonrpc: '2.0'
	}, (cerr, btc_address) => {
		if (!cerr) {
			res.json({ "status": true, "Message": "Registration completed successfully" ,"address":btc_address.result});
			// usersDB.updateOne({ "email": getdet.email,"otp":getdet.otp },{$set:{
			// "status": 1,
			// "regstatus": 1,
			// "address": btc_address.result.toLowerCase(),
			// 'originalAddress':btc_address.result
			// }}).exec(function(err, resUpdate){
			// 	if(err)
			// 	{
			// 		res.json({ "status": false, "Message": "Something went wrong" });
			// 	}
			// 	else{
			// 		res.json({ "status": true, "Message": "Registration completed successfully" ,"address":btc_address.result});
			// 	}
			// });
		}
		else{
			res.json({"status": false,"Message": "Error while creating address"})
		}
	})
})
router.post('/register', function(req, res) {
	let getdet = req.body;
	try {
		let contactJson = {
			email: getdet.email,
			otp: getdet.otp,
		}
		var check = validator.isObject()
		.withRequired('email', validator.isString({ regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email.' }))
		.withRequired('otp', validator.isString())
		.withRequired('ip', validator.isString())
		validator.run(check, getdet, function (errorCount, errors) {
			if (errorCount == 0) {
				let usersDB = mongoose.model('users');
				usersDB.find({ email: getdet.email,otp:getdet.otp,regstatus:0 }).exec(function (userErr, UserRes) {
				if(UserRes.length > 0){
					var jsonrpc={
						'protocol' : config.bitcoin_rpc.protocol,
						'host' : config.bitcoin_rpc.host,
						'user' : config.bitcoin_rpc.user,
						'password' : config.bitcoin_rpc.password,
						'port' : config.bitcoin_rpc.port
					}
					rpcclient = new rpc.Client(jsonrpc);
					var method = 'getnewaddress';
					rpcclient.call({
						method: method,
						id: '1',
						jsonrpc: '2.0'
					}, (cerr, btc_address) => {
						if (!cerr) {
							usersDB.updateOne({ "email": getdet.email,"otp":getdet.otp },{$set:{
								"status": 1,
								"regstatus": 1,
								"address": btc_address.result.toLowerCase(),
								'originalAddress':btc_address.result,
								//"ipaddress": getdet.ip,
							}}).exec(function(err, resUpdate){

							if(err)
							{
							res.json({ "status": false, "Message": "Something went wrong" });
							}
							else{


							res.json({ "status": true, "Message": "Registration completed successfully" ,"address":btc_address.result});

							}
							});
						}
						else{
							res.json({"status": false,"Message": "Error while creating address"})
						}
					})
				}
				else{
					res.json({"status": false,"Message": "Please provide vaild OTP"})
				}
				});
			}
			else{
				res.json({"status": false,"Message": "Invalid details "})
			}
		});
	}
	catch (e) {
		res.json({status: false,"Message": "Error occured"})
	}
});

router.post('/LogOTPSend', function(req, res) {
	let getdet = req.body;
	try {
		let contactJson = {
			email: getdet.email,
		}
		var check = validator.isObject()
		.withRequired('email', validator.isString({ regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email.' }))
		validator.run(check, getdet, function (errorCount, errors) {
			if (errorCount == 0) {
				let usersDB = mongoose.model('users');
				let randomletters = Math.random().toString(36).substring(7);

				usersDB.find({ email: getdet.email,regstatus:1}).exec(function (userErr, UserRes) {
					if(UserRes.length > 0)
					{
						if(UserRes[0].status == 1){
							contactJson.otp=randomletters;
							usersDB.updateOne({ "email": getdet.email},{ $set:contactJson}).exec(function(err, resUpdate){
								if(err)
								{
									res.json({ "status": false, "Message": "Something went wrong" });
								}
								else{
									emailDB.findOne({ title: "OTP" }).exec(function (etemprErr, etempdata) {
										var etempdataDynamic = etempdata.mailcontent.replace(/###OTP###/g, randomletters).replace(/###EMAIL###/g, getdet.email);
										mail.sendMail({ to: getdet.email, subject: etempdata.mailsubject, html: etempdataDynamic }, function (mailRes) {
										 res.json({ "status": true, "Message": "OTP sent to your given mail id" });
										})
									})
								}
							});
						}
						else{
							res.json({
								"status": false,
								"Message": "You have been deactivated by admin",
							})
						}						
					}
					else{
						res.json({
							"status": false,
							"Message": "Email id does not exists",
						})
					}
				});
			}
			else{
				res.json({
					"status": false,
					"Message": "Invalid details ",
				})
			}
		});
	}
	catch (e) {
		res.json({
			status: false,
			"Message": "Error occured",
		})
	}
});

router.post('/logintosite', function(req, res) {
		let getdet = req.body;

		try {
			let contactJson = {
					
					email: getdet.email,
					otp: getdet.otp,
			}
			var check = validator.isObject()
			.withRequired('email', validator.isString({ regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email.' }))
			.withRequired('otp', validator.isString())
			
			validator.run(check, getdet, function (errorCount, errors) {
					if (errorCount == 0) {
						 let usersDB = mongoose.model('users');
						
						 usersDB.find({ email: getdet.email,otp:getdet.otp,regstatus:1,status:1 }).exec(function (userErr, UserRes) {
if(UserRes.length > 0)
{
			res.json({ "status": true, "Message": "Logged in successfully","address": UserRes[0].address,"originaladdress":UserRes[0].originalAddress});

				}
				else{
						res.json({
								"status": false,
								"Message": "Please provide vaild OTP",
						})
				}
				});
				 }
				 else{
					 res.json({
							"status": false,
							"Message": "Invalid details ",
					})
			 }

	 });
	}
	catch (e) {
		res.json({
				status: false,
				"Message": "Error occured",
		})
}
});

router.post('/get_chartdata', async (req, res) => {
	try {
		var getData = [];
		const chartData =  await mapDb.find({pair: req.body.pair, "datetime":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}).lean();
		for(let i=0; i<chartData.length; i++){
			getData.push(chartData[i].tradePrice); 
		}
		console.log(getData,'getdata')
		res.json({status:true,data:getData});
	}
	catch (e) {
			res.json({
					status: false,
					"Message": "Something went wrong",
			})
	}
})


function getTimeFromDate(timestamp) {
	console.log("timestamp",timestamp)
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var time = new Date();

  console.log("timestamp",time.setHours(hours, minutes, seconds))
  return time.setHours(hours, minutes, seconds);
}

router.post('/get_pair_chart', async (req, res) => {
	try {
		var getData = [];

		console.log("req.body.pair",req.body)
		
		pairs_table.findOne({pair:req.body.pair}).exec(function (get_pairerr, get_pair) {
			if(get_pair){
				curencyDB.findOne({baseCoin:req.body.currency}).exec(function (get_currecnyerr, get_currecny) {
					 if(get_currecny){
					 	var getcurrency=get_currecny.currencyName
						var coingekkolink = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+getcurrency.toLowerCase()+"&order=market_cap_desc&per_page=100&page=1&sparkline=false"
						console.log(coingekkolink)
						Request.get({ url: coingekkolink}, function (e, r, body) { 
						try{
							if(body){
								console.log(typeof(body))
								console.log(JSON.parse(body))
								mapDb.find({pair:mongoose.Types.ObjectId( get_pair._id), "datetime":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}).exec(function (chartDataerr, chartData) {
								console.log(chartData)
								for(let i=0; i<chartData.length; i++){
								getData.push([chartData[i].tradePrice]); 
								}
								console.log(getData,'getdata')
								res.json({status:true,data:getData,currencydata:JSON.parse(body)[0]});								
								});
							}
							
						}catch(e){
							res.json({
							status: false,
							"Message": "Something went wrong",
							})			
						}
						});
						

					}
				});
				
				
			}else{
				res.json({
				status: false,
				"Message": "Something went wrong",
				})
			}
		});
		
	}
	catch (e) {
			res.json({
					status: false,
					"Message": "Something went wrong",
			})
	}
})


// router.post('/get_pair_chart', async (req, res) => {
// 	try {
// 		var getData = [];

// 		console.log("req.body.pair",req.body)
		
// 		pairs_table.findOne({pair:req.body.pair}).exec(function (get_pairerr, get_pair) {
// 			if(get_pair){
// 				mapDb.find({pair:mongoose.Types.ObjectId( get_pair._id), "datetime":{$gt:new Date(Date.now() - 24*60*60 * 1000)}}).exec(function (chartDataerr, chartData) {
// 					console.log(chartData)
// 					for(let i=0; i<chartData.length; i++){
// 					getData.push([new Date(chartData[i].datetime).getTime(),chartData[i].tradePrice]); 
// 					}
// 					console.log(getData,'getdata')
// 					res.json({status:true,data:getData});								
// 				});
				
// 			}else{
// 				res.json({
// 				status: false,
// 				"Message": "Something went wrong",
// 				})
// 			}
// 		});
		
// 	}
// 	catch (e) {
// 			res.json({
// 					status: false,
// 					"Message": "Something went wrong",
// 			})
// 	}
// })



module.exports = router;