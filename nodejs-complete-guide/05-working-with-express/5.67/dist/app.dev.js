"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var adminRoutes = require('./routes/admin');

var shopRoutes = require('./routes/shop');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(function (req, res, next) {
  res.status(404);
  res.send("<h1>Page not found</h1>");
});
var port = 3000;
app.listen(port);
console.log("Server started on port: ".concat(port));