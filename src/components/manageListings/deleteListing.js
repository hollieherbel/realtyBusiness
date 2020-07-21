import React from 'react'

export default function deleteListing (props) {
    return (
        <div className='delete-button'>
            <button onClick={props.deleteListing}>Delete</button>
        </div>
    )
}