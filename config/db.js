const mongoose = require("mongoose");

const dbURI =
"mongodb+srv://dbUser:h62gjGPhvGoDlj7Y@cluster0-fjcgc.mongodb.net/test?retryWrites=true"

const options = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true,
  dbName: "Shop"
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models
require("../models/product_model");
require("../models/cart_model");
