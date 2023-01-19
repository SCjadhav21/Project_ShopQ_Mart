const express = require("express");
const { UserModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const UserRoutes = express.Router();

UserRoutes.post("/register", async (req, res) => {
  let { name, email, mobile, password } = req.body;
  try {
    const users = await UserModel.find({ email });
    if (users.length > 0) {
      res.send({
        msg: "email is already exist in database",
        alert: "email is already register",
      });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          console.log(err);
          res.send({ msg: err, alert: "something went wrong" });
        } else {
          const user = new UserModel({ name, email, mobile, password: hash });
          await user.save();
          res.send({
            msg: "user Registered",
            alert: "Registered successfully",
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.send({ msg: err, alert: "something went wrong" });
  }
});

UserRoutes.post("/login", async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.log(err);
          res.send({ msg: err.message, alert: "something went wrong" });
        } else if (result) {
          const token = jwt.sign({ userId: user._id }, process.env.key);

          res.send({
            msg: "Login Successfull",
            alert: "Logged In",
            token: token,
          });
        } else {
          res.send({ msg: "Login Failure", alert: "Wrong Credntials" });
        }
      });
    } else {
      res.send({ msg: "Login Failure", alert: "Wrong Credntials" });
    }
  } catch (err) {
    console.log(err);
    res.send({ msg: err, alert: "something went wrong" });
  }
});

module.exports = { UserRoutes };
