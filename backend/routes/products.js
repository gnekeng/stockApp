const express = require("express");
const router = express.Router();
const Product = require("../models/products");

//GET ALL PRODUCTs
router.get("/all", async (req, res, next) => {
  try {
    let products = await Product.getProducts();
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    console.log(e);
  }
});

//GET PRODUCT BY ID
router.get("/id/:id", async (req, res, next) => {
  try {
    let product = await Product.getProductById(req.params.id);

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    console.log(e);
  }
});

// //GET BY TYPE
// router.get("/type/:typeName", function (req, res, next) {
//   Product.getProductsByType(req.params.typeName, function (err, products) {
//     res.status(200).json(products);
//   });
// });

router.post("/postproduct", async (req, res, next) => {
  let product_code = req.body.product_code;
  let name = req.body.name;
  let brand = req.body.brand;
  let type = req.body.type;
  let vender_name = req.body.vender_name;
  console.log(req.body.product_code);

  let newProduct = new Product({
    product_code: product_code,
    name: name,
    brand: brand,
    type: type,
    vender_name: vender_name,
  });

  try {
    await Product.saveProduct(newProduct);
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
});

//DELETE BY PRODUCT_CODE
router.delete("/delete", async (req, res, next) => {
  try {
    await Product.deleteProduct(req.body.product_code);
    res.status(200).json({
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
});

//DELETE BY ID
router.delete("/deleteByID", async (req, res, next) => {
  try {
    let product = await Product.deleteProductByID(req.body.id);
    if (product === "err arg passed") {
      res.status(200).json({
        success: false,
        err:
          "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters",
      });
    } else if (product !== null) {
      res.status(200).json({
        success: true,
        err: ""
      });
    } else {
      res.status(200).json({
        success: false,
        err: "_id not found"
      });
    }
  } catch (e) {
    console.log(e);
    res.status(200).json({
      success: false,
      err: e
    });
  }
});

module.exports = router;
