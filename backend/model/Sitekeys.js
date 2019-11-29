var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SitekeysSchema = new Schema({
	
	"contact_address":{type: String,default:""},
	"adminAddress":{type: String,default:""},
	"Adminkeyaddress":{type: String,default:""},
	"AdminprivateKey":{type: String,default:""},
	"Admincode":{type: String,default:""},
	"content1":{type: String,default:""},
	"ProfitAddress":{type: String,default:""},
	"Profitkey":{type: String,default:""},
	"Scatterprivate":{type: String,default:""},
	"Scatteradminacc":{type: String,default:""},
	"blockCount":{type:Number},

});
module.exports = mongoose.model('Sitekeys', SitekeysSchema, 'Sitekeys')