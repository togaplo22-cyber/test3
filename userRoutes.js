const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const { phone, password, referralCode } = req.body;
  try {
    let userExists = await User.findOne({ phone });
    if (userExists) return res.status(400).json({ msg: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      phone,
      password: hashedPassword,
      referralCode: Math.random().toString(36).substring(2, 8),
      referredBy: referralCode || null
    });

    await newUser.save();
    res.json({ msg: "User registered", referralCode: newUser.referralCode });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, referralCode: user.referralCode });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;