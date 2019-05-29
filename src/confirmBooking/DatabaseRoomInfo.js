import React, {Component} from 'react';
import Database from '../database/Database';
import BookRoom from '../bookRoom/BookRoom'

class DatabaseRoomInfo extends Component{

  state = {
    confrimDayFrom:'',
    confrimDayTo: 'emty',

  }


  render(){
    const  bamse = () => {
       this.setState({confrimDayTo: this.props.toDate},
         () => console.log(this.state.hasBeenClicked))
     }
    // console.log('nigga am here', this.state.confrimDayTo);
    // console.log(this.props);
    return (
      <div>
      <h1> här e jag {this.props.toDate} </h1>
      <button onClick={bamse}>kan jag detta</button>
      </div>
    )
  }
}

export  default DatabaseRoomInfo;
