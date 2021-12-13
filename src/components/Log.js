import React, { useEffect, useState } from 'react'
import db from '../firebase';
import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore";
import '../assets/css/Log.css'

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
      info.push(`${data[property]}`)
    }
    info.sort()
  }

useEffect(()=>{
  initData();
},[])



  return (
  <div className="log">
    <h1>Logs: </h1>
    {printLog(logs)}
    {info.map((items,index)=>{
      return <li className='log-item' key={index}>{items}</li>
    })}
  </div>
  );
}

export default Log;
