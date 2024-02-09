const express = require('express');
const { getPost, getPostById, newPost, getPostsByUser } = require('../controllers/post.js');

const router = express.Router();

//GET
router.get('/showAll', getPost)
router.get('/:id', getPostById)

//POST
router.post('/new', newPost)
router.post('/userPosts', getPostsByUser)

module.exports = router;