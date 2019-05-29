import React, {Component} from 'react';
import Database from '../database/Database';
import './confirmBooking.sass'
class ConfirmBooking extends Component {

    render() {
        return(
            <div>
                <div className="inputWrapper">
                        <input value="" typ="text" placeholder="First name"/>
                        <input typ="text" placeholder="Last name"/>
                        <input typ="text" placeholder="Phone number"/>
                        <input typ="text" placeholder="Email"/>
                  </div>
                        <div>
                        rums info ska skrivas ut här sedan
                        </div>
                        <button> Confirm </button>

            </div>
        )
    }
}
export default ConfirmBooking
