const express = require("express");
const { UserModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminAuthentication } = require("../Middelware/adminauth");

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
      bcrypt.hash(password, 8, async (err, hash) => {
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

UserRoutes.use(AdminAuthentication);

UserRoutes.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send({ data: users, alert: "user data found" });
  } catch (err) {
    console.log(err);
    res.send({ massage: err.message, alert: "Something went wrong" });
  }
});

UserRoutes.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    await UserModel.findOneAndUpdate({ _id: id }, payload);

    res.send({ massage: "updated", alert: "Status updated successfully" });
  } catch (err) {
    console.log(err);
    res.send({ massage: err.message, alert: "Something went wrong" });
  }
});

UserRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const oldtodo = await UserModel.findOne({ _id: id });

    await UserModel.findOneAndDelete({ _id: id });
    res.send({ massage: "deleted", alert: "user Removed successfully" });
  } catch (err) {
    res.send({ massage: err, alert: "Something went wrong" });
  }
});

module.exports = { UserRoutes };
