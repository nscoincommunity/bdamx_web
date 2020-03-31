var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exchangeSchema = new Schema({

  "amount"        :{type:Number,default:0},
  "receive_amount":{type:Number,default:0},
  "fees"          :{type:Number,default:0},
  "fees_type"     :{type:String,default:""},
  "fromcurrency"   :{type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
  "tocurrency"      :{type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
  "price"            :{type:Number,default:0},
  "total_amount"            :{type:Number,default:0},
  "pair_id"         :{ type: mongoose.Schema.Types.ObjectId, ref: 'pairs'},
  "user_id"           :{ type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  "market_price"    :{type:Number,default:0},
  "pairs"            :{type:String,default:""},
  "status"          :{type:String,default:""},
  "oder_type"       :{type:String,default:""},
  "created_date"   : { type: Date, default: Date.now },
  "rejected_reason"   : { type: String,default:"" },
  "status_date"   : { type: Date, default: Date.now }

 
 

});

module.exports = mongoose.model('exchange', exchangeSchema, 'exchange')