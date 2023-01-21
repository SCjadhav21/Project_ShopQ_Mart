require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/user.model");

const AdminAuthentication = async (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.key, async (err, result) => {
    if (err) {
      res.send({ msg: err, alert: "you are not logged in" });
    } else {
      const users = await UserModel.findOne({ _id: result.userId });

      if (users.email == process.env.adminEmail) {
        req.body.userId = result.userId;
        next();
      } else {
        console.log(users.email, process.env.adminEmail);
        res.send({ msg: "Not Authorised", alert: "you are not Authorised" });
      }
    }
  });
};

module.exports = { AdminAuthentication };
