var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var marketpricecurrency_chartSchema = new Schema({
  "currencyId"          : { type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
  "currencySymbol"      : { type: String },
  "price"               : { type: Number },
  "created_date"        : { type: Date, default: Date.now },
  });

module.exports = mongoose.model('marketpricecurrency_chart', marketpricecurrency_chartSchema, 'marketpricecurrency_chart')