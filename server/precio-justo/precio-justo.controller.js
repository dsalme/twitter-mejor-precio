"use strict";

var router = require('express').Router();
var ErrorProvider = require('./../providers/error-provider');
var request = require('request');
var _ = require('lodash');
var relevantProducts = ['zanahorias', 'zapallitos', 'papas', 'tomates', 'leche',
'yogurt', 'manzanas', 'bananas', 'crema para rulos', 'asado', 'vacío', 'pan', 'harina', 'aceite',
'azúcar', 'yerba'];

module.exports = function(twitterTokens){
  router.post('/', function(req, res, next){
    if(!req.body || !req.body.query) return next(ErrorProvider.getMissingParametersError());
    var query = req.body.query;
    var queryString = "";
    var arrayOfStrings = query.split(' ');
    queryString = arrayOfStrings.reduce(queryReducerFunction, queryString);
    var options = buildQueryObject(queryString, undefined);
    console.log(options);
    var statusesToReturn = [];
    var body = makeRequest(statusesToReturn, options, res, queryString);
  })

  function makeRequest(statusesToReturn, options, res, queryString){
    request(options, function twitterSearch(error, response, body){
      body = eval("("+body+")");
      // var lastStatusId = _.last(body.statuses).id;
      // body.statuses = _.union(statusesToReturn, filterTweets(body.statuses));
      body.statuses = _.union(statusesToReturn, filterTweetsWithGeo(body.statuses));
      // body.statuses = _.union(statusesToReturn, body.statuses);
      // if(body.statuses.length < 3){
        // options = buildQueryObject(queryString, lastStatusId);
        // console.log(lastStatusId);
        // makeRequest(statusesToReturn, options);
      // }else{
        res.json(body);
      // }
    });
  }

  function filterTweets(statuses){
    var newStatuses = [];
    _.each(statuses, function(status){
      _.each(relevantProducts, function(product){
        if(status.text.indexOf(product) != -1) newStatuses.push(status);
      });
    });
    return newStatuses;
  };

  function filterTweetsWithGeo(statuses){
    return _.filter(statuses, function(status){
      return status.geo
    });
  };

  function buildQueryObject(queryString, lastId){
    return {
      uri: "https://api.twitter.com/1.1/search/tweets.json?q=" + queryString + "&count=100" + (lastId? '&lastId=' + lastId : ''),
      method: "GET",
      headers: {
       "Authorization": "Bearer "+ twitterTokens.accessToken
      }
    }
  };

  function queryReducerFunction(acc, string, index){
    if(string.indexOf('#') != -1) string = string.replace("#", "%23");
    if(string.indexOf('@') != -1) string = string.replace('@', "%40");
    if(index == 0) return acc + string;
    return acc + "%20" + string;
  }
  return router;
};
