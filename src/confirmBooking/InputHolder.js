import React, {Component} from 'react';
import './confirmBooking.sass'
// import Database from '../database/Database';
// import DatabaseRoomInfo from './DatabaseRoomInfo';
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

    if(typeof  this.state.email != 'number' ||  this.state.email === "" || !this.state.email.includes('@') ){
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

  handelConfirm = () =>{

    const isValid = this.validation();
    if(isValid) {
      console.log(this.state);
      this.setState(defaultState);
    }
  };




  render(){




    return(


      <div>
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



      <button onClick={this.handelConfirm}> Confirm </button>
      </div>

    )}
  }
  export default InputHolder;
