import React, {Component} from 'react';
import './Footer.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {

    render() {
        return(
            <div className="footerMainContainer">
              <div className="mainList">
                  <ul className="firstList">
                    <li>Contact Us</li>
                    <li>+460832111</li>
                    <li>Luxuryhotels@gmail.com</li>
                  </ul>
                  <ul className="secondList">
                    <li>Book a Room</li>
                    <li>Checkout Upcoming Events</li>
                    <li>Rate Your Stay</li>
                  </ul>
                  <ul className="thirdList">
                    <li>Like us on Facebook</li>
                    <li>Follow us on Instagram</li>
                    <li>Check out our Twitter</li>
                  </ul>
              </div>

              <div className="fontAwsomeIcons">
                <div className="innerFont">
                  <FontAwesomeIcon className="icons" icon={faInstagram} size="4x" />
                  <FontAwesomeIcon className="icons" icon={faFacebookSquare} size="4x" />
                  <FontAwesomeIcon className="icons" icon={faTwitterSquare} size="4x" />
                </div>
              </div>
            </div>
        )
    }
}
 export default Footer
