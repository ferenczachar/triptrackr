const express = require('express');
const { getPost, getPostById, newPost } = require('../controllers/post.js');

const router = express.Router();

//GET
router.get('/showAll', getPost)
router.get('/:id', getPostById)

//POST
router.post('/new', newPost)

module.exports = router;