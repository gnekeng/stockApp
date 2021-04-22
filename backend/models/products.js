const mongoose = require("mongoose");

//Connect
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb Connect Error"));

const productSchema = mongoose.Schema({
  product_code: {
    type: String,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  type: {
    type: String,
  },
  vender_name: {
    type: String,
  },
});
var Product = (module.exports = mongoose.model("products", productSchema));

module.exports.getProducts = async function () {
  try {
    let result = await Product.find();
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

module.exports.getProductById = async function (id) {
  try {
    let result = await Product.findById(id);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

module.exports.getProductsByType = function (type, callback) {
  var query = {
    type: type,
  };
  Product.find(query, callback).catch((err) =>
    console.error(`Failed to find documents: ${err}`)
  );
};

module.exports.saveProduct = function (newProduct) {
  newProduct.save();
};

module.exports.deleteProduct = async function (product_code) {
  var query = {
    product_code: product_code,
  };

  try {
    let result = await Product.deleteOne(query);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

module.exports.deleteProductByID = async function (id) {
  try {
    let result = await Product.findByIdAndDelete(id);
    return result;
  } catch (e) {
    console.log(e);
    return "err arg passed";
  }
};
