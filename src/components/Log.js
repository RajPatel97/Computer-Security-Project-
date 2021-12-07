import React, { useEffect, useState } from 'react'
import db from '../firebase';
import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore";

const Log = () => {
const info = [];
const [logs,setLogs] = useState('');

const initData =()=>{
  const docRef2 = doc(db, "Phone-Number", "EjkMBhVdDePwqzaijoJN");
  const docSnap2 =  getDoc(docRef2).then((doc) => {
    if (doc.exists) {
        let data = doc.data();
        //console.log(data);//making a ref to the data
        setLogs(data);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}

  const printLog =(data)=>{
    for (const property in data) {
      //console.log(`${property}: ${data[property]}`);
      info.push(`${property}: ${data[property]}`)
    }
    info.reverse()
  }

useEffect(()=>{
  initData();
},[])






  return (
  <div className="log">
    <h1>hello this is the log page</h1>
    {printLog(logs)}
    {info.map((items,index)=>{
      return <li key={index}>{items}</li>
    })}
  </div>
  );
}

export default Log;
