const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const pool = require('./pool'); //db connection

const data = require('./data'); //sample data for API

app.use(cors());

app.get('/', (req, res) => {
    res.json('This is the homepage');
});

app.get('/api/test', (req, res) => {
    res.json(data);
});

app.listen('5000', () => {
    console.log('Server is listening on PORT 5000');
})