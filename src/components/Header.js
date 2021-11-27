import React from 'react'
import '../assets/css/Header.css'

const Header = () => {
  return (
    <div className = 'header'>
    <h1 className="title">LOG-TEXT</h1>

      <div className="item-wrappers">
        <div className="item">HOME</div>
        <div className="item">LOG</div>
        <div className="item">SETTINGS</div>
      </div>

    </div>
   );
}

export default Header;
