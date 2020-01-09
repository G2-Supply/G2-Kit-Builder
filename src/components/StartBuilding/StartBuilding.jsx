import React, { useEffect, useState } from 'react';

// library imports 
import axios from 'axios'; 

const StartBuilding = (props) => {

    const [ kit, setKit ] = useState({
       palletId: '',
        
    }); 

    useEffect(() => {
        axios.post('http://localhost:5000/api/kits', kit)
            .then(res => {
                console.log(res); 
            })
            .catch(err => {
                console.log(err); 
            })
    }, [])

    return ( 
        <div className="start-building-container">
            Start building
        </div>
     );
}
 
export default StartBuilding;