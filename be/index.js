const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const adminAuthRoutes = require('./middleware/adminAuth.js');
const adminValidate = require('./middleware/adminValidate.js');
const moderatorValidate = require('./middleware/moderatorValidate.js');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/test", (req, res) =>{
  return res.status(200).json({
    message : "Server is working fine..."
  })
});

app.use("/auth", authRoutes);
app.use("/admin", adminValidate, adminAuthRoutes);
app.use("/moderator", moderatorValidate, authRoutes);

const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));