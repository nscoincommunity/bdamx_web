var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
	"userId":{type: String,default:""},
	"notification_type":{type: String,default:""},
	"status":{ type: Number, default: 0 },
	"amount":{type:String,default:""},
	"price":{type:String,default:""},
	"datetime"   : {type: Date, default: Date.now}
});
module.exports = mongoose.model('notification', notificationSchema, 'notification')
