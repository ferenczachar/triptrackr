//db connection
const pool = require('../pool'); //db connection
//token + cookies
const jwt = require('jsonwebtoken');

//'SELECT posts.id,posts.title,posts.desc,posts.img,posts.createdAt,users.username FROM posts JOIN users ON posts.userId=users.id ORDER BY posts.id DESC;'

const getPost = (req, res) =>{
    //get data
    const q = 
    'SELECT posts.id,posts.title,posts.desc,posts.img,posts.createdAt,users.username FROM posts JOIN users ON posts.userId=users.id ORDER BY posts.id DESC;';
    pool.query(q, (error, results) => {
        if (error) return console.log(error);
        res.json(results)
    })
}

const getPostById = (req, res) =>{
    const { id } = req.params;
    //get data
    const q = `SELECT posts.id,posts.title,posts.desc,posts.img,posts.createdAt,users.username FROM posts JOIN users ON posts.userId=users.id WHERE posts.id=${id}`;
    pool.query(q, (error, results) => {
        if (error) return console.log('Error while trying to fetch from MySQL:' + error)
        res.json(results);
    })
}

const newPost = (req, res) => {
    const { title, desc, img, userId } = req.body; //title,desc,img from form
    //send post data to DB
    const q = 'INSERT INTO posts(title, `desc`, img, userId) VALUES (?, ?, ?, ?)';
    const values = [title, desc, img, userId]
    pool.query(q, values,(error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.json({requestData:{title, desc, img, userId}})
        }
    })
}

module.exports = {
    getPost,
    getPostById,
    newPost
}