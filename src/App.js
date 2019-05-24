import React from 'react';
import './App.sass';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './landingPage/LandingPage';
import Vision from './vision/Vision';
import BookRoom from './bookRoom/BookRoom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header
          landingLink={<Link to="/LandingPage/">Landing </Link>}
          visionLink={<Link to="/Vision/">vision </Link>}
          bookingLink={<Link to="/BookRoom/">BookRoom </Link>}/>

          <Route path="/LandingPage/"  component={LandingPage} />
          <Route path="/Vision/"  component={Vision} />
          <Route path="/BookRoom/"  component={BookRoom} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
