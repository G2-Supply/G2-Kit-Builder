import React from 'react';

// library imports 
import { Route } from 'react-router-dom'; 

// component imports 
import DesignYourPallet from '../DesignYourPallet/DesignYourPallet'; 
import DesignYourBox from '../DesignYourBox/DesignYourBox'; 
import DesignYourDivider from '../DesignYourDivider/DesignYourDivider'; 

const KitBuilder = () => {
    
    return ( 
        <>
            <Route path="/design-your-pallet" component={DesignYourPallet} />
            <Route path="/design-your-box" component={DesignYourBox} />
            <Route path="/design-your-divider" component={DesignYourDivider} />
        </>
     );
}; 
 
export default KitBuilder; 