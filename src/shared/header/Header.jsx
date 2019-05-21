import React, {Component} from 'react';
import './Header.sass'


class Header extends Component {
    constructor(props){
      super(props);
      this.state = {
        activeBurger: false
      }
    }
    toggleNav = () => {
      const currentState = this.state.activeBurger;
      this.setState({ activeBurger: !currentState });
    }
    linkClicked = () => {
      console.log('linked clicked')
    }

    render() {
        return(
            <div className="navMainContainer">
              <h4 className="loggo">Luxury Hotel</h4>
              <ul className="navLinks">
                <li>{this.props.landingLink}</li>
                <li>{this.props.visionLink}</li>
                <li>{this.props.bookingLink}</li>
              </ul>
              <div className="burger" onClick={this.toggleNav}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              <ul className={this.state.activeBurger ? 'active-burger' : 'not-active-burger'}>
                <li onClick={this.toggleNav}>{this.props.landingLink}</li>
                <li onClick={this.toggleNav}>{this.props.visionLink}</li>
                <li onClick={this.toggleNav}>{this.props.bookingLink}</li>
              </ul>
            </div>
        )
    }
}
 export default Header
