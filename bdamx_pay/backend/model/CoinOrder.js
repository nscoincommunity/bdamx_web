var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var genSchema = new Schema({
  "userId" : {type: String},
  "Amount" : { type: Number, default: 0 },
  "filledAmount" : { type: Number, default: 0 },
  "pendingTotal" : { type: Number, default: 0 },
  "Price"  : { type: Number, default: 0 },
  "Type"   : String,//buy or sell
  "Total"  : { type: Number, default: 0 },
  "ordertype" : { type: String }, // limit, instant,stop
  "datetime" : { type: Date, default: Date.now },
  "pair"   : { type: mongoose.Schema.Types.ObjectId, ref: 'pairs'},
  "pairName"   : String,
  "status" : String, //active,filled,cancelled,partial
  "makerFee"        : { type: Number, default: 0 }, // fee percentage
  "takerFee"        : { type: Number, default: 0 }, // fee percentage
  "Txhash"        : { type: String, default: "" }, // hash value
  "TxStatus"        : { type: Number, default: 0 } // 0-not done,1-done
});
module.exports = mongoose.model('CoinOrder', genSchema, 'CoinOrder')