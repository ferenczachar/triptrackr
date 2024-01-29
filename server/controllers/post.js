//db connection
const pool = require('../pool'); //db connection
const fakeDB = require('../data')
const jsonwebtoken = require('jsonwebtoken')

const getPost = (req, res) =>{
    //get data
    //send data in response
    res.json(fakeDB);
}

const newPost = (req, res) => {
    const { title, desc, img } = req.body; //title,desc,img from form
    const userId = 32; //TODO! --> needs to be pulled dinamically from usercontext
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
    newPost
}