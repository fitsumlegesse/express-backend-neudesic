// routes/submissions.js
const express = require('express');
const router = express.Router();

const UserSubmission = require('../models/UserSubmission');

// Function to handle user data submission to MongoDB
export const DataToMongo = async (req, res) => {
  try {
    const newUserSubmission = new UserSubmission(req.body);
    const savedSubmission = await newUserSubmission.save();
    res.json(savedSubmission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Route to handle user data submission
router.post('/enterData', DataToMongo);


