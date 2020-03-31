var createError  = require('http-errors');
var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
var http         = require('http');
var https        = require('https');
var fs          = require('fs');
var Request     = require("request");
var cors        = require('cors');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var app         = express();
var router      = express.Router();
var multer      = require('multer');
var cloudinary  = require('cloudinary');
var config      = require("./Nodedetails/config");
var db          = require("./model/db");
var cron        = require('node-cron');
var bitcoin_rpc = require('node-bitcoin-rpc');
var Request     = require("request");
var rpc         = require('./Nodedetails/rpc');
var coinAddress = require('./model/coinAddress');
var adminwalletlogin = require('./model/adminAddress');
var marketpriceCurrency = require('./model/marketpricecurrency_chart');
var createError  = require('http-errors');
var wallet = require('./model/userWallet');
const Web3 = require('web3');
const port       = process.env.PORT;
console.log('config.dbconnection : '+config.dbconnection);
cloudinary.config({
    cloud_name  : config.cloud_name,
    api_key     : config.api_key,
    api_secret  : config.api_secret 
  });

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.set('port111', port);
console.log(port);
var api_hit_url    = config.api_hit_url_config;

console.log(__dirname,'dddddd')

 app.use(express.static(__dirname));

app.get('', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

// app.use(function(req, res, next) {
//   next(createError(404));
// });


var admin=require('./router/admin');
var faq=require('./router/faq');
var bankDetails=require('./router/bankDetails');
var adminbankdetails=require('./router/adminbankdetails');
var adminbankinfo=require('./router/adminbankinfo');
var news=require('./router/news');
var feature=require('./router/feature');
var learnmore=require('./router/learnmore');
var smartcase=require('./router/smartcase');
var cms=require('./router/cms');
var sitesetting=require('./router/sitesetting');
var metacontent=require('./router/metacontent');
var currencydetails=require('./router/currencydetails');
var currencypair=require('./router/currencypair');
var adminuser = require('./router/admin/auth');
var tradedet = require('./router/user/trade');
var userhome = require('./router/user/home');
var user_exchange = require('./router/exchange/user_exchange');
var webservice = require('./router/exchange/apiwebservice');
var admin_exchange = require('./router/exchange/exchange');
var userdet = require('./router/users');
var token = require('./router/token');
var contactus = require('./router/contactus');
var emailtemplate = require('./router/emailtemplate');
var paidin = require('./router/paidin');
var partners = require('./router/partners');
var customers = require('./router/customers');
var benefits = require('./router/benefits');
var markets = require('./router/markets');
var comparison = require('./router/comparison');
var faqcategory = require('./router/faqcategory');
var custom = require('./helpers/custom');
var fiat  =  require('./router/exchange/fiat');
var ipblock=require('./router/ipblock');
var card = require('./router/card');


app.use('/user', userdet);
app.use('/', userhome);

app.use('/exchange',  user_exchange);
app.use('/service',webservice);
app.use('/exchange', admin_exchange);
app.use('/BdAMx4fdex', adminuser);
app.use('/trade', tradedet);
app.use('/token', token);
app.use('/admin',admin);
app.use('/faq',faq);
app.use('/adminbankdetails',adminbankdetails);
app.use('/adminbankinfo',adminbankinfo);
app.use('/ipblock',ipblock);
app.use('/news',news);
app.use('/feature',feature);
app.use('/learnmore',learnmore);
app.use('/smartcase',smartcase);
app.use('/cms',cms);
app.use('/currencydetails',currencydetails);
app.use('/currencypair',currencypair);
app.use('/sitesetting',sitesetting);
app.use('/metacontent',metacontent);
app.use('/contactus',contactus);
app.use('/emailtemplate',emailtemplate);
app.use('/paidin', paidin);
app.use('/partners', partners);
app.use('/customers', customers);
app.use('/benefits', benefits);
app.use('/markets', markets);
app.use('/compare',comparison);
app.use('/faqcategory',faqcategory);
app.use('/custom', custom);
app.use('/fiat', fiat);
app.use('/bankDetails',bankDetails);
app.use('/card',card);

var Sitesetting = mongoose.model('Sitekeys');
var currency = mongoose.model('currency');
var pairs = mongoose.model('pairs')
var wallet = mongoose.model('userWallet');
var deposit = mongoose.model('deposit');
var Withdraw = mongoose.model('Withdraw');
var ProfitDB = mongoose.model('profit');
var admindeposit = require('./model/adminDeposit');
var users = require('./model/users');
let common = require('./helpers/common');
var getJSON = require('get-json');


// live
if(process.env.NODE_ENV == 'devel')
{
  var options = {
    key: fs.readFileSync('bdamx.key'),
    cert: fs.readFileSync('bdamx.crt')
  };
}
else
{
  var options = {
    key: fs.readFileSync('bdam.key'),
    cert: fs.readFileSync('bdam.crt')
  };
}

// console.log("rpcuser",common.encrypt_new("ijoi89oyiTYdtgrsezdlk"))
// console.log("rpcuser",common.decrypt_new(common.encrypt_new("ijoi89oyiTYdtgrsezdlk")))


console.log("https",common.encrypt_new("172.31.1.20"))
console.log("https",common.decrypt_new(common.encrypt_new("172.31.1.20")))



// console.log("rpcpassword",common.encrypt_new("khiUYFGydedRSr78ikhuikef"))
// console.log("rpcpassword",common.decrypt_new(common.encrypt_new("khiUYFGydedRSr78ikhuikef")))



// console.log("rpcallowip",common.encrypt_new("172.31.81.66"))
// console.log("rpcallowip",common.decrypt_new(common.encrypt_new("172.31.81.66")))


// console.log("rpcport",common.encrypt_new("7631"))
// console.log("rpcport",common.decrypt_new(common.encrypt_new("7631")))



// console.log("ETH HOST",common.encrypt_new("172.31.1.20"))
// console.log("ETH HOST",common.decrypt_new(common.encrypt_new("172.31.1.20")))


// console.log("ETH HOST",common.encrypt_new("8875"))
// console.log("ETH HOST",common.decrypt_new(common.encrypt_new("8875")))


var server = http.createServer(app);

// var server = https.createServer(options, app);
//   httpsAgent: new https.Agent({
//   ciphers: 'DES-CBC3-SHA'
// });

server.listen(port, () => console.log(`Express server running on port `+port));

process.on('SIGINT', () => {
  server.close(function(err) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected')
      process.exit(0)
    })
  })
});
// app.get('/app.js', (req, res) => {
//   res.send('Not Found');
// });

