import React from 'react'
import db from '../firebase';
import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore";

const Log = () => {

  const docRef2 = doc(db, "Phone-Number", "EjkMBhVdDePwqzaijoJN");
  const docSnap2 =  getDoc(docRef2).then((doc) => {
    if (doc.exists) {
        let data = doc.data();
        console.log(data);//making a ref to the data
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });


  return (
  <div className="log">
    <h1>hello this is the log page</h1>
  </div>
  );
}

export default Log;
