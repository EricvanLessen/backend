"use strict";

var path = require('path');

var express = require('express');

var bodyParser = require('body-parser');

var adminRoutes = require('./routes/admin');

var shopRoutes = require('./routes/shop');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
})); //forward file requests to the public folder

app.use(express["static"](path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(function (req, res, next) {
  console.log(__dirname);
  res.status(404);
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});
var port = 3000;
app.listen(port);
console.log("Server started on port: ".concat(port));