import React, { Component } from 'react'
import Logo from '../../photos/logo_cropped.jpg';
import { NavLink } from 'react-router-dom';
import ReactModal from 'react-modal';


export default class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false,
            loginLink: "visible"
        }

       
        this.toggleLoginModal = this.toggleLoginModal.bind(this)
    }

    

    toggleLoginModal() {
        if (this.state.modalOpen === false) {
            this.setState({
                modalOpen: true
            })
        } 
        else {
            this.setState({
                modalOpen: false
            })
        } 
    }

   
    render() {
        return (
            <div className=''>
                    <div className='navigation-wrapper'>
            <div className="nav-links">
                    <img src={Logo} alt="logo" />
                    <ReactModal 
                    className="login-modal-wrapper" 
                    onRequestClose={this.toggleLoginModal} 
                    isOpen={this.state.modalOpen} 
                    style={{
                        content: {
                            top: "50%",
                            left: "50%",
                            right: "auto",
                            marginRight: "-50%",
                            transform: "translate(-50%, -50%)",
                            width: "500px",
                            height: "300px",
                            backgroundColor: "white",
                            outline: "none",
                            borderRadius: "3px"

                        },

                        overlay: {
                            backgroundColor: "rgba(1, 1, 1, 0.75)"
                        }
                    }}
                    ><div className="login-wrapper">
                        <h3 className="text-wrapper">Please Login</h3> 
                        <input className="input-box" type="text" placeholder="Username"></input>
                        <input className="input-box" type="password" placeholder="Password"></input>
                        <button className="modal-button">Log In</button>
                    </div>
                    </ReactModal>
                    <a className="left-side-links" onClick={this.toggleLoginModal}>Log In</a>
                    <NavLink className="left-side-links" to="/">Home</NavLink>
                    <NavLink className="left-side-links" to="/listings">Listings</NavLink>
                    <NavLink className="left-side-links" to="/about">About</NavLink>
                    <NavLink className="left-side-links" to="/contact">Contact</NavLink>
           </div>




        </div>
            </div>
        )
    }
}