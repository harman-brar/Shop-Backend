var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var productSchema = require("../models/product_model");
var cartSchema = require('../models/cart_model');
var async = require('async');


var id = mongoose.Types.ObjectId();
var price = 0;

/*
  creates instance of cart model
*/
var cart = new cartSchema(
  {
    id,
    products:[],
    price
  }
);

/*
  used to find empty cart saved in database
  when needed
*/
let cart_id = null;

/*
  Creates cart
  saves it to database
  without any products
  and price: 0
*/
router.post('/', function(req, res, next) {
  cart.save(function (err, createdCart) {
    if (err) return handleError(err);

    cart_id = createdCart._id;
    res.send("Cart created \nSend a request to /addToCart with a name parameter set to any of the following:\n1) Item Uno\n2) Item Dos\n3) Item Tres\n4) Item Quattro\n5) Item none-left");
  });
});

/*
  retrieves cart from database,
  retrieves product to add from database,
  adds product to cart,
  adds price of product to cart total price,
  updates cart in database
*/
router.post('/addToCart', function(req, res, next) {

  // runs functions in array in order
  async.waterfall([
    getCart,
    getProduct,
    updateCart,
  ], function (err, result) {
      if (err) return handleError(err);
      return res.send(req.query.name + " added to cart\nCart saved\nAdd another product or\nSee cart by using /completeCart route with 'action' param set to 'see' or\nComplete cart using /completeCart route with 'action' param set to 'complete'");
  });

  //  retrieves cart from database,
  function getCart(callback) {
      cartSchema.findOne({'_id': cart_id}, 'products price', function (err, cart) {
        callback(null, cart);
      });
  }

  /*
    retrieves product to add from database,
    adds product to cart,
    adds price of product to cart total price
  */
  function getProduct(arg1, callback) {
      productSchema.findOne({ 'title': req.query.name }, 'title price inventory_count', function (err, product) {
        arg1.products.push(product);
        arg1.price += product.price;
        callback(null, arg1);
      });
  }

  //  updates cart in database
  function updateCart(arg1, callback) {
      cartSchema.findOneAndUpdate({'_id': cart_id}, arg1, function (err, updatedCart) {
        callback(null, updatedCart);
      });
  }

});

/*
  completes cart
*/
router.post('/completeCart', function(req, res, next) {

  //  returns cart if 'action' param is "see"
  if (req.query.action == "see") {
    cartSchema.findOne({'_id': cart_id}, 'products price', function (err, cart) {
      res.json(cart);
    });

  } else if (req.query.action == "complete") {

    /*
      decrements inventory_count of all items in cart,
      saves cart to database,
      returns cart as json
    */
    async.waterfall([
      decrementCount,
      saveCart,
    ], function (err, result) {
        //  returns cart as json

        if (err) return handleError(err);
        res.json(result);
    });

    /*
      decrements inventory_count of all items in cart by 1
      this can be made dynamic by either adding an amount property to each products
                                  or looping throw a local array of item names
                                     and counting reoccurences
    */
    function decrementCount(callback) {
      cartSchema.findOne({'_id': cart_id}, 'products price', function (err, cart) {
        for (var i = 0, len = cart.products.length; i < len; i++) {
          cart.products[i].inventory_count -= 1;
        }
        callback(null, cart);
      });
    }

    //  saves cart to database
    function saveCart(arg1, callback) {
      cartSchema.findOneAndUpdate({'_id': cart_id}, arg1, function (err, updatedCart) {
        callback(null, arg1);
      });
    }

  } else {
    res.send("Set 'action' parameter to either 'see' or 'complete'");
  }
});

module.exports = router;
