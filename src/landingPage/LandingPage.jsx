import React, {Component} from 'react';
import './landingPage.css'
import Hero from '../shared/img/hotel hero.img.1.jpg'

class LandingPage extends Component {

    render() {
        return(
          <div>
            <div className="hero-container">
              <div className="hero-image">
                <div className="hero-text">
                  <h1>Relax at our Luxury hotel and resort in the middle of the carrabian</h1>
                  <button>Find Room</button>
                </div>
              </div>
            </div>
            <div className="activitisMain">
              <div className="resturang">
                Show me!
              </div>
              <div className="activitis">
                Show me!
               </div>
              <div className="facillitys">
                Show me!
              </div>
            </div>
          </div>
        )
    }
}
 export default LandingPage
