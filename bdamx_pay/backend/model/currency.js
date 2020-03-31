var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currencySchema = new Schema({
  "currencyName": String,
  "curnType": { type: Number, default: 2 },
  "currencySymbol"      : String,
  "image"               : String,
  "minwithamt"          : Number,
  "maxwithamt"          : Number,
  "withdrawfee"         : Number,
  "feetype"             : { type: Number, default: 1 },// {0-amount,1-percentage}
  "status"              : { type: Number, default: 1 }, // {1-active,0-deactive}
  "decimals"            : { type: Number, default: 18 },
  "hold"                : { type: Number, default: 0 },
  "usd_price"           :{type:Number,default:0},
  "eur_price"           :{type:Number,default:0},
  "cny_price"           :{type:Number,default:0},
  "gbp_price"           :{type:Number,default:0},
  "jpy_price"           :{type:Number,default:0},
  "eth_price"           :{type:Number,default:0},
  "eos_price"           :{type:Number,default:0},
  "btc_price"           :{type:Number,default:0},
  "usdt_price"           :{type:Number,default:0},
  "hr_vl"             :{type:Number,default:0},
  "hr_change"         :{type:Number,default:0},
  "supply"              :{type:Number,default:0},
  "fee_type"            :{type:String,default:"percentage"},
  "Deposit_otp"         :{type:Boolean,default:true},
  "withdraw_otp"        :{type:Boolean,default:true},
  "contract_address"    :{type:String,default:""},
  "blockcount"          :{type:Number,default:0},
  "withdraw_limit"      :{type:Number,default:0},
  "created_date"        : { type: Date, default: Date.now },
  "modify_date"         : { type: Date, default: Date.now }
});

module.exports = mongoose.model('currency', currencySchema, 'currency')