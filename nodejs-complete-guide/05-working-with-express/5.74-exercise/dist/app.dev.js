"use strict";

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser');

var userRoute = require('./routes/users');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](path.join(__dirname, 'public')));
app.use(userRoute);
app.use(function (req, res, next) {
  res.status(404).send('<h1>Page not found</h1>');
});
var port = 3000;
app.listen(port);
console.log("Server started on port: ".concat(port));