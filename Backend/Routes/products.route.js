const express = require("express");
const TV = require("../Models/tv.model");
const Refrigerator = require("../Models/refrigerator.model");
const WashingMachine = require("../Models/washingmachine.model");

const productsRouter = express.Router();

productsRouter.get("/tv", async (req, res) => {
  try {
    const tvs = await TV.find().lean().exec();
    res.status(200).send(tvs);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/refrigerator", async (req, res) => {
  try {
    const refrigerators = await Refrigerator.find().lean().exec();
    res.status(200).send(refrigerators);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.get("/washingmachine", async (req, res) => {
  try {
    const washingmachines = await WashingMachine.find().lean().exec();
    res.status(200).send(washingmachines);
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

module.exports = productsRouter;
