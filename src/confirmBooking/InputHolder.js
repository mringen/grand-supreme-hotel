import React, {Component} from 'react';
import './confirmBooking.sass'


import firebase from 'firebase/app';
import 'firebase/firestore';

const defaultState = {
  firstName:'',
  lastName:'',
  email:'',
  firstNameError:'',
  lastNameError:'',
  emailError:'',
}


class InputHolder extends Component{
  state = defaultState;


  validation = () =>{
    let firstNameError= '';
    let lastNameError= '';
    let emailError ='';


    if(typeof  this.state.firstName != 'string' ||  this.state.firstName === ""  ){
      firstNameError = "Pleace enter you firstname";
    }

    if(typeof  this.state.lastName != 'string' ||  this.state.lastName === ""  ){
      lastNameError = "Pleace enter you lastname";
    }

    if(typeof  this.state.email != 'string' ||  this.state.email === "" || !this.state.email.includes('@') ){
      emailError = "Invalid email address";
    }


    if(firstNameError){
      this.setState({firstNameError});
      return false;
    }

    if(lastNameError){
      this.setState({lastNameError});
      return false;
    }
    if(emailError){
      this.setState({emailError});
      return false;
    }

    return true;

  }

  updateUserInfoToDataBast = () =>{
    firebase.firestore().collection('HotelRooms').doc(this.props.roomsId).update({
      userInfo: firebase.firestore.FieldValue.arrayUnion({firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, checkInDay: this.props.bookFrom, checkoutDay: this.props.bookTo})

    });
    console.log('fml');
  }




  handelConfirm = () =>{
    const isValid = this.validation();
    if(isValid) {
      this.updateUserInfoToDataBast();
      this.props.pushToDataBase();
      console.log(this.state);
      this.setState({defaultState});
    }
  };




  render(){




    return(


      <div className="inputHolderPage">
      <input  typ="text"
      value={this.state.firstName} 	onChange={e => this.setState({firstName: e.target.value})} placeholder="Please endter first name"/>
      <p className="errorMsg">{this.state.firstNameError}</p>
      <br/>

      <input  typ="text"
      value={this.state.lastName} 	onChange={e => this.setState({lastName: e.target.value})} placeholder="Please enter Lastname"/>
      <p className="errorMsg">{this.state.lastNameError}</p>
      <br/>

      <input  typ="text"
      value={this.state.email} 	onChange={e => this.setState({email: e.target.value})} placeholder="Please enter email"/>
      <p className="errorMsg">{this.state.emailError}</p>
      <br/>

      <h1> You booking </h1>
        <p> Checkin date: <strong> {this.props.bookFrom}</strong></p>
        <p> Checkout date: <strong> {this.props.bookTo} </strong></p>
        <p> The selected room tier: <strong> {this.props.roomType} </strong></p>

      <button onClick={this.handelConfirm}> Confirm </button>
      </div>

    )}
  }
  export default InputHolder;
