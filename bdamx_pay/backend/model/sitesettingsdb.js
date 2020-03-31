var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sitesettingSchema = new Schema({
	"copyrights":{type: String,default:""},
	"description":{type: String,default:""},
	"fb":{type: String,default:""},
	"insta":{type: String,default:""},
	"linked_in":{type: String,default:""},
	"sitename":{type: String,default:""},
	"site_maintenance_reason":{type: String,default:""},
	"site_maintenance":{type: Number,default:0},
	"snapchat":{type: String,default:""},
	"title":{type: String,default:""},
	"twitter":{type: String,default:""},
	"youtube":{type: String,default:""},
	"home_video":{type: String,default:""},	
	"site_logo":{type: String,default:""},
	"favicon":{type: String,default:""},
	"contact_mail":{type: String,default:""},
	"contact_phone":{type: String,default:""},
	"contact_address":{type: String,default:""},
	"adminAddress":{type: String,default:""},
	"Adminkeyaddress":{type: String,default:""},
	"AdminprivateKey":{type: String,default:""},
	"Admincode":{type: String,default:""},
	"ProfitAddress":{type: String,default:""},
	"Profitkey":{type: String,default:""},
	"github":{type: String,default:""},
	"media":{type: String,default:""},
	"Scatterprivate":{type: String,default:""},
	"Scatteradminacc":{type: String,default:""},
	"contact_mapadddress":{type: String,default:""},
	"developersupport_mail":{type: String,default:""},
	"custeomerservice_mail":{type: String,default:""},
	"deposit_content":{type: String,default:""},
	"withdraw_content":{type: String,default:""},
	"exchange_content":{type: String,default:""},
	"timing":{type: String,default:""},

});
module.exports = mongoose.model('sitesetting', sitesettingSchema, 'sitesetting')



