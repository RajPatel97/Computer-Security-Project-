import React, { useState } from 'react'
import '../assets/css/PhoneNumber.css'
import db from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 

const PhoneNumber = () => {
    let [value,setValue] = useState('');//used to store the phone number entered


    //updates as input field is being filled,real time
    const handleChange =(e)=>{
        setValue(e.target.value);

    }
    //handling the phone number entered
    const handleSubmit = (e)=>{
        e.preventDefault();//preventing the page from reloading
        console.log(value);
        //add number to database here
        setDoc(doc(db, "Phone-Number", "meTu9WqdUFsj8jHbC7ca"), {
            'Primary Number': "+1"+value
          });

        alert('Number has been added to the database');
    }

    return ( 
        <div className="PN-wrapper">
            <form onSubmit = {handleSubmit}>
            <label className = "lable">
                Enter a Phone Number
                <input onChange = {handleChange} type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default PhoneNumber;