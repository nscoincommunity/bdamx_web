var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var walletaddressSchema = new Schema({
  "btc_address" : {type: String, default: ''},
  "eth_address" : {type: String, default: ''},
  "eos_address"  : {type: String, default: ''},
  "usdt_address"  : {type: String, default: ''},
  "eth_balance"  : {type: String, default: ''},
  "usdt_balance"  : {type: String, default: ''},
  "btc_balance"  : {type: String, default: ''},
  "eos_balance"  : {type: String, default: ''}


});
module.exports = mongoose.model('adminaddress', walletaddressSchema, 'adminaddress')
