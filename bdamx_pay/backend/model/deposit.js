var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var depositScema = new Schema({
  "userId": { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
  "currency": { type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
  "depamt": {type : Number, default : 0},
  "approve_amount"         : {type:Number,default:0},
  "depto": {type : String, default : ''},
  "txnid": {type : String, default : ''},
  "depstatus": { type: String, default: 'Completed' },
  "comment": {type : String, default : ''},
  "memo": {type : String, default : ''},
  "bankname"             :{type:String,default:""},
  "bankDetail": { type: mongoose.Schema.Types.ObjectId, ref: 'userbankinfo'},
  "currency_name"             :{type:String,default:""},
  "currency_type"             :{type:String,default:""},
  "gateway_type"         : {type:String,default:""},
  
  "blockcount"            :{type:Number,default:0},
  "admin_gatewayid"       :{ type: mongoose.Schema.Types.ObjectId, ref: 'adminbank'},
  "useraddress"          : {type:String,default:''},
  "fromaddress"          : {type:String,default:''},
  "cryptoaddress"          : {type:String,default:''},
  "status"               : {type:Number,default:0},
  "image"                 : {type:String,default:''},
  "createddate": { type: Date, default: Date.now },
  "reject_reason"         : {type:String,default:""},
  "status_at": { type: Date, default: Date.now }

  
});
module.exports = mongoose.model('deposit', depositScema, 'deposit');
