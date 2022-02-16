const express = require("express");
const {
  getBuckets,
  setBucket,
  updateBucket,
  deleteBucket,
} = require("../controllers/bucketController");
const router = express.Router();

router.get("/", getBuckets);
router.post("/", setBucket);
router.put("/", updateBucket);
router.delete("/", deleteBucket);

module.exports = router;
