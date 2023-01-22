const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },
  mobile: { type: String, required: true },
  address: {
    pincode: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
});

const UserModel = mongoose.model("newuser", userSchema);

module.exports = { UserModel };
