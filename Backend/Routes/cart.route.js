const express = require("express");
const { Authentication } = require("../Middelware/authentication");
const Cart = require("../Models/cart.model");

const cartRouter = express.Router();

cartRouter.get("", Authentication, (req, res) => {});

module.exports = cartRouter;
