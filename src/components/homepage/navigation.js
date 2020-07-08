import React from 'react'
import Logo from '../../photos/logo_cropped.jpg'
import { NavLink } from 'react-router-dom'


export default function navigationBar (props) {
    return (
        <div className='navigation-wrapper'>
            <div className="nav-links">
                    <img src={Logo} alt="logo" />
                    <NavLink className="left-side-links" to="auth">Log In</NavLink>
                    <NavLink className="left-side-links" to="/">Home</NavLink>
                    <NavLink className="left-side-links" to="/listings">Listings</NavLink>
                    <NavLink className="left-side-links" to="/about">About</NavLink>
                    <NavLink className="left-side-links" to="/contact">Contact</NavLink>
           </div>




        </div>
    )
}