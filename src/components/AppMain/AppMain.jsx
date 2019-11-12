import React from 'react';

// react router import
import { Route } from 'react-router-dom'; 

// styling import 
import './AppMain.scss'; 

// component imports 
import Login from '../Login/Login'; 
import SignUp from '../SignUp/SignUp'; 
import KitBuilder from '../KitBuilder/KitBuilder'; 

const AppMain = () => {
    return ( 
        <div className="app-main-background">
            <Route exact path="/" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path='/kit-builder' component={KitBuilder} />
            {/* <Route path='/box-calculator' component={BoxCalculator} />
            <Route path='/saved-boxes' component={SavedBoxes} />
            <Route path='/products' component={Products} />
            <Route path='/vendor-list' component={VendorList} />
            <Route path='/quote' component={Quoting} /> */}
        </div>
     );
}
 
export default AppMain;