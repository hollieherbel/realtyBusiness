import React, { Component } from 'react'

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='contact-wrapper'>
                <div className="contact-phone"></div>
                <div className="contact-email"></div>
                <div className="contact-address"></div>
            </div>
        )
    }
}