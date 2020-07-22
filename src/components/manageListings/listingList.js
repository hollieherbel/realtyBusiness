import React, { Component } from 'react'

export default class ListingList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className=''>
                {this.props.address}
            </div>
        )
    }
}