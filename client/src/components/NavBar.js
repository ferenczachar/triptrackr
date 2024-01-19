import './NavBar.css'

import React from 'react'

export default function NavBar() {
    return (
        <div className='navBar'>
            <a href='/' className='navLogo'>Logo</a>
            <ul className='navList'>
                <a href=''><li>Login</li></a>
                <a href=''><li>Register</li></a>
            </ul>
        </div>
    )
}