import React, {Component} from 'react';


class DatabaseRoomInfo extends Component{

  state = {
    confrimDayFrom:'',
    confrimDayTo: '',

  }

  bamse  = () =>{
  this.setState({confrimDayTo: this.props.wantToBook })
  }
  render(){

    return (
      <div>
      <h1> här e jag {this.props.wantToBook} </h1>
      <button onClick={this.bamse}>kan jag detta</button>
      </div>
    )
  }
}

export  default DatabaseRoomInfo;
