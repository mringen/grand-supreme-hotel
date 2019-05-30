import React, {Component} from 'react';
import './confirmBooking.sass'
import InputHolder from './InputHolder';
import DatabaseRoomInfo from './DatabaseRoomInfo';
class ConfirmBooking extends Component {

    state = {
      confrimDayFrom:this.props.booktFrom,
      confrimDayTo:''
    }


    render() {

      let propFromBookRoom = this.props.toDate
      console.log(propFromBookRoom);


        return(

            <div className="confirimPage">
              <h1> Verification the reservation </h1>
              <br/>
            want to book to {this.props.toDate}
              <br/>
              <p> Book from {this.state.confrimDayFrom} </p>
                  <InputHolder />

            </div>
        )
    }
}
export default ConfirmBooking
