import React, { Component } from 'react'



export default class Listings extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
        }
        
   

    }

 



    render() {
        return (
            <div className='listings-wrapper'>
                {this.props.address}
             
            </div>
        )
    }
}