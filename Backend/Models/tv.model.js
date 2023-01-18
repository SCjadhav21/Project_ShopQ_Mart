const mongoose = require("mongoose");

const tvSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_id: { type: Number, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number },
    discount: { type: String, required: true },
    prod_type: { type: String, required: true },
    rating: { type: Number, required: true },
    product_desc: { type: String, required: true },
    product_specs: {
      key_features: {
        brand: { type: String, required: true },
      },
      tv_specifications: {
        ptype: { type: String, required: true },
        display_size: { type: String, required: true },
        screen_size_range: { type: String, required: true },
        functionality: { type: String, required: true },
      },
      general_feature: {
        display_resolution: { type: String, required: true },
      },
      connectivity: {
        usb_port: { type: String, required: true },
        hdmi_ports: { type: String, required: true },
      },
      electronic_warranty: {
        warranty_available: { type: String, required: true },
        duration: { type: String, required: true },
      },
    },
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

module.exports = mongoose.model("tv", tvSchema);
