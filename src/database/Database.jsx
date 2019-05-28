import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ConfirmBooking from '../confirmBooking/ConfirmBooking'

import './Database.css'

const Database = (props) => {
  let loggo;
  let roomInfo;

    const [roomData, setRoomData] = useState(null);

    useEffect(() => {
        const db = firebase.firestore();
        const hotelCollection = db.collection('rooms');
        hotelCollection.get().then(snapshot => {
            let tierList = [];
            snapshot.forEach(doc => {
                let tierObj = {
                    ...doc.data(),
                    id: doc.id
                };
                tierList.push(tierObj);
            })
            setRoomData(tierList)
        })
    }, []);

    let listRoom = null;
    if(roomData) {
        listRoom = roomData.map(rooms => {

        if(rooms.roomType === 'KingRoom') {
            loggo = require('../shared/roomIMG/hotel-room-1447201_1920.jpg');
            roomInfo = <p>This is our smallest and most cozy of our hotelrooms, but it still holds our premium standard and we promise you that this room will fit your every need.</p>

        }
        if (rooms.roomType === 'Queen Room') {
            loggo = require('../shared/roomIMG/hotel-room-3652757_1920.jpg');

        }
        if (rooms.roomType === 'Supreme Room') {
            loggo = require('../shared/roomIMG/apartment-1822409_1920.jpg');
        }
        if (props.selectedRoomType === rooms.roomType) {

            return <li className="Room"key={rooms.id}><img src={loggo} alt="Smiley face" height="242" width="342" />
                <div>
                    <h3>{rooms.roomType}</h3>
                  {roomInfo}
                    <button>
                        <Link to="/ConfirmBooking/">Book Now</Link>
                    </button>
                </div>
            </li>
          } else {
              return false

          }

        })
    }

        return(
            <div>
                <ul
                  className="Rooms">
                  {listRoom}
                </ul>
            </div>
        )
}

export default Database
