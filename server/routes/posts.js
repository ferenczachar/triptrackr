const express = require('express');
const { getPost, getPostById, newPost, getPostsByUser, editPost, deletePost } = require('../controllers/post.js');

const router = express.Router();

//GET
router.get('/showAll', getPost)
router.get('/:id', getPostById)

//POST
router.post('/new', newPost)
router.post('/userPosts', getPostsByUser)

//PUT
router.put('/edit', editPost)

//DELETE
router.delete('/delete/:id', deletePost)

module.exports = router;