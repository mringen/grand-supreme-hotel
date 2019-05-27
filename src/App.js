import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import './App.sass';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './landingPage/LandingPage';
import Vision from './vision/Vision';
import BookRoom from './bookRoom/BookRoom'
import RoomMaker from './roomMaker/RoomMaker'


function App() {
  return (
    <Router>
      <div className="App">
        <Header
          landingLink={<Link to="/LandingPage/">Home</Link>}
          visionLink={<Link to="/Vision/">Our Vision</Link>}
          bookingLink={<Link to="/BookRoom/">Book a room </Link>}
          roomMakerLink={<Link to="/RoomMaker/"> Admin</Link>}/>


          <Route path="/LandingPage/"  component={LandingPage} />
          <Route path="/Vision/"  component={Vision} />
          <Route path="/BookRoom/"  component={BookRoom} />
          <Route path="/RoomMaker" component={RoomMaker}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
