const Product = require('../models/product');

// /admin/add-product => GET
exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
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
      console.log(err);
    });
}

exports.getProducts = (req, res, next) => {
  Product.find()
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
        product: product,
        isAuthenticated: req.session.isLoggedIn
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;

  Product.findById(prodId)
  .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.imageUrl = updatedImageUrl;
    product.description = updatedDescription;
    return product.save();
  }) 
  .then(()=> {
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId; 
  Product.findByIdAndRemove(prodId)
  .then(() => {
    console.log('Deleted product')
    res.redirect('/admin/products');
  }

  );
  
}
