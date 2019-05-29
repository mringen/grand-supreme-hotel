import React, {Component} from 'react';
import './confirmBooking.sass'

class InputHolder extends Component{
    state = {
      firstNameError:'',
      lastNameError:'',
      //   firstNameError:'Emailis invalid',
    }

    // let förNamn = this.props.value;

  validation = () =>{
    let firstNameError= '';
    let lastNameError= '';
    // let firstNameError = '',


    if(typeof  this.props.firstName != 'string' ||  this.props.firstName === ""  ){
      firstNameError = "Invalid first name";
    }

  


    if(firstNameError){
      this.setState({firstNameError});
      return false;
    }

    return true;
  }

    handelConfirm = event =>{
      const isValid = this.validation();
      if(isValid) {
        console.log(this.state);
      }
    };
  render(){




    return(
      <div>
        <input onChange={e => this.props.liftValue(e.target.firstName)} typ="text"
        value={this.props.firstName} placeholder="First name"/>
        <p className="errorMsg">{this.state.firstNameError}</p>
         <br/>

          <button onClick={this.handelConfirm}> Confirm </button>
        </div>
    )
  }
}
export default InputHolder;
