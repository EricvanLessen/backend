"use strict";

var express = require('express');

var router = express.Router();
router.get('/add-product', function (req, res, next) {
  console.log('In the middleware!');
  res.status(200);
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});
router.post('/add-product', function (req, res, next) {
  console.log(req.body);
  res.redirect('/');
});
module.exports = router;