var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
	"user_id"       : { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	"address": { type: String, default: '' },
	"currencyid"	: { type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
	"currencyname" : {type: String, default: ''},
	"memo" : {type: String, default: ''},
	"datecreated"   : { type: Date, default: Date.now },
	"deposite":{type:Number,default:0}
	
});
module.exports = mongoose.model('coinAddress', addressSchema, 'coinAddress')