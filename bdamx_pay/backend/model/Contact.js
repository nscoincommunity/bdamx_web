var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetaSchema = new Schema({
	"name"   : {type:String},
	"email"   : {type:String},
	"subject"   : {type:String},
	"message"   : {type:String},
	"reply"   : {type:String, default: ''},
	"status"   : {type:Number,default:1},
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('Contact', MetaSchema, 'Contact')