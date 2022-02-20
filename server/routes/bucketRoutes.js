const express = require("express");
const {
  getBuckets,
  setBucket,
  updateBucket,
  deleteBucket,
} = require("../controllers/bucketController");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")

router.route("/").get(protect,getBuckets).post(protect, setBucket);
router.route("/:id").put(protect, updateBucket).delete(protect, deleteBucket);

module.exports = router;
