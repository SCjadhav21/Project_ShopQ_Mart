const mongoose = require("mongoose");

const refrigeratorSchema = new mongoose.Schema(
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
    product_specs: {
      key_features: {
        brand: { type: String, required: true },
      },
      refrigerator_specification: {
        gross_capacity: { type: String, required: true },
        gross_capacity_range: { type: String, required: true },
        door_type: { type: String, required: true },
        technology: { type: String, required: true },
      },
      refrigerator_features: {
        shelf_material: { type: String, required: true },
        no_of_shelves: { type: String, required: true },
      },
      product_warranty: {
        main_unit: { type: String, required: true },
        compressor: { type: String, required: true },
      },
      power: {
        energy_rating: { type: Number, required: true },
      },
      convenience_features: {
        door_lock: { type: String, required: true },
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

module.exports = mongoose.model("refrigerator", refrigeratorSchema);
