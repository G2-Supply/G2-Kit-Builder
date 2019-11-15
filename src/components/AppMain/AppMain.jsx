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

const AppMain = () => {
    return ( 
        <div className='app-main-background'>
            <Route exact path='/' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/kit-builder' component={KitBuilder} />
            <Route path='/account-recovery' component={ForgotPassword} />
        </div>
     );
}
 
export default AppMain;