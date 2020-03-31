var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ipblockSchema = new Schema({
    "user_ip":{type: String,default:""},
    "status":{type: Number,default:0},
    "loginattempt":{type: Number,default:0},
    "ucode":{type: Number,default:0},
    "emailid":{type: String,default:""},
    "createddate": { type: Date, default: Date.now }


});
module.exports = mongoose.model('ipblock', ipblockSchema, 'ipblock')
