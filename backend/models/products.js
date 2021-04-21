var mongo = require('mongodb');
var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://node-rest-user:nexthop@projectcluster.vidjs.gcp.mongodb.net/StockDB?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(error => handleError(error));


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

module.exports.getProducts = async function () {
  try{
    let result = await Product.find()
    return result;
  }catch(e){
    console.log(e);
    return e;
  }
};

module.exports.getProductById = async function (id) {
  try{
    let result = await Product.findById(id)
    return result;
  }catch(e){
    console.log(e);
    return e;
  }
};

module.exports.getProductsByType = function (type, callback) {
  var query = {
      type: type
  }
  Product.find(query, callback).catch(err => console.error(`Failed to find documents: ${err}`))
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
  Product.findByIdAndDelete(oid, function (err, oid) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted : ", oid);
    }
  });

};