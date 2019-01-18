const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
  Defining schema validation
  for product -> title, price, and inventory_count
*/
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  inventory_count: {
    type: Number,
    required: true
  }
}, {collection: 'Products'});

module.exports = mongoose.model("Product", ProductSchema);
