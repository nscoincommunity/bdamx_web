var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetaSchema = new Schema({
	"title"   : {type:String},
	"keyword"   : {type:String},
	"description"   : {type:String},
	"pagename"   : {type:String},
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('Meta', MetaSchema, 'Meta')