// app.use('/', express.static(__dirname + '/public'));

app.get('/ceckres', (req, res) => {
var admin = mongoose.model('admin');
    admin.find().exec(function(err,resData)
  {
    if (err) return res.status(500).send(error);
    var ticket_category = resData;
    res.send({status: true, data:ticket_category,err:err});
  });
  });



var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage,limits: {fileSize: 100000000} });

app.post("/csvupload",upload.array("uploads[]", 12), function (req, res) {
  if(req.files.length > 0){
    cloudinary.uploader.upload(req.files[0].path, function(result) {      
      res.json({"status": true,"result":result});
    });
  }
  else{
     res.json({"status": false});
  }
});

app.post("/upload",upload.array("uploads[]", 12), function (req, res) {
  if(req.files.length > 0){
    cloudinary.uploader.upload(req.files[0].path, function(result) {      
      res.json({"status": true,"result":result});
    });
  }
  else{
     res.json({"status": false});
  }
});


app.post("/multiupload", upload.array("uploads[]", 12), function (req, res) {
  try{
    if (req.files.length > 0) {

        var uploadLength = 0;
        let data = [];
        var totLength = req.files.length;
        for (var i = 0; i < req.files.length; i++) {
            cloudinary.uploader.upload(req.files[i].path, function (result) {
                data[uploadLength] = result.original_filename + ',' + result.secure_url;
                uploadLength = uploadLength + 1;
                if (totLength == uploadLength) {
                      res.json({ "status": true, value: data });

                }
            });
        }
    }
    else {
        res.json({ "status": false, Message: "Please upload valid file!" });
    }
}
catch(e){
  console.log("uploadPhoto",e);
}
});

app.use(function (req, res, next) {    
  res.setHeader('Access-Control-Allow-Origin', '*');   
  next();
});

var io = require('./helpers/socket').listen(server);
io.set("origins", "*:*");

let tradeHelper = require('./helpers/trade');
tradeHelper.SocketInit(io);



io.on('connection', function (socket) {
  socket.on('createOrder', function (data) {
    tradeHelper.createOrder(data, io);    
  })
  socket.on('userEmit', function (data) {
    tradeHelper.userEmit(data);
  });
  socket.on('deactivateuser', function (data) {
      io.emit('getdeactive', { message: data });
  });
   socket.on('logoutStatus', function (data) {
    io.emit('getlogoutStatus', { message: data });
  });
  socket.on('joined', function (data) {
    io.sockets.emit('joined', {'trade':1});
  });
  socket.on('join', function (data) {
    if (data.user_id && data.user_id != 0) {
      socket.join(data.user_id);
    }
    else {
      socket.join('Pair-' + data.pair_id);
    }
  });
});



