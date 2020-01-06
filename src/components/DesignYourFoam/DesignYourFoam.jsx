import React, { useState } from 'react';

// library imports 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'

// styling and image imports 
import "./DesignYourFoam.scss"; 

const DesignYourFoam = (props) => {
    //state management for the form
    const [ form, setForm ] = useState({
        lengthOfFoam: '',
        widthOfFoam: '',
        heightOfFoam: '',
        material: '',
        color: '',
        density: '',
        lbPerCubicFoot: '',
        dieCut: '',
        drawingAvailable: '',
    })

    // function used to save pallet infgo to the backend
    const saveAndContinue = () => {
        const subject = jwtDecode(localStorage.getItem('token'));  
        const _id = subject.subject; 

        axios.post(`http://localhost:5000/api/foam/${_id}`, form)
            .then(res => {
                console.log(res); 
                props.history.push('/order-details'); 
            })
            .catch(err => {
                console.log(err); 
            })
    }

    // handles form state
    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.taret.name]: e.target.value
        })
    }

    console.log(form); 
    return ( 
        <div className="design-your-box-container">
            <h1 className="design-your-box-heading">
                Step 5 - Design Your Foam
            </h1>
            <div className="button-container skip">
                <button className="next-step" id="skip" onClick={() => props.history.push('/order-details')}>Skip This Step</button>
            </div>
            <div className="line-1" style={{"margin-top": "3rem"}}>
                    <div className="length-of-box-container line-2-input">
                        <label htmlFor="lengthOfFoam" className="form-label">Length of Foam<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="lengthOfFoam" 
                            onChange={changeHandler} 
                            value={form.lengthOfFoam} />
                    </div>
                    <div className="width-of-box-container line-2-input">
                        <label htmlFor="widthOfFoam" className="form-label">Width of Foam<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="widthOfFoam" 
                            onChange={changeHandler} 
                            value={form.widthOfFoam} />
                    </div>
                    <div className="height-of-box-container line-2-input">
                        <label htmlFor="heightOfFoam" className="form-label">Height of Foam<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="heightOfFoam" 
                            onChange={changeHandler} 
                            value={form.heightOfFoam} />
                    </div>
                </div>
        </div>
     );
}
 
export default DesignYourFoam;