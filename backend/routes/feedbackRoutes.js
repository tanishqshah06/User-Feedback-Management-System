const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Submit feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all feedback with optional filtering and sorting
router.get('/', async (req, res) => {
  try {
    const { category, sortBy } = req.query;
    let query = {};
    
    if (category) {
      query.category = category;
    }

    let sortOptions = { createdAt: -1 }; // Default sort by newest
    if (sortBy === 'oldest') {
      sortOptions = { createdAt: 1 };
    }

    const feedback = await Feedback.find(query).sort(sortOptions);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 