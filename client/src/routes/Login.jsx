import NavBar from "../components/NavBar";
import { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMsg, setLoginMsg] = useState('');
    const [redirect, setRedirect] = useState(false);

    const {setUserInfo} = useContext(UserContext);

    async function login(e){
        e.preventDefault()
        await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
        .then((response) => {
            if(response.ok){
                response.json().then(userInfo => {
                    setUserInfo(userInfo)
                    setRedirect(true);
                })
            } else if (response.status === 401){
                console.log('Invalid username or password')
                setLoginMsg('Invalid username or password')
            } else if (response.status === 500){
                console.log('Internal server error')
                setLoginMsg('Internal server error')
            }
        })
        .catch((err) => {
            console.log('Error received from server:' + err)
            setLoginMsg('Error received from server:' + err)
        });
    }

    if (redirect){
        return <Navigate to={'/'}/>;
    }
    
    return (
        <>
            <NavBar />
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
        </>
    )
}