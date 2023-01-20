const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_id: { type: Number, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number },
    discount: { type: String },
    prod_type: { type: String, required: true },
    rating: { type: Number, required: true },
    product_desc: { type: String, required: true },
    cod: { type: String, required: true },
    shipping: { type: String, required: true },
    delivery: { type: String, required: true },
    items_left: { type: Number },
    sold_by_location: { type: String, required: true },
    sold_by: { type: String, required: true },
    emi: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
