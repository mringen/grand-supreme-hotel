import React, {Component} from 'react';
import './Vision.sass';
import Hotel_Team from '../shared/picForVision/hotel_team.jpg';


class Vision extends Component {

    render() {
        return(
          <div className="visionPage">
            <div className="titleWrapper">
              <h1 >Our vision and goal</h1>
            </div>
                <div className="visonAndGoalTextWrapper">
               <img className='teamImg' src={Hotel_Team} alt="404"/>
                   <p className="visonAndGoalText">Bacon ipsum dolor amet meatball sausage cow chicken cupim,
                    flank venison frankfurter meatloaf. Bacon ipsum dolor amet meatball sausage cow chicken cupim,
                     flank venison frankfurter meatloaf. </p>
                  </div>



          </div>
        )
    }
}
 export default Vision
