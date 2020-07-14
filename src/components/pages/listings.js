import React from 'react'


export default function (props) {



    return (
        <div className='manage-listing-details'>
            <div className="listing-detail">{props.address}</div> 
            <div className="listing-detail">{props.city}</div>
            <div className="listing-detail">{props.state}</div>
            <div className="listing-detail">{props.zipcode}</div>
            
        </div>
    )
}