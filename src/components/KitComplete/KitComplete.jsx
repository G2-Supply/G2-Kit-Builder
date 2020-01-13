import React, { useState } from 'react';

// library imports 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 

const KitComplete = (props) => {

    const subject = jwtDecode(localStorage.getItem('token'));  

    const _id = subject.subject;
    const kitId = localStorage.getItem('kitId'); 
    const [ kit, setKit ] = useState({
        kitId: kitId,
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