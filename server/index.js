const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const pool = require('./pool'); //db connection

//token + cookies
const jwt = require('jsonwebtoken');
const secret = 'asdadasdsas4k292299sksjisjr828'; //secret key
const cookieParser = require('cookie-parser')


const data = require('./data'); //sample data for API

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser()); //cookieParser
app.use(express.json());

app.get('/', (req, res) => {
    res.json('This is the homepage');
});

app.get('/api/test', (req, res) => {
    res.json(data);
});

app.post('/createUser', async (req, res) => {
    const {username, password, email} = req.body;
    console.log({requestData:{username,password,email}})
    function validateNewUser(){
        return new Promise((resolve, reject) => { //using Promise, so I can handle the SQL query async
            pool.query(`INSERT INTO users(username, password, email) VALUES('${username}', '${password}', '${email}');`, (error, results) => {
                if (error) {
                    if (error.code === 'ER_DUP_ENTRY') {
                        //Duplicate entry Error
                        return res.status(409).json({ error: 'User already exists in the database' });
                    } else {
                        console.error(error);
                        return res.status(500).json({ error: 'Internal Server Error' });
                    }
                }
        
                res.json({requestData:{username,password,email}});
            })
        })
    }
    try {
        await validateNewUser()
    }
    catch(error){
        console.log(error);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    console.log({loginTry:{username, password}})
    function validateUser(){
        return new Promise((resolve, reject) => { //using Promise, so I can handle the SQL query async
            pool.query(
                'SELECT * FROM users WHERE username = ? AND password = ?',
                [username, password],
                (error, results) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).json({ error: 'Internal Server Error' });
                    }
                    if (results.length === 1) {
                        // Login successful
                        const userDoc = results[0];
                        jwt.sign({username, id:userDoc.id}, secret, {}, (err, token) => { //If login successful --> generate a token
                            if (err) {
                                console.log(err);
                            }
                            res.cookie('token', token).json('ok'); //Token sent via cookies + response 'ok' to client
                        })
                    } else {
                        // Invalid credentials
                        return res.status(401).json({ error: 'Invalid username or password' });
                    }
                }
            )
        });
    }
    try {
        await validateUser();
    }
    catch(error){
        console.log(error);
    }
})

app.get('/profile', (req, res) => {
    const {token} = req.cookies; //If user is logged in, read the token back from cookies
    jwt.verify(token, secret, {}, (err, info) => { //Verify the token - if correct, provide the user info
        if (err) throw err;
        res.json(info);
    });
});

app.listen('5000', () => {
    console.log('Server is listening on PORT 5000');
})