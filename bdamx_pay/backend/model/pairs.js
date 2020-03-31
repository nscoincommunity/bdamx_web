var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pairsSchema = new Schema({
  "marketPrice"   : { type: Number, default: 1 },
  "fromCurrency"  : { type: mongoose.Schema.Types.ObjectId, ref: 'currency'}, 
  "toCurrency"    : { type: mongoose.Schema.Types.ObjectId, ref: 'currency'}, 
  "status"        : { type: Number, default: 1 }, // {1-active,0-deactive}
  "created"       : { type: Date, default: Date.now },
  "minTrade"      : { type: Number, default: 0.01 },
  "makerFee"      : { type: Number, default: 0.01 },
  "takerFee"      : { type: Number, default: 0.01 },
  "fee"           : { type: Number, default: 1 },//exchange fee
  "feeType"       : { type: Number, default: 1 },
  "price"         : { type: Number, default: 0 },
  "calculate_market_price"         : { type: Number, default: 0 },
  "percentage"         : { type: Number, default: 0 },
  "percentage_amount"         : { type: Number, default: 0 },
  "option"         : { type: Number, default: 0 },
  "usdprice"      : { type: Number, default: 1 },
  "change"        : { type: Number, default: 1 },
  "volume"        : { type: Number, default: 1 },
  "value"        : { type: Number, default: 1 },
  "high"       	  : { type: Number, default: 1 },
  "low"           : { type: Number, default: 1 },
  "min_amt"        :{type:Number,default:0},
  "max_amt"        :{type:Number,default:0},
  "buylimit"       :{type:Number,default:1},
  "selllimit"       :{type:Number,default:1},
  "buylimitvalue"   :{type:Number,default:1},
  "selllimitvalue" :{type:Number,default:1},
  "buyrate"        :{type:Number,default:1},
  "sellrate"       :{type:Number,default:1},
  "pair"          : String,
});

module.exports = mongoose.model('pairs', pairsSchema, 'pairs')
