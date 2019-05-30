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
                  <h1>Relax at our Luxury hotel and resort in the middle of the carrabian</h1>
                  <Link to="/BookRoom/"><button>Find Room</button></Link>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
 export default LandingPage
 // <div className="activitisMain">
 //   <div className="resturang">
 //     Show me!
 //   </div>
 //   <div className="activitis">
 //     Show me!
 //    </div>
 //   <div className="facillitys">
 //     Show me!
 //   </div>
 // </div>
