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

renderDate = () => {
  this.setState({
    checkInDate: this.props.location.aboutProps.checkInDate,
    checkOutDate: this.props.location.aboutProps.checkOutDate,
    roomId: this.props.location.aboutProps.roomId,
    // allRooms: this.props.location.aboutProps.allRooms
  })
}

updateData = () => {
		firebase.firestore().collection('HotelRooms').doc(this.state.roomId).update({
    bookings: firebase.firestore.FieldValue.arrayUnion({fromDate: this.props.location.aboutProps.checkInDate, toDate: this.props.location.aboutProps.checkOutDate})
});




	}

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
