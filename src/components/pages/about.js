import React, { Component } from 'react'
import Headshot from "../../photos/headshot.jpg"

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='about-wrapper'>
                <img className="headshot-photo"
                src={Headshot} alt="Headshot"
                ></img>
                <div className="about-color-block">colorme</div>
            </div>
        )
    }
}