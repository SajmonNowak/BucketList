const asyncHandler = require("express-async-handler");

const Bucket = require("../models/bucket");
const User = require("../models/user");

// @desc    Get bucket
// @route   GET /api/buckets
// @access  Private

const getBuckets = asyncHandler(async (req, res) => {
  console.log(req.user.id);

  const buckets = await Bucket.find({ user: req.user.id });

  res.status(200).json(buckets);
});

// @desc    Set bucket
// @route   POST /api/buckets
// @access  Private

const setBucket = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name for the item.");
  }

  const bucket = await Bucket.create({
    name: req.body.name,
    user: req.user.id,
    descr: req.body.descr,
    category: req.body.category,
  });

  res.status(200).json(bucket);
});

// @desc    Update bucket
// @route   PUT /api/buckets/:id
// @access  Private
const updateBucket = asyncHandler(async (req, res) => {
  const bucket = await Bucket.findById(req.params.id);

  if (!bucket) {
    res.status(400);
    throw new Error("Item not found");
  }


  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (bucket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedBucket = await Bucket.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedBucket);
});

// @desc    Delete bucket
// @route   DELETE /api/buckets/:id
// @access  Private
const deleteBucket = asyncHandler(async (req, res) => {
  const bucket = await Bucket.findById(req.params.id);

  if (!bucket) {
    res.status(400);
    throw new Error("Bucket not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (bucket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await bucket.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBuckets,
  setBucket,
  updateBucket,
  deleteBucket,
};
