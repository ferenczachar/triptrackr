import './NavBar.css'
import { Link } from 'react-router-dom'

import React from 'react'

export default function NavBar() {
    return (
        <div className='navBar'>
            <Link to="/" className="navLogo">Logo</Link>
            <ul className='navList'>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/register"><li>Register</li></Link>
            </ul>
        </div>
    )
}