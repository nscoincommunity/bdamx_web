var createError  = require('http-errors');
var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
var http         = require('http');
var https        = require('https');
var fs           = require('fs');
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
var socketio = require('socket.io');
var bitcoin_rpc = require('node-bitcoin-rpc');
var Request     = require("request");
const port       = config.port;

cloudinary.config({
    cloud_name  : config.cloud_name,
    api_key     : config.api_key,
    api_secret  : config.api_secret 
  });


var api_hit_url = config.api_hit_url_config;
var api_infura_url = config.api_infura_url;
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.set('port111', port);



app.use(express.static(__dirname + '/'));

// app.get('', function(req, res){
//   res.sendfile(__dirname + '/index.html');
// });


console.log('DB connection: '+config.dbconnection,"PORT",port);


var admin=require('./router/admin');
var faq=require('./router/faq');
var news=require('./router/news');
var feature=require('./router/feature');
var cms=require('./router/cms');
var sitesetting=require('./router/sitesetting');
var metacontent=require('./router/metacontent');
var currencydetails=require('./router/currencydetails');
var currencypair=require('./router/currencypair');
var adminuser = require('./router/admin/auth');
var tradedet = require('./router/user/trade');
var userhome = require('./router/user/home');
var userdet = require('./router/users');
var token = require('./router/token');
var contactus = require('./router/contactus');
var emailtemplate = require('./router/emailtemplate');
var mobapi = require('./router/mobapi');

app.use('/user', userdet);
app.use('/', userhome);
app.use('/BdAMx4fdex', adminuser);
app.use('/trade', tradedet);
app.use('/token', token);
app.use('/admin',admin);
app.use('/faq',faq);
app.use('/news',news);
app.use('/feature',feature);
app.use('/cms',cms);
app.use('/currencydetails',currencydetails);
app.use('/currencypair',currencypair);
app.use('/sitesetting',sitesetting);
app.use('/metacontent',metacontent);
app.use('/contactus',contactus);
app.use('/emailtemplate',emailtemplate);
app.use('/mobapi',mobapi);


var Sitesetting = mongoose.model('Sitekeys');
var currency = mongoose.model('currency');
var wallet = mongoose.model('userWallet');
var deposit = mongoose.model('deposit');
var Withdraw = mongoose.model('Withdraw');
var ProfitDB = mongoose.model('profit');
var admindeposit = require('./model/adminDeposit');
var users = require('./model/users');
let common = require('./helpers/common');
let notificationDB = require('./model/notification');
var getJSON = require('get-json');
var pairs = mongoose.model('pairs');

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

var server = http.createServer(app);
// var server = https.createServer(options, app);
// httpsAgent: new https.Agent({
//  ciphers: 'DES-CBC3-SHA'
// })



server.listen(port, () => console.log(`Express server running on port `+port));

process.on('SIGINT', () => {
  server.close(function(err) {
    if (err) {
      console.error("Mongoose connection err",err)
      process.exit(1)
    }
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected')
      process.exit(0)
    })
  })
});
app.get('/', (req, res) => {
  res.send('success');
});

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
// var allowCrossDomain = function(req, res, next) {
//   // if ('OPTIONS' == req.method) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     res.send(200);
//   // } else {
//     next();
//   // }
// }

// app.use(allowCrossDomain);

// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// // Add headers
// app.use(function(req, res, next) {
//   if (req.method === "OPTIONS") {
//     res.header('Access-Control-Allow-Origin', '*');
//   } else {
//     res.header('Access-Control-Allow-Origin', '*');
//   }
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });


var io = socketio.listen(server);
let tradeHelper = require('./helpers/trade');
tradeHelper.SocketInit(io);
io.set("origins", "*:*");

