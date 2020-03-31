const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
var async          = require('async');
var getJSON = require('get-json');
let common = require('../helpers/common');
let TokenDB  = mongoose.model('Tokendetails');
let CurrencyDB  = mongoose.model('currency');
let PairDB  = mongoose.model('pairs');


let apiresponse = {
status: 200,
message: "",
data: [],
cmscount: 0
};



router.post('/gettokendetails', (req, res) => {
try{
var skip  = req.body.page.pageNumber * req.body.page.size;
var limit = req.body.page.size;
let prop1 = req.body.sorting.prop;
var dir   = req.body.sorting['dir'];
var srt   = {}
srt[prop1] = dir == 'desc' ? -1 : 1;

var cnt;
var search = req.body.search;
if(req.body.search != ""){
cnt = {$or:[{'name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
}
else{
cnt = {};
}

async.parallel({
bannerTotalCount:function(cb) {      
TokenDB.find( cnt ).countDocuments().exec(cb);
},
bannerData:function(cb) {
TokenDB.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
},
},function(err,results){
if (err) return res.status(500).send(err);
apiresponse.data     = [];
apiresponse.status   = true;
apiresponse.data     = results.bannerData;
apiresponse.bannerTotalCount = results.bannerTotalCount;
apiresponse.message  = "";
res.json(apiresponse);

})
}
catch(e){
console.log("gettokendetails",e);
}
});

router.post('/addtoken', function(req, res) {
let getdet = req.body;
try {
TokenDB.findOne({"symbol":getdet.symbol},function(tknerr,tkndata){
if(tkndata == null){
if(getdet.baseCoin == 'ETH'){
var abiget = getJSON("https://api.etherscan.io/api?module=contract&action=getabi&address="+getdet.conaddress, function(errorBal,response1){
if(response1.status == 1){

if (!errorBal){

let settingDB =  require('../model/Sitekeys');
settingDB.findOne().exec((adminerr, admindet) => {

getJSON("https://api.etherscan.io/api?module=contract&action=getabi&address="+admindet.adminAddress, function(errorBal,response){

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/682d21aed8204bfe8370b50a93aed124'));
const contractJson =response.result;

var contractAddress = admindet.adminAddress;
var address = admindet.Adminkeyaddress;
var privateKey = admindet.AdminprivateKey;
const contract = new web3.eth.Contract(JSON.parse(contractJson),contractAddress);

web3.eth.getTransactionCount(address).then(_nonce => {
var nonce = _nonce;
var datares = contract.methods.addToken(getdet.conaddress,getdet.symbol,getdet.decimal).encodeABI();
var gas = 4000000000;
var gaslimit = 4000000;
const tx = {
from: address,
to: contractAddress,
gasPrice: '0x' +gas.toString(16),
gasLimit:gaslimit,
data: datares,
nonce: '0x' +nonce.toString(16),
value:"0x00"
};
web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
web3.eth.sendSignedTransaction(signed.rawTransaction).on('transactionHash', hash => {

let contactJson = {
name: getdet.name,
symbol: getdet.symbol,
decimal: getdet.decimal,
conaddress: getdet.conaddress,
pairlist: getdet.pairlist,
basecoin: getdet.baseCoin,
logo: getdet.logo,
hash: hash,
status:"pending"
}
var mydata = new TokenDB(contactJson);

mydata.save()
.then(item=>{
const getid = item._id;
var tokendet = {
currencyName:getdet.name,
curnType:2,
currencySymbol:getdet.symbol,
image:getdet.logo,
minwithamt:getdet.minimum,
maxwithamt:getdet.maximum,
withdrawfee:getdet.fee,
EstimatedBTC:0,
EstimatedUSD:0,
feetype:1,
status:1,
decimals:getdet.decimal,

contractAddress:getdet.conaddress,
baseCoin:getdet.baseCoin,
abiArray:"",
}
var mydata1 = new CurrencyDB(tokendet);
mydata1.save()
.then(item=>{
var pairget = getdet.pairlist;
var inc = 0;
var lengthVal = pairget.split(",").length;
if(lengthVal>0){
var arr = pairget.split(",").map(function (val) { 
var arr1 = val.split("/");
CurrencyDB.findOne({ currencySymbol: arr1[0]}).exec((fromcurErr, fromcurRes) => {
if (fromcurRes) {
CurrencyDB.findOne({ currencySymbol: arr1[1]}).exec((tocurErr, tocurRes) => {
if (tocurRes) {
var pairdet = {
marketPrice:0,
status:1,
minTrade:0,
makerFee:0,
takerFee:0,
fee:0,
feeType:1,
calculate_market_price:0,
percentage:0,
percentage_amount:0,
option:1,
price:0,
usdprice:0,
change: 0,
high: 0,
low: 0,
pair:arr1[0]+"_"+arr1[1],
fromCurrency: fromcurRes._id,
toCurrency: tocurRes._id,
}
PairDB.create(pairdet, function (err, resData3) {
inc +=1;
if (inc==lengthVal) {
common.updateCurrencyPair();
}
});														
}
else{
inc +=1;
if (inc==lengthVal) {
common.updateCurrencyPair();
}
}
});
}
else{
inc +=1;
if (inc==lengthVal) {
common.updateCurrencyPair();
}
}
});
});
}
else{
common.updateCurrencyPair();
}
TokenDB.find().sort( { datetime: -1 } ).exec(function (TokensErr, TokensRes) {

res.json({ "status": true, "Message": "Token approved successfully","getdet":TokensRes });



})
})	
.catch(err=>{
console.log(err)
res.json({status: false,Message: 'Currency not created.please try again'});										
})								
})
.catch(err=>{
console.log(err)
res.json({status: false,Message: 'Token not created.please try again'});
})



})
});
});


})

})

}
else{
res.json({status: false,"Message": "Error occured on abi array"});
return false;
}


}
else{
res.json({status: false,"Message": "Invalid contract address"}) 
return false; 
}
});
}
else{
res.json({status: false,"Message": "NOT ETH TOKEN"})
}
}
else{
res.json({status: false,"Message": "Token symbol already exists .please try with different token"})
}
})
}
catch (e) {
res.json({status: false,"Message": "Error occured"})
}
});



module.exports = router;