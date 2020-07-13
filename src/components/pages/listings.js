import React, { Component } from 'react'



export default class Listings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: "",
            city: ""
        }
        
    }

    componentDidMount() {
        this.setState({
            address: this.props.address,
            city: this.props.city
        })
    }
 



    render() {
        return (
            <div className='listings-wrapper'>
              <h1>{this.state.address}</h1>
             
            </div>
        )
    }
}