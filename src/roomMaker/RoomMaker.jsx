import React from 'react';
import './roomMaker.sass'

import firebase from 'firebase/app';
import 'firebase/firestore';
class RoomMaker extends React.Component{


    handleClickAdd = e => {
        let counter = 8;
        let kingRooms = 3;

        for (let i = 0; i < kingRooms; i++) {
            counter ++;
            console.log('this is counter', counter)
            let obj = {
                    roomType: 'Supreme Room',
                    roomNumber: counter,
                    fromDate: '',
                    toDate: '',
                    availableRoom: true,
                 };
                const collectionRef = firebase.firestore().collection('roomType');
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
