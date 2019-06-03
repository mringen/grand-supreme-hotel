import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './landingPage.css'

class LandingPage extends Component {

    testar = () => {
        console.log('händer här');
    }

    render() {
        return(
          <div>
            <div className="hero-container">
              <div className="hero-image">
                <div className="hero-text">
                  <h2 className="test">Relax at our Luxury hotel and resort in the middle of the carrabian</h2>
                  <Link to="/BookRoom/"><button className="callToAction">Find Room</button></Link>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        )
    }
}
 export default LandingPage
