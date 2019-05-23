import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


const Database = () => {

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
                console.log(tierList);
            })
            setRoomData(tierList)
        })
    }, []);
    console.log(roomData);

    let listRoom = null;
    if(roomData) {
        listRoom = roomData.map(rooms => {
            return <li key={rooms.id}>{rooms.roomType}</li>
        })
    }


        return(
            <div>
                <ul>{listRoom}</ul>
            </div>
        )

}

export default Database
