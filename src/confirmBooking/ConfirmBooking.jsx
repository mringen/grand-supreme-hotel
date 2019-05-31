import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
// import Database from '../database/Database';

class ConfirmBooking extends Component {
  state = {
    checkInDate: '',
    checkOutDate: '',
    roomId: '',
    // allRooms: ''
  }


updateData = () => {
		firebase.firestore().collection('HotelRooms').doc(this.state.roomId).update({
    bookings: firebase.firestore.FieldValue.arrayUnion({fromDate: this.props.location.aboutProps.checkInDate, toDate: this.props.location.aboutProps.checkOutDate})
});

}
    // ("bookings", ({fromDate: "2019-06-17", toDate: "2019-06-26"}));


    render() {



        return(
          <div>
            <button onClick={this.renderDate}>Click me first</button>
            <button onClick={this.updateData}>Click me second</button>
            <p>{this.state.checkInDate}-{this.state.checkOutDate} room id: {this.state.roomId} {this.state.allRooms}</p>
            <div>ConfirmBooking page</div>
          </div>
        )
    }

}
export default ConfirmBooking
