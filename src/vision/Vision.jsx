import React, {Component} from 'react';
import './Vision.sass';
import TeamImg from '../shared/picForVision/hotel_team.jpg'

class Vision extends Component {

    render() {
        return(
          <div className="visionPage">

      <div className="titleWrapper">

        <img src={TeamImg} className="OurTeam"/>
          <h1 className='teamTitle'>Our team </h1>
            <div className="teamText">
            <p >Bacon ipsum dolor amet frankfurter beef ribs prosciutto pork belly fatback bresaola. Flank boudin ham hock,
            doner fatback bacon chicken biltong shoulder buffalo capicola strip steak pork chop cupim pastrami. Biltong leberkas hamburger,
            boudin sausage ground round burgdoggen tongue ribeye beef ribs shankle shank chicken beef picanha. Short loin tail biltong, strip steak shank tri-tip t-bone pork rump. </p>
            </div>
        </div>

        <div className="feelGoodWrapper">
            <div className="feelGood">
              <h1> You'r experience </h1>
                <div>
                  <p >Bacon ipsum dolor amet frankfurter beef ribs prosciutto pork belly fatback bresaola. Flank boudin ham hock,
                  doner fatback bacon chicken biltong shoulder buffalo capicola strip steak pork chop cupim pastrami. Biltong leberkas hamburger,
                  boudin sausage ground round burgdoggen tongue</p>
                </div>
            </div>

            <div className="mrClean">
              <h1> You'r experience </h1>
                <div>
                  <p >Bacon ipsum dolor amet frankfurter beef ribs prosciutto pork belly fatback bresaola. Flank boudin ham hock,
                  doner fatback bacon chicken biltong shoulder buffalo capicola strip steak pork chop cupim pastrami. Biltong leberkas hamburger,
                  boudin sausage ground round burgdoggen tongue</p>
                </div>
            </div>

            <div className="massage">
              <h1> You'r experience </h1>
              <div>
                  <p >Bacon ipsum dolor amet frankfurter beef ribs prosciutto pork belly fatback bresaola. Flank boudin ham hock,
                  doner fatback bacon chicken biltong shoulder buffalo capicola strip steak pork chop cupim pastrami. Biltong leberkas hamburger,
                  boudin sausage ground round burgdoggen tongue</p>
                </div>
            </div>
        </div>

            </div>
        )
    }
}
 export default Vision
