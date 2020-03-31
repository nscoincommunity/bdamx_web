var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comparisonSchema = new Schema({
    "categoryName":{type: String,default:""},
    "type":{type: String,default:""},
    "value":{type: String,default:""},
    "status":{type: String,default:""},
    "createddate": { type: Date, default: Date.now },
    "modifieddate": { type: Date, default: Date.now }
});
module.exports = mongoose.model('comparison', comparisonSchema, 'comparison')
