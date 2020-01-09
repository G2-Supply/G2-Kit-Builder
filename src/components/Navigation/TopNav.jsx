import React from 'react';

// React Router import
import { NavLink } from 'react-router-dom'; 

// styling and images imports
import './TopNav.scss'; 
import Settings from '../../assets/icons/settings.svg'; 

const TopNav = () => {


    return ( 
        <div className="topnav-wrapper">
            <NavLink className="topnav-links" to="/design-your-pallet">Home</NavLink>
            <a className="topnav-links" href="https://www.g2supply.com">Website</a>
            <NavLink className="topnav-links" to="/profile">Profile</NavLink>
        </div>
     );
}
 
export default TopNav;