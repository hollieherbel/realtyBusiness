import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faPhoneVolume, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


library.add(
    faPaperPlane,
    faPhoneVolume,
    faMapMarkerAlt
)

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='contact-wrapper'>
                <div className="contact-phone">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
                <div className="contact-email">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div className="contact-address">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
            </div>
        )
    }
}