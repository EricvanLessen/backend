const product = require('../models/product');
const Product = require('../models/product');

const fileHelper = require('../util/file');

const { validationResult } = require('express-validator');

// /admin/add-product => GET
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  
  const title = req.body.title;
  const image = req.file;
  const price = req.body.price;
  const description = req.body.description;
  const errors = validationResult(req);
  console.log(image);
  if(!image){
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false,
      hasError: true,
      product: {
        title: title,
        price: price,
        description: description
      },
      errorMessage: 'Attached file is not an image',
      validationErrors: []
  }); 
  }

  if (!errors.isEmpty()){

    res.status(422).render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        hasError: true,
        product: {
          title: title,
          price: price,
          description: description
        },
        errorMessage: errors.array()[0].msg,
        validationErrors: errors.array()
    }); 
  }

  const imageUrl = image.path

  // mongoose picks the id from the user because its a reference type
  const product = new Product({
    title: title,
    price: price, 
    description: description,
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save()
    .then(() => {
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log("going to error handler in app.js")
      /* render an error page

      return res.status(500).render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/edit-product',
        editing: false,
        hasError: true,
        product: {
          title: title,
          imageUrl: imageUrl,
          price: price,
          description: description
        },
        errorMessage: 'Database operation failed, please try again.',
        validationErrors: []
      })
      */

      // or redirect
     // res.redirect('/500');

     // or throw an error and use a middleware
     const error = new Error(err);
      error.httpStatusCode = 500;
      // moves right to the error middlewares on the bottom
      return next(error)
    });
}

exports.getProducts = (req, res, next) => {
  // authorization filter, only return products created be the current user
  Product.find({userId: req.user._id})
  // find can project fields
  // Product.find({}, {title:1, price:1})
  // select can project which fields you query eg title and price
  // exclude _id (_id is always retrieved except if excluded)
  // .select('title price -_id')
  // populate also fetches the referenced data for specified fields
  // avoids writing nested queries
  // .populate('userId', 'name')
  .then(products => {
    console.log(products)
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
      isAuthenticated: req.session.isLoggedIn
    });
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    // moves right to the error middlewares on the bottom of app.js
    return next(error)
  })
}

// /admin/add-product => GET
exports.getEditProduct = (req, res, next) => {
  // check for optional query parameters url-path/?edit=true 
  let editMode = req.query.edit
  if (editMode === "true"){
      editMode = true;
  } else {
    return res.redirect('/');
  }

  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(product => {
    if (!product){
      return res.redirect('/');
    }
    product.price=parseFloat(product.price);
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing:editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
    });
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    // moves right to the error middlewares on the bottom of app.js
    return next(error)
  })
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const image = req.file;
  const updatedDescription = req.body.description;

  const errors = validationResult(req);

  if (!errors.isEmpty()){
    res.status(422).render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: false,
        hasError: true,
        product: {
          title: updatedTitle,
          price: updatedPrice,
          description: updatedDescription,
          _id: prodId
        },
        errorMessage: errors.array()[0].msg,
        validationErrors: errors.array()
    }); 
  }

  Product.findById(prodId)
  .then(product => {
    // authorization: only user who created the product may edit it. 
    if(product.userId.toString() !== req.user._id.toString()){
      return res.redirect('/')
    }
    product.title = updatedTitle;
    product.price = updatedPrice;

    if (image){
      fileHelper.deleteFile(product.imageUrl);
      product.imageUrl = image.path
    }
    product.description = updatedDescription;
    return product.save()
    .then(()=> {
      res.redirect('/admin/products');
    });
  }) 
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    // moves right to the error middlewares on the bottom of app.js
    return next(error)
  })
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId; 
  Product.findById(prodId)
  .then(product => {
    if(!product){
      return next(new Error('Product not found.'));
    }
    fileHelper.deleteFile(product.imageUrl);
    return Product.deleteOne({ _id: prodId, userId: req.user._id });
  })
  .then(() => {
    console.log('Deleted product')
    res.redirect('/admin/products');
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    // moves right to the error middlewares on the bottom of app.js
    return next(error)
  })
}
