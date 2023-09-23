// Create web server

// Import Express
const express = require('express');
const router = express.Router();

// Import models
const Comment = require('../models/Comment');

// Create routes
// Get all comments
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Get comment by id
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json(`Error: ${err}`));
});


