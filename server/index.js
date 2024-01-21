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
});

app.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log({loginTry:{username, password}})

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
                return res.json({ message: 'Login successful' });
            } else {
                // Invalid credentials
                return res.status(401).json({ error: 'Invalid username or password' });
            }
        }
    )
})

app.listen('5000', () => {
    console.log('Server is listening on PORT 5000');
})