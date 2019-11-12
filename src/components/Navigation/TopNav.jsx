import React from 'react';

// React Router import
import { NavLink } from 'react-router-dom'; 

// styling and images imports
import './TopNav.scss'; 
import Settings from '../../assets/icons/settings.svg'; 

const TopNav = () => {
    return ( 
        <div className="topnav-wrapper">
            <NavLink className="topnav-links" to="/home">Home</NavLink>
            <NavLink className="topnav-links" to="www.g2supply.com">Website</NavLink>
            <NavLink className="topnav-links" to="/settings">Settings</NavLink>
        </div>
     );
}
 
export default TopNav;