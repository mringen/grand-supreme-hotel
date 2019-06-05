import React, {Component} from 'react';
import './Vision.sass';
import TeamImg from '../shared/picForVision/hotel_team.jpg'

class Vision extends Component {

    render() {
        return(
          <div className="visionPage">

      <div className="titleWrapper">

        <img src={TeamImg} alt="404 "className="OurTeam"/>
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
              <h1> Clean and freash </h1>
                <div>
                  <p >Bacon ipsum dolor amet frankfurter beef ribs prosciutto pork belly fatback bresaola. Flank boudin ham hock,
                  doner fatback bacon chicken biltong shoulder buffalo capicola strip steak pork chop cupim pastrami. Biltong leberkas hamburger,
                  boudin sausage ground round burgdoggen tongue</p>
                </div>
            </div>

            <div className="massage">
              <h1> Relaxation</h1>
              <div>
                  <p >Bacon ipsum dolor amet frankfurter beef ribs prosciutto pork belly fatback bresaola. Flank boudin ham hock,
                  doner fatback bacon chicken biltong shoulder buffalo capicola strip steak pork chop cupim pastrami. Biltong leberkas hamburger,
                  boudin sausage ground round burgdoggen tongue</p>
                </div>
            </div>
        </div>

        <div>
            <div className="aboutUs">
            <div >
              <img src="https://cdn2-www.comingsoon.net/assets/uploads/2016/11/BlackWhiteLogan-1.jpg" alt="404" className="henrikImg"/>
              <h2> Henrick Nilsson</h2>
                <p> AC/CD & Piccolo</p>

              </div>
                <div>
              <img src ="https://www.thefashionisto.com/wp-content/uploads/2017/10/Chris-Hemsworth-2017-GQ-Australia-Cover-Photo-Shoot-003-630x350.jpg"  alt="404" />
                <h2> Nicklas Hammarström</h2>
                  <p> ADD & House maid </p>
                  </div>
                        <div >
            <img src="http://1.bp.blogspot.com/-aKizAezvB8I/T2HkLVWTsQI/AAAAAAAAaQ8/TpYW3-Lhhik/s1600/bruce-lee.jpg"  alt="404" />
              <h2> Kamphol Taeng-Iam</h2>
                <p> ADHD & Yoga master </p>
                    </div>
            </div>
        </div>

            </div>
        )
    }
}
 export default Vision
