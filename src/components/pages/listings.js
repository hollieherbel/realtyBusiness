import React, { Component } from 'react'

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deleted: false
        }

        this.deleteListing = this.deleteListing.bind(this)
    }

    componentDidUpdate() {

    }

    deleteListing() {
        fetch(`http://127.0.0.1:5000/listing/delete/${this.props.id}`, { method: "DELETE" })
        .then(response => {
          this.setState({
            deleted: true
          })
  
      return response.data}).catch(error => { 
        console.log("deleteListing", error)
    })
  }



    render() {
        return (
            <div className='manage-listing-details'>
                <div className="listing-detail">{this.props.address}</div> 
                <div className="listing-detail">{this.props.city}</div>
                <div className="listing-detail">{this.props.state}</div>
                <div className="listing-detail">{this.props.zipcode}</div>
                <div>
                <button onClick={this.deleteListing}>Delete Listing</button>
                </div>
            </div>
        )
    }
}
        