import React, {Component} from 'react';
import './BookRoom.sass'
import Calendar from 'react-calendar'


class BookRoom extends Component {

    state = {
        date: new Date(),
        rooms: ['Queen Room','King Room', 'Supreme Room' ],
        tier: [1, 2, 3, 4],
        calendar: true,
        dateFrom: '',
        dateTo: ''
    }
    // let newDate;


    bookFromDate = () => {
        let calendarView;

        if (this.state.date) {
            calendarView = <Calendar
            onChange={this.setDate}
            value={this.state.date}
            />
        }
        else {
            calendarView = '';
        }
        this.setState({calendar: !this.state.calendar})
    }

    bookToDate = () => {
        console.log('funk bookToDate');
    }

    setDateFrom = () => {
        // this.setState({dateFrom: this.state.date})
    }

    // setDateTo = () => {}

    setDate = date => {
        this.setState({ date })
        this.bookFromDate(date)
    }

    render() {
        // console.log('date: ', this.state.date);
        // console.log('datefrom: ', this.state.datefrom);
        let rooms = this.state.rooms.map((room, index) => {return <option key={index}> {room} </option> })
        let tiers = this.state.tier.map((tier, index) => {return <option key={index}> {tier} </option> })

        return(
            <div className="bookContainer">

            <select> {rooms} </select>

            <select> {tiers} </select>

            <span onClick={this.bookFromDate}> Date from
                <input onChange={this.setDateFrom} value={this.state.dateFrom}
                />
                {this.calendarView}
            </span>


            <span onClick={this.bookToDate}> Date to <input /> </span>

            {/*<Calendar
                onChange={this.setDate}
                value={this.state.date}
            />*/}
            </div>
        )
    }
}
 export default BookRoom
