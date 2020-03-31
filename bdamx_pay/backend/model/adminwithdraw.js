var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var depositScema = new Schema({
  "currency"   : String,
  "depamt"     : Number,
  "from_address" : String,
  "to_address" : String,
  "txnid"      : String,
  "createddate": { type: Date, default: Date.now },
  "status"     : String,
});
module.exports = mongoose.model('adminWithdraw', depositScema, 'adminWithdraw');