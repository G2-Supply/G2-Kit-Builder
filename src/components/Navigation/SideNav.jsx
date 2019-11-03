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
            <NavLink className='side-links' to='/box-calculator'>Box Calculator >>
                <p className="link-desc">
                    - An interactive way to determine
                    the square footage of corrugated
                    boxes for pricing purposes.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/saved-boxes'>My Saved Boxes >>
                <p className="link-desc">
                    - A list of vendor and contact info for
                    easy access.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/quote'>Quoting >>
                <p className='link-desc'>
                    - Easily send quotes to your choice of vendors.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/products'>Products >>
                <p className="link-desc">
                    - A searchable list of all of the 
                    products we offer.
                </p>
            </NavLink>
            <NavLink className='side-links' to='/vendor-list'>Vendor List >>
                <p className="link-desc">
                    - A list of vendor and contact info for 
                    easy access.
                </p>
            </NavLink>
        </div>
     );
}
 
export default SideNav;