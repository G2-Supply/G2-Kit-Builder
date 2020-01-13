import React, { useEffect, useState } from 'react';

// library imports 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 

const StartBuilding = (props) => {

    const subject = jwtDecode(localStorage.getItem('token'));  

    const _id = subject.subject; 
    console.log('test'); 
    const [ kit, setKit ] = useState({
       id: _id
    }); 

    const getStarted = () => {
        console.log(kit); 
        console.log(_id); 
        axios.post(`http://localhost:5000/api/kits/${_id}`, kit)
        .then(res => {
            console.log(res); 
            localStorage.setItem('kitId', res.data.kit._id); 
            props.history.push('/design-your-pallet'); 
        })
        .catch(err => {
            console.log(err); 
        })
    }

    return ( 
        <div className="start-building-container">
            <h1>Welcome to the G2 Kit Builder</h1>
            <button onClick={getStarted}>Get Started</button>
        </div>
     );
}
 
export default StartBuilding;