/*********Deposit Corn******/
cron.schedule('* * * * *', function(){
  try{

  adminwalletlogin.find().exec(function(err_adwal,resData_adwal){
    var btchost     = common.decrypt_new(rpc.btcconfig.host);
    var btcport     = common.decrypt_new(rpc.btcconfig.port);
    var btcusername = common.decrypt_new(rpc.btcconfig.user);
    var btcpassword = common.decrypt_new(rpc.btcconfig.password);
    bitcoin_rpc.init(btchost, btcport, btcusername, btcpassword);
    bitcoin_rpc.call('listtransactions', ['*',1000], function (err, address) {
       if (err !== null){
      }
      else {
        var trans = address.result;
        trans.map(function(val,key){
          try {
            var txid = val.txid;
            var confirmations = val.confirmations;
            var blockhash     = val.blockhash;
            var blocktime     = val.blocktime;
            var trans_txid    = val.txid;
            var amount        = val.amount;
            var btc_addr      = val.address;
            var category      = val.category;
            var emailid      = val.account;            
            if(category == "receive" && amount!=0.0003 && btc_addr != resData_adwal[0].btc_address) {                
                var user_add_whr  = { "address" : btc_addr };
                coinAddress.find(user_add_whr).exec(function(user_err,user_det){
                  if(!user_err){
                    if(user_det.length > 0)
                    {
                    var user_id = user_det[0].user_id;
                    var user_dep_whr = { "userId" : mongoose.mongo.ObjectId(user_id), "txnid" : trans_txid };
                    deposit.find(user_dep_whr).exec(function(dep_whr,dep_det){
                      if(!dep_whr){
                        var dep_det_len = dep_det.length;
                        if(dep_det_len == 0){
                          var cur_whr ={ "currencySymbol" : "BTC" };
                          currency.find(cur_whr).exec(function(cur_err,cur_res){
                            if(!cur_err){
                              var curr_id  = cur_res[0]._id;
                              var walt_val = { "user_id" : mongoose.mongo.ObjectId(user_id) }
                              wallet.aggregate([
                              {$unwind: "$wallet"},
                              {
                                $match: {
                                "user_id": mongoose.mongo.ObjectId(user_id),
                                "wallet.currencyid": mongoose.mongo.ObjectId(curr_id)
                                }
                              },
                              {
                                $lookup: {
                                  from: "users",
                                  localField: "user_id",
                                  foreignField: "_id",
                                  as: "userstatus"
                                }
                              },
                              {
                                $lookup: {
                                  from: "currency",
                                  localField: "wallet.currencyid",
                                  foreignField: "_id",
                                  as: "currencyid"
                                }
                              },

                              {$project : {
                                "walletbalance":"$wallet.amount"
                              }}
                              ]).exec(function(tracwalerrsell,trackwallressell){
                              
                                  wallet.updateOne({ 'user_id': mongoose.mongo.ObjectId(user_id),"wallet.currencyid":curr_id},      { "$inc": { 'wallet.$.amount': +amount}},function(wal_err, wal_res){
                                    
                                    if(wal_err === null) {
                                      var payments = {
                                        "userId"     : mongoose.mongo.ObjectId(user_id),
                                        "cryptoaddress" : btc_addr,
                                        "depamt"      : +amount,
                                        "currency_name" : "BTC",
                                        "type"        : "BTC Payment",
                                        "txnid"        : trans_txid,
                                        "status"      : 1,
                                        "currency" : curr_id,
                                        "currency_type":"crypto"
                                      };

                                      deposit.create(payments,function(dep_err,dep_res){
                                      });
                                    } else {
                                    }
                                  });
                              });
                            } else {
                            }
                          });
                        } else {
                        }
                      } else {
                      }
                    });
                  }
                  } else {
                  }
                });
              }
              else if(category == "receive" && btc_addr == resData_adwal[0].btc_address) {
                  var admindepo = {
                    "txnid"      : trans_txid
                  }
                  admindeposit.find(admindepo).exec(function(err2,depositData){
                    if(depositData.length==0){
                      var newdeposit = {
                        paymenttype   : "crypto",
                        currency      : "BTC",
                        depamt        : amount,
                        from_address : btc_addr,
                        txnid         : trans_txid,
                        status        : "completed"
                      }
                      admindeposit.create(newdeposit,function(insErr,insData){
                        if(insData){                            
                        }
                      });
                    }
                  });
              } else {
              }
          }
          catch (err){
          }
        });
      }
    });



  });
}
catch(e){
  console.log("transactioncron",e);
}
});

//Eth balance cron for adminwallet

cron.schedule('* * * * *', function () {
  var getJSON = require('get-json');
  adminwalletlogin.findOne({}).exec((err, resData1) => {
    var responseData = JSON.parse(JSON.stringify(resData1))
    var blockcount = 1;
    getJSON(api_hit_url+"api?module=account&action=balance&address="+ responseData.eth_address+"&tag=latest", function (errorBal, response) {
      if (!errorBal) {
        try {
          if (response) {
            var value = response.result/1000000000000000000;
            adminwalletlogin.update({},{"$set":{'eth_balance': value}}).exec((err,resData) =>{

            })
          }
        }
        catch (err) {
          console.log('=+++++++++++++++++++',err)
        }
      }

    })
  

   //btc adminwallet balance update

    //usdt token balance update

    currency.findOne({currencySymbol:"USDT"}).exec((err,response)=>{
      var currencyResponse = JSON.parse(JSON.stringify(response));
      getJSON(api_hit_url+"api?module=account&action=tokenbalance&contractaddress="+currencyResponse.contractAddress +"&address="+ responseData.eth_address+"&tag=latest", function (errorBal, balReponse) {
          if(balReponse.result){
          var value = balReponse.result/100000000;
            adminwalletlogin.update({},{"$set":{'usdt_balance': value}}).exec((err,resData) =>{
          });
        }
      })
    })



    //eos token balance update

    currency.findOne({currencySymbol:"EOS"}).exec((err,response)=>{
      var currencyResponse = JSON.parse(JSON.stringify(response));
      getJSON(api_hit_url+"api?module=account&action=tokenbalance&contractaddress="+currencyResponse.contractAddress +"&address="+ responseData.eth_address+"&tag=latest", function (errorBal, balReponse) {
     
        if(balReponse.result){
          var value = balReponse.result/100000000;
            adminwalletlogin.update({},{"$set":{'eos_balance': value}}).exec((err,resData) =>{
          });
        }
      })
    })


    //btc adminwallet balance update

    var btchost     = common.decrypt_new(rpc.btcconfig.host);
    var btcport     = common.decrypt_new(rpc.btcconfig.port);
    var btcusername = common.decrypt_new(rpc.btcconfig.user);
    var btcpassword = common.decrypt_new(rpc.btcconfig.password);
    bitcoin_rpc.call('getbalance', [], function (err, response) {
      if(response && response.result){
        adminwalletlogin.update({},{"$set":{'btc_balance': response.result}}).exec((err,resData)=>{
        });
      }
    });

  });

});

   


//24hr volume change cron
cron.schedule('0 */45 * * * *',()=>{
  getJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,eos&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false%22', function(err,response){
   
    if(response){
      for(let items in response){
        updateCurrencyData(response,items);
      }
    }
  })

});

function updateCurrencyData(response, currencyData){
  switch (currencyData) {
     case 'eos': 
     var condition = { currencySymbol:'EOS' };
     break;
     
     case 'ethereum': 
     var condition = { currencySymbol: 'ETH' };
     break;
        
     case 'bitcoin': 
     var condition = { currencySymbol: 'BTC' };
     break;

     case 'tether': 
     var condition = { currencySymbol: 'USDT' };
     break;
  }
  currency.updateOne(condition,{$set:{'hr_vl':response[currencyData].usd_24h_vol, 'hr_change':response[currencyData].usd_24h_change}}).exec(function(err,updated){
  })
}



