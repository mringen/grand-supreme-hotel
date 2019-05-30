import React, {Component} from 'react';
import './BookRoom.sass'
import Calendar from 'react-calendar';
import Database from './../database/Database';
import ConfirmBooking from '../confirmBooking/ConfirmBooking';
// import DatabaseRoomInfo from '../database/DatabaseRoomInfo'
// import ConfirmBooking from '../confirmBooking/ConfirmBooking';
class BookRoom extends Component {


    state = {
        date: new Date(),
        checkinDate: new Date(),
        checkoutDate: new Date(),
        roomType: ['Queen Room','King Room', 'Supreme Room' ],
        numberOfGuest: [1, 2, 3, 4],
        calendarFrom: false,
        calendarTo: false,
        fromDate: '',
        toDate: '',
        selectedRoomType: 'Queen Room',
        numberOfGuestSelected: 1,
        showRooms: false,
    };

    bookFromDate = () => {
        this.setState({calendarFrom: true})
    }
    bookToDate = () => {
        this.setState({calendarTo: true})
    }

    blurCalendar = () => {
        setTimeout(() => {
            this.setState({
                calendarFrom: false,
                calendarTo: false
            })
        }, 10);
     }


    setDateFrom = date => {
        date.setHours(date.getHours()+12);  // kompensera för tidszoner
        this.setState({
            checkinDate: date, fromDate: date.toISOString().substring(0, 10),
            calendarFrom: false,
         })
         date.setHours(date.getHours()+13);
    }


    setDateTo = checkinDate => {
        checkinDate.setHours(checkinDate.getHours()+12);  // kompensera för tidszoner
        this.setState({
            checkoutDate: checkinDate, toDate: checkinDate.toISOString().substring(0, 10),
            calendarTo: false,
         })
    }
    showRoomsHandler = () => {
        this.setState({
            showRooms: !this.state.showRooms
        })
    }

    handleSelectedRoom = (e) => {
        this.setState({selectedRoomType: e.target.value})
    }
    handleNumberOfGuest = (e) => {
        this.setState({numberOfGuestSelected: e.target.value})
    }

    render() {
        let roomType = this.state.roomType.map((room, index) => {return <option key={index} value={room}> {room} </option> })
        let numberOfGuests = this.state.numberOfGuest.map((numberOfGuest, index) => {return <option key={index} value={numberOfGuest}> {numberOfGuest} </option> })

        let calendarCheckInDate = null;
        let calendarCheckOutDate = null;
        if( this.state.calendarFrom ) {
            calendarCheckInDate = <Calendar
                onChange={this.setDateFrom}
                value={this.state.date}
                minDate={this.state.date}
                />
        }

        if( this.state.calendarTo ) {
            calendarCheckOutDate = <Calendar
                onChange={this.setDateTo}
                value={this.state.date}
                minDate={this.state.checkinDate}
                />
        }

        let showRooms = this.state.showRooms;
        let listOfRooms;
        if (showRooms) {
            listOfRooms =
            <Database
              selectedRoomType={this.state.selectedRoomType}
              renderRooms={this.handleRoomObject}
              fromDate={this.state.fromDate}
              toDate={this.state.toDate}
              showMeState={this.showMeState} />;
        }

        return(


            <div className="bookContainer">
                <h1>Choose Room</h1>
                <div className="container">
                    <span onClick={this.bookFromDate} onBlur={this.blurCalendar}> Date from
                        <input className="dateValue" onChange={this.setDateFrom} value={this.state.fromDate}/>
                        <span className="calendar">{calendarCheckInDate}</span>
                    </span>
                </div>


                <div className="container">
                    <span onClick={this.bookToDate} onBlur={this.blurCalendar}> Date to
                        <input className="dateValue" onChange={this.setDateTo} value={this.state.toDate} />
                        <span className="calendar">{calendarCheckOutDate}</span>
                    </span>
                </div>

                <div className="containerRoomPerson">Room
                    <select onChange={this.handleSelectedRoom}> {roomType} </select>
                </div>

                <div className="containerRoomPerson"> Person
                    <select onChange={this.handleNumberOfGuest}> {numberOfGuests} </select>
                </div>

                <button onClick={this.showRoomsHandler}>Show Rooms</button>
                {listOfRooms}

            </div>
        )
    }
}
 export default BookRoom
