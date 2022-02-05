const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  // dateCreated: {
  //     type: Date,
  //     required: true,
  // },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
