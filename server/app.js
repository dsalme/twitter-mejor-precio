"use strict";

var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost/precioJusto');
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', initApp);

function initApp () {

	var express = require('express');
    var http = require('http');
    var https = require('https');
    var bodyParser = require('body-parser');
    var cors = require('cors');
    var request = require('request');

    var ErrorHandlerMiddleware = require('./middlewares/error-handler');
    var precioJustoController = require('./precio-justo/precio-justo.controller');

    var app = express();

    app.use('/', bodyParser.urlencoded({extended: true}));
    app.use('/', bodyParser.json());
    app.use('/', cors({ origin: true }));
		app.use(express.static('public'));

    var config = require('./config');
    var twitterTokens = require('./middlewares/twitter-tokens');

    app.use('/precioJusto', precioJustoController(twitterTokens));

		var port = 3000;
    var server = http.createServer(app).listen(port,function(){
      twitterTokens.twitterApiToken();
      console.log('Server iniciado en el puerto: ' + port)
    });

  app.use('/', ErrorHandlerMiddleware);
}
