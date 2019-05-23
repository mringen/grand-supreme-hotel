import React, {Component} from 'react';
import './BookRoom.sass'
import Calendar from 'react-calendar'


class BookRoom extends Component {

    state = {
        date: new Date(),
        rooms: ['Queen Room','King Room', 'Supreme Room' ],
        tier: [1, 2, 3, 4],
        calendarFrom: false,
        calendarTo: false,
        dateFrom: '',
        dateTo: ''
    }
    // let newDate;


    bookFromDate = () => {

        this.setState({
            calendarFrom: !this.state.calendarFrom
        })
    }

    bookToDate = () => {
        console.log('funk bookToDate');
        this.setState({
            calendarTo: !this.state.calendarTo
        })
    }

    // setDateFrom = () => {
    //     // this.setState({dateFrom: this.state.date})
    // }

    // setDateTo = () => {}

    setDateFrom = date => {
        date.setHours(date.getHours()+12);  // kompensera för tidszoner
        console.log('Calendar onchange:', date)

        this.setState({ date: date, dateFrom: date.toISOString().substring(0, 10) })
    }

    setDateTo = date => {
        date.setHours(date.getHours()+12);  // kompensera för tidszoner
        console.log('Calendar onchange:', date)

        this.setState({ date: date, dateTo: date.toISOString().substring(0, 10) })
    }

    render() {
        let rooms = this.state.rooms.map((room, index) => {return <option key={index}> {room} </option> })
        let tiers = this.state.tier.map((tier, index) => {return <option key={index}> {tier} </option> })
        let calendarCheckInDate = null;
        let calendarCheckOutDate = null;
        if( this.state.calendarFrom ) {
            calendarCheckInDate = <Calendar
                onChange={this.setDateFrom}
                value={this.state.date}
                />
        }
        if( this.state.calendarTo ) {
            calendarCheckOutDate = <Calendar
                onChange={this.setDateTo}
                value={this.state.date}
                />
        }

        return(
            <div className="bookContainer">
                <h1>Choose Room</h1>

                <div className="container">
                    <span onClick={this.bookFromDate} className="dateTo"> Date from
                        <input className="dateValue" onChange={this.setDateFrom} value={this.state.dateFrom} />
                    </span>
                    <span className="calendar">{calendarCheckInDate}</span>
                </div>


                <div className="container">
                    <span onClick={this.bookToDate} className="dateTo"> Date to
                        <input className="dateValue" onChange={this.setDateTo} value={this.state.dateTo} />
                    </span>
                    <span className="calendar">{calendarCheckOutDate}</span>
                </div>

                <div className="containerRoomPerson">Room
                    <select> {rooms} </select>
                </div>

                <div className="containerRoomPerson"> Person
                    <select> {tiers} </select>
                </div>

            </div>
        )
    }
}
 export default BookRoom
