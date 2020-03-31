var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
	"user_id"   : {type:String},
	"cardnumber"   : {type:String},
	"accountholdername"   : {type:String},
	"primary":{type: Number,default:0},
	"expiry"   	: {type:String},
	"year"   	: {type:String},
	"cardtype"  : {type:String},
	"cvv"   	: {type:String},
	"datetime"   	: {type: Date, default: Date.now}
});
module.exports = mongoose.model('card', cardSchema, 'card')