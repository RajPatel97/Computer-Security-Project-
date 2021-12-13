import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import '../assets/css/App.css'
import Header from './Header'
import Home from './Home'
import Log from './Log';
import PhoneNumber from './PhoneNumber'
import Settings from './Settings';
import test from '../write';


function App() {

  return (
    <Router>
    <div>
      {test()}
        {/* adding "exact to this tag will result in start up bug  " */}
        <Route  path = "/">
        {window.location.pathname.includes('index.html') && <Redirect exact to="/" />}
        <Header/>
          <Home/>
        </Route>

        <Route exact path = '/Log'>
        {/* this is how to detect a path is electron ... i think */}
        {window.location.pathname.includes('index.html') && <Redirect to="/Log" />}
        <Log/>
        </Route>


        <Route exact path = "/Settings">
        {window.location.pathname.includes('index.html') && <Redirect to="/Settings" />}
          <Settings/>
          <PhoneNumber/>
        </Route>



    </div>
    </Router>
  )
}

export default App
