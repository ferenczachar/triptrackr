import NavBar from "../components/NavBar";
import { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import './Login.css'
import axios from 'axios';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMsg, setLoginMsg] = useState('');
    const [redirect, setRedirect] = useState(false);

    const {setUserInfo} = useContext(UserContext);

    async function login(e){
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
        
            if (!response.status === 200) {
                setLoginMsg(response.data);
            } else {
                setUserInfo(response.data);
                setRedirect(true);
            }
        } catch (error) {
            if (error.response) {
                setLoginMsg(error.response.data);
            } else {
                setLoginMsg('Error while fetching data');
            }
        }
    }

    if (redirect){
        return <Navigate to={'/'}/>;
    }
    
    return (
        <>
            <NavBar />
            <div className="loginContainer">
                <div className="login">
                    <h1>Login page</h1>
                    <form className="loginForm" onSubmit={login}>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username"
                            autoComplete="on"
                            onChange={e => setUsername(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            autoComplete="on"
                            onChange={e => setPassword(e.target.value)}/>
                        <button>Submit</button>
                    </form>
                    <span className="msg">{loginMsg}</span>
                </div>
            </div>
        </>
    )
}