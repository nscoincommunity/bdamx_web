var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tokendetails = new Schema({
	"name"   : {type:String},
	"symbol"   : {type:String},
	"decimal"   : {type:Number},
	"conaddress"   : {type:String},
	"pairlist"   : {type:String},
	"user_id"   : {type:String},
	"logo"   : {type:String},
	"hash"   : {type:String},
	"TokenId"   : {type:Number, default: 0},
	"status"   : {type:String, default: "Pending"},
	"basecoin"   : {type:String, default: ""},
	"reply"   : {type:String, default: ""},
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('Tokendetails', Tokendetails, 'Tokendetails')