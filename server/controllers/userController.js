const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler")
const User = require("../models/user")

const registerUser = asyncHandler(async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body

    if(!firstName || !lastName || !email || !username || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    
    res.json({message: "Register User"})
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "login User"})
})

const getMe = asyncHandler(async (req, res) => {
    res.json({message: "User data display"})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}