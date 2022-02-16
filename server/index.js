const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const User = require("./models/user");

require("dotenv").config();

const PORT = process.env.Port || 3001;

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/bucket", require("./routes/bucketRoutes"))
app.use("/api/users", require("./routes/userRoutes"))



// app.post("/register", (req, res) => {
  
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//   }).save((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });



app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
