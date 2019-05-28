import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import './Database.css'

const Database = (props) => {
  let loggo;
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
          }
          if (rooms.roomType === 'Queen Room') {
            loggo = require('../shared/roomIMG/hotel-room-3652757_1920.jpg');
          }
          if (rooms.roomType === 'Supreme Room') {
            loggo = require('../shared/roomIMG/apartment-1822409_1920.jpg');
          }
          if (props.selectedRoomType === rooms.roomType) {

            return <li className="Room"key={rooms.id}>
            <img src={loggo} alt="Smiley face" height="242" width="342"/>
            <div>{rooms.roomType}
            <button   className="completeBooking">Complete booking
            </button>
            </div>
            </li>
          } else {

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
