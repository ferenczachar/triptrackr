const fakeDB = require('../data')

const getPost = (req, res) =>{
    //get fake data
    //send data in response
    res.json(fakeDB);
}

const newPost = (req, res) => {
    const { title, desc, img } = req.body;
    console.log({ id: 5, title, desc, img, likes: 0 })
    fakeDB.push({ id: 5, title, desc, img, likes: 0, createdAt: '01/28/2024' })
}

module.exports = {
    getPost,
    newPost
}