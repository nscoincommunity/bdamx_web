let common       = require('./common');
let sitesettingsDB = require('../model/sitesettingsdb');

var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
	
	host: 'smtp.gmail.com',
	/*host: 'tls://smtp.gmail.com',*/
	port: 465,
	//port: 587,
	secure: true,
	auth: {
	  user: 'admin@bdamcoin.com',
	  pass:'bbamblock**!!!DFG^$'
	}	
});



module.exports = {
	sendMail : function(values,callback){
		sitesettingsDB.findOne({},function(err,admin){

			var config  = admin;
			values.html = values.html.replace(/###fblink###/g, config.fb).replace(/###twitterlink###/g, config.twitter).replace(/###phone###/g, config.contact_phone).replace(/###logo###/g, config.site_logo).replace(/###aboutus###/g, config.description).replace(/###address###/g, config.contact_address).replace(/###mail###/g, config.contact_mail);
			let mailOptions = {
		      from: 'admin@bdamcoin.com',
		      to: values.to,
				  subject: values.subject,
				  html: values.html,
		    };
			transporter.sendMail(mailOptions, function(error, info){
			  if (error) {
			    console.log(error);
			  }
			});
	    	callback(true);
    	});
	}	
};

