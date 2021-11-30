import React from 'react'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className = 'header'>
    <h1 className="title">LOG-TEXT</h1>

      <div className="item-wrappers">
        <Link to = "/">
          <div className="item">HOME</div>
        </Link>

        <Link to = "/Log">
          <div className="item">LOG</div>
        </Link>

        <Link to = "/Settings">
          <div className="item">SETTINGS</div>
        </Link>

      </div>

    </div>
   );
}

export default Header;
