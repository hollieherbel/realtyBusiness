import React, { Component } from 'react'
import Logo from '../../photos/logo_cropped.jpg';
import { NavLink } from 'react-router-dom';
import ReactModal from 'react-modal';


export default class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false,
            loginLink: "visible",
            username: "",
            password: "",
            error: "",
            loggedin: false
        }

       
        this.toggleLoginModal = this.toggleLoginModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin(event) {
        if (event.target.name === "Olivia" && event.target.name === "realtor") {
            this.setState({
                loggedin: true
            })
        } else {
            this.setState({
                error: "Wrong Login Credentials"
            })
        }
    }

   
    render() {
        return (
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
                            backgroundColor: "rgb(255, 255, 255)",
                            outline: "none",
                            borderRadius: "3px"

                        },

                        overlay: {
                            backgroundColor: "rgba(1, 1, 1, 0.75)"
                        }
                    }}
                    ><div className="login-wrapper">
                        <h3 className="text-wrapper">Please Login</h3> 
                        <input className="input-box" type="text" 
                        placeholder="Username" 
                        name={this.state.username}
                        value={this.state.username} 
                        onChange={this.handleChange}>     
                        </input>
                        <input className="input-box" type="password" 
                        placeholder="Password" 
                        name={this.state.password}
                        value={this.state.password} 
                        onChange={this.handleChange}>
                        </input>
                        <button className="modal-button" onClick={this.handleLogin}>Log In</button>
                        <h3>{this.state.error}</h3>
                    </div>
                    </ReactModal>
                    <a className="left-side-links" onClick={this.toggleLoginModal}>Log In</a>
                    <NavLink className="left-side-links" to="/">Home</NavLink>
                    <NavLink className="left-side-links" to="/listings">Listings</NavLink>
                    <NavLink className="left-side-links" to="/about">About</NavLink>
                    <NavLink className="left-side-links" to="/contact">Contact</NavLink>
           </div>




        
        )
    }
}