cron.schedule('* * * * *', function () {
  var getJSON = require('get-json');
  currency.findOne({currencySymbol:"USDT"}).exec((err, resData1) => {
    var responseData = JSON.parse(JSON.stringify(resData1))
    var blockcount = 1;
    getJSON(api_hit_url+"api?module=account&action=tokentx&sort=asc&contractaddress="+responseData.contractAddress+"&startblock="+blockcount+"&endblock=latest", function (errorBal, response) {
      if (!errorBal) {
        try {
          if (response.result.length > 0) {
             UpdateDeposit_ETH_USDT(response,0, responseData);
          }
        }
        catch (err) {
          console.log('=+++++++++++++++++++',err)
        }
      }
    })
  })  
});

  
function UpdateDeposit_ETH_USDT(response, inc, responseData){

  var currencySymbol = 'USDT';
  if (response.message == 'OK') {
    if (response.result[inc]) {
      var transaction = response.result[inc];
      var currencytable = {
        "currencySymbol": currencySymbol
      }
         if (responseData.contractAddress == transaction.contractAddress) {
           var address = transaction.to;
          coinAddress.find({address:transaction.to}).exec(function (err, userdata) {
            if (userdata.length > 0) {
              var fromaddress = transaction.from;
              var txid = transaction.hash;
              var value = transaction.value;
              var ether_balance = (value / 100000000);
              var confirmations = +transaction.confirmations;
            if(userdata[0].address === transaction.to){
              if (confirmations > 3) {
                var userdeposit_table = { "userId": mongoose.mongo.ObjectId(userdata[0].user_id), "txnid": txid }
                deposit.find(userdeposit_table).exec(function (err2, depositData) {
                  if (depositData.length == 0) {
                      if (responseData) {
                        var curr_id = responseData._id;
                        wallet.updateOne({ 'user_id': mongoose.mongo.ObjectId(userdata[0].user_id), "wallet.currencyid": curr_id }, { "$inc": { 'wallet.$.amount': +ether_balance } }, function (wal_err, wal_res) {
                          if (wal_err === null) {
                            var payments = {
                              "userId": mongoose.mongo.ObjectId(userdata[0].user_id),
                              "cryptoaddress": address,
                              "depamt": +ether_balance,
                              "currency_name": currencySymbol,
                              "txnid": txid,
                              "depstatus": 1,
                              "status": 1,
                              "currency":responseData._id,
                              "currency_type":"crypto"
                            };
                            deposit.create(payments, function (dep_err, dep_res) {
                              if (!dep_err) {
                                coinAddress.updateOne({address:address},{$set:{deposite:1}}).exec(function (err, userdatadd) {})
                                users.findOne({ '_id': mongoose.mongo.ObjectId(userdata[0].user_id) }).exec(function (err, value) {
                                  var amount = +ether_balance;
                                })
                              }
                            });
                          }
                        });
                      }
                      var inc2 = inc + 1;
                      UpdateDeposit_ETH_USDT(response, inc2, responseData)
                  }
                  else{
                    var inc2 = inc + 1;
                    UpdateDeposit_ETH_USDT(response, inc2, responseData)
                  }
                })
              }
              else{
                var inc2 = inc + 1;
                UpdateDeposit_ETH_USDT(response, inc2, responseData)
              }
            }
            
          }else{
              adminwalletlogin.find({'eth_address':address}).exec(function(adderr,adminconfirm){
                if(adminconfirm.length > 0){
                  var userdeposit_table = { "txnid": txid }
                  admindeposit.find(userdeposit_table).exec(function (err2, depositData) {
                    if (depositData.length == 0) {
                      var currencytable = {
                        "currencySymbol": currencySymbol
                      }
                      var currency = mongoose.model('currency');
                      currency.find(currencytable).exec(function (err3, currencydata) {
                        if (currencydata) {
                          var curr_id = currencydata[0]._id;
                          var payments = {
                            "from_address": fromaddress,
                            "depto": address,
                            "depamt": +ether_balance,
                            "currency": currencySymbol,
                            "comment": currencySymbol + " Payment",
                            "txnid": txid,
                            "depstatus": 1

                          };
                          admindeposit.create(payments, function (dep_err, dep_res) {
                          });
                        }
                      });
                    }
                  })              
                }
              })
              var inc2 = inc + 1;
              UpdateDeposit_ETH_USDT(response, inc2, responseData)
            }
          //ending
         });
       }else{
          var inc2 = inc + 1;
          UpdateDeposit_ETH_USDT(response, inc2, responseData)
        }   
  }else{
      var currency = mongoose.model('currency');
      var blockcnt = response.result[inc-1].blockNumber;
      currency.updateOne({currencySymbol:"USDT"},{$set:{blockcount:blockcnt}}).exec((err, resData1) => {
        return
      })      
    }

}
}


cron.schedule('* * * * *', function () {
  var getJSON = require('get-json');
  currency.findOne({currencySymbol:"EOS"}).exec((err, resData1) => {
    var responseData = JSON.parse(JSON.stringify(resData1))
    var blockcount = 1;
    getJSON(api_hit_url+"api?module=account&action=tokentx&sort=asc&contractaddress="+responseData.contractAddress+"&startblock="+blockcount+"&endblock=latest", function (errorBal, response) {
      if (!errorBal) {
        try {
          if (response.result.length > 0) {
             UpdateDeposit_ETH_EOS(response,0, responseData);
          }
        }
        catch (err) {
          console.log('=+++++++++++++++++++',err)
        }
      }
    })
  })  
});


