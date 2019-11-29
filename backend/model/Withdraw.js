var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Withdraw = new Schema({
	"useraddress"   : {type:String},
	"toAddress":{type:String,default:''},
	"withamount"   : {type:Number},
	"receiveamount"   : {type:Number, default: 0},
	"withfee"   : {type:Number, default: 0},
	"withcurrency"   : { type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
	"status"   : {type:String},
	"txid"   : {type:String},
	"datetime"   : {type: Date, default: Date.now},
	"fees": { type: Number, default: 0 },
	"feeStatus": { type: Number, default: 0 },
});
module.exports = mongoose.model('Withdraw', Withdraw, 'Withdraw')
