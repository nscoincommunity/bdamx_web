const Web3 = require('web3');

var user_address = '0x48BA1f7f1CafCC7aE71513871C53CE15d23c9624';
var web3 = new Web3(new Web3.providers.HttpProvider("https://api.infura.io/v1/jsonrpc/mainnet"));
var milliseconds = (new Date).getTime();
const mes ="2235643739303630653034363162303334353433323663663622"+user_address.substr(5)+milliseconds;

 





var sig=web3.eth.accounts.sign(mes,'0xC03400111A214D58AC8835DDFC9701807EFFE303260FE33FA9ED0F91FE2E66AB');
// var r = `0x${sig.slice(0, 64)}`;
    //var s = `0x${sig.slice(64, 128)}`;
   //var v = web3.toDecimal(sig.slice(128, 130)) + 27;
   console.log(parseInt(sig.v))
console.log(sig);