function UpdateDeposit_ETH_EOS(response, inc, responseData){

  var currencySymbol = 'EOS';
  if (response.message == 'OK') {
    if (response.result[inc]) {
      var transaction = response.result[inc];
      var currencytable = {
        "currencySymbol": currencySymbol
      }
         if (responseData.contractAddress == transaction.contractAddress) {
           var address = transaction.to;
          coinAddress.find({address:transaction.to}).exec(function (err, userdata) {
            if (userdata.length > 0) {
              var fromaddress = transaction.from;
              var txid = transaction.hash;
              var value = transaction.value;
              var ether_balance = (value / 1000000000000000000);
              var confirmations = +transaction.confirmations;
            if(userdata[0].address === transaction.to){
              if (confirmations > 3) {
                var userdeposit_table = { "userId": mongoose.mongo.ObjectId(userdata[0].user_id), "txnid": txid }
                deposit.find(userdeposit_table).exec(function (err2, depositData) {
                  if (depositData.length == 0) {
                      if (responseData) {
                        var curr_id = responseData._id;
                        wallet.updateOne({ 'user_id': mongoose.mongo.ObjectId(userdata[0].user_id), "wallet.currencyid": curr_id }, { "$inc": { 'wallet.$.amount': +ether_balance } }, function (wal_err, wal_res) {
                          if (wal_err === null) {
                            var payments = {
                              "userId": mongoose.mongo.ObjectId(userdata[0].user_id),
                              "cryptoaddress": address,
                              "depamt": +ether_balance,
                              "currency_name": currencySymbol,
                              "txnid": txid,
                              "depstatus": 1,
                              "status": 1,
                              "currency":responseData._id,
                              "currency_type":"crypto"
                            };
                            deposit.create(payments, function (dep_err, dep_res) {
                              if (!dep_err) {
                                coinAddress.updateOne({address:address},{$set:{deposite:1}}).exec(function (err, userdatadd) {})
                                users.findOne({ '_id': mongoose.mongo.ObjectId(userdata[0].user_id) }).exec(function (err, value) {
                                  var amount = +ether_balance;
                                })
                              }
                            });
                          }
                        });
                      }
                      var inc2 = inc + 1;
                      UpdateDeposit_ETH_EOS(response, inc2, responseData)
                  }
                  else{
                    var inc2 = inc + 1;
                    UpdateDeposit_ETH_EOS(response, inc2, responseData)
                  }
                })
              }
              else{
                var inc2 = inc + 1;
                UpdateDeposit_ETH_EOS(response, inc2, responseData)
              }
            }
            
          }else{
              adminwalletlogin.find({'eth_address':address}).exec(function(adderr,adminconfirm){
                if(adminconfirm.length > 0){
                  var userdeposit_table = { "txnid": txid }
                  admindeposit.find(userdeposit_table).exec(function (err2, depositData) {
                    if (depositData.length == 0) {
                      var currencytable = {
                        "currencySymbol": currencySymbol
                      }
                      var currency = mongoose.model('currency');
                      currency.find(currencytable).exec(function (err3, currencydata) {
                        if (currencydata) {
                          var curr_id = currencydata[0]._id;
                          var payments = {
                            "from_address": fromaddress,
                            "depto": address,
                            "depamt": +ether_balance,
                            "currency": currencySymbol,
                            "comment": currencySymbol + " Payment",
                            "txnid": txid,
                            "depstatus": 1

                          };
                          admindeposit.create(payments, function (dep_err, dep_res) {
                          });
                        }
                      });
                    }
                  })              
                }
              })
              var inc2 = inc + 1;
              UpdateDeposit_ETH_EOS(response, inc2, responseData)
            }
          //ending
         });
       }else{
          var inc2 = inc + 1;
          UpdateDeposit_ETH_EOS(response, inc2, responseData)
        }   
  }else{
      var currency = mongoose.model('currency');
      var blockcnt = response.result[inc-1].blockNumber;
      currency.updateOne({currencySymbol:"EOS"},{$set:{blockcount:blockcnt}}).exec((err, resData1) => {
        return
      })      
    }

}
}

app.post('/userdepositcronETH',common.tokenMiddleware, (req, res) => {

  // return false 
  try{
    var user_id = req.userId;    
    adminwalletlogin.find({}).select('eth_address').exec(
      function(admin_err,admin_data){
        var admin_ethaddress = admin_data[0].eth_address;
        coinAddress.find({'user_id' : user_id,'currencyname': req.body.currency}).exec(function(err,userData){
        
            if(userData.length > 0){
              if(userData[0].address != undefined)
              {
                var account = userData[0].address;
                var max_blocknumber =  5229098;
                var getJSON = require('get-json');
                getJSON(api_hit_url+"api?module=account&action=txlist&address="+account+"&startblock="+max_blocknumber+"&endblock=latest", function(errorBal,response){
                    if (errorBal) return res.status(500).send(errorBal);
                    try
                    {
                      // response = JSON.parse(response);
                      if(response.result.length>0){
                       
                        return UpdateDeposit_ETH(response, user_id, res, "ETH",account,admin_ethaddress);
                      }
                      else{
                        return res.json({status : true,data:"NO Data found"});
                      } 
                    }
                    catch (err)
                    {
                      return res.json({status : true,data:"NO Data found"});
                    }
                  })
              }
              else{
                res.json({status : false});
              }
            }
            else{
              res.json({status : false});
            }
        });
    });    
  }
  catch (err)
  {
    console.log("GetcronETH", err)
  }
});


