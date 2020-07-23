import React, { Component } from 'react';
import ReactModal from 'react-modal';




export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listingId: undefined,
            modalOpen: false,
            address: '',
            city: '',
            state: '',
            zipcode: undefined
 
        }

        this.deleteListing = this.deleteListing.bind(this)
        this.toggleListingModal = this.toggleListingModal.bind(this)
        this.addListing = this.addListing.bind(this)
        this.listingAdded = this.listingAdded.bind(this)
        
        
        
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


    deleteListing(props) {
        this.props.listingList.filter(listing => { 
         
        fetch(`http://127.0.0.1:5000/listing/delete/${listing.id}`, { method: "DELETE" })
        .then(response => {
          console.log(response)
          })
        return response.data.id
        }).catch(error => { 
        console.log("deleteListing", error)
    })
  }


    addListing() {
        fetch("http://127.0.0.1:5000/listing/add", { 
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

        this.props.getListings
    }

    
    listingAdded() {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
  
    componentDidUpdate() {
        console.log("updated") 

    }
   

    render() {
        return (
            <div className="manage-listing-details">
                
                {this.props.listingList.map((listing, index) => (
                    <h4 className="listing-detail"> 
                        {listing.address}<br /> 
                        {listing.city}<br />
                        {listing.state}<br />
                        {listing.zipcode}<br />
                        
                    <button className="listing-button-delete" onClick={() => this.deleteListing(listing.id)}>Delete</button>    
                    
                    </h4>
                    
                ))}
                


                
                <div className="add-listing">
                <button className="listing-button-add" onClick={this.toggleListingModal}>Add Listing</button>
                <ReactModal 
                    className="add-listing-modal-wrapper" 
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
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.listingAdded}>     
                        </input>
                        <input className="input-box" type="text" 
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={this.listingAdded}>
                        </input>
                        <input className="input-box" type="text"
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={this.listingAdded}
                        maxLength="2"> 
                        </input>
                        <input className="input-box" type="text"
                        placeholder= "zipcode"
                        name="zipcode"
                        value={this.state.zipcode}
                        onChange={this.listingAdded}>
                       </input>
                        <button className="modal-button" type="submit" onClick={() => {
                        this.addListing();
                        this.toggleListingModal();
                        }}>Submit</button>
                        
                    </div>
                    </ReactModal>
                    
                </div>
                
            </div>
            
        )
    }
}