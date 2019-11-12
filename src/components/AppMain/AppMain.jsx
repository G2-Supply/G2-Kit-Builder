import React from 'react';

// react router import
import { Route } from 'react-router-dom'; 

// styling import 
import './AppMain.scss'; 

// component imports 
import KitBuilder from '../KitBuilder/KitBuilder'; 

const AppMain = () => {
    return ( 
        <div className="app-main-background">
            <Route path='/kit-builder' component={KitBuilder}>Kit Builder</Route>
            {/* <Route path='/box-calculator' component={BoxCalculator} />
            <Route path='/saved-boxes' component={SavedBoxes} />
            <Route path='/products' component={Products} />
            <Route path='/vendor-list' component={VendorList} />
            <Route path='/quote' component={Quoting} /> */}
        </div>
     );
}
 
export default AppMain;