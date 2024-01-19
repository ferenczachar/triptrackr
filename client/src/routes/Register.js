import NavBar from "../components/NavBar"
import {useState} from 'react';

export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function registerUser(e){
        e.preventDefault()
        await fetch('http://localhost:5000/createUser', {
            method: 'POST',
            body: JSON.stringify({username, password, email}),
            headers: {'Content-Type':'application/json'}
        })
    }
    return (
        <div>
            <NavBar />
            <h1>Register page</h1>
            <form onSubmit={registerUser}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <button>Submit</button>
                <span className="msg"></span>
            </form>
        </div>
    )
}