import React, { useEffect, useState } from 'react'
import '../assets/css/Home.css'
import logDateTime from '../LOG';
import sendText from '../SMS'
import db from '../firebase';
import { doc, getDoc} from "firebase/firestore";
import { WebcamCapture } from './WebcamCapture';

//in this component:
//text will be sent to primary number
//log in time and day will be added to the database
//will be asked for 2 factor authentication if it is enabled in the settings
let number;

const Home = () => {
    // const docRef = doc(db, "Phone-Number", "meTu9WqdUFsj8jHbC7ca");//this is grabbing the phone number from the database
    // const docSnap =  getDoc(docRef).then((doc) => {
    //     if (doc.exists) {
    //         let data = doc.data();
    //         //console.log(data['Primary Number']);//making a ref to the data
    //         number = data['Primary Number']
    //     } else {
    //      // doc.data() will be undefined in this case
    //      console.log("No such document!");
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });



    useEffect(()=>{

        const docRef = doc(db, "Phone-Number", "meTu9WqdUFsj8jHbC7ca");//this is grabbing the phone number from the database
        const docSnap =  getDoc(docRef).then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            //console.log(data['Primary Number']);//making a ref to the data
            //sendText(data['Primary Number']);//uncomment this to enable sending messages
        } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        //retrieve primary number from the database and then fire the text at the number
        //then log the time and data to the log.. do this by calling (and creating) the LOG.js file and the primary function. the data and time will be retrieved in the file
        logDateTime();
        // sendText(number);


    },[]);

    return (
        <div className="home">
            <h1 className ="home-title">Alert Has Been Sent!</h1>
            {/* <WebcamCapture/> */}
            {/* Webcam capture // uncomment to enable */}
        </div>
     );
}

export default Home;
