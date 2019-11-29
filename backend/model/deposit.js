var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var depositScema = new Schema({
  "userId": { type: String},
  "currency": { type: mongoose.Schema.Types.ObjectId, ref: 'currency'},
  "depamt": {type : Number, default : 0},
  "depto": {type : String, default : ''},
  "txnid": {type : String, default : ''},
  "depstatus": { type: String, default: 'Completed' },
  "comment": {type : String, default : ''},
  "createddate": { type: Date, default: Date.now }
});
module.exports = mongoose.model('deposit', depositScema, 'deposit');
