// Create web server

// Import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Create web server
const app = express();

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors
app.use(cors());

// Create data
let comments = [
  {
    id: uuidv4(),
    name: 'John',
    comment: 'Hello',
  },
  {
    id: uuidv4(),
    name: 'Kevin',
    comment: 'Hi',
  },
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

// Create comment
app.post('/comments', (req, res) => {
  const comment = {
    id: uuidv4(),
    name: req.body.name,
    comment: req.body.comment,
  };
  comments.push(comment);
  res.json(comment);
});

// Update comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  let comment = comments.find((comment) => comment.id === id);
  comment.name = req.body.name;
  comment.comment = req.body.comment;
  res.json(comment);
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments = comments.filter((comment) => comment.id !== id);
  res.json(comments);
});

// Start web server
app.listen(3000, () => {
  console.log('Web server running on port 3000');
});// Import modules

const express = require('express');
const router = express.Router();

