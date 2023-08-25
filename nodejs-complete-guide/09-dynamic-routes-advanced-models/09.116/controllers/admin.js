const Product = require('../models/product');

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
  const product = new Product(null, title, imageUrl, description, price);
  product.save()
  //products.push({ title: req.body.title });
  res.redirect('/');
}

// /admin/add-product => GET
exports.getEditProduct = (req, res, next) => {
  // check for optional query parameters url-path/?edit=true 
  let editMode = req.query.edit
  if (editMode === "true"){
      editMode = true;
  } else {
      editMode = false;
  }

  const prodId = req.params.productId;
  if(!editMode){
    return res.redirect('/');
  }

  Product.findById(prodId, product => {
    product.price=parseFloat(product.price);
    console.log(product);
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
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDescription,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products')
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products)=>{
    res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    });
  });
}

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId; 
  Product.deleteById(prodId);
  res.redirect('/');
}