//admindeposit for eth
/*START - ETH-admin deposit*/
cron.schedule('* * * * *', function(){
 
  try{
  var max_blocknumber =  1;
  adminwalletlogin.findOne({}).exec(function(err_adwal,resData_adwal){
     getJSON(api_hit_url+"api?module=account&action=txlist&address="+resData_adwal.eth_address+"&startblock="+max_blocknumber+"&endblock=latest", function(errorBal,response){     
  
    
      try{
        
          adminDeposit_eth(response, "ETH");
      }
      catch (err)
      {
        console.log("ETH conn", err)
      }
    })
  });
}
catch(e){
  console.log("ETH corn",e);
}
});

function adminDeposit_eth(response,currencySymbol) {
try{    
  if(response.message == 'OK'){
      var transaction = response.result;
      for(var trr=0; trr<transaction.length;trr++){
        (function(){
            var tr = trr;
            var block_number  = transaction[tr].blockNumber;
            var address  = transaction[tr].to;
            var from_address  = transaction[tr].from;
            var txid     = transaction[tr].hash;
            var value    = transaction[tr].value;
            var ether_balance = (value/1000000000000000000);
            var confirmations =transaction[tr].confirmations;
            var userdeposit_table = {"txnid": txid}
            admindeposit.find(userdeposit_table).exec(function(err2,depositData){
              if(depositData.length==0){
                var newdeposit = {
                  paymenttype   : "crypto",
                  currency      : "ETH",
                  depamt        : +ether_balance,
                  from_address : from_address,
                  txnid         : txid,
                  status        : "completed"
                };
                admindeposit.create(newdeposit,function(insErr,insData){
                });                
              }
            })   
        })()
      }
    } else {
    }
  }
  catch(e){
    console.log("adminDeposit_eth",e);
  }
}
// END - ETH-admin deposit

/*START - ETH user to admin balance transfer*/
cron.schedule('* * * * *', function(){
  console.log("User to admin cron");
  try{
  adminwalletlogin.find().exec(function(err_adwal,resData_adwal){
    var host = common.decrypt_new(rpc.ethconfig.host);
    var port = common.decrypt_new(rpc.ethconfig.port);
    var password = common.decrypt_new(rpc.ethconfig.password);
    var web3 = new Web3("http://"+host+":"+port);
    web3.eth.getBlock('latest',function(err,getBlock) {
      web3.eth.getGasPrice(function(err, getGasPrice) {
        web3.eth.getAccounts(function(err, accounts) {    
          
          if(accounts!=undefined){
            accounts.forEach(function(id,val) {      
              web3.eth.getBalance(id, function(err, balance) {
                if(balance > 0) {
                if(id.toLowerCase() != resData_adwal[0].eth_address.toLowerCase() ){
                  var gaslimit  = 21000;
                  var fee       = getGasPrice * gaslimit;
                  var maxAmount = balance - fee;
                  if(maxAmount > 0){

                    web3.eth.personal.unlockAccount(id, password, 2000, function(err, res){
                      if(!err){
                        web3.eth.sendTransaction({from:id, to:resData_adwal[0].eth_address,value:maxAmount,gas:gaslimit,gasPrice:getGasPrice},function(error,txid){
                          
                          if(txid && txid != ""){         
                          }
                        });
                      }
                      else{
                        // console.log(err);
                      }
                    }); 
                  }
               }
               else{
               }
             }
            });
            });
          }
        });
      });
    });
  });
}
catch(e){
  console.log("ETH user to admin balance cron",e);
}
});
/*END - ETH user to admin balance transfer*/



//adminwallet transferamount

cron.schedule('* * * * *', function () {
  adminwalletlogin.findOne().exec(function (err_adwal, resData_adwal) {
    coinAddress.find({deposite:1},function(err,resdata){
      var currency = mongoose.model('currency');
      currency.findOne({currencySymbol:"USDT"}).exec((err, resData1) => {
        transfer_admin(resData_adwal.eth_address.toLowerCase(),resdata,resData1,0);
      })      
    })

  });
});

cron.schedule('* * * * *', function () {
  adminwalletlogin.findOne().exec(function (err_adwal, resData_adwal) {
    coinAddress.find({deposite:1},function(err,resdata){
      var currency = mongoose.model('currency');
      currency.findOne({currencySymbol:"EOS"}).exec((err, resData1) => {
        transfer_admin(resData_adwal.eth_address.toLowerCase(),resdata,resData1,0);
      })      
    })

  });
});

