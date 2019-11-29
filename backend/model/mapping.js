var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genSchema = new Schema({
  "sellorderId" : {type: mongoose.Schema.Types.ObjectId, ref: 'trade'},
  "sellerUserid" : {type: String},
  "tradePrice"   : { type: Number, default: 0 },
  "filledAmount" : { type: Number, default: 0 },
  "buyorderId"  : {type: mongoose.Schema.Types.ObjectId, ref: 'trade'},
  "buyerUserid" : {type: String},
  "datetime"    : { type: Date, default: Date.now },
  "pair"        : { type: mongoose.Schema.Types.ObjectId, ref: 'pairs'},
  "pairName"   : String,
  "total" : { type: Number, default: 0 },
  "buyFee" : { type: Number, default: 0 },
  "ordertype" : { type: String, default: '' },
  "sellFee" : { type: Number, default: 0 }
});
module.exports = mongoose.model('mapping', genSchema, 'mapping')