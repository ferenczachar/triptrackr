//db connection
const pool = require('../pool'); //db connection

//token + cookies
const jwt = require('jsonwebtoken');
const secret = 'asdadasdsas4k292299sksjisjr828'; //secret key
const cookieParser = require('cookie-parser')

const login = async (req, res) => {
    const { username, password } = req.body
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
                            res.cookie('token', token).json({
                                id: userDoc.id,
                                username
                            }); //Token sent via cookies + response to client
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
}

const register = async (req, res) => {
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
}

const logout = (req, res) => {
    res.cookie('token', '').json('ok');
}

module.exports = {
    login,
    register,
    logout
}