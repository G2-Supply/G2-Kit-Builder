import React, { useState, useEffect } from 'react';

// library imports 
import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 

//styling imports 
import './MySavedKits.scss'; 

// component imports 
import Kit from '../Kit/Kit'; 

const MySavedKits = (props) => {

    const [ kits, setKits ] = useState()

    const subject = jwtDecode(localStorage.getItem('token'));  

    const _id = subject.subject; 

    useEffect(() => {
        axios.get(`http://localhost:5000/api/kits/${_id}`)
            .then(res => {
                setKits(res.data)
                console.log(res); 
            })
            .catch(err => {
                console.log(err); 
            })

    }, [])
    return ( 
        <div className="my-saved-kits-container">
            {/* {kits && kits.map(kit => <Kit kit={kit}/> )} */}
        </div>
     );
}
 
export default MySavedKits;