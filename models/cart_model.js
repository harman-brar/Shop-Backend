const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var productSchema = require('../models/product_model');

/*
  Defining schema validation
  for cart -> contains an array of products
  modeled according to productSchema
*/
const CartSchema = new Schema({
  products: [],
  price: Number
}, {collection: 'Carts'});

module.exports = mongoose.model("Cart", CartSchema);
