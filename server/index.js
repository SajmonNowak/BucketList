const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./db/models/user");

require("dotenv").config();

const PORT = process.env.Port || 3001;

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.post("/sign-up", (req, res) => {
  console.log(req.body);
  const user = new User({
    firstName: req.body.firstName,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
