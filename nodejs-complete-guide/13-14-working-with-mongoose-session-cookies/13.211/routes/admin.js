const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// getAddProduct only a function reference
router.get('/add-product', adminController.getAddProduct)

// admin/products => GET
router.get('/products', adminController.getProducts)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// getAddProduct only a function reference
router.get('/edit-product/:productId', adminController.getEditProduct)

// /admin/add-product => POST
router.post('/edit-product', adminController.postEditProduct);

// /admin/add-product => POST
router.post('/delete-product', adminController.postDeleteProduct);

exports.routes = router;
