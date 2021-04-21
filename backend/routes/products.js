var express = require('express');
var router = express.Router();
var Product = require('../models/products');

//GET ALL PRODUCTs
router.get('/all', async function(req, res, next) {
    try{
        let products = await Product.getProducts();
        res.status(200).json({
            messsage: "success",
            data: {
                products
            }
        })
    }catch (e){
        console.log(e);
    }
});

//GET PRODUCT BY ID
router.get('/id/:id', async function(req, res) {
    try{
        let product = await Product.getProductById(req.params.id);

        res.status(200).json({
            messsage: "success",
            data: {
                product
            }
        })
    }catch (e){
        console.log(e);
    }
});

//GET BY TYPE
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
    console.log(req.body.product_code);

    var newProduct=new Product({
        product_code: product_code,
        name: name,
        brand: brand,
        type: type,
        vender_name: vender_name
    });

    Product.saveProduct(newProduct,function(err,product) {
        if(err) throw err;
    })

    res.status(201).json(newProduct);
});

router.delete('/delete', function(req, res, next) {
    var product_code = req.body.product_code;
    Product.deleteProduct(product_code,function(err){
        if(err) throw err;
    });
    res.status(200).json('deleted');
});

router.delete('/deleteByID', function(req, res, next) {
    var oid = req.body.oid;

    Product.deleteProductByID(oid,function(err){
        if(err) throw err;
    });
    res.status(200).json('deleted');
});

module.exports = router;