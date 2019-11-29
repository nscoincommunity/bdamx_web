var request = require("request");

var options = {
  method: 'POST',
  url: 'https://api.jungle.greeneosio.com:443/v1/history/get_transaction',
  headers: {'content-type': 'application/json'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});