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

const getPostsByUser = (req, res) => {
    const { id } = req.body; //get user's id
    //get posts by userID from db
    const q = 'SELECT posts.id, posts.title, posts.img, posts.createdAt FROM posts WHERE posts.userId=?';
    pool.query(q, id,(error, results) => {
        if (error) return console.log('Error while trying to fetch from MySQL:' + error)
        res.json(results)
    })
}

const newPost = (req, res) => {
    const { title, desc, img, userId } = req.body; //title,desc,img from form
    console.log(img)
    //send post data to DB
    const q = 'INSERT INTO posts(title, `desc`, img, userId) VALUES (?, ?, ?, ?)';
    const values = [title, desc, String(img), userId]
    pool.query(q, values,(error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.json({requestData:{title, desc, img, userId}})
        }
    })
}

const editPost = (req, res) => {
    const { postId, title, desc, userId } = req.body;
    //scenarios
    //if title changed, but desc not
    if ( desc === '' ) {
        const q = 'UPDATE posts SET title = ? WHERE id = ?;';
        const values = [title, postId];
        pool.query(q, values, (error, result) => {
            error ? console.log(error) : res.json({ requestData: { postId, title, desc, userId } });
        })
    }
    //if desc changed, but title not
    else if ( title === '' ) {
        const q = 'UPDATE posts SET `desc` = ? WHERE id = ?;';
        const values = [desc, postId];
        pool.query(q, values, (error, result) => {
            error ? console.log(error) : res.json({ requestData: { postId, title, desc, userId } });
        })
    } 
    //if both changed
    else {
        const q = 'UPDATE posts SET title = ? , `desc` = ? WHERE id = ?;';
        const values = [title, desc, postId];
        pool.query(q, values, (error, result) => {
            error ? console.log(error) : res.json({ requestData: { postId, title, desc, userId } });
        })
    }
}

module.exports = {
    getPost,
    getPostById,
    newPost,
    getPostsByUser,
    editPost
}