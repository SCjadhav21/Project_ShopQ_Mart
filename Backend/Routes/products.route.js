const express = require("express");
const TV = require("../Models/tv.model");

const productsRouter = express.Router();

productsRouter.get("/tv", (req, res) => {
  try {
  } catch (e) {
    return res.status(500).send(err.message);
  }
});

productsRouter.post("/tv", async (req, res) => {
  try {
    const post = await TV.create();
  } catch (e) {
    return res.status(500).send(err.message);
  }
});

module.exports = productsRouter;
