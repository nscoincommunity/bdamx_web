const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
let common       = require('../../helpers/common');
 let tradeHelper       = require('../../helpers/trade');
var validator  = require('node-validator');
var config = require("../../Nodedetails/config");
let pairDB     = mongoose.model('pairs');
let orderDB    = mongoose.model('CoinOrder');
let mapDb      = mongoose.model('mapping');
let profitDb   = mongoose.model('profit');
let currencyDb = mongoose.model('currency');
let WalletDB = mongoose.model('userWallet');
let depositDB = mongoose.model('deposit');
let WithdrawDB = mongoose.model('Withdraw');
let sitekeysDB = mongoose.model('Sitekeys');
var socketio  = require( 'socket.io' );
var http         = require('http');
var https        = require('https');
var Web3 = require('web3');
var web3 = new Web3("https://mainnet.infura.io/v3/682d21aed8204bfe8370b50a93aed124");
var getJSON = require('get-json');
const fs = require('fs');
var cors = require('cors');
var url = require('url');
var symbolsDatabase = require("./symbols_database");
var RequestProcessor = require("./request-processor").RequestProcessor;
var requestProcessor = new RequestProcessor(symbolsDatabase);
'use strict';
// const fs = require('fs');
router.use(cors());
var server;
// if(process.env.NODE_ENV == 'prod'){
//   var options = {
//     key: fs.readFileSync('1.key'),
//     cert: fs.readFileSync('1.crt'),
//   };
//   server = https.createServer(options,router);
// } else {
  server = http.createServer(router);
// }
var mapTrade = function(){};
let _tradeMap = new mapTrade();
router.get('/updatePairs', (req,res) => {
  common.redisTradeunset('', (etempdata) => {
	common.redisTradeConfig('', (etempdata) => {
		res.json({status: true})
	});
  });
})

/*router.get('/updateCurrency', (req,res) => {
	currencyDb.find().exec(function(err,resdata1){
		for (var i = 0; i < resdata1.length; i++) {
			var newcontractAddress = resdata1[i].contractAddress.toLowerCase();
			currencyDb.updateMany({_id:resdata1[i]._id},{$set : {contractAddress:newcontractAddress}}).exec(function(errBal,resBal){});
		}
		res.send('success');
	});
});*/

router.post('/highchartdata', (req,res) => {
  
		   var param = req.body.pairname;
	let path = 'public/Highchart/'+param+'.json'; 
	if (fs.existsSync(path)) {
		let rawdata = fs.readFileSync('public/Highchart/'+param+'.json');  
		let student = JSON.parse(rawdata);  
		var valarr = student;
	}
	else
	{
		var valarr = [];
	}
	 res.json({
			status: true,
			value: (valarr)
		}) 
	
  
})

/*router.get('/updatebasecoin', (req,res) => {
	currencyDb.updateMany({},{$set : {curnType:2}}).exec(function(errBal,resBal){
		res.send('success');
	});
});*/

