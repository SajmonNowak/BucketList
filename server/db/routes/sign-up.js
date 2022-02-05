const express = require("express");
const mongoose = require("mongoose")
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const router = express.Router();

router.get("/sign-up", (res,req) => {

};


module.exports = router;