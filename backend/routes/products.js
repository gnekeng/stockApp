var express = require('express');
var router = express.Router();
var Product = require('../models/products');

router.get('/all', function(req, res, next) {
    Product.getProducts(function(err,products){
        res.status(200).json(products);
    });
});

router.get('/type/:typeName', function(req, res, next) {
    Product.getProductsByType(req.params.typeName, function(err,products) {
        res.status(200).json(products);
    });
});

router.post('/register', function(req, res, next) {
    var product_code=req.body.product_code;
    var name=req.body.name;
    var brand=req.body.brand;
    var type=req.body.type;
    var vender_name=req.body.vender_name;
  
    var newProduct=new Product({
        product_code: product_code,
        name: name,
        brand: brand,
        type: type,
        vender_name: vender_name
    });

    User.saveProduct(newProduct,function(err,product) {
        if(err) throw err
    })

    res.status(201);
});


module.exports = router;