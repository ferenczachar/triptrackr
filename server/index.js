const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const pool = require('./pool'); //db connection

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

app.get('/dashboard', (req, res) => {
    const {accessToken} = req.cookies;
    jwt.verify(accessToken, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info)
    })
});

app.listen('5000', () => {
    console.log('Server is listening on PORT 5000');
})