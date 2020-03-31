var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cmsSchema = new Schema({
	"user_id"   : {type:String},
	"currencysymbol"   : {type:String},
	"bank"   : {type:String},
	"accountname"   : {type:String},
	"accountnumber"   : {type:String},
	"ifsccode"   : {type:String},
	"branch"   : {type:String},
	"country"   : {type:String},
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('userbankinfo', cmsSchema, 'userbankinfo')