var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var walletSchema = new Schema({
	"user_id" : { type: String}, 
	"wallet" : [{
		"currencyid": { type: mongoose.Schema.Types.ObjectId, ref: 'currency'}, 
		"amount": {type: Number, default: 0},
		"hold": {type: Number, default: 0}
	}]
});
module.exports = mongoose.model('userWallet', walletSchema, 'userWallet')