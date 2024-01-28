const express = require('express');
const { getPost, newPost } = require('../controllers/post.js');

const router = express.Router();

//GET
router.get('/showAll', getPost)

//POST
router.post('/new', newPost)

module.exports = router;