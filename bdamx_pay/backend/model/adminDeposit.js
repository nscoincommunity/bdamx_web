var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var depositScema = new Schema({
  "paymenttype": String,
  "currency"   : String,
  "depamt"     : Number,
  "from_address" : String,
  "txnid"      : String,
  "createddate": { type: Date, default: Date.now },
  "status"     : String,
  "xmr_blockheight" : {type:Number,default:1795523},
});
module.exports = mongoose.model('adminDeposit', depositScema, 'adminDeposit');