import NavBar from "../components/NavBar"
import {useState} from 'react';
import './Register.css'
import axios from 'axios';

export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    async function registerUser(e){
        e.preventDefault()
        if (username === '' || password === '' || email === ''){
            console.log('Error: Missing fields')
            setMsg('Error: Missing fields');
        } else {
            try {
                const response = await axios.post('http://localhost:5000/api/auth/register', {
                    username,
                    password,
                    email
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            
                if (response.status === 200) {
                    console.log('User registered successfully');
                    setMsg('Registration was successful, please login now!');
                } else if (response.status === 409) {
                    console.log('Error: User already exists in the database');
                    setMsg('Username or email already in use.');
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
    return (
        <div>
            <NavBar />
            <div className="registerContainer">
                <div className="register">
                    <h1>Register page</h1>
                    <form className="registerForm" onSubmit={registerUser}>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            autoComplete="on"
                            value={username}
                            onChange={e => setUsername(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            autoComplete="on"
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            autoComplete="on"
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                        <button>Submit</button>
                        <span className="msg">{msg}</span>
                    </form>
                </div>
            </div>
        </div>
    )
}