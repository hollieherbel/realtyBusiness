import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faPhoneVolume, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Decor from "../../photos/decor.jpg"


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
              
                <div className="contact-color-block">
                 <div className="contact-info">
                    <FontAwesomeIcon className="icon-phone" icon={faPhoneVolume} />
                   <br />555-555-5555
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon className="icon-email" icon={faPaperPlane} />
                    <br />olivia@realtor.com
                </div>
                <div className="contact-info">
                    <FontAwesomeIcon className="icon-address" icon={faMapMarkerAlt} />
                    <br /> 123 Main Street<br /> Hays, KS 67601
                </div>
                </div>
                    <img src={Decor} alt="Decor"></img>
                
            </div>
        )
    }
}