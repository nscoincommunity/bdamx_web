var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deviceSchema = new Schema({
	"device_type":{type: String,default:""},
	"device_token":{type: String,default:""}
});
module.exports = mongoose.model('device', deviceSchema, 'device')
