var express = require('express');
var router = express.Router();
var productSchema = require("../models/product_model");
var productsRouter = require("../routes/products");

/*
  returns all products in database
  unless a param 'onlyNonZero' is passed as 'true'
*/
router.get('/', function(req, res, next) {
  if (req.query.onlyNonZero == "true") {
    productSchema.find({inventory_count: { $gt: 0 }}).exec(function(err, products) {
      if (err) return handleError(err);
      res.json(products);
    });
  }
  else {
    productSchema.find().exec(function(err, products) {
      if (err) return handleError(err);
      res.json(products);
    });
  }
});

/*
  returns product in database with the same title as 'name' param 
*/
router.get('/one', function(req, res, next) {
  productSchema.findOne({ 'title': req.query.name }, 'title price inventory_count', function (err, product) {
    if (err) return handleError(err);
    res.json(product);
  });
});

module.exports = router;
