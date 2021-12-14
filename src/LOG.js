import db from './firebase';
import { doc, updateDoc } from "firebase/firestore";


const docRef2 = doc(db, "Phone-Number", "EjkMBhVdDePwqzaijoJN");//ref to log in collection

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const logDateTime = () =>{
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = 'DATE: '+date+' TIME: '+time;
  let key = getRandomIntInclusive(100000,99999999);//creating random key for database field

  let docData  = {//this is how to make a variable the key in an object []
    [key]:dateTime
  }
  updateDoc(docRef2,docData);//changes the value and field with dataDoc
}

 export default logDateTime;
