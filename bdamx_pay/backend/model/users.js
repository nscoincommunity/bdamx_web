var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
      "email": {type: String},
      "secure_pass":{type: String},
      "terms": {type: Boolean},
      "user_name":{type: String,default:""},
      "reset_password":{type: Number,default:0},
      "reset_time":{type: String,default:""},
      "mobile":{type: String,default:""},
      "mobile_code":{type: String,default:""},
      "region_code":{type: String,default:""},
      "region":{type: String,default:""},
      "emailverify":{type: Number,default:0},
      "status": {type: Number, default: 0},
      "login_status": {type: Number, default: 0},
      "ipaddress": {type: String,default:""},
      "tfaenable": {type: Number, default: 0},
      "tfaenablekey": {type: String, default: ''},
      "createddate": { type: Date, default: Date.now },
      "modifydate": { type: Date, default: Date.now },
      "tfaenable": {type: Number, default: 0},
      "tfaenablekey": {type: String, default: ''},
      "first_name":{type: String,default:""},
      "last_name":{type: String,default:""},
      "address1":{type: String,default:""},
      "address2":{type: String,default:""},
      "city":{type: String,default:""},
      "state":{type: String,default:""},
      "zipcode":{type: String,default:""},
      "image":{type: String,default:""}   
});


module.exports = mongoose.model('users', usersSchema, 'users')
