var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    "admin_name":{type: String,default:""},
    "admin_emailid":{type: String,default:""},
    "admin_password":{type: String,default:""},
    "admin_pattern":{type: Number,default: 123},
    "admin_image":{type: String, default: ''},
    "address":{type: String, default: ''},
    "originalAddress":{type: String},
    "reset_password":{type: Number,default:0},
    "set_password":{type: Number,default:0},
    "failed":{type: Number,default:0},
    "failed_otp":{type: String,default:''},
    "reset_password_timer":{type: Date,default: Date.now},
    
    
    "dashboard":{type: Number,default:1},
    "profile_settings":{type: Number,default:1},
    "sub_admin":{type: Number,default:0},
    "email_template":{type: Number,default:0},
    "admin_withdraw":{type: Number,default:0},
    "currency_details":{type: Number,default:0},
    "pair_details":{type: Number,default:0},
    "site_settings":{type: Number,default:0},
    "cms_page":{type: Number,default:0},
    "faq":{type: Number,default:0},
    "news":{type: Number,default:0},
    "meta_content":{type: Number,default:0},
    "deposit":{type: Number,default:0},
    "withdraw":{type: Number,default:0},
    "trade_history":{type: Number,default:0},
    "history_active":{type: Number,default:0},
    "history_cancelled":{type: Number,default:0},
    "profit":{type: Number,default:0},
    "currency_profit":{type: Number,default:0},
    "user_details":{type: Number,default:0},
    "token_details":{type: Number,default:0},
    "contact_us":{type: Number,default:0},

    "role":{type: Number,default:0}, //1 admin 0subaddmin
    "status":{type: Number,default:0},
    "createddate": { type: Date, default: Date.now },
    "modifieddate":{ type: Date, default: Date.now }
});
module.exports = mongoose.model('admin', adminSchema, 'admin')
