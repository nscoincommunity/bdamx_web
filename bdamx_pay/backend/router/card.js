const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var card 		   = require('../model/card');
var deposit        = require('../model/deposit');
var userWallet     = require('../model/userWallet');
var async          = require('async');
let common 		   = require('../helpers/common');
const stripe = require('stripe')('sk_test_WgWLtx4vPW6V2D2TPlB9rCpd009dI06n9d');


var valid = require('card-validator');
var CreditCard = require('credit-card');

 

router.post('/addCard',common.tokenMiddleware, async function(req, res){
	try{
		var data = req.body;
		console.log(data,'ddddd')
		var numberValidation = valid.number(data.cardnumber);
		if (!numberValidation.isPotentiallyValid) {
		  res.json({status:false,msg:'Invalid Credit Card'});
		}
		if (numberValidation.card) {
		  console.log(numberValidation.card.type); // 'visa'
		  data.cardtype = numberValidation.card.type;
		  data.user_id = req.userId;
		  var cardDetails = {
			  cardType: data.cardtype,
			  number: data.cardnumber,
			  expiryMonth: data.expiry,
			  expiryYear: data.year,
			  cvv: data.cvv
			};
		  var validation = CreditCard.validate(cardDetails);
		  if(!validation.validCardNumber){
		  	res.json({status:false,msg:'Invalid Credit Card number'});
		  	return;
		  }else if(!validation.validExpiryMonth && !validation.validExpiryYear){
		  	res.json({status:false,msg:'Invalid expired date'});
		  	return;
		  }else if(!validation.validCvv){
		  	res.json({status:false,msg:'Invalid CVV'});
		  	return;
		  }else if(data._id){
		  	var cardDetails = await card.update({_id:data._id},{$set:data});
			res.json({status:true, msg:'Updated Successfully!'});
		  }else{
		  	var cardExists = await card.findOne({cardnumber:data.cardnumber}).lean();
			if(!cardExists){
				var cardData = await card.create(data);
				res.json({status:true,msg:'Created Successfully!'})
			}else{
				res.json({status:false,msg:'Unable to insert'});
			}
		  }
		}else{
			res.json({status:false,msg:'Invalid card'});
		}

	}catch(e){
		console.log(e,'error')
	}
});

router.get('/getcardetails', common.tokenMiddleware, async function(req,res){
	try{
		var cardDetails = await card.find({user_id:req.userId});
		res.json({status:true, data:cardDetails});
	
	}catch(e){
		ErrorData.verify_type = "catch"
		ErrorData.Msg = e
		res.send(ErrorData)
	}
});

router.post('/deletecard', async function (req, res){
	try{
		var customerData = await card.findOneAndRemove({_id:req.body._id});
		res.json({status:true, msg:'Deleted Successfully!'})
	}catch (err){
			console.info("deletebanner", err)
		}
});

router.post('/updatecard', async function (req, res){
	try{
		var customerData = await card.update({_id:req.body._id},{$set:req.body});
		res.json({status:true, msg:'Updated Successfully!'})
	}catch (err){
			console.info("deletebanner", err)
		}
});

router.post('/clientSecret', common.tokenMiddleware, async function(req,res){
	try{
	  const paymentIntent = await stripe.paymentIntents.create({
	    description: 'Software development services',
		shipping: {
		    name: 'Jenny Rosen',
		    address: {
		      line1: '510 Townsend St',
		      postal_code: '98140',
		      city: 'San Francisco',
		      state: 'CA',
		      country: 'US',
		    },
  		},
	  amount: req.body.amount * 100,
	  currency: 'usd',
	  });
	  const clientSecret = paymentIntent.client_secret;
	  res.json({status:true,data:clientSecret});
	}catch(err){

	}
})

router.post('/depositData', common.tokenMiddleware, async function(req, res){
	var depositData = req.body;
	let amount = depositData.depamt / 100
	try{
		var data = {
			depamt:amount,
			approve_amount:amount,
			status:1,
			txnid:depositData.txnid,
			gateway_type:'stripe',
			depstatus:'Completed',
			currency_name:depositData.currency,
			currency_type:depositData.currency_type,
			currency:depositData.currencyId,
			userId:req.userId
		}
		var deposits = await deposit.create(data);
		var userWalletUpdate = await userWallet.update({user_id:req.userId,"wallet.currencyid":depositData.currencyId},{$inc:{"wallet.$.amount":amount}});
		res.json({status:true,msg:'Updated Successfully'});

	}catch(err){

	}
})

module.exports = router;