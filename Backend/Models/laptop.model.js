const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema(
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
      processor: {
        processor: { type: String, required: true },
        processor_generation: { type: String, required: true },
        processor_brand: { type: String, required: true },
      },
      memory: {
        system_memory: { type: String, required: true },
      },
      storage_capacity: {
        hdd_capacity: { type: String, required: true },
        sdd_capacity: { type: String, required: true },
      },
      display: {
        resolution: { type: String },
        screen_size: { type: String },
      },
      platform: {
        operating_system: { type: String, required: true },
      },
      graphic: {
        graphic_memory: { type: String, required: true },
      },
      machine_dimensions: {
        weight: { type: String },
        color: { type: String },
      },
      laptops_warranty: {
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

module.exports = mongoose.model("laptop", laptopSchema);
