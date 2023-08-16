"use strict";

var path = require('path');

var express = require('express');

var router = express.Router(); //__dirname will point to the location where it is used

router.get('/', function (req, res, next) {
  console.log('In another middleware!');
  res.status(200);
  res.sendFile(path.join(__dirname, '..', '..', 'views', 'shop.html'));
});
module.exports = router;