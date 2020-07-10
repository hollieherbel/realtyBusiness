import React, { Component } from 'react'


export default class ListingPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
          listingList: []
        }
        
        this.getListings = this.getListings.bind(this)

    }

    componentDidMount() {
        this.getListings()
    }

    getListings() {
        fetch("http://127.0.0.1:5000/listing/get", { method: "GET" })
        .then(response => response.json())
        .then(data => this.setState({ listingList: data }))
        .catch(error => console.log(error))
    }



    render() {
        return (
            <div className='listings-wrapper'>
                
            </div>
        )
    }
}