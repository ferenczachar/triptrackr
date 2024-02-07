const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const pool = require('./pool'); //db connection
const multer = require('multer')

//token + cookies
const jwt = require('jsonwebtoken');
const secret = 'asdadasdsas4k292299sksjisjr828'; //secret key
const cookieParser = require('cookie-parser')

//import routes
const userRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
//const likeRoutes = require('./routes/likes')
//const commentRoutes = require('./routes/comments')
const authRoutes = require('./routes/auth')

//Multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/postImages')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

//middlewares
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)


//rest of the routes
app.get('/', (req, res) => {
    res.json('This is the homepage');
});

app.get('/profile', (req, res) => {
    const {accessToken} = req.cookies; //If user is logged in, read the token back from cookies
    if (accessToken !== '') {
        jwt.verify(accessToken, secret, {}, (err, info) => { //Verify the token - if correct, provide the user info
           if (err) throw err;
            res.json(info);
       });
    }
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    console.log(file.filename)
    res.status(200).json(file.filename)
})

app.get('/dashboard', (req, res) => {
    const token = req.cookies.accessToken;
    if (token === '') return res.status(401).json("Not authenticated");
    jwt.verify(token, secret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!")
        console.log(userInfo)
        res.json(userInfo)
    })
    //const {accessToken} = req.cookies;
    //jwt.verify(accessToken, secret, {}, (err, info) => {
    //    if (err) throw err;
    //    res.json(info)
    //})
});

app.listen('5000', () => {
    console.log('Server is listening on PORT 5000');
})



module.exports = secret;