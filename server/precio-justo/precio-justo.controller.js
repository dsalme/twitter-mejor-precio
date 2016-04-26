"use strict";

var router = require('express').Router();
var ErrorProvider = require('./../providers/error-provider');
var request = require('request');

module.exports = function(twitterTokens){
  router.post('/', function(req, res, next){
    console.log(req.body);
    if(!req.body || !req.body.query) return next(ErrorProvider.getMissingParametersError());
    var query = req.body.query;
    var queryString = "";
    var arrayOfStrings = query.split(' ');
    console.log(arrayOfStrings);
    queryString = arrayOfStrings.reduce(function(acc, string, index){
      if(string.indexOf('#') != -1) string = string.replace("#", "%23");
      if(string.indexOf('@') != -1) string = string.replace('@', "%40");
      if(index == 0) return acc + string;
      return acc + "%20" + string;
    }, queryString);
    console.log(queryString);
    var options = {
      uri: "https://api.twitter.com/1.1/search/tweets.json?q=%23haiku+%23poetry",
      // uri: "https://api.twitter.com/1.1/search/tweets.json?q=" + queryString,
      method: "GET",
      headers: {
       "Authorization": "Bearer "+ twitterTokens.accessToken
     }
    };
    console.log(options);
    request(options, function(error, response, body){
      body = eval("("+body+")")
      res.json(body);
    })
  })
  return router;
};
