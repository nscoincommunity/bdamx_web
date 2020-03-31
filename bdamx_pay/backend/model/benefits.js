var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var faqSchema = new Schema({
    "title":{type: String,default:""},
    "image":{type: String,default:""},
    "content":{type: String,default:""},
    "status":{type: Number,default:0},
    "createddate": { type: Date, default: Date.now },
    "modifieddate": { type: Date, default: Date.now },
});

module.exports = mongoose.model('benefits', faqSchema, 'benefits')