function transfer_admin(adminaddrs,users,currency,inc) {
  if(users[inc]){
    var eth_address = adminaddrs;
    getJSON(api_hit_url+"api?module=account&action=tokenbalance&contractaddress=" + currency.contractAddress + "&address=" + eth_address + "&tag=latest", function (errorBal, response) {
      if (errorBal) console.log("ERRORRR",errorBal);
      try {
        if (response.message == 'OK') {
          getJSON(api_hit_url+"api?module=contract&action=getabi&address=" + currency.contractAddress, function (errorAbi, abiResponse) {
              if (errorAbi) 
              if (abiResponse.message == 'OK' && abiResponse.result != '') {
                getJSON(api_hit_url+"api?module=account&action=tokenbalance&contractaddress="+currency.contractAddress+"&address="+users[inc].address+"&tag=latest", function (errorbal, userbal) {
                  if(+userbal.result > 0){
                    var host = common.decrypt_new(rpc.ethconfig.host);
                    var port = common.decrypt_new(rpc.ethconfig.port);
                    var password =common.decrypt_new(rpc.ethconfig.password);

                    var admin_address = adminaddrs;
                    var to_address = users[inc].address;
                    var contract_address = currency.contractAddress;
                    var web3 = new Web3(new Web3.providers.HttpProvider("http://"+host+":"+port));
                    var send_amount = userbal.result;
                    var password = password
                    const abi = JSON.parse(abiResponse.result);
                    const contract_ins = new web3.eth.Contract(abi, contract_address, { from: to_address,gas: 70000, gasPrice: "20000000000" });
                    try{
                      web3.eth.personal.unlockAccount(to_address, password, 2000, function (lock_err, lock_res) {
                          if (lock_err) {
                            console.log('=============>',lock_err)
                          }
                          if (lock_res) {
                            contract_ins.methods.transfer(admin_address, send_amount).send(function (trans_err, txid) {
                              if (txid != '') {
                                coinAddress.updateOne({address:to_address},{$set:{deposite:0}}).exec(function (err, userdatadd) {})
                              } else {
                                console.log("==================>>>>><<<<<<<<<<<",txid)
                              }

                            });
                          }
                          var inc2 = inc + 1;
                          transfer_admin(adminaddrs,users,currency,inc2)
                      });
                    }
                    catch(e){
                      var inc2 = inc + 1;
                      transfer_admin(adminaddrs,users,currency,inc2)
                    }
                  }
                  else{
                    var inc2 = inc + 1;
                    transfer_admin(adminaddrs,users,currency,inc2)
                  }
                })
              }
              else {
                console.log(error);
              }
          });
        }
        else {
        var inc2 = inc + 1;
        transfer_admin(adminaddrs,users,currency,inc2)         
        }
      }
      catch (err) {
        console.log(err);
        var inc2 = inc + 1;
        transfer_admin(adminaddrs,users,currency,inc2)        
      }
    })
  }
}






function loadCurrencyChanges(curId,price)
{
    var updated = { "EstimatedUSD": price };
    currency.updateOne({ "_id": curId },{ "$set": updated }, { multi: true }).exec(function (err, resUpdate) {})
}
function loadUpdateChanges(pairId,price,pairsDB)
{
    var updated = { "marketPrice": price };
    pairsDB.updateOne({ "_id": pairId },{ "$set": updated }, { multi: true }).exec(function (err, resUpdate) {})
}


function UpdateDeposit_ETH(response, user_id, res,currencySymbol,userethaddress,admin_ethaddress) {
  try{
    var chkarr=[];
   
    if(response.message == 'OK'){
      var transaction = response.result;
      for(var trr=0; trr<transaction.length;trr++)
      {
        (function(){
          // if(transaction[tr].tokenSymbol=='XCEL'){
            var tr = trr;
            var newKey = tr+1;
            setTimeout(function(){
            var block_number  = transaction[tr].blockNumber;
            var address  = transaction[tr].to;
            var fromaddress  = transaction[tr].from;
            var txid     = transaction[tr].hash;
            var value    = transaction[tr].value;
            var ether_balance = (value/1000000000000000000);
            var confirmations =transaction[tr].confirmations;

            if(address.toLowerCase()==userethaddress.toLowerCase()){              
                if(fromaddress.toLowerCase()==admin_ethaddress.toLowerCase()&& (ether_balance==0.003 || ether_balance==0.002 || ether_balance==0.0004 || ether_balance==0.0009 || ether_balance==0.1 || ether_balance==0.001)){
                chkarr.push("done");
                if(chkarr.length==transaction.length){
                  res.json({status : true})
                }
              }
              else{
                if( confirmations > 3 ){
                  var deesTable = {"txid" : txid}
                      var userdeposit_table = {"userId"   : mongoose.mongo.ObjectId(user_id),"txnid": txid}
                      deposit.find(userdeposit_table).exec(function(err2,depositData){
                        if(depositData.length==0){
                          var currencytable = {
                            "currencySymbol" : currencySymbol
                          }
                          currency.find(currencytable).exec(function(err3,currencydata){
                            if(currencydata){
                              var curr_id = currencydata[0]._id;

                              wallet.aggregate([
                                {$unwind: "$wallet"},
                                {
                                  $match: {
                                    "user_id": user_id,
                                    "wallet.currencyid": curr_id
                                  }
                                },
                                {
                                  $lookup: {
                                    from: "users",
                                    localField: "user_id",
                                    foreignField: "_id",
                                    as: "userstatus"
                                  }
                                },
                                {
                                  $lookup: {
                                    from: "currency",
                                    localField: "wallet.currencyid",
                                    foreignField: "_id",
                                    as: "currencyid"
                                  }
                                },

                                {$project : {
                                  _id: 0,
                                  "walletbalance":"$wallet.amount"
                                }}
                                ]).exec(function(err_wallet,resData_wallet){
                                 // var curbal = resData_wallet[0].walletbalance;
                                  var id = mongoose.mongo.ObjectId(user_id)
                                  var amt = ether_balance;
                                  var obj = {
                                    userId: id,
                                    type: 'Deposit',
                                    newBalance: amt,
                                    currencyid: curr_id,
                                  }                                
                                  wallet.updateOne({ 'user_id':user_id,"wallet.currencyid":curr_id},
                                    {"$inc": {"wallet.$.amount": +ether_balance}},function(err4, resUpdatesbal){
                                     
                                      var payments = {
                                        "userId"     : user_id,
                                        "cryptoaddress" : address,
                                        "depamt"      : +ether_balance,
                                        "currency_name": currencySymbol,
                                        "comment"        : currencySymbol + " Payment",
                                        "txnid"        : txid,
                                        "status"      : 1,
                                        "currency"    :curr_id,
                                        // "lastuserbalance": curbal,
                                        "blockcount":block_number,
                                        // "lastuserbalance_date": new Date(),
                                        "currency_type":"crypto"
                                      }
                                     
                                      deposit.create(payments,function(err5,siteData){
                                  // res.json({status : true})
                                  chkarr.push("done");
                                  if(chkarr.length==transaction.length){
                                    res.json({status : true})
                                  }
                                });
                                      
                                    });
                                  
                                
                                });                          
                              }
                            });
}
else{
  chkarr.push("done");
  if(chkarr.length==transaction.length){
    res.json({status : true})
  }
}
})

}
else{
  chkarr.push("done");
  if(chkarr.length==transaction.length){
    res.json({status : true})
  }
}
}
}
else{
  chkarr.push("done");
  if(chkarr.length==transaction.length){
    res.json({status : true})
  }
}
},newKey * 1000);
        })()
      }
    } else {
      res.json({status : true,data:"NO Data found"});
    }
  }
  catch(e){
    console.log("UpdateDeposit_ETH",e);
  }
  }



