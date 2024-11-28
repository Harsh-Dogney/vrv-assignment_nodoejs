// const express = require('express');
// const User = require('../models/user');

// const router = express.Router();

// router.post('/getAllUsers', async (req, res) => {
//     try {
//         const users = await User.find({}, '-password'); // Exclude the password field for security
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching users', error });
//     }
// });

// module.exports = router;