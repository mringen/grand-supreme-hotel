import React, {Component} from 'react';
import './confirmBooking.sass'
import InputHolder from './InputHolder';
import DatabaseRoomInfo from './DatabaseRoomInfo';
class ConfirmBooking extends Component {

    state = {
      confrimDayFrom:this.props.booktFrom,
      confrimDayTo:this.props.toDate,
    }


    render() {



        return(

            <div className="confirimPage">
              <h1> Verification the reservation </h1>
              <br/>

                  <InputHolder />

                  <br/>
                want to book to {this.state.confrimDayTo}
                  <br/>
                  <p> Book from {this.state.confrimDayFrom} </p>

                  rummets Id {this.props.roomsId}
            </div>
        )
    }
}
export default ConfirmBooking
