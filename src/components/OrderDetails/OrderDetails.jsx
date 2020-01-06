import React, { useState } from 'react';

// library imports 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'

//styling and image imports 
import './OrderDetails.scss'

const OrderDetails = (props) => {
    // state handling for the form 
    const [ form, setForm ] = useState({
        monthlyQuantity: '',
        yearlyQuantity: '',
        orderFrequency: '', 
    })

    // change handler for form 
    const changeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const saveAndContinue = () => {
        const subject = jwtDecode(localStorage.getItem('token'));  
        const _id = subject.subject; 

        axios.post(`http://localhost:5000/api/order-details/${_id}`, form)
            .then(res => {
                console.log(res); 
                
                localStorage.removeItem('kitId'); 

                props.history.push('/kit-complete'); 
            })
            .catch(err => {
                console.log(err); 
            })
    }

    console.log(form); 
    return ( 
        <div className="order-details-container">
            <h1 className="design-your-box-heading">
                Step 6 - Order Details
            </h1>
            <div className="line-1" style={{"margin-top": "3rem"}}>
                <div className="length-of-box-container line-2-input">
                    <label htmlFor="monthlyQuantity" className="form-label">Monthly Quantity<br /></label>
                    <input type="number" 
                        className="form-input" 
                        name="monthlyQuantity" 
                        onChange={changeHandler} 
                        value={form.monthlyQuantity} />
                </div>
                <div className="height-of-box-container line-2-input">
                    <label htmlFor="annualQuantity" className="form-label">Annual Quantity<br /></label>
                    <input type="text" 
                        className="form-input" 
                        name="annualQuantity" 
                        onChange={changeHandler} 
                        value={form.annualQuantity} />
                </div>
                <div className="width-of-box-container line-2-input">
                    <label htmlFor="orderFrequency" className="form-label">Order Frequency<br /></label>
                    <input type="text" 
                        className="form-input" 
                        name="orderFrequency" 
                        onChange={changeHandler} 
                        value={form.orderFrequency} />
                </div>
            </div>
            <div className="button-container">
                <button className="next-step" style={{"marginTop": "3rem"}} onClick={saveAndContinue}>Complete Kit</button>
            </div>
        </div>
     );
}
 
export default OrderDetails;