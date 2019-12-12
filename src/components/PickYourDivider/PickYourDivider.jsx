import React, { useState } from 'react'

// component imports 
import UniversalForm from '../FormComponents/UniversalForm/UniversalForm';

const PickYourDivider = () => {
    // state that is handling the forms 
    const [ form, setForm ] = useState(); 

    return ( 
        <div className="pick-your-divider-container">
            <h1 className="pick-your-divider-header">Step 4 - Pick Your Divider</h1>
            <div className="button-container skip">
                <button className="next-step" id="skip">Skip This Step</button>
            </div>
            <UniversalForm />
        </div>
     );
}
 
export default PickYourDivider;