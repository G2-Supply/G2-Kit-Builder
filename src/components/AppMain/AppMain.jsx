import React from 'react';

// react router import
import { Route } from 'react-router-dom'; 

// styling import 
import './AppMain.scss'; 

// component imports 
import Login from '../Login/Login'; 
import SignUp from '../SignUp/SignUp'; 
import KitBuilder from '../KitBuilder/KitBuilder'; 
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import PrivateRoute from '../utils/PrivateRoute'; 
import Profile from '../Profile/Profile'; 

const AppMain = () => {
    return ( 
        <div className='app-main-background'>
            {/* universal routes */}
            <Route exact path='/' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/account-recovery' component={ForgotPassword} />
            {/* authenticated routes */}
            <PrivateRoute path='/home' component={KitBuilder} />
            <PrivateRoute path='/profile' component={Profile} />
        </div>
     );
}
 
export default AppMain;