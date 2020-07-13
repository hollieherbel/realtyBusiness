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
                <div className="about-color-block">
                   <div className="about-info">
                    After recently graduating from FHSU, I decided to pursue becoming a realtor.
                    I love helping people and am excited to start my business in NWKS!
                    <br />
                    <br />
                    "Olivia is passionate about helping people find the home of their dreams.  
                    She's always professional and fun to work with!"
                    </div>
                </div>
            </div>
        )
    }
}