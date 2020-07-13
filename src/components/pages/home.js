import React, { Component } from 'react';
import Key from '../../photos/key.jpg'


export default class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        

    }

  

    render() {
        return (
          <div className="homepage-wrapper">
            <img src={Key} alt="Key"></img>
            <div className="home-color-block">colorme</div>
            <div className="second-home-color-block">
              <h4 className="tagline">Taking you from Hopeful to Home!</h4>
            </div>
          </div>
        )
    }
}