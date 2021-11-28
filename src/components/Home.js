import React, { useEffect } from 'react'
import '../assets/css/Home.css'

//in this component:
//text will be sent to primary number
//log in time and day will be added to the database
//will be asked for 2 factor authentication if it is enabled in the settings 
 
const Home = () => {

    useEffect(()=>{
        //call a function that will fire a text to a number. this function will only run on first render of the application
    },[])

    return ( 
        <div className="home">
            <h1 className ="home-title">Alert Has Been Sent!</h1>
        </div>
     );
}
 
export default Home;