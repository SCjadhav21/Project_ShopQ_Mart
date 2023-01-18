const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const productsRouter = require("./Routes/products.route");

const { connection } = require("./Config/db");
const { UserRoutes } = require("./Routes/user.routes");
app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);

app.use("/users", UserRoutes, (req, res) => {
  res.send(404);
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`Connected to DataBase`);
  } catch (err) {
    console.log("Error: cant connect to mongodb");
  }
  console.log(`running on port ${process.env.port}`);
});
