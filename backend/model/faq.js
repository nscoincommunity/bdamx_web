var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var faqSchema = new Schema({
    "question":{type: String,default:""},
    "answer":{type: String,default:""},
    "status":{type: Number,default:0},
    "createddate": { type: Date, default: Date.now },
    "modifieddate": { type: Date, default: Date.now },


});
module.exports = mongoose.model('faq', faqSchema, 'faq')
