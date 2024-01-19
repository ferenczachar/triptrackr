const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'triptrackr'
});

module.exports = pool;