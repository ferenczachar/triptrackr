import './NavBar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../UserContext';
import axios from 'axios';

export default function NavBar() {
    
    const {userInfo, removeLocalStorage} = useContext(UserContext)

    async function logout() {
        try {
            await axios.post('http://localhost:5000/api/auth/logout', null, {
                withCredentials: true
            });
            console.log('User logged out successfully');
            // Add any additional logic you want to perform after logout
        } catch (error) {
            console.error('Error:', error);
        }
        removeLocalStorage()
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