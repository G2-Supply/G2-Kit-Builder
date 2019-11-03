import React from 'react';

// styling/resources imports 
import './TopBar.scss'; 
import Logo from './temp-logo.jpg'; 
// 'public/res/temp-logo.jpg'

const TopBar = () => {

    return ( 
        <div className="topbar-wrapper">
            <img className='g2-logo' src={Logo} alt="G2 supply logo"/>
            <h1 className="app-title">Customer Representative Suite</h1>
        </div>
     );
}
 
export default TopBar;