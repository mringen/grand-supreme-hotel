import React, {Component} from 'react';
import './BookRoom.sass'
import Calendar from 'react-calendar'


class BookRoom extends Component {

    state = {
        date: new Date(),
        rooms: ['Queen Room','King Room', 'Supreme Room' ],
        tier: [1, 2, 3, 4],
        calendar: false,
        dateFrom: '',
        dateTo: ''
    }
    // let newDate;


    bookFromDate = () => {

        this.setState({
            calendar: !this.state.calendar
        })
    }

    bookToDate = () => {
        console.log('funk bookToDate');
        this.setState({
            calendar: !this.state.calendar
        })
    }

    setDateFrom = () => {
        // this.setState({dateFrom: this.state.date})
    }

    setDateTo = () => {}

    setDate = date => {
        date.setHours(date.getHours()+12);  // kompensera för tidszoner
        console.log('Calendar onchange:', date)

        this.setState({ date: date, dateFrom: date.toISOString().substring(0, 10) })
    }

    setDate = date => {
        date.setHours(date.getHours()+12);  // kompensera för tidszoner
        console.log('Calendar onchange:', date)

        this.setState({ date: date, dateTo: date.toISOString().substring(0, 10) })
    }

    render() {
        console.log('calendarView:', this.state.calendarView);
        console.log('date: ', this.state.date);
        let rooms = this.state.rooms.map((room, index) => {return <option key={index}> {room} </option> })
        let tiers = this.state.tier.map((tier, index) => {return <option key={index}> {tier} </option> })
        let calendarView = null;
        if( this.state.calendar ) {
            calendarView = <Calendar
                onChange={this.setDate}
                value={this.state.date}
                />
        }

        return(
            <div className="bookContainer">

            <select> {rooms} </select>

            <select> {tiers} </select>

            <span onClick={this.bookFromDate} className="dateTo"> Date from
                <input className="dateValue" onChange={this.setDateFrom} value={this.state.dateFrom} />

            </span>

            {calendarView}


            <span onClick={this.bookToDate}> Date to
                <input className="dateValue" onChange={this.setDateTo} value={this.state.dateTo} />
            </span>

            </div>
        )
    }
}
 export default BookRoom
