var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var metaSchema = new Schema({
	"title":{type: String,default:""},
	"keyword":{type: String,default:""},
	"description":{type: String,default:""},
	"createddate": { type: Date, default: Date.now },
	"modifieddate": { type: Date, default: Date.now },
});

module.exports = mongoose.model('metacontent', metaSchema, 'metacontent')