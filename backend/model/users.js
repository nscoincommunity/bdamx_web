var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({

      "email": {type: String,default:""},
      "otp": {type: String,default:""},
      "ipaddress": {type: String,default:""},
      "status": {type: Number, default: 0},
      "regstatus": {type: Number, default: 0},
      "address": {type: String,default:""},
      "originalAddress": {type: String,default:""},
      "createddate": { type: Date, default: Date.now }
      
});


// usersSchema.methods.findSimilarId = function findSimilarId (req,cb) {
//    return this.model('users').find(req,cb);
// };

module.exports = mongoose.model('users', usersSchema, 'users')
