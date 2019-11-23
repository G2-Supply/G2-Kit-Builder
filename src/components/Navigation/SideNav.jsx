import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'; 

// styling/image import
import './SideNav.scss'

const SideNav = (props) => {
    // logic for the hamburger menu
    const handleMenu = () => {

    }
    const token = localStorage.getItem('token'); 

    const signOut = () => {
        localStorage.removeItem('token');
        props.history.push('/login'); 
    }

    const login = () => {
        props.history.push('/login'); 
    }

    return ( 
        <div className="sidenav-wrapper">
            {!token ? <p className="signout" onClick={login}>Login</p> : <p onClick={signOut} className="signout">Sign Out</p>}
            <NavLink className='side-links' activeClassName="active-side-links" to='/design-your-pallet'>Home
                <p className="link-desc">
                    - A tool for customers to build kits.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/saved-kits'>My Saved Kits
                <p className="link-desc">
                    - A list of kits saved by the user for future reference.
                </p>
            </NavLink>
            {token ? <NavLink className='side-links' to='/profile'>Profile
                <p className="link-desc">
                    - A page to edit account information.
                </p>
            </NavLink> : null}
        </div>
    );
}
 
export default withRouter(SideNav);