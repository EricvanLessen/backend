"use strict";

var express = require('express');

var path = require('path');

var router = express.Router();
router.get('/users', function (req, res, next) {
  res.status(200).sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});
router.get('/', function (req, res, next) {
  res.status(200).sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
module.exports = router;