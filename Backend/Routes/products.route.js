const express = require("express");
const TV = require("../Models/tv.model");
const Refrigerator = require("../Models/refrigerator.model");
const WashingMachine = require("../Models/washingmachine.model");
const Laptop = require("../Models/laptop.model");
const Product = require("../Models/product.model");

const productsRouter = express.Router();

productsRouter.get("", async (req, res) => {
  const order = req.query.order || "asc";
  try {
    const products = await Product.find({})
      .sort({ price: order })
      .lean()
      .exec();
    res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/tv", async (req, res) => {
  const order = req.query.order || "asc";

  try {
    const tvs = await TV.find({}).sort({ price: order }).lean().exec();
    res.status(200).send(tvs);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/tv/:id", async (req, res) => {
  try {
    const tv = await TV.findById(req.params.id).lean().exec();
    if (tv) return res.status(200).send(tv);
    else return res.status(404).send("Product Not Found!");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/refrigerator", async (req, res) => {
  const order = req.query.order || "asc";
  try {
    const refrigerators = await Refrigerator.find({})
      .sort({ price: order })
      .lean()
      .exec();
    res.status(200).send(refrigerators);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/refrigerator/:id", async (req, res) => {
  try {
    const refrigerator = await Refrigerator.findById(req.params.id)
      .lean()
      .exec();
    if (refrigerator) return res.status(200).send(refrigerator);
    else return res.status(404).send("Product Not Found!");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/washingmachine", async (req, res) => {
  const order = req.query.order || "asc";
  try {
    const washingmachines = await WashingMachine.find({})
      .sort({ price: order })
      .lean()
      .exec();
    res.status(200).send(washingmachines);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/washingmachine/:id", async (req, res) => {
  try {
    const washingmachine = await WashingMachine.findById(req.params.id)
      .lean()
      .exec();
    if (washingmachine) return res.status(200).send(washingmachine);
    else return res.status(404).send("Product Not Found!");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/laptop", async (req, res) => {
  const order = req.query.order || "asc";
  try {
    const laptops = await Laptop.find({}).sort({ price: order }).lean().exec();
    res.status(200).send(laptops);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/laptop/:id", async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id).lean().exec();
    if (laptop) return res.status(200).send(laptop);
    else return res.status(404).send("Product Not Found!");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.post("/tv", async (req, res) => {
  try {
    const tv = await TV.create(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.post("/refrigerator", async (req, res) => {
  try {
    const refrigerator = await Refrigerator.create(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.post("/washingmachine", async (req, res) => {
  try {
    const washingmachine = await WashingMachine.create(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.post("/laptop", async (req, res) => {
  try {
    const laptop = await Laptop.insertMany(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = productsRouter;
