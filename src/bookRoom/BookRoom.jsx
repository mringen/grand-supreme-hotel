import React, {Component} from 'react';
import './BookRoom.sass'
import Calendar from 'react-calendar';
import Database from './../database/Database';

import RoomView from './../shared/roomIMG/roomView.jpeg';

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

        }, 1000);
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
              toDate={this.state.toDate} />


        }

        return(


            <div className="bookContainer">
            <div className="titleWrapper" >
            <img className="bookRoomImg" alt="not working" src={RoomView}/>
            </div>

            <div className="borderSearch">

                    <div>
                    <p> Date from </p>
                <span onClick={this.bookFromDate} onBlur={this.blurCalendar}>
                    <span className="calendar">{calendarCheckInDate}</span>
                        <input className="dateValue" onChange={this.setDateFrom}    value={this.state.fromDate}/>
                </span>
                </div>
            <div>
                <p> Date to </p>
                <span onClick={this.bookToDate} onBlur={this.blurCalendar}>
                <span className="calendar">{calendarCheckOutDate}</span>
                <input className="dateValue" onChange={this.setDateTo} value={this.state.toDate} />
                </span>
            </div>

            <div className="searchOptions">
                        <div >    <span className="room">Room</span>  <span className="person"> Person</span>  </div>
                <div className="selectWrapper">
                    <select onChange={this.handleSelectedRoom}> {roomType} </select>


                    <select onChange={this.handleNumberOfGuest}> {numberOfGuests} </select>
                </div>
            </div>

            </div>

            <button className="searchRoomBtn" onClick={this.showRoomsHandler}>Search</button>


            <div className="renderRoom"> {listOfRooms}</div>


            </div>
        )
    }
}
export default BookRoom
