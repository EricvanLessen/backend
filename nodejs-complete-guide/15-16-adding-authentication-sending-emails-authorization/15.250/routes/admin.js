const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
const isAuth = require('../middleware/is-auth.js');

// getAddProduct only a function reference
router.get('/add-product', isAuth, adminController.getAddProduct)

// admin/products => GET
router.get('/products', isAuth, adminController.getProducts)

// /admin/add-product => POST
router.post('/add-product', isAuth, adminController.postAddProduct);

// getAddProduct only a function reference
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// /admin/add-product => POST
router.post('/edit-product', isAuth, adminController.postEditProduct);

// /admin/add-product => POST
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

exports.routes = router;
