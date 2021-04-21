var mongo = require('mongodb');
var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://iceman951:Iceman0811@projectcluster.vidjs.gcp.mongodb.net/StockDB?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//Connect
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connect Error'));

var productSchema = mongoose.Schema({
  product_code: {
    type: String
  },
  name: {
    type: String
  },
  brand: {
    type: String
  },
  type: {
    type: String
  },
  vender_name: {
    type: String
  }
});
var Product = module.exports = mongoose.model('products', productSchema);

module.exports.getProducts = function (callback, limit) {
  Product.find(callback).limit(limit);
};

module.exports.getProductsByType = function (type, callback) {
  var query = {
      type: type
  }
  Product.find(query, callback);
};

module.exports.saveProduct = function (newProduct, callback) {
  newProduct.save(callback);
};

module.exports.deleteProduct = function (product_code, callback) {
  var query = {
    product_code: product_code
}
  Product.deleteOne(query, callback);
};

module.exports.deleteProductByID = function (oid, callback) {
  Product.findByIdAndDelete(oid, callback);
};