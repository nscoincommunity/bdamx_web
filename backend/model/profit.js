var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var profitSchema = new Schema({
  "userid"      : { type: String},
  "currencyid"  : { type: mongoose.Schema.Types.ObjectId, ref: 'Currency'},
  "fees"        : { type: Number, default: 0 },
  "txfees"        : { type: Number, default: 0 },
  "fullfees"        : { type: Number, default: 0 },
  "type"        : { type: String, default: '' },
  "orderid"        : { type: String, default: '' },
  "txid"        : { type: String, default: '' },
  "date"        : { type: Date, default: Date.now },
});
module.exports = mongoose.model('profit', profitSchema, 'profit')