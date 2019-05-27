import React, {Component} from 'react';
import './BookRoom.sass'
import Calendar from 'react-calendar';
import Database from './../database/Database';


class BookRoom extends Component {

    state = {
        date: new Date(),
        roomType: ['Queen Room','King Room', 'Supreme Room' ],
        numberOfGuest: [1, 2, 3, 4],
        calendarFrom: false,
        calendarTo: false,
        fromDate: '',
        toDate: '',
        selectedRoomType: 'Queen Room',
        numberOfGuestSelected: 1,
        showRooms: false,

        //henriks kod för att blurra calendar on clicked
        toggleCheckInCalendar: true,
        toggleCheckOutCalendar: true,
      }

    // let newDate;

    toggleFromCalandar = () => {
      this.setState({
        toggleCheckInCalendar: true,
      })
    }
    toggleToCalandar = () => {
      this.setState({
        toggleCheckOutCalendar: true,
      })
    }

    bookFromDate = () => {
      if(!this.state.toggleCheckInCalendar) {

      } else {
        this.setState({
          calendarFrom: !this.state.calendarFrom,
          toggleCheckInCalendar: true,
        })

      }
    }

    bookToDate = () => {
      if(!this.state.toggleCheckOutCalendar) {

      } else {
        this.setState({
          calendarTo: !this.state.calendarTo,
          toggleCheckOutCalendar: true,
        })

      }
    }

    // setDateFrom = () => {
    //     // this.setState({fromDate: this.state.date})
    // }

    // setDateTo = () => {}

    setDateFrom = date => {
        date.setHours(date.getHours()+12);  // kompensera för tidszoner
        this.setState({
          date: date, fromDate: date.toISOString().substring(0, 10),
          toggleCheckInCalendar: false,
         })





    }


    setDateTo = date => {
      console.log('selected date')
        date.setHours(date.getHours()+12);  // kompensera för tidszoner
        this.setState({
          date: date, toDate: date.toISOString().substring(0, 10),
          toggleCheckOutCalendar: false,
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
                onClickDay={this.displayCheckIn}
                className={this.state.toggleCheckInCalendar ? 'active' : 'unActive'}
                />
        }
        if( this.state.calendarTo ) {
            calendarCheckOutDate = <Calendar
                onChange={this.setDateTo}
                value={this.state.date}
                onClickDay={this.displayCheckOut}
                className={this.state.toggleCheckOutCalendar ? 'active' : 'unActive'}
                />
        }

        let showRooms = this.state.showRooms;
        let listOfRooms;
        if (showRooms) {
            listOfRooms = <Database selectedRoomType={this.state.selectedRoomType} />
        }

        return(
            <div className="bookContainer">
                <h1>Choose Room</h1>

                <div className="container">
                    <span onClick={this.bookFromDate} className="toDate"> Date from
                        <input className="dateValue" onClick={this.toggleFromCalandar} onChange={this.setDateFrom} value={this.state.fromDate} />
                    </span>
                    <span className="calendar">{calendarCheckInDate}</span>
                </div>


                <div className="container">
                    <span onClick={this.bookToDate} className="toDate"> Date to
                        <input className="dateValue"  onClick={this.toggleToCalandar} onChange={this.setDateTo} value={this.state.toDate} />
                    </span>
                    <span className="calendar">{calendarCheckOutDate}</span>
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
