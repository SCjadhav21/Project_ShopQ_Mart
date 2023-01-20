const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1, min: 1 },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

module.exports = mongoose.model("order", orderSchema);
