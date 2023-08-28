const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = callback => {
    fs.readFile(p, "utf8", (err, fileContent) => {
        if (!err) {
            if (fileContent === undefined ){
                callback([])
            } else {
                callback(JSON.parse(fileContent));
            }
        }
    });
}

module.exports= class Product{
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log('e',err)
            })
        });
    }

    static fetchAll(callback){
        getProductsFromFile(callback);
    }
}