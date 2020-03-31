var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Withdraw = new Schema({

	"useraddress"   : { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	"toAddress":{type:String,default:''},
	"transaction_id"        : {type:String,default:""},
	"withamount"   : {type:Number},
	"receiveamount"   : {type:Number, default: 0},
	"withfee"   : {type:Number, default: 0},
	"withcurrency"   : { type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
	"admin_status"   : {type:String, default: '0'},
	"user_status"              : {type: String, default: '0'},
	"fees": { type: Number, default: 0 },
	"feeStatus": { type: Number, default: 0 },
	"feeType"        : {type:String,default:""},
	"currency_name"         :{type:String,default:""},
	"comments"              : {type: String, default:""},  
	"reason"              : {type: String, default: "''"},  
  	"withdraw_type"         : { type: Number, default: 0 }, //0-external 1-internal
  	"currencytype"         :{type:String,default:""},
	"payment_type"          :{type:String,default:""},
	"reject_reason"         : {type:String,default:""},
	"created_date"          : { type: Date, default: Date.now },
  	"status_at"          : { type: Date, default: Date.now }

});
module.exports = mongoose.model('Withdraw', Withdraw, 'Withdraw')
