var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetaSchema = new Schema({
	"question"   : {type:String},
	"answer"   : {type:String},
	"status"   : {type:Number},
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('FAQ', MetaSchema, 'FAQ')