router.post('/getContract', (req,res) => {
	try{
		
		getJSON("https://api.etherscan.io/api?module=contract&action=getabi&address=0xa94758d328af7ef1815e73053e95b5f86588c16d", function(errorBal,response){
				var abiArray = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_burner","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
				//var abiArray = JSON.parse(response.result);
				var contract = new web3.eth.Contract(abiArray, req.body.contractAddress, { from: req.body.account });
				sitekeysDB.find().exec(function(err, resData){
					var siteKeys = resData;
					res.json({status: true,contract:JSON.stringify(contract), contractDetails : siteKeys});
				})
				
			})
	}
	catch(e){
	 res.json({status: false});
	}
});
router.post('/getCurrency', (req,res) => {
	try{
		if(req.body){
			if(req.body.address)
			{
				var address = (req.body.address).toLowerCase();
				common.redisConfig('currency', 'status,1', (curnRes) => {
					WalletDB.findOne({user_id : address}).exec(function(err,resdata1){
						var walletBalance = [];
						if(resdata1&&resdata1.wallet&&resdata1.wallet.length>0)
						{
							for (var i = 0; i < resdata1.wallet.length; i++) {
								walletBalance[resdata1.wallet[i].currencyid] = resdata1.wallet[i];
							}
						}
						if(curnRes&&curnRes.length>0)
						{
							for (var j = 0; j < curnRes.length; j++) {
								if(walletBalance[curnRes[j]._id]!=undefined&&walletBalance[curnRes[j]._id]!='undefined')
								{
									curnRes[j].balance = walletBalance[curnRes[j]._id].amount;
									curnRes[j].hold = walletBalance[curnRes[j]._id].hold;
								}
								/*if(curnRes[j].curnType==2&&curnRes[j].baseCoin=='ETH')
								{
									curnRes[j].abiArray = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_burner","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
								}*/
							}
						}
						res.json({status: true,data:curnRes});
					});
				});
			}
			else
			{
				
				res.json({status: false});
			}
		}
		else{
			
			res.json({status: false});
		}
	}
	catch(e){
	   
		res.json({status: false});
	}
});
router.get('/getallCurrency', (req,res) => {
	try{
		
				common.redisConfig('currency', 'status,1', (curnRes) => {
				 res.json({status: true,data:curnRes});
				});
		   
	   
	}
	catch(e){
		res.json({status: false});
	}
});
router.post('/checkPair', (req,res) => {
	try{
		if(req.body){
			if(req.body.pair)
			{
			 var pair = req.body.pair;
			}
			else
			{
				var pair = '';   
			}
			common.redisTradeConfig(pair, (etempdata) => {
				if(pair!='')
				{
					if(etempdata)
					{
						res.json({
							status: true,
							Message: etempdata,
						})
					}
					else
					{
						res.json({
							status: false,
							"Message": "No Pairs Available!",
						}) 
					}
				}
				else
				{
					if(typeof etempdata[0]!= 'undefined' && typeof etempdata[0]!= undefined)
					{
						res.json({
							status: true,
							Message: etempdata[0],
						})
					}
					else
					{
						res.json({
							status: false,
							"Message": "No Pairs Available!",
						}) 
					}
				}
			});
		}
	}
	catch(e){
		res.json({
			status: false,
			"Message": "No Pairs Available!",
		}) 
	}
})


router.get('/getPair', (req,res) => {
	try{
		common.redisTradeConfig('', (etempdata) => {
			res.json({
				status: true,
				Message: etempdata
			}) 
		});
	}
	catch(e){
		res.json({
			status: false,
			Message: "No Pairs Available!",
		}) 
	}
})
router.post('/cancelOrder', (req,res) => {
	try{
		let userId  = req.body.userId;
		tradeHelper.cancelOrder(req.body.orderId,userId, (resOrder) => {
			res.json(resOrder);
		});
	} catch (e) {
		res.status(401).send('unauthorized')
	}
})

router.post('/get_cancelled', (req,res) => {
  try{
	orderDB.find({$and:[{'status': "cancelled"},{'userId':req.body.userId},{"pairName":req.body.pairid}]},function(err,resdata){
		res.json(resdata)
	})
  } catch (e) {
	  res.status(401).send('unauthorized')
  }
})

router.get('/PairsGet', (req, res) => {
  common.redisTradeConfig('', (etempdata) => {
   
	var pairarr = {};
	var valarr = [];
	for(var i =0; i<etempdata.length; i++)
	{
		if(!pairarr[etempdata[i].toCurrency.currencySymbol])
		{
			pairarr[etempdata[i].toCurrency.currencySymbol] =[];

		}
		pairarr[etempdata[i].toCurrency.currencySymbol].push(etempdata[i]);
	}
	
	var j = 0;
	Object.keys(pairarr).map(function(key) {
		valarr[j] = {'currency':key,'pairs':pairarr[key]};
		j++;
	});
	res.json({
		status: true,
		Message: (valarr)
	}) 
  });

})