io.on('connection', function (socket) { 
  socket.on('createOrder', function (data) {
    console.log("+++++++++++++++++++++++++",data)
    tradeHelper.createOrder(data, io);    
  })
  socket.on('userEmit', function (data) {
    tradeHelper.userEmit(data);
  });
  socket.on('joined', function (data) {
    console.log("J+++++++++++++++++++++++++++")
    io.sockets.emit('joined', {'trade':1});
  });
  socket.on('welcomes', function (data) {
    console.log("jega++++++++++++++++++++++++++++")
    io.sockets.emit('welcomes', {'trade':1});
    
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

cron.schedule('* * * * *', () => {
  currency.find({baseCoin:'EOS' },{ currencySymbol: 1}).exec((err, resData) => {
    var links = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=';
    for (var i = 0; i < resData.length; i++) {
      if(i==0)
      {
        links = links+resData[i].currencySymbol;
      }
      else
      {
        links = links+','+resData[i].currencySymbol
      }
    }
    getJSON(links, function(errorBal,response){
      if (!errorBal)
      {
        for (var i = 0; i < resData.length; i++) {
          if(typeof response[resData[i].currencySymbol] != 'undefined' && typeof response[resData[i].currencySymbol] != undefined)
          {
            var pricedata = 1/response[resData[i].currencySymbol];
            var price = +(pricedata).toFixed(8);
            loadCurrencyChanges(resData[i]._id,price);
          }
        }
      }
    });
  })
  currency.find({baseCoin:'EOS' },{ currencySymbol: 1}).exec((err, resData) => {//currencySymbol: { $ne: 'EOS' },
    var links = 'https://min-api.cryptocompare.com/data/price?fsym=EOS&tsyms=';
    for (var i = 0; i < resData.length; i++) {
      if(i==0)
      {
        links = links+resData[i].currencySymbol;
      }
      else
      {
        links = links+','+resData[i].currencySymbol
      }
    }
    getJSON(links, function(errorBal,response){
      if (!errorBal)
      {
        let pairsDB = mongoose.model('pairs');
        var where = { "frompair.status": 1 , "topair.status": 1,"status": 1 };       
        pairsDB.aggregate([
        {
          $lookup:
          {
            from: 'currency',
            localField: 'fromCurrency',
            foreignField: '_id',
            as: 'frompair'
          }
        },
        {
          $lookup:
          {
            from: 'currency',
            localField: 'toCurrency',
            foreignField: '_id',
            as: 'topair'
          }
        },
        {
          $project: {
            "status": "$status",
            "_id": "$_id",
            "topair": "$topair",
            "frompair": "$frompair",
            "price": "$price",
            "fromcurrency": { $arrayElemAt: ["$frompair.currencySymbol", 0] },
            "tocurrency": { $arrayElemAt: ["$topair.currencySymbol", 0] },
          }
        },
        {
          $match: where
        },
        ]).exec(function (err, resData) {
          var updatePairs = [];
          var loopinc = 0;
          for (var i = 0; i < resData.length; i++) {
            if(typeof response[resData[i].fromcurrency] != 'undefined' && typeof response[resData[i].fromcurrency] != undefined && typeof response[resData[i].tocurrency] != 'undefined' && typeof response[resData[i].tocurrency] != undefined)
            {
              var fromdata = 1/response[resData[i].fromcurrency];
              var todata = 1/response[resData[i].tocurrency];
              var price = +((fromdata/todata).toFixed(8));
              if(resData[i].price==0)
              {
                updatePairs[loopinc] = {pair:resData[i].fromcurrency+'_'+resData[i].tocurrency,price:price};
                loopinc = 1;
              }
              loadUpdateChanges(resData[i]._id,price,pairsDB);
            }
          }
          if(updatePairs.length > 0)
          {
            common.redisTradeMarketPrice(updatePairs);
          }
        });
      }
    });
  })
});


cron.schedule('* * * * *', () => {
  pairs.find({pair:{$regex:'_BTC'} }).exec((err, resData) => {
    var links = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC';
    for (var i = 0; i < resData.length; i++) {
      // if(i==0)
      // {
      //   links = links+resData[i].pair.split('_')[0];
      // }
      // else
      {
        links = links+','+resData[i].pair.split('_')[0]
      }
    }
    getJSON(links, function(errorBal,response){
      if (!errorBal)
      {
        for (var i = 0; i < resData.length; i++) {
          if(typeof response[resData[i].pair.split('_')[0]] != 'undefined' && typeof response[resData[i].pair.split('_')[0]] != undefined)
          {
            var pricedata = 1/response[resData[i].pair.split('_')[0]];
            var price = +(pricedata).toFixed(8);
            loadCurrencyChanges(resData[i].fromCurrency,price);
          }
        }
      }
    });
  })
  pairs.find({pair:{$regex:'_BTC'} }).exec((err, resData) => {//currencySymbol: { $ne: 'BTC' },
    var links = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BTC';
    for (var i = 0; i < resData.length; i++) {
      // if(i==0)
      // {
      //   links = links+resData[i].pair.split('_')[0];
      // }
      // else
      {
        links = links+','+resData[i].pair.split('_')[0]
      }
    }
    getJSON(links, function(errorBal,response){
      if (!errorBal)
      {
        let pairsDB = mongoose.model('pairs');
        var where = { "frompair.status": 1 , "topair.status": 1,"status": 1 };       
        pairsDB.aggregate([
        {
          $lookup:
          {
            from: 'currency',
            localField: 'fromCurrency',
            foreignField: '_id',
            as: 'frompair'
          }
        },
        {
          $lookup:
          {
            from: 'currency',
            localField: 'toCurrency',
            foreignField: '_id',
            as: 'topair'
          }
        },
        {
          $project: {
            "status": "$status",
            "_id": "$_id",
            "topair": "$topair",
            "frompair": "$frompair",
            "price": "$price",
            "fromcurrency": { $arrayElemAt: ["$frompair.currencySymbol", 0] },
            "tocurrency": { $arrayElemAt: ["$topair.currencySymbol", 0] },
          }
        },
        {
          $match: where
        },
        ]).exec(function (err, resData) {
          var updatePairs = [];
          var loopinc = 0;
          for (var i = 0; i < resData.length; i++) {
            
            if(typeof response[resData[i].fromcurrency] != 'undefined' && typeof response[resData[i].fromcurrency] != undefined && typeof response[resData[i].tocurrency] != 'undefined' && typeof response[resData[i].tocurrency] != undefined)
            {
              var fromdata = 1/response[resData[i].fromcurrency];
              var todata = 1/response[resData[i].tocurrency];
              var price = +((fromdata/todata).toFixed(8));
              if(resData[i].price==0)
              {
                updatePairs[loopinc] = {pair:resData[i].fromcurrency+'_'+resData[i].tocurrency,price:price};
                loopinc = 1;
              }
              loadUpdateChanges(resData[i]._id,price,pairsDB);
            }
          }
          if(updatePairs.length > 0)
          {
            common.redisTradeMarketPrice(updatePairs);
          }
        });
      }
    });
  })
});

cron.schedule('* * * * *', () => {
  currency.find({baseCoin:'ETH' },{ currencySymbol: 1}).exec((err, resData) => {
    var links = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=';
    for (var i = 0; i < resData.length; i++) {
      if(i==0)
      {
        links = links+resData[i].currencySymbol;
      }
      else
      {
        links = links+','+resData[i].currencySymbol
      }
    }
    getJSON(links, function(errorBal,response){
      if (!errorBal)
      {
        for (var i = 0; i < resData.length; i++) {
          if(typeof response[resData[i].currencySymbol] != 'undefined' && typeof response[resData[i].currencySymbol] != undefined)
          {
            var pricedata = 1/response[resData[i].currencySymbol];
            var price = +(pricedata).toFixed(8);
            loadCurrencyChanges(resData[i]._id,price);
          }
        }
      }
    });
  })
  currency.find({baseCoin:'ETH' },{ currencySymbol: 1}).exec((err, resData) => {
    var links = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=';
    for (var i = 0; i < resData.length; i++) {
      if(i==0)
      {
        links = links+resData[i].currencySymbol;
      }
      else
      {
        links = links+','+resData[i].currencySymbol
      }
    }
    getJSON(links, function(errorBal,response){
      if (!errorBal)
      {
        let pairsDB = mongoose.model('pairs');
        var where = { "frompair.status": 1 , "topair.status": 1,"status": 1 };       
        pairsDB.aggregate([
        {
          $lookup:
          {
            from: 'currency',
            localField: 'fromCurrency',
            foreignField: '_id',
            as: 'frompair'
          }
        },
        {
          $lookup:
          {
            from: 'currency',
            localField: 'toCurrency',
            foreignField: '_id',
            as: 'topair'
          }
        },
        {
          $project: {
            "status": "$status",
            "_id": "$_id",
            "topair": "$topair",
            "frompair": "$frompair",
            "price": "$price",
            "fromcurrency": { $arrayElemAt: ["$frompair.currencySymbol", 0] },
            "tocurrency": { $arrayElemAt: ["$topair.currencySymbol", 0] },
          }
        },
        {
          $match: where
        },
        ]).exec(function (err, resData) {
          var updatePairs = [];
          var loopinc = 0;
          for (var i = 0; i < resData.length; i++) {
            if(typeof response[resData[i].fromcurrency] != 'undefined' && typeof response[resData[i].fromcurrency] != undefined && typeof response[resData[i].tocurrency] != 'undefined' && typeof response[resData[i].tocurrency] != undefined)
            {
              var fromdata = 1/response[resData[i].fromcurrency];
              var todata = 1/response[resData[i].tocurrency];
              var price = +((fromdata/todata).toFixed(8));
              if(resData[i].price==0)
              {
                updatePairs[loopinc] = {pair:resData[i].fromcurrency+'_'+resData[i].tocurrency,price:price};
                loopinc = 1;
              }
              loadUpdateChanges(resData[i]._id,price,pairsDB);
            }
          }
          if(updatePairs.length > 0)
          {
            common.redisTradeMarketPrice(updatePairs);
          }
        });
      }
    });
  })
});
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
cron.schedule('* * * * *', function () {
  let settingDB =  require('./model/Sitekeys');
  settingDB.findOne().exec(function(err,data){
    var account = data.adminAddress;
    if(data.blockCount<1000){
      var min_blocknumber =  0;
    }
    else{
      var min_blocknumber =  data.blockCount - 1000;
    }
    var hege = [];
    var state = [];
   try
    {
    getJSON(api_hit_url+"api?module=account&action=tokentx&address="+account+"&startblock="+min_blocknumber+"&endblock=latest&sort=asc&apikey=YourApiKeyToken", function(errorBal,response){
      if (!errorBal)
      {
        if(response.result.length > 0){
          hege = response.result;
        }
      }
      getJSON(api_hit_url+"api?module=account&action=txlist&address="+account+"&startblock="+min_blocknumber+"&endblock=latest&sort=asc&apikey=YourApiKeyToken", function(errorBal,response){
        if (!errorBal)
        {
          if(response.result.length > 0){
            state = response.result;
          }
        }
        var childrens = hege.concat(state);
        UpdateDeposit_ETH(childrens, account);
      })
    })
  }
  catch(e)
  {
     console.log(e);
  }
  });
});
router.get('/listdeposits', (req,res) => {
  Sitesetting.findOne().exec(function(err,data){
    var account = data.adminAddress;
    var min_blocknumber =  data.blockCount - 1000;
    var hege = [];
    var state = [];
    try
    {
    getJSON(api_hit_url+"api?module=account&action=tokentx&address="+account+"&startblock="+min_blocknumber+"&endblock=latest&sort=asc&apikey=YourApiKeyToken", function(errorBal,response){
      if (!errorBal)
      {
        if(response.result.length > 0){
          hege = response.result;
        }
      }
      getJSON(api_hit_url+"api?module=account&action=txlist&address="+account+"&startblock="+min_blocknumber+"&endblock=latest&sort=asc&apikey=YourApiKeyToken", function(errorBal,response1){
        if (!errorBal)
        {
          if(response1.result.length > 0){
            state = response1.result;
          }
        }
        var childrens = hege.concat(state);
        //UpdateDeposit_ETH(childrens, account);
        UpdateDeposit_ETH(childrens, account);
        //res.json({response:response.result,response1:response1.result});
      })
    })
  }
  catch(e)
  {
    console.log(e);
  }
  });
});
function UpdateDeposit_ETH(transaction, adminethaddress) {
  if(transaction.length>0){
    transactionCall(transaction,adminethaddress,0);
  }
}
var blockcount = 0;
function transactionCall(transaction,adminethaddress,inc)
{
  var tr = inc;
  var inc1 = inc + 1;
  if(typeof transaction[tr] != 'undefined' && typeof transaction[tr] != undefined)
  {
    blockcount = transaction[tr].blockNumber;
    var address  = transaction[tr].to;
    var fromaddress  = transaction[tr].from.toLowerCase();
    var txid     = transaction[tr].hash;
    var value    = transaction[tr].value;
    var contractAddress    = transaction[tr].contractAddress;
    contractAddress = contractAddress.toLowerCase();
    var confirmations = +transaction[tr].confirmations;
    if(address.toLowerCase()==adminethaddress.toLowerCase()){
      if(confirmations > 3){
        var userdeposit_table = {"txnid": txid}
        deposit.find(userdeposit_table).exec(function(err2,depositData){
          if(depositData.length==0){
            var currencytable = {"contractAddress" : contractAddress}
            currency.find(currencytable).exec(function(err3,currencydata){
              if(currencydata.length > 0){
                var ether_balance = (value/Math.pow(10, currencydata[0].decimals));
                if(ether_balance>0)
                {
                  var curr_id = currencydata[0]._id;
                  var payments = {
                    "userId": fromaddress.toLowerCase(),
                    "depto": fromaddress.toLowerCase(),
                    "depamt": +ether_balance,
                    "comment": currencydata[0].currencySymbol + " Payment",
                    "txnid": txid,
                    "currency": mongoose.Types.ObjectId(curr_id),
                    "depstatus" : 'Completed'
                  };
                  deposit.create(payments, function (dep_err, dep_res) {
                    console.log(dep_res)
                    const addData = {
                    userId: fromaddress.toLowerCase(),
                    notification_type:'deposit',
                    status:0,
                    amount:+ether_balance
                  }
                  notificationDB.create(addData).exec(function(err,notificationAdded){
                    console.log(err);
                    console.log(notificationAdded);
                  });
                    //console.log(dep_res)
                    common.getbalance(fromaddress, curr_id, function (balance) {
                      //console.log(balance)
                      var newBalance = +balance.amount + +ether_balance;
                      //console.log(newBalance);
                      common.updateUserBalance(fromaddress, curr_id,newBalance,balance.amount,dep_res._id,'deposit', function (balance) {
                        //console.log(balance)
                        transactionCall(transaction,adminethaddress,inc1);
                      });
                    });
                  });
                }
                else
                {
                  transactionCall(transaction,adminethaddress,inc1);
                }
              }
              else
              {
                transactionCall(transaction,adminethaddress,inc1);
              }
            });
          }
          else
          {
            transactionCall(transaction,adminethaddress,inc1);
          }
        })
      }
      else
      {
        transactionCall(transaction,adminethaddress,inc1);
      }
    }
    else
    {
      transactionCall(transaction,adminethaddress,inc1);
    }
  }
  else
  {
    Sitesetting.updateOne({}, {$set : {blockCount:blockcount}}, function (wal_err, wal_res) {
    });
  }
}


//BTC DEPOSIT CRON

cron.schedule('* * * * *', () => {
  try{
    bitcoin_rpc.init(config.bitcoin_rpc.host, config.bitcoin_rpc.port, config.bitcoin_rpc.user, config.bitcoin_rpc.password);
    bitcoin_rpc.call('listtransactions', ['*', 1000], function (err, address) {
      var adminAddress='';
      if (err !== null) {
      }
      else {
        var trans = address.result;
        for (var i = 0; i < trans.length; i++) {
          (function (iCopy) {
            var val = trans[iCopy];
            try {
              var txid = val.txid;
              var confirmations = val.confirmations;
              var blockhash = val.blockhash;
              var blocktime = val.blocktime;
              var trans_txid = val.txid;
              var amount = val.amount;
              var btc_addr = val.address.toLowerCase();
              var category = val.category;
              var user_add_whr = { "address": btc_addr };
              if (category == "receive" && btc_addr == adminAddress) {
                var admindepo = {
                  "txnid": trans_txid
                }
                admindeposit.find(admindepo).exec(function (err2, depositData) {
                  if (depositData.length == 0) {
                    var newdeposit = {
                      currency: "BTC",
                      depamt: amount,
                      from_address: btc_addr,
                      txnid: trans_txid,
                      status: "completed"
                    }
                    admindeposit.create(newdeposit, function (insErr, insData) {
                      if (insData) {
                        return true
                      }
                    });
                  }
                });
              }
              else{
                if (category == "receive" && btc_addr != adminAddress) {
                  users.find({'address':btc_addr}).exec(function (err, data) {
                    if (!err && data.length > 0) {
                      if (category == 'receive' && btc_addr == data[0].address) {
                        var user_dep_whr = {"txnid": trans_txid };
                        deposit.find(user_dep_whr).exec(function (dep_whr, dep_det) {
                          if (!dep_whr) {
                            if (dep_det.length == 0) {
                              var cur_whr = { "currencySymbol": "BTC" };
                              currency.find(cur_whr).exec(function (cur_err, cur_res) {
                                if(!cur_err && cur_res.length > 0){
                                  var btc_balance = +amount;
                                  if(btc_balance>0)
                                  {
                                    var curr_id = cur_res[0]._id;
                                    var payments = {
                                      "userId": data[0]._id,
                                      "depto": btc_addr,
                                      "depamt": +btc_balance,
                                      "comment": cur_res[0].currencySymbol + " Payment",
                                      "txnid": txid,
                                      "currency": mongoose.Types.ObjectId(curr_id),
                                      "depstatus" : 'Completed'
                                    };
                                    deposit.create(payments, function (dep_err, dep_res) {
                                      common.getbalance(btc_addr, curr_id, function (balance) {
                                        var newBalance = +balance.amount + +btc_balance;
                                        common.updateUserBalance(btc_addr, curr_id,newBalance,balance.amount,dep_res._id,'deposit', function (balance) {
                                          return true
                                        });
                                      });
                                    });
                                  }
                                }                            
                              });
                            } 
                            else {
                            }
                          }
                          else {
                          }
                        });
                      }
                    }
                  })
                }

              }
            }
            catch (err) {
            }
          }(i));
        }
      } 
    })
  }
  catch(e)
  {
    console.log("deposit has error",e)
  }
})

cron.schedule('* * * * *', () => {
  try{
  let TokenDB  = mongoose.model('Tokendetails');
  TokenDB.find({status:'pending',basecoin:'ETH' }).exec((err, resData) => {
    if(resData.length > 0)
    {
    for (var i = 0; i < resData.length; i++) {
      var txhash = resData[i].hash;
  gethashresponse(i,resData)
}
  }
})
}
catch(e)
{
  console.log("Token has error",e)
}
})
function gethashresponse(i,resData)
{
  var txhash = resData[i].hash;
  try
  {
  var links = 'https://api-ropsten.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash='+txhash+'&apikey=YourApiKeyToken';
  getJSON(links, function(errorBal,response){
          if (!errorBal)
          {
            var getsta = response.status;
            var getressta = response.result.status;
            if(getsta == 1 && getressta == 1)
            {

                      let settingDB =  require('./model/Sitekeys');
                  settingDB.findOne().exec((adminerr, admindet) => {
gettokenid(admindet,i,resData)
                  })
            }
          }
          else{
            console.log("errbaltok",errorBal)
          }

})
}
catch(e)
{
  console.log(e);
}
}
function gettokenid(admindet,i,resData)
{
  let TokenDB  = mongoose.model('Tokendetails');
//Getting token id functionality
var Web3 = require('web3');
 var web3 = new Web3(new Web3.providers.HttpProvider(api_infura_url));
  try{                  
  getJSON(api_hit_url+"api?module=contract&action=getabi&address="+admindet.adminAddress, function(errorBal,response){
    const contractJson =response.result;
            var contractAddress = admindet.adminAddress;
           
            var TokcontractAddress = resData[i].conaddress;
      const contract = new web3.eth.Contract(JSON.parse(contractJson),contractAddress);
    
     
        contract.methods.tokenStatus(TokcontractAddress).call(function (err,resulttok) {
    
        var tokenid = resulttok._tokenID;
        var tokenidsta = resulttok.status;
      
          console.log("err",err);
          if(tokenidsta)
          {
          var updated = { "status": "Approved",TokenId: tokenid };
          var updated1 = { TokenId: tokenid };
          TokenDB.updateOne({ "_id": resData[i]._id },{ "$set": updated }, { multi: true }).exec(function (err, resUpdate) {
            currency.updateOne({ "contractAddress": resData[i].conaddress },{ "$set": updated1 }, { multi: true }).exec(function (errcur, rescurUpdate) {
              common.updateCurrencyPair();


          })
          })

        }
        console.log("token sta78",resulttok)
        });
//Update token details with approved option
    })
}
catch(e)
{
  console.log(e);
}
}
//Trade contract cron
cron.schedule('*/10 * * * * *', () => {
return false;
  try{
    let orderDB    = mongoose.model('CoinOrder');
    let pairsDB = mongoose.model('pairs');
    var Corderid = [];
    var CpairName = [];
    var CPrice = [];
    var Cfee = [];
    var CTotal = [];
    var Camount = [];
    var CuserId = [];
    var timestamp = [];
    var OrderType1 = [];
    var TokenAddress1 = [];
 
    orderDB.find({status:'filled',TxStatus:0 }).limit(5).exec((err, resData) => {
   
    if(resData.length > 0)
    {
      var count1 = 0;
    for (var i = 0; i < resData.length; i++) {
      (function (count) {
      where = { "_id": mongoose.mongo.ObjectId(resData[count].pair) };       
    let orderDB    = mongoose.model('CoinOrder');
      pairsDB.aggregate([
      {
        $lookup:
        {
          from: 'currency',
          localField: 'fromCurrency',
          foreignField: '_id',
          as: 'frompair'
        }
      },
      {
        $lookup:
        {
          from: 'currency',
          localField: 'toCurrency',
          foreignField: '_id',
          as: 'topair'
        }
      },
      {
        $project: {
          "_id": "$_id",
          "frombaseCoin": { $arrayElemAt: ["$frompair.baseCoin", 0] },
          "tobaseCoin": { $arrayElemAt: ["$topair.baseCoin", 0] },
          "fromTokenId": { $arrayElemAt: ["$frompair.TokenId", 0] },
          "toTokenId": { $arrayElemAt: ["$topair.TokenId", 0] },
          "tocurn": { $arrayElemAt: ["$topair.currencySymbol", 0] },
          "fromcurn": { $arrayElemAt: ["$frompair.currencySymbol", 0] },
          "fromcontract": { $arrayElemAt: ["$frompair.contractAddress", 0] },
          "tocontract": { $arrayElemAt: ["$topair.contractAddress", 0] },
          "fromtokid": { $arrayElemAt: ["$frompair.TokenId", 0] },
          "totokid": { $arrayElemAt: ["$topair.TokenId", 0] },
        }
      },
      {
        $match: where
      },
      ]).exec(function (err, resData1) {

       
// if(resData1[0].frombaseCoin == "ETH" && resData1[0].tobaseCoin == "ETH")
// {
  const Web3 = require('web3');
  var web3 = new Web3(new Web3.providers.HttpProvider(api_infura_url));
  let settingDB =  require('./model/Sitekeys');
  settingDB.findOne().exec((adminerr, admindet) => {
    var contractAddressss = admindet.adminAddress;
  GetTradeUser(contractAddressss,resData,count,function(Userdata)
  {
    CuserId.push(Userdata);
if(resData[count].Type == "buy")
{
  //fromcurn
  var tokenAddress;
  var OrderType;
  if(resData1[0].fromcontract == '')
  {
      tokenAddress = '0x0000000000000000000000000000000000000000';
      var Ttype = 0;
  }
  else
  {
      tokenAddress = resData1[0].fromtokid;
      var Ttype = 1;
  }
  OrderType = 1;
}
  else{
//tocurn
if(resData1[0].tocontract == '')
{
    tokenAddress = 0;
    var Ttype = 0;
}
else
{
    tokenAddress = resData1[0].totokid;
    var Ttype = 1;
}
OrderType = 2;
  }
  count1= count1 +1;


  var MyOrderid = web3.utils.fromAscii(JSON.stringify(resData[count]._id));
  
  MyOrderid = MyOrderid.split("").reverse().join("");
  MyOrderid = trailingzeroes(MyOrderid);
  MyOrderid = MyOrderid.split("").reverse().join("");
  MyOrderid = MyOrderid.substring(2);
  MyOrderid = MyOrderid.toLocaleString('fullwide', { useGrouping: false });
Corderid.push(MyOrderid);

  var MypairName = web3.utils.fromAscii(JSON.stringify(resData[count].pair));
  MypairName = MypairName.split("").reverse().join("");
  MypairName = trailingzeroes(MypairName);
  MypairName = MypairName.split("").reverse().join("");
  MypairName = MypairName.substring(2);
  MypairName = MypairName.toLocaleString('fullwide', { useGrouping: false });
  CpairName.push(MypairName);



  //resData[count].Total
  //resData[count].filledAmount
  //num.toString(base)
  var Total = web3.utils.toWei((resData[count].Total).toString());
  var filledAmount = web3.utils.toWei((resData[count].filledAmount).toString());
  var Prices = web3.utils.toWei((resData[count].Price).toString());
  var Feees = web3.utils.toWei((resData[count].takerFee).toString());
  CPrice.push(Prices);
  Cfee.push(Feees);
  CTotal.push(Total);
  Camount.push(filledAmount);
  OrderType1.push(OrderType);
  TokenAddress1.push(tokenAddress);
 

  var created_date = new Date(resData[count].datetime);
  timestamp.push(created_date.getTime());

  

if(count1 == resData.length)
{
   
        var PrivateKey = admindet.AdminprivateKey;
        var contractAddress = admindet.adminAddress;
var address = admindet.Adminkeyaddress;
var privateKey = admindet.AdminprivateKey;
try
{
getJSON(api_hit_url+"api?module=contract&action=getabi&address="+contractAddress+'&apikey=YourApiKeyToken', function(errorBal,response){
  var contractJson = response.result;
  const contract = new web3.eth.Contract(JSON.parse(contractJson),contractAddress);

  var datares = contract.methods.matchOrder(Corderid,CpairName,CPrice,Cfee,CTotal,timestamp,CuserId,OrderType1,TokenAddress1,Camount).encodeABI();

  web3.eth.getTransactionCount(address).then(_nonce => {
   var gas = 4000000000;
   var gaslimit = 4000000;
   var nonce = _nonce;
  const tx = {
   from: address,
   to: contractAddress,
   gasPrice: gas,
   gasLimit:gaslimit,
   data: datares,
   nonce: nonce,
 
 };
 web3.eth.accounts.signTransaction(tx, "0x"+privateKey).then(signed => {
   const tran = web3.eth.sendSignedTransaction(signed.rawTransaction).on('transactionHash', hash => {
       waitReceipt(hash,resData,count);
   })
   })
   })

});
}
catch(e)
{
  console.log(e);
}
}
 })
 })
//  }
//     else{
//       count1= count1 +1;
//     }
      })
    
    })(i)    
}

  }
})
}
catch(e)
{
  console.log("Token has error",e)
}
})
function waitReceipt(hash,resdata,i)
{
  const Web3 = require('web3');
  var web3 = new Web3(new Web3.providers.HttpProvider(api_infura_url));
  web3.eth.getTransactionReceipt(hash, function (err, receipt) {
			
    if (err) {
      console.log(err,'ERROR');
    }
    if (receipt !== null) {
      if(receipt.status == '0x1'){
      
          if(receipt.status){
            let orderDB    = mongoose.model('CoinOrder');
            var updateJson = {};
            updateJson.Txhash=hash;
            updateJson.TxStatus=1;
            for(j=0;j<resdata.length;j++)
            {
            orderDB.updateOne({_id : resdata[j]._id},{$set : updateJson},{multi:true}).exec(function(errBal,resBal){  
if(errBal)
{
  console.log("treade contract update error",errBal)
}
            })
          }
          }
        
      }
    } 
    else{
      
setTimeout(function () {
  waitReceipt(hash,resdata,i);
}, 1000); 
      
    }
  })
}
function GetTradeUser(contractAddress,resData,count,callback)
{
  const Web3 = require('web3');
  try
{
  var web3 = new Web3(new Web3.providers.HttpProvider(api_infura_url));
  getJSON(api_hit_url+"api?module=contract&action=getabi&address="+contractAddress+'&apikey=YourApiKeyToken', function(errorBal,response){
  var contractJson = response.result;
  USerDetContract(contractJson,contractAddress,resData,count,function(USerdet)
  {
    callback(USerdet)
  })
  })
}
catch(e)
{
  console.log(e);
}
}
function USerDetContract(contractJson,contractAddress,resData,count,callback)
{
  const Web3 = require('web3');
  var web3 = new Web3(new Web3.providers.HttpProvider(api_infura_url));
  const contract = new web3.eth.Contract(JSON.parse(contractJson),contractAddress);
 
  contract.methods.getUserId(resData[count].userId).call(function (err,resulttok) {
    
callback(resulttok)
  })
}
function trailingzeroes(s) {
  while (s.substr(0,1) == '0' && s.length>1) { s = s.substr(1,9999); }
  return s;
}
function convert(n){
  var [lead,decimal,pow] = n.toString().split(/e|\./);
  return +pow <= 0 
      ? "0." + "0".repeat(Math.abs(pow)-1) + lead + decimal
      : lead + ( +pow >= decimal.length ? (decimal + "0".repeat(+pow-decimal.length)) : (decimal.slice(0,+pow)+"."+decimal.slice(+pow)))
}
module.exports = app;

