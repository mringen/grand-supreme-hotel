import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './landingPage.css'

class LandingPage extends Component {


    render() {
        return(
          <div className="landingPageMain">
            {/* Hero Css Start*/}
            <div className="hero-container">
              <div className="hero-image">
                <div className="hero-text">
                  <h2 className="test">Relax at our Luxury hotel and resort in the middle of the carrabian</h2>
                  <Link to="/BookRoom/"><button className="callToAction">FIND ROOM</button></Link>
                </div>
              </div>
            </div>
            {/* Hero Css Ends */}

            {/*Hotel Info */}
            <div className="hotelInfoMain">
              <div className="hotelInfoWrapper">
                <h3>Checkout our Activitys, Resturant or Spa</h3>
              </div>
            </div>
            {/*Hotel Info*/}
            {/*Activity div*/}
            <div className="displayActivitsMain">
              <div className="activityBox one">
                <h3 className="activityText"><button className="activityButton">ACTIVITYS</button></h3>
              </div>
              <div className="activityBox two">
                <h3 className="activityText"><button className="activityButton">RESTURANT & BAR</button></h3>
              </div>
              <div className="activityBox three">
                <h3 className="activityText"><button className="activityButton">SPA & RELAX</button></h3>
              </div>
            </div>
            {/*Activity div*/}
            <div className="hotelFacility">
              <div className="hotelInfoMain">
                <div className="hotelInfoWrapper">
                  <p>We at Hopkins Bay aim to give you the vacation that you deserve</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
 export default LandingPage

