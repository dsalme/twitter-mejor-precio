"use strict";
var request = require('request');

var OAuth2 = require('oauth').OAuth2; 

var config = {
  consumerKey : "VwxFaUOa3bVr73F1fc4Z66q3w",
  consumerSecret : "Gy76S8ZKBXJlNmMViEktx5giadFeyeUm0KuBncGcYFKDrefFoc",
  keysToBase64: "",
  twitterApiToken: twitterApiToken,
  accessToken: "",
  tokenType: "",
  tokenTypeEncoded: ""
};
var concatenated = config.consumerKey + ":" + config.consumerSecret;
config.keysToBase64 = new Buffer(concatenated).toString('base64');

function twitterApiToken(){
  var options = {
    uri: "https://api.twitter.com/oauth2/token",
    method: "POST",
    headers: {
     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
     "Authorization": "Basic "+ config.keysToBase64
   },
   body: "grant_type=client_credentials"
  };
  request(options, function(error, response, body){
    body = eval("("+body+")");
    config.accessToken = body.access_token;
    config.tokenType = body.token_type;
    config.tokenTypeEncoded = new Buffer(body.access_token).toString('base64');
    console.log(config);
  })
}

module.exports = config;
