var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cmsSchema = new Schema({
	"user_id"   : {type:String},
	"currencysymbol"   : {type:String},
	"bank"   : {type:String},
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('userbankdetails', cmsSchema, 'userbankdetails')