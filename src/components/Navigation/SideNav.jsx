import React from 'react';
import { NavLink } from 'react-router-dom'; 

// styling import
import './SideNav.scss'

const SideNav = (props) => {

    // function signOut() {
    //     localStorage.removeItem('token'); 
    //     props.history.push('/login'); 
    // }
    return ( 
        <div className="sidenav-wrapper">
            <p className="signout">Sign Out</p>
            <NavLink className='side-links' activeClassName="active-side-links" to='/kit-builder'>Kit Builder >>
                <p className="link-desc">
                    - A tool for customers to build kits.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/saved-kits'>My Saved Kits >>
                <p className="link-desc">
                    - A list of kits saved by the user for future reference.
                </p>
            </NavLink>
        </div>
     );
}
 
export default SideNav;