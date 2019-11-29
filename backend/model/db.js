// Bring Mongoose into the app
var mongoose = require( 'mongoose' );
var config   = require("../Nodedetails/config");
// Create the database connection
//mongoose.connection.openUri(dbURI);

mongoose.connect(config.dbconnection, { useNewUrlParser: true })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.dbconnection);
  console.log('Mongoose default connection open to DATE' + new Date());
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected',new Date());
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

require('./admin');
require('./AdminActivity');
require('./Useractivity');
require('./sitesettingsdb');
require('./Meta');
require('./metacontentdb');
require('./CMS');
require('./Contact');
require('./FAQ');
require('./Emailtemplate');
require('./CoinOrder');
require('./pairs');
require('./profit');
require('./mapping');
require('./currency');
require('./users');
require('./userWallet');
require('./BalanceUpdation');
require('./Tokendetails');
require('./deposit');
require('./Withdraw');
require('./newsdb');
require('./Sitekeys');
// require('./AdminWithdraw');
