import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import '../assets/css/App.css'
import Header from './Header'
import Home from './Home'
import Log from './Log';
import PhoneNumber from './PhoneNumber'
import Settings from './Settings';


function App() {
  return (
    <Router>
    <div>


        <Route exact path = "/">
        {window.location.pathname.includes('index.html') && <Redirect exact to="/" />}
        <Header/>
          <Home/>
          <PhoneNumber/>
        </Route>

        <Route path = '/Log'>
        {/* this is how to detect a path is electron ... i think */}
        {window.location.pathname.includes('index.html') && <Redirect to="/Log" />}
        <Header/>
        <Log/>
        </Route>


        <Route  path = "/Settings">
        {window.location.pathname.includes('index.html') && <Redirect to="/Settings" />}
        <Header/>
          <Settings/>
        </Route>



    </div>
    </Router>
  )
}

export default App
