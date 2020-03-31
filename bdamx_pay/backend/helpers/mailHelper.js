let common       = require('./common');
let sitesettingsDB = require('../model/sitesettingsdb');
let configUrl   = require('../Nodedetails/config');

var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
// 	service: "Gmail",
// 	auth: {
// 	  user: 'info@bdamcoin.com',
// 	  pass:'bdamblock**!!$AX77'
// 	}	
// });


// var transporter = nodemailer.createTransport({
//     host: 'smtp.zoho.com',
//     port: 465,
//     secure: true,// upgrade later with STARTTLS
//     auth: {
//     user: "jaganathan@bitdeal.net",
//     pass: "Osiz@123"
//     }
// });

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
			values.html = values.html.replace(/###SITELINK###/g, configUrl.Host).replace(/###LOGO###/g, config.site_logo).replace(/###CONTACTUS###/g, configUrl.Host+"#contact-us").replace(/###TELEGRAM###/g, config.telegram).replace(/###TWITTER###/g, config.twitter).replace(/###YOUTUBE###/g, config.youtube).replace(/###MEDIA###/g, config.media).replace(/###REDIT###/g, config.redit).replace(/###LINKEDIN###/g, config.linked_in).replace(/###GITHUB###/g, config.github);
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