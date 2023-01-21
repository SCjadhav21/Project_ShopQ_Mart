const express = require("express");
const { UserModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminAuthentication } = require("../Middelware/adminauth");
const { Authentication } = require("../Middelware/authentication");

const app = express();
app.use(express.json());

const UserRoutes = express.Router();

UserRoutes.post("/register", async (req, res) => {
  let { name, email, mobile, password, address } = req.body;
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
          const user = new UserModel({
            name,
            address,
            email,
            mobile,
            password: hash,
          });
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
UserRoutes.use(Authentication);
UserRoutes.get("/personalDetail", async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await UserModel.findOne({ _id: userId });
    res.send({ data: user, alert: "user data found" });
  } catch (err) {
    console.log(err);
    res.send({ massage: err.message, alert: "Something went wrong" });
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
  let payload = req.body;
  console.log(payload);
  try {
    if (payload.pincode || payload.city || payload.state) {
      const dt = await UserModel.findOne({ _id: id });
      let changeddata;
      if (payload.state) {
        changeddata = { ...dt.address, state: payload.state };
      } else if (payload.pincode) {
        changeddata = { ...dt.address, pincode: payload.pincode };
      } else {
        changeddata = { ...dt.address, city: payload.city };
      }

      await UserModel.findOneAndUpdate({ _id: id }, { address: changeddata });

      res.send({ massage: "updated", alert: "Status updated successfully" });
    } else {
      await UserModel.findOneAndUpdate({ _id: id }, payload);

      res.send({ massage: "updated", alert: "Status updated successfully" });
    }
  } catch (err) {
    console.log(err);
    res.send({ massage: "err.message", alert: "Something went wrong" });
  }
});

UserRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findOne({ _id: id });
    if (user.email == process.env.adminEmail) {
      res.send({
        massage: "Accout Preserved",
        alert: "You Can't able delete this account",
      });
    } else {
      await UserModel.findOneAndDelete({ _id: id });
      res.send({ massage: "deleted", alert: "user Removed successfully" });
    }
  } catch (err) {
    res.send({ massage: err, alert: "Something went wrong" });
  }
});

module.exports = { UserRoutes };
