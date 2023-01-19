const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  shipping: { type: String, required: true },
});

module.exports = mongoose.model("cart", cartSchema);