// Cron for market price
cron.schedule('0 */30 * * * *', () => {
  var arr = ['USD','EUR','CNY','GBP','JPY', 'ETH', 'EOS', 'USDT', 'BTC']
  for(var j=0;j<arr.length;j++){
      var currencyArr = arr[j];
      currencyData(j,arr);
  }
});


cron.schedule('0 */30 * * * *', () => {
  console.log("market price data cron")
  var arr = ['ETH', 'EOS', 'USDT', 'BTC']
  for(var j=0;j<arr.length;j++){
      var currencyArr = arr[j];
      ChartcurrencyData(j,arr,arr[j]);
  }
});


function currencyData(inc,arr){
  var currencyArr = arr[inc];
  currency.find().exec((err, resData) => {
      var links = 'https://min-api.cryptocompare.com/data/price?fsym='+currencyArr+'&tsyms=';
      for (var i = 0; i < resData.length; i++) {
        if(i==0)
        {
          links = links+resData[i].currencySymbol;
        }
        else
        {
          links = links+','+resData[i].currencySymbol;
        }
      }

      getJSON(links+"&api_key=faf99a9167eeeed3975c6f18f9576a06c475fb8b8ebf2b8a18e5f7b28421d05e", function(errorBal,response){
        if (!errorBal)
        {
          for (var i = 0; i < resData.length; i++) {
            if(typeof response[resData[i].currencySymbol] != 'undefined' && typeof response[resData[i].currencySymbol] != undefined)
            {
              var pricedata = 1/response[resData[i].currencySymbol];
              var price = +(pricedata).toFixed(8);
              updatePrice(resData[i]._id,price,currencyArr);

            }
          }
        }
      });
    })
}


function ChartcurrencyData(inc,arr,symbols){
  var currencyArr = arr[inc];
  currency.find().exec((err, resData) => {
      var links = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=';
      console.log(resData.length)
      // for (var i = 0; i < resData.length; i++) {
      //   if(i==0)
      //   {
          links = links+symbols;
      //   }
      //   else
      //   {
      //     links = links+','+resData[i].currencySymbol;
      //   }
      // }

      getJSON(links+"&api_key=faf99a9167eeeed3975c6f18f9576a06c475fb8b8ebf2b8a18e5f7b28421d05e", function(errorBal,response){
        if (!errorBal)
        {
          for (var i = 0; i < resData.length; i++) {
            if(typeof response[resData[i].currencySymbol] != 'undefined' && typeof response[resData[i].currencySymbol] != undefined)
            {
              var pricedata = 1/response[resData[i].currencySymbol];
              var price = +(pricedata).toFixed(8);
              chartprice(resData[i]._id,price,currencyArr);
              
            }
          }
        }
      });
    })
}


async function chartprice(curId,price,currencySymbol){
  console.log(curId,price,currencySymbol)
     var insertData = { "price": price,'currencySymbol':currencySymbol,"currencyId":curId };
     var wherecond = { "price": price,'currencySymbol':currencySymbol,"currencyId":curId }

  var finddata = await marketpriceCurrency.findOne({wherecond})

  if(!finddata){
    console.log(insertData)
    marketpriceCurrency.create(insertData,function(insErr,insData){
      console.log(insertData)
    });
    
  }
  


}

async function updatePrice(curId,price,currencySymbol){
  switch (currencySymbol) {
     case 'USD': 
     var updated = { "usd_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/USD$'}};
     
     break;
     
     case 'EUR': 
     var updated = { "eur_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/EUR'}};
     break;
        
     case 'CNY': 
     var updated = { "cny_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/CNY'}};
     break;

     case 'GBP': 
     var updated = { "gbp_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/GBP'}};
     break;

     case 'JPY': 
     var updated = { "jpy_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/JPY'}};
     break;

     case 'ETH': 
     var updated = { "eth_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/ETH'}};
     break;
     
     case 'EOS': 
     var updated = { "eos_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/EOS'}};
     break;

     case 'BTC': 
     var updated = { "btc_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/BTC'}};
     break;
        
     case 'USDT': 
     var updated = { "usdt_price": price };
     var updateCondtn = {"fromCurrency":curId,"pair":{$regex:'/USDT$'}};
     break;

  }
  currency.updateOne({ "_id": curId },{ "$set": updated }, { multi: true }).exec(function (err, resUpdate) {});
  var pairData = await pairs.findOne(updateCondtn).lean();
  if(pairData){
    if(pairData.option == 1){
      var updatedMarketPrice = price + price*pairData.percentage/100;
    } else {
      var updatedMarketPrice = price - price*pairData.percentage/100;
    }
    
    await pairs.updateOne(updateCondtn,{$set:{marketPrice:price, calculate_market_price:updatedMarketPrice}});
  }
  
  
}

module.exports = app;

