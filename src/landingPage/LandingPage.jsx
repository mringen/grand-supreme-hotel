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
 // <div className="activitisMain">
 //   <div className="test">
 //     <div className="resturang">
 //       <div className="resturangText">
 //         <h1>ACTIVITYS</h1>
 //       </div>
 //     </div>
 //     <div className="testTesxt">dawdwdwadwadwadaw wadaw dwa dawd awdwadwadaw dwad wa wa dadwa daw</div>
 //   </div>
 //   <div className="test1">
 //     <p>Waddap dawg</p>
 //   </div>
 //
 //   <div className="facillitys">
 //     Show me!
 //   </div>
 // </div>
