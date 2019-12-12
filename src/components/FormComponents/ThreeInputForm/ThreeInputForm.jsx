import React from 'react';
 
const ThreeInputForm = (props) => {
    return (  
        <div className="three-input-form-container">
            <label htmlFor=""></label>
            <input type="text" className="form-input"/>
            <label htmlFor=""></label>
            <input type="text" className="form-input"/>
            <label htmlFor=""></label>
            <input type="text" className="form-input"/>
        </div>
     );
}
export default ThreeInputForm;