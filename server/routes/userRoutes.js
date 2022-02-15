const express = require("express");
const { getMe, loginUser, registerUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);


module.exports = router;