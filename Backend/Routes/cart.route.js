const express = require("express");
const { Authentication } = require("../Middelware/authentication");
const Cart = require("../Models/cart.model");

const cartRouter = express.Router();

cartRouter.get("", Authentication, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.body.userId }).lean().exec();
    return res.status(200).send(cart);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cartRouter.post("", Authentication, async (req, res) => {
  const userId = req.body.userId;
  try {
    const cart = await Cart.create({
      product_name: req.body.product_name,
      image: req.body.image,
      price: req.body.price,
      shipping: req.body.shipping,
      userId: userId,
    });
    return res.status(201).send(cart);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cartRouter.patch("/:id", Authentication, async (req, res) => {
  const payload = req.body;
  try {
    const item = await Cart.findByIdAndUpdate(req.params.id, payload, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

cartRouter.delete("/:id", Authentication, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send("Data succesfully deleted!");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = cartRouter;

// s
