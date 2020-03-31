var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feaSchema = new Schema({
    "title":{type: String,default:""},
    "status":{type: Number,default:0},
    "createddate": { type: Date, default: Date.now },
    "modifieddate": { type: Date, default: Date.now },
});

module.exports = mongoose.model('faqcategory', feaSchema, 'faqcategory')
