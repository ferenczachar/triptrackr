//db connection
const pool = require('../pool'); //db connection
const bcrypt = require('bcrypt');

//token + cookies
const jwt = require('jsonwebtoken');
const secret = 'asdadasdsas4k292299sksjisjr828'; //secret key
const cookieParser = require('cookie-parser')

const register = async (req, res) => {
    const {username, password, email} = req.body;
    console.log({requestData:{username,password,email}}) //Console log user details
    const salt = bcrypt.genSaltSync(10); //Create salt
    const hashedPassword = bcrypt.hashSync(password, salt) //Hashing the password received
        pool.query(`INSERT INTO users(username, password, email) VALUES('${username}', '${hashedPassword}', '${email}');`, (error, results) => {
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
    }

const login = async (req, res) => {
    const { username, password } = req.body
    const q = 'SELECT * FROM users WHERE username = ?'
    const values = [username]
    pool.query(q, values, (error, results) => {
            if (error) return res.status(500).json(error);
            if (results.length === 0) return res.status(404).json("User not found");
            //User found in db
            const userDoc = results[0];
            const checkPassword = bcrypt.compareSync(password, userDoc.password)
            //Passwords do not match
            if (!checkPassword) {
                return res.status(400).json("Wrong password or username!")
            }
            //Passwords match
            console.log(userDoc)
            jwt.sign({username, id:userDoc.id, email:userDoc.email}, secret, {}, (err, token) => { //If login successful --> generate a token
                if (err) {
                    console.log(err);
                }
                res.cookie('accessToken', token).json({
                    id: userDoc.id,
                    username,
                    email: userDoc.email
                }); //Token sent via cookies + response to client
            })
        }
    )
};

const logout = (req, res) => {
    res.cookie('accessToken', '').json('ok');
}

module.exports = {
    login,
    register,
    logout
}