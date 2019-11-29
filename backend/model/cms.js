var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cmsSchema = new Schema({
	"page_content":{type: String,default:""},
	"page":{type: String,default:""},
	"page_heading":{type: String,default:""},
	"page_name":{type: String,default:""},
	"link_name":{type: String,default:""},
	"link_url":{type: String,default:""},
	"image_url":{type: String,default:""},
	"status":{type: Number,default:0},
	"image":{type: Number,default:0},// 0 = no image, 1= image
	"modified_date": { type: Date, default: Date.now },
});
module.exports = mongoose.model('cms', cmsSchema, 'cms')
