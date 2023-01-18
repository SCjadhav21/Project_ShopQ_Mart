const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const { connection } = require("./Config/db");
const { UserRoutes } = require("./Routes/user.routes");
app.use(express.json());
app.use(cors());

app.use("/users", UserRoutes, (req, res) => {
  res.send(404);
});

app.listen(process.env.port, async () => {
  try {
    connection;
    console.log(`running on port ${process.env.port}`);
  } catch (err) {
    console.log("Error: cant connect to mongodb");
  }
});
