const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// getAddProduct only a function reference
router.get('/add-product', productsController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

exports.routes = router;
