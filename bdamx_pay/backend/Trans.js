const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');      
const fetch = require('node-fetch');                                    
const { TextEncoder1, TextDecoder1 } = require('util');                 
const { TextEncoder, TextDecoder } = require('text-encoding');          


const defaultPrivateKey = "5K3NxviduCQLCJquU4at2a6XyeWusD3ZtKKF8bVHGKAc11njsou"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc('https://jungle2.cryptolions.io:443', { fetch });

const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

function withdrawEOS()
{
(async () => {
    const result = await api.transact({
      actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: 'oossizzz1234',
          permission: 'active',
        }],
        data: {
          from: 'oossizzz1234',
          to: 'oossiizz1234',
          quantity: '0.1762 EOS',
          memo: '',
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    console.dir(result);
  })();

}

withdrawEOS()