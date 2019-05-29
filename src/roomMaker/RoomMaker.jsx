import React from 'react';
import './roomMaker.sass'

import firebase from 'firebase/app';
import 'firebase/firestore';
class RoomMaker extends React.Component{


    handleClickAdd = e => {
        let counter = 9;
        let roomsToAdd = 1;

        for (let i = 0; i < roomsToAdd; i++) {
            counter ++;
            console.log('this is counter', counter)
            let obj = {
                    roomType: 'King Room',
                    roomNumber: counter,
                    fromDate: '',
                    toDate: '',
                    availableRoom: true,
                    Balcony: 'No',
                    Oceanview: 'No',
                    FreeMinibar: 'Yes',
                    FreeRoomService: 'Yes',
                    bookings: [
                      { fromDate: '2019-05-03', toDate: '2019-05-10'},
                      { fromDate: '2019-05-10', toDate: '2019-05-17'},
                      { fromDate: '2019-05-20', toDate: '2019-05-22'},
                    ]
                 };
                const collectionRef = firebase.firestore().collection('HotelRooms');
                collectionRef.add(obj)
                .then(() => {

                    })
                    .catch(error => {

                        })
        }
    }

    render(){
        return(
            <div className="makerOfTheRoom">

                <button onClick={this.handleClickAdd}>Lägg till</button>

            </div>
        )
    }
}
export default RoomMaker
