import React, { Component } from 'react';
import ReactModal from 'react-modal'

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='add-listing-button'>

                <button>Add Listing</button>
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
                        this.props.addListing;
                        this.props.toggleListingModal;
                        }}>Submit</button>
                        
                    </div>
                    </ReactModal>



            </div>
        )
    }
}