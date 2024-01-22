import './NavBar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function NavBar() {
    const [username, setUsername] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        })
        .then((response) => {
            response.json()
            .then((userInfo) => {
                console.log(userInfo)
                setUsername(userInfo.username)
            })
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);
    return (
        <div className='navBar'>
            <Link to="/" className="navLogo">Logo</Link>
            <ul className='navList'>
                { username && (
                    <>
                        <Link to="/profile"><li>Dashboard</li></Link>
                        <Link to="/logout"><li>Logout</li></Link>
                    </>
                )}
                { !username && (
                    <>
                        <Link to="/login"><li>Login</li></Link>
                        <Link to="/register"><li>Register</li></Link>
                    </>
                )}
            </ul>
        </div>
    )
}