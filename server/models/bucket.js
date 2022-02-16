const mongoose = require("mongoose");
const User = require("../models/user");

const bucketSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      required: true,
      ref: User,
    },
    name: {
      type: String,
      required: true,
    },
    descr: String,
    images: String,
    date_finished: Date,
    category: String,
  },
  {
    timestamps: true,
  }
);

const Bucket = mongoose.model("Bucket", bucketSchema);

module.exports = Bucket;
