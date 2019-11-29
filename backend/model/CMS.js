var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetaSchema = new Schema({
	"pageheading"   : {type:String},
	"pagecontent"   : {type:String},
	"pagename"   : {type:String},
	
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('CMS', MetaSchema, 'CMS')