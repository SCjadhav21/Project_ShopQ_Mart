const express = require("express");
const TV = require("../Models/tv.model");
const Refrigerator = require("../Models/refrigerator.model");
const WashingMachine = require("../Models/washingmachine.model");
const Laptop = require("../Models/laptop.model");
const Product = require("../Models/product.model");
const { AdminAuthentication } = require("../Middelware/adminauth");

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
    if (req.query.brand && req.query.discount) {
      const tvs = await TV.find({
        brand: { $regex: req.query.brand, $options: "i" },
        discount: req.query.discount,
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(tvs);
    } else if (req.query.brand) {
      const tvs = await TV.find({
        brand: { $regex: req.query.brand, $options: "i" },
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(tvs);
    } else if (req.query.discount) {
      const tvs = await TV.find({ discount: req.query.discount })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(tvs);
    } else {
      const tvs = await TV.find({}).sort({ price: order }).lean().exec();
      res.status(200).send(tvs);
    }
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
    if (req.query.brand && req.query.discount) {
      const refrigerators = await Refrigerator.find({
        brand: { $regex: req.query.brand, $options: "i" },
        discount: req.query.discount,
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(refrigerators);
    } else if (req.query.brand) {
      const refrigerators = await Refrigerator.find({
        brand: { $regex: req.query.brand, $options: "i" },
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(refrigerators);
    } else if (req.query.discount) {
      const refrigerators = await Refrigerator.find({
        discount: req.query.discount,
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(refrigerators);
    } else {
      const refrigerators = await Refrigerator.find({})
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(refrigerators);
    }
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
    if (req.query.brand && req.query.discount) {
      const washingmachines = await WashingMachine.find({
        brand: { $regex: req.query.brand, $options: "i" },
        discount: req.query.discount,
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(washingmachines);
    } else if (req.query.brand) {
      const washingmachines = await WashingMachine.find({
        brand: { $regex: req.query.brand, $options: "i" },
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(washingmachines);
    } else if (req.query.discount) {
      const washingmachines = await WashingMachine.find({
        discount: req.query.discount,
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(washingmachines);
    } else {
      const washingmachines = await WashingMachine.find({})
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(washingmachines);
    }
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
    if (req.query.brand && req.query.discount) {
      const laptops = await Laptop.find({
        brand: { $regex: req.query.brand, $options: "i" },
        discount: req.query.discount,
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(laptops);
    } else if (req.query.brand) {
      const laptops = await Laptop.find({
        brand: { $regex: req.query.brand, $options: "i" },
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(laptops);
    } else if (req.query.discount) {
      const laptops = await Laptop.find({
        discount: req.query.discount,
      })
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(laptops);
    } else {
      const laptops = await Laptop.find({})
        .sort({ price: order })
        .lean()
        .exec();
      res.status(200).send(laptops);
    }
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

// productsRouter.use(AdminAuthentication);

productsRouter.post("", AdminAuthentication, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productsRouter.post("/tv", AdminAuthentication, async (req, res) => {
  const payload = req.body;
  try {
    const tv = await TV.create(payload);
    res.status(201).send("Product added successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

productsRouter.patch("/tv/:id", AdminAuthentication, async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    const tv = await TV.findByIdAndUpdate(id, payload);
    res.status(201).send("Product data updated!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
productsRouter.delete("/tv/:id", AdminAuthentication, async (req, res) => {
  const id = req.params.id;
  try {
    const tv = await TV.findByIdAndDelete(id);
    res.status(201).send("Data deleted successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

productsRouter.post("/refrigerator", AdminAuthentication, async (req, res) => {
  try {
    const refrigerator = await Refrigerator.create(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
productsRouter.patch(
  "/refigerator/:id",
  AdminAuthentication,
  async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
      const refigerator = await Refrigerator.findByIdAndUpdate(id, payload);
      res.status(201).send("Product data updated!");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);
productsRouter.delete(
  "/refigerator/:id",
  AdminAuthentication,
  async (req, res) => {
    const id = req.params.id;
    try {
      const refigerator = await Refrigerator.findByIdAndDelete(id);
      res.status(201).send("Data deleted successfully!");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);

productsRouter.post(
  "/washingmachine",
  AdminAuthentication,
  async (req, res) => {
    try {
      const washingmachine = await WashingMachine.create(req.body);
      res.status(201).send("Data added successfully");
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);
productsRouter.patch(
  "/washingmachine/:id",
  AdminAuthentication,
  async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
      const washingmachine = await TV.findByIdAndUpdate(id, payload);
      res.status(201).send("Product data updated!");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);
productsRouter.delete(
  "/washingmachine/:id",
  AdminAuthentication,
  async (req, res) => {
    const id = req.params.id;
    try {
      const washingmachine = await WashingMachine.findByIdAndDelete(id);
      res.status(201).send("Data deleted successfully!");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
);

productsRouter.post("/laptop", AdminAuthentication, async (req, res) => {
  try {
    const laptop = await Laptop.insertMany(req.body);
    res.status(201).send("Data added successfully");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
productsRouter.patch("/laptop/:id", AdminAuthentication, async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    const laptop = await Laptop.findByIdAndUpdate(id, payload);
    res.status(201).send("Product data updated!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
productsRouter.delete("/laptop/:id", AdminAuthentication, async (req, res) => {
  const id = req.params.id;
  try {
    const laptop = await Laptop.findByIdAndDelete(id);
    res.status(201).send("Data deleted successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = productsRouter;
