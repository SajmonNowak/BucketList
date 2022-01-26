const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();

const PORT = process.env.Port || 3001;

const app = express();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/api", (req, res) => {
    res.json({message: "Hello from thasdasdasdade server!"})
})






app.listen(PORT, () =>{
    console.log(`Server listening on PORT ${PORT}` )
})