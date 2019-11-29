var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currencySchema = new Schema({
  "currencyName": String,
  "curnType": { type: Number, default: 2 },
  "currencySymbol": String,
  "image": String,
  "coinImage":String,
  "minwithamt": Number,
  "maxwithamt": Number,
  "withdrawfee": Number,
  "EstimatedBTC": Number,
  "EstimatedUSD": Number,
  "feetype": { type: Number, default: 1 },// {0-amount,1-percentage}
  "status": { type: Number, default: 1 }, // {1-active,0-deactive}
  "decimals": { type: Number, default: 18 },
  "TokenId": { type: Number, default: 0 },
  "contractAddress": { type: String, default: '' },
  "abiArray": { type: String, default: '' },
  "balance": { type: Number, default: 0 },
  "walletBalance": { type: String, default: 'Press Query' },
  "hold": { type: Number, default: 0 },
  "baseCoin": { type: String, default: '' }
});

module.exports = mongoose.model('currency', currencySchema, 'currency')