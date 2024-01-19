const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const pool = require('./pool'); //db connection

const data = require('./data'); //sample data for API

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('This is the homepage');
});

app.get('/api/test', (req, res) => {
    res.json(data);
});

app.post('/createUser', (req, res) => {
    const {username, password, email} = req.body;
    console.log({requestData:{username,password,email}})
    
    pool.query(`INSERT INTO users(username, password, email) VALUES('${username}', '${password}', '${email}');`, (error, results) => {
        if (error) {
            console.log(error)
            return
        }

        res.json({requestData:{username,password,email}});
    })
});

app.listen('5000', () => {
    console.log('Server is listening on PORT 5000');
})