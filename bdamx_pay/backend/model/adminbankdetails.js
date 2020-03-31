var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cmsSchema = new Schema({
	"currencysymbol"   : {type:String},
	"bank"   : {type:String},
	"status" : { type: Number, default: 1 },
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('adminbankdetails', cmsSchema, 'adminbankdetails')