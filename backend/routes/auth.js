const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // ✅ Make sure db is imported
require('dotenv').config();

const router = express.Router();

// User Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password, designation } = req.body;

    // 🔹 Validation: Check if fields are missing
    if (!name || !email || !password || !designation) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        // 🔹 Check if email already exists
        db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
            if (err) {
                return res.status(500).json({ message: "Database error" });
            }
            if (results.length > 0) {
                return res.status(400).json({ message: "Email already in use" });
            }

            // 🔹 Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // 🔹 Insert new user
            db.query(
                "INSERT INTO users (name, email, password, designation) VALUES (?, ?, ?, ?)",
                [name, email, hashedPassword, designation],
                (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: "Error saving user" });
                    }
                    res.status(201).json({ message: "User registered successfully" });
                }
            );
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;


// 🔹 User Login Route
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required!" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (results.length === 0) {
            return res.status(401).json({ message: "User not found!" });
        }

        const user = results[0];

        // ✅ Fix bcrypt.compare()
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(401).json({ message: "Invalid password!" });
            }

            // Generate JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email, designation: user.designation },
                process.env.JWT_SECRET || "secretkey",
                { expiresIn: "1h" }
            );

            res.json({
                message: "Login successful!",
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    designation: user.designation, // ✅ Include designation
                },
            });
        });
    });
});

module.exports = router;
