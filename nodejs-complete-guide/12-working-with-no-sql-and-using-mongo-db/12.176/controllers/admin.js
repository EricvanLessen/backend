const Product = require('../models/product');
const mongodb = require('mongodb');

// /admin/add-product => GET
exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing:false
    });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(
    title,
    price, 
    description, 
    imageUrl, 
    null,
    req.user._id);
  product
    .save()
    .then(() => {
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
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
        product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  const updatedProduct = new Product(
      updatedTitle,
      updatedPrice,
      updatedDescription,
      updatedImageUrl,
      prodId
  );
  updatedProduct.save()
  .then(()=> {
    res.redirect('/admin/products');
  }) 
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId; 
  Product.deleteById(prodId)
  .then(() => {
    console.log('Deleted product')
    res.redirect('/admin/products');
  }

  );
  
}
