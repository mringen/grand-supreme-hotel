import React, {Component} from 'react';
import './BookRoom.sass'
import Calendar from 'react-calendar'


class BookRoom extends Component {

    state = {
        date: new Date(),
        rooms: ['Queen Room','King Room', 'Supreme Room' ],
        tier: [1, 2, 3, 4],
        calender: false
    }


    bookFromDate = () => {
        console.log('funk bookFromDate');
    }

    bookToDate = () => {
        console.log('funk bookToDate');
    }

    onChange = date => this.setState({
        date
    })

    render() {
        let rooms = this.state.rooms.map((room, index) => {return <option key={index}> {room} </option> })
        let tiers = this.state.tier.map((tier, index) => {return <option key={index}> {tier} </option> })

        return(
            <div className="bookContainer">

            <select name="rooms">
                {rooms}
            </select>
            
            <select name="tier">
                {tiers}
            </select>

            <span onClick={this.bookFromDate}> Date from <input /> </span>
            <span onClick={this.bookToDate}> Date to <input /> </span>

            <Calendar
                onChange={this.onChange}
                value={this.state.date}
            />
            </div>
        )
    }
}
 export default BookRoom
