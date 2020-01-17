import React, { useState } from 'react';

// library imports 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 

const KitComplete = (props) => {

    const subject = jwtDecode(localStorage.getItem('token'));  

    const _id = subject.subject;
    const userCompany = subject.company; 
    const userEmail = subject.email; 
    // this is temporary.  Going to use a more elegant solution with state management
    const kitId = localStorage.getItem('kitId'); 
    // const userName = localStorage.getItem('userName'); 
    // const userCompany = localStorage.getItem('userCompany'); 
    // const userEmail = localStorage.getItem('userEmail'); 

    const [ kit, setKit ] = useState({
        kitId: kitId,
        userCompany: userCompany,
        userEmail: userEmail
    })

    const sendForQuote = () => {
        axios.post(`http://localhost:5000/api/quote/${_id}`, kit)
            .then(res => {
                console.log(res); 
            })
            .catch(err => {
                console.log(err); 
            })
    }       

    console.log(kit); 
    console.log(subject); 
    return ( 
        <div className="kit-complete-container">
            <h1>Kit Complete!</h1>
            <p>Would you like to send it in for a quote?</p>
            <p>No</p>
            <button onClick={sendForQuote}>Yes</button>
        </div>
     );
}
 
export default KitComplete;