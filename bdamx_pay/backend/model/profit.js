var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profitSchema = new Schema({
  "profit_type"   :{type:String,default:""},
  "user_id"        :{ type: mongoose.Schema.Types.ObjectId, ref: 'users'},
  "currencyid"    :{ type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
  "profitamt"          :{type:Number,default:0},
  "created_date"  :{ type: Date, default: Date.now },
 
 
});

module.exports = mongoose.model('profit', profitSchema, 'profit')
