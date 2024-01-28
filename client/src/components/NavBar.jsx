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
        fetch('http://localhost:5000/api/auth/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <div className='navBarContainer'>
            <div className='navBar'>
                <Link to="/" className="navLogo">&#9992;&#65039;TripTrackr</Link>
                <ul className='navList'>
                    { username && (
                        <>
                            <Link to="/posts/new"><li>&#9997;Create Post</li></Link>
                            <Link to="/dashboard"><li>&#128187;Dashboard</li></Link>
                            <Link to="/" onClick={logout}><li>&#10060;Logout ({username})</li></Link>
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
        </div>
    )
}