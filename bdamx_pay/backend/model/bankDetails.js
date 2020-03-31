var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bankDetail = new Schema({
	"country"   : {type:String},
	"bank"   : {type:String},
	"ifsccode"   : {type:String},
	"branch"   : {type:String},
	"status" : { type: Number, default: 1 },
	"datetime"   : {type: Date, default: Date.now}
});
module.exports = mongoose.model('bankdetails', bankDetail, 'bankdetails')