router.post('/getParcularCurrency', (req, res) => {
	try {
	  
		currencyDb.find({currencySymbol:req.body.address}).exec(function (err, resData) {
if(resData.length > 0)
{
	res.json({
		status: true,
		Message: resData
	}) 
}
else{
	res.json({
		status: false,
		Message: []
	}) 
}
	  })
	}
	catch(e)
	{
console.log("Particular currency error",e)
	}
})
// router.get('/chartdata2', (req, res) => {
//     var param = req.query.pairname;
//     let path = 'public/Highchart/'+param+'.json'; 
//     if (fs.existsSync(path)) {
//         let rawdata = fs.readFileSync('public/Highchart/'+param+'.json');  
//         let student = JSON.parse(rawdata);  
//         var valarr = student;
//     }
//     else
//     {
//         var valarr = [];
//     }
//      res.json({
//             status: true,
//             Message: (valarr)
//         }) 

// });

router.get('/chart/:config', (request, response) => {
  try {
	var uri = url.parse(request.url, true);
	var action = uri.pathname;
	symbolsDatabase.initGetAllMarketsdata();
	switch (action) {
	  case '/chart/config':
		action = '/config';
		break;
	  case '/chart/time':
		action = '/time';
		break;
	  case '/chart/symbols':
		action = '/symbols';
		break;
	  case '/chart/history':
		action = '/history';
		break;
	}
	return requestProcessor.processRequest(action, uri.query, response);
  }
  catch (err) {
	console.log("chart/:config", err);
  }
});

router.get('/markets', (req, res) => {
  try {
	pairDB.aggregate([{
	  $project: {
		_id: 0,
		name: "$pair",
		"type": { $literal: "crypto" },
		"exchange": { $literal: "Bdamx" }
	  }
	}
	]).exec(function (err, pairdata) {
	   
	  res.json(pairdata);
	});
  }
  catch (err) {
	console.log("markets", err);
	res.json(err);
  }
});

router.get('/chartData', (req, res) => {
  try {
	var url = require('url');
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;

	var pair = req.query.market;
	var start_date = req.query.start_date;
	var end_date = req.query.end_date;
	var spl = pair.split("_");
	var first = spl[0];
	var second = spl[1];
	var pair_name = pair;

	var pattern = /^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;
	if (start_date) {
	  if (!pattern.test(start_date)) {
		res.json({ "message": "Start date is not a valid format" });
	  }
	}
	else {
	  res.json({ "message": "Start date parameter not found" });
	}
	if (end_date) {
	  if (!pattern.test(end_date)) {
		res.json({ "message": "End date is not a valid format" });
	  }
	}
	else {
	  res.json({ "message": "End date parameter not found" });
	}

	var sDate = start_date + 'T00:00:00.000Z';
	var eDate = end_date + 'T23:59:59.000Z';
	if (sDate > eDate) {
	  res.json({ "message": "Please ensure that the End Date is greater than or equal to the Start Date" });
	}

	pairDB.find({ pair: pair_name }).select("_id").select("pair").exec(function (err, pairdata) {
	  try {
		if (pairdata.length > 0) {
		  currencyDb.find({ "currencySymbol": first }).select("_id").exec(function (ferr, fres) {
			var fCurr = fres[0]._id;
			currencyDb.find({ "currencySymbol": second }).select("_id").exec(function (serr, sres) {
			  var sCurr = sres[0]._id;
			  var pairId = pairdata[0]._id;
			  var pairname = pairdata[0].pair;
			  var project = { _id: 0, Date: "$Date", pair: { $literal: pairname }, low: "$low", high: "$high", open: "$open", close: "$close", volume: "$volume", exchange: { $literal: "Bdamx" } };

			  orderDB.aggregate([
				{
				  $match: {
					pair: mongoose.mongo.ObjectId(pairId),
					$or: [{ status: 'partial' }, { status: 'filled' }],
					"datetime": {
					  "$gte": new Date(sDate),
					  "$lt": new Date(eDate)
					},
				  }
				},
		   
				{
          "$group": {
          "_id": {
            "year": { "$year": "$datetime" },
            "dayOfYear": { "$dayOfYear": "$datetime" },
            "hour": { "$hour": "$datetime" },
            "interval": {
              "$subtract": [ 
                { "$minute": "$datetime" },
                { "$mod": [{ "$minute": "$datetime"}, 1] }
              ] 
            }         
          },
          count: {
            "$sum": 1
          },
          Date: { $first: "$datetime" },
          pair: { $first: '$pair' },
          low: { $min: '$Price' },
          high: { $max: '$Price' },
          open: { $first: '$Price' },
          close: { $last: '$Price' },
          volume: { $sum: '$filledAmount' }
          }
				},
				{
				  $project: project,
				},
				{
				  $sort: {
					"Date": 1,
				  }
				}
			  ]).exec(function (err, result) {
			  	var final_result=[]
			  	// for(var i=0;i<result.length;i++){
			  	// 	var datas={
						// 	Date:new Date(result[i].Date).getTime(), 
						// 	pair:result[i].pair, 
						// 	low:result[i].low, 
						// 	high:result[i].high, 
						// 	open:result[i].open, 
						// 	close:result[i].close, 
						// 	volume:result[i].volume, 
						// 	exchange:result[i].exchange
			  	// 	}
			  	// 	final_result.push(datas)
			  	// }
			  	console.log(result,'rrressssssulllll')
					res.json(result);
			  });
			});
		  });
		}
		else {
		 
		  res.json({ "message": "No Pair Found" });
		}
	  }
	  catch (e) {
		console.log("no pair", e);
	  }
	});
  }
  catch (err) {
	console.log("chartData", err);
  }
});

router.post('/get_activeorder', (req,res) => {
  try{
	 orderDB.aggregate([
		  {
			$lookup:
			{
			  from: 'pairs',
			  localField: 'pair',
			  foreignField: '_id',
			  as: 'pairname'
			}
		  },
		  {
			$project: {
			  "userId" :1,
			  "_id" :1,
			  "Amount" :1,
			  "filledAmount" :1,
			  "pendingTotal" :1,
			  "Price"  :1,
			  "Type"   :1,
			  "Total"  :1,
			  "ordertype" :1,
			  "datetime" :1,
			  "pairName":1,
			  "status" :1,
			  "makerFee" :1,
			  "takerFee" :1,
			  "pair": { $arrayElemAt: ["$pairname.pair", 0] },
			}
		  },
		  { $match : {$and:[{'userId': req.body.userId},{$or:[{status:'active'},{status:'partially'}]}]}},
		  {$sort:{datetime : -1}},
	  ]).exec(function(err,resdata){
		res.json(resdata)
	  })
  } catch (e) {
	  res.status(401).send('unauthorized')
  }
})

router.post('/get_history', (req,res) => {
  try{
	 mapDb.aggregate([
		  {
			$lookup:
			{
			  from: 'pairs',
			  localField: 'pair',
			  foreignField: '_id',
			  as: 'pairname'
			}
		  },
		  {
			$project: {
							"_id" : 1,
							"sellorderId" : 1,
							"sellerUserid" : 1,
							"tradePrice"   : 1,
							"filledAmount" : 1,
							"buyorderId"  : 1,
							"buyerUserid" : 1,
							"datetime"    : 1,
							"pair"        : 1,
							"pairName"   : 1,
							"total" : 1,
							"buyFee" : 1,
							"ordertype" : 1,
							"sellFee" : 1,
			  "pair": { $arrayElemAt: ["$pairname.pair", 0] },
			}
		  },
		  { $match : {$or:[{buyerUserid:req.body.userId},{sellerUserid:req.body.userId}]}},
		  {$sort:{datetime : -1}},
	  ]).exec(function(err,resdata){
		res.json(resdata)
	  })
  } catch (e) {
	  res.status(401).send('unauthorized')
  }
})

router.post('/get_deposit', (req,res) => {
  try{
	depositDB.find({"userId":req.body.userId},function(err,resdata){
		res.json(resdata)
	})
  } catch (e) {
	  res.status(401).send('unauthorized')
  }
})
router.post('/get_withdraw', (req,res) => {
  try{
	WithdrawDB.find({"useraddress":req.body.userId},function(err,resdata){
		res.json(resdata)
	})
  } catch (e) {
	  res.status(401).send('unauthorized')
  }
})


module.exports = router;