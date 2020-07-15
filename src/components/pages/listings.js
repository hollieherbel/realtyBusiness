import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newListingList: '',
            addedListing: '',
            modalOpen: false,
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }

        this.deleteListing = this.deleteListing.bind(this)
        this.toggleListingModal = this.toggleListingModal.bind(this)
    }

    

    deleteListing(props) {
        fetch(`http://127.0.0.1:5000/listing/delete/${this.props.id}`, { method: "DELETE" })
        .then(response => {
          this.setState({
            newListingList: props.addresses
          })
  
      return response.data}).catch(error => { 
        console.log("deleteListing", error)
    })
  }

  
  toggleListingModal() {
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
            <div className='manage-listing-details'>
                <div className="listing-detail">{this.props.address}</div> 
                <div className="listing-detail">{this.props.city}</div>
                <div className="listing-detail">{this.props.state}</div>
                <div className="listing-detail">{this.props.zipcode}</div>
                <button onClick={this.deleteListing}>Delete Listing</button>
                
                <div className="add-listing">
                <ReactModal 
                    className="login-modal-wrapper" 
                    onRequestClose={this.toggleListingModal} 
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
                    ><div className="add-listing-wrapper">
                        <h3 className="text-wrapper">Add a Listing</h3> 
                        <input className="input-box" type="text" 
                        placeholder="Address">      
                        </input>
                        <input className="input-box" type="text" 
                        placeholder="City"> 
                        </input>
                        <input className="input-box" type="text"
                        placeholder="State">
                        </input>
                        <input className="input-box" type="text"
                        placeholder="Zipcode">
                        </input>
                        <button className="modal-button">Submit</button>
                        
                    </div>
                    </ReactModal>
                    <button onClick={this.toggleListingModal}>Add Listing</button>
                </div>
            </div>
        )
    }
}
        