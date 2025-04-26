const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    lowercase: true
  },
  feedback: {
    type: String,
    required: [true, 'Please provide your feedback'],
    trim: true
  },
  category: {
    type: String,
    enum: ['suggestion', 'bug', 'feature', 'other'],
    default: 'suggestion'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema); 