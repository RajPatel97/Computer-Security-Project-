import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import '../assets/css/App.css'
import Header from './Header'
import Home from './Home'
import Log from './Log';
import PhoneNumber from './PhoneNumber'
import Settings from './Settings';
import test from '../write';
import db from '../firebase';
//import { collection, getDocs,doc } from "firebase/firestore"; 
import { doc, getDoc, setDoc,updateDoc } from "firebase/firestore";


function App() {

  const docRef = doc(db, "Phone-Number", "meTu9WqdUFsj8jHbC7ca");
  const docSnap =  getDoc(docRef).then((doc) => {
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

  //logDateTime();


  return (
    <Router>
    <div>
      {test()}
        {/* adding "exact to this tag will result in start up bug  " */}
        <Route  path = "/">
        {window.location.pathname.includes('index.html') && <Redirect exact to="/" />}
        <Header/>
          <Home/>
          <PhoneNumber/>
        </Route>

        <Route exact path = '/Log'>
        {/* this is how to detect a path is electron ... i think */}
        {window.location.pathname.includes('index.html') && <Redirect to="/Log" />}
        <Log/>
        </Route>


        <Route exact path = "/Settings">
        {window.location.pathname.includes('index.html') && <Redirect to="/Settings" />}
          <Settings/>
        </Route>



    </div>
    </Router>
  )
}

export default App
