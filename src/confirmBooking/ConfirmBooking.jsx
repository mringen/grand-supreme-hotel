import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import InputHolder from './InputHolder';
import './confirmBooking.sass'
class ConfirmBooking extends Component {
  state = {
    checkInDate: '',
    checkOutDate: '',
    roomId: '',
    roomsType:'',
  }

// renderDate = () => {
//   this.setState({
//     checkInDate: this.props.location.aboutProps.checkInDate,
//     checkOutDate: this.props.location.aboutProps.checkOutDate,
//     roomId: this.props.location.aboutProps.roomId,
//      roomsType: this.props.location.aboutProps.roomsType
//   })
// }



updateData = () => {
		firebase.firestore().collection('HotelRooms').doc(this.state.roomId).update({
    bookings: firebase.firestore.FieldValue.arrayUnion({fromDate: this.props.location.aboutProps.checkInDate, toDate: this.props.location.aboutProps.checkOutDate})

});


  console.log('the is bookt');
	}


componentDidMount(){
    this.setState({
      checkInDate: this.props.location.aboutProps.checkInDate,
      checkOutDate: this.props.location.aboutProps.checkOutDate,
      roomId: this.props.location.aboutProps.roomId,
       roomsType: this.props.location.aboutProps.roomType
    })
  }

    render() {




        return(
          <div className="wrapper">
          <div className="inputWrapper">
            <h1> Verify your booking </h1>
              <InputHolder pushToDataBase={this.updateData} roomsId={this.state.roomId} bookFrom={this.state.checkInDate} bookTo={this.state.checkOutDate} roomType={this.state.roomsType}/>
            </div>
          </div>
        )
    }
}
export default ConfirmBooking
