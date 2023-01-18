const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const productsRouter = require("./Routes/products.route");

const { connection } = require("./Config/db");

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);

app.listen(process.env.port, async () => {
  try {
    connection;
    console.log(`running on port ${process.env.port}`);
  } catch (err) {
    console.log("Error: cant connect to mongodb");
  }
});
