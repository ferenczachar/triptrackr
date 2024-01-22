import './NavBar.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UserContext } from '../UserContext';

export default function NavBar() {
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        })
        .then((response) => {
            response.json()
            .then((userInfo) => {
                setUserInfo(userInfo);
            })
        })
        .catch((err) => {
            console.log(err)
        });
        // eslint-disable-next-line
    }, []);

    function logout() {
        fetch('http://localhost:5000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <div className='navBar'>
            <Link to="/" className="navLogo">Logo</Link>
            <ul className='navList'>
                { username && (
                    <>
                        <Link to="/profile"><li>Dashboard</li></Link>
                        <Link to="/" onClick={logout}><li>Logout ({username})</li></Link>
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