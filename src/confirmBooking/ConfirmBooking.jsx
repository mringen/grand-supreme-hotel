import React, {Component} from 'react';
import './confirmBooking.sass'
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
              <br/>

                  <InputHolder />


            </div>
        )
    }
}
export default ConfirmBooking
