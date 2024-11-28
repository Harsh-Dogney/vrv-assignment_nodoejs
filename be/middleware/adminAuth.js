const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const adminRouter = express.Router();

adminRouter.get("/getAllUsers", async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude the password field for security
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

module.exports = adminRouter;
