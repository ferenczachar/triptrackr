//db connection
const pool = require('../pool'); //db connection
const fakeDB = require('../data')

const getPost = (req, res) =>{
    //get data
    const q = 'SELECT * FROM posts';
    pool.query(q, (error, results) => {
        if (error) return console.log(error);
        res.json(results)
    })
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