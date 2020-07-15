import React, { Component } from 'react'
import Logo from '../../photos/logo_cropped.jpg';
import { NavLink } from 'react-router-dom';



export default class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }

       

        
    }


    render() {
        return (
           <div className="nav-links">
                    <img src={Logo} alt="logo" />
                    <NavLink className="left-side-links" to="/">Home</NavLink>
                    <NavLink className="left-side-links" to="/listings">Listings</NavLink>
                    <NavLink className="left-side-links" to="/about">About</NavLink>
                    <NavLink className="left-side-links" to="/contact">Contact</NavLink>
           </div>




        
        )
    }
}