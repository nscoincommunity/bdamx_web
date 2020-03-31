var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cmsSchema = new Schema({
	"user_id"   : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	"ip"   : {type:String},
	"location"   : {type:String},
	"browser"   : {type:String},
	"type"   : {type:String},
	"comment"   : {type:String},
	"datetime"   : {type: Date, default: Date.now},
});
module.exports = mongoose.model('Useractivity', cmsSchema, 'Useractivity')