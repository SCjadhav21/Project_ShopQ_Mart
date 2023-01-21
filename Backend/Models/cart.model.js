const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    shipping: { type: String, required: true },
    quantity: { type: Number, default: 1, min: 1 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
