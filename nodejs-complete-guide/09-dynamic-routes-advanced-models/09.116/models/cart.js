const e = require('express');
const fs = require('fs');
const path = require('path');
const { postDeleteProduct } = require('../controllers/admin');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static addProduct(id, productPrice) {
        console.log("cart");

        fs.readFile(p, "utf8", (err, fileContent) => {
            let cart;
            if (!err) {
                if (fileContent === '' ){
                    cart = {products: [], totalPrice: 0}
                } else {
                    cart = JSON.parse(fileContent);
                }
            }
            const existingProductIndex = cart.products.findIndex(prod=>prod.id===id);
            let updatedProduct;
            console.log("epi", existingProductIndex)
            if(!(existingProductIndex===-1)){
                const existingProduct = cart.products[existingProductIndex];
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                console.log("id", id)
                console.log("new product")
                updatedProduct = { id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            
            cart.totalPrice = parseFloat(cart.totalPrice) + parseFloat(productPrice);
            //cart.totalPrice = cart.totalPrice.replace(/^0+/, '');

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
        // add new product
    }

    static deleteProduct(id, productPrice){
        fs.readFile(p, "utf8", (err, fileContent) => {
            let cart;
            if (!err) {
                if (fileContent === '' ){
                    return
                } else {
                    cart = JSON.parse(fileContent);
                }
            }
            const updatedCart = {...cart};
            const product = updatedCart.products.find(prod => prod.id ===id);
            if (product !== undefined){
                const productQty = product.qty;
                updatedCart.products = updatedCart.products.filter(
                    prod => prod.id !== id
                );
                updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
                fs.writeFile(p, JSON.stringify(updatedCart), err => {
                    console.log(err);
                });
            }
        });
    }

    static getCart(callback) {
        fs.readFile(p, 'utf8', (err, fileContent) => {
        const cart = JSON.parse(fileContent);
            if (err){
                callback(null);
            } else {
                callback(cart);
            }
        });
    }
};