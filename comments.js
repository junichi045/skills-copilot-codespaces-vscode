// Create web server
// Express is a web application framework for Node.js
const express = require('express');
// The express.Router class can be used to create modular, mountable route handlers
const router = express.Router();
// Import the comments controller
const commentsCtrl = require('../controllers/comments');
// Import the comments middleware
const commentsMiddleware = require('../middlewares/comments');

// Create a new comment
router.post('/', commentsMiddleware.validateCreateComment, commentsCtrl.createComment);

// Update comment
router.put('/:id', commentsMiddleware.validateUpdateComment, commentsCtrl.updateComment);

// Delete comment
router.delete('/:id', commentsMiddleware.validateDeleteComment, commentsCtrl.deleteComment);

// Get comments list
router.get('/', commentsCtrl.getComments);

// Get a comment
router.get('/:id', commentsMiddleware.validateGetComment, commentsCtrl.getComment);

module.exports = router;