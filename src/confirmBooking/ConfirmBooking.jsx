import React, {Component} from 'react';
import Database from '../database/Database';
import './confirmBooking.sass'
import BookRoom from '../bookRoom/BookRoom';
import DatabaseRoomInfo from './DatabaseRoomInfo';
import InputHolder from './InputHolder';

class ConfirmBooking extends Component {
    state = {
      firstName:'',
      lasteName:''
    }

    setInputValue = newValue => {
    		this.setState({ firstName: newValue });
    	}

    render() {



        return(

            <div className="confirimPage">
              <h1> Verification the reservation </h1>
                <div className="inputWrapper">

                      <InputHolder liftValue={this.setInputValue}  value={this.state.firstName}/>
                        <br/>
                        <input typ="text" placeholder="Last name"/>
                        <br/>
                        <input typ="text" placeholder="Phone number"/>
                        <br/>
                        <input typ="text" placeholder="Email"/>
                  </div>

                    <DatabaseRoomInfo/>


                        <button> Confirm </button>

            </div>
        )
    }
}
export default ConfirmBooking
