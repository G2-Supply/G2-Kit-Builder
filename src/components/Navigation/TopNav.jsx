import React from 'react';

// React Router import
import { NavLink } from 'react-router-dom'; 

// styling imports
import './TopNav.scss'; 

const TopNav = () => {
    return ( 
        <div className="topnav-wrapper">
            <NavLink className="topnav-links" to="/home">Home</NavLink>
            <NavLink className="topnav-links" to="www.g2supply.com">Customer Site</NavLink>
        </div>
     );
}
 
export default TopNav;