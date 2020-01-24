import React, { useEffect, useState } from 'react';

// library imports 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 
import Loader from 'react-loader-spinner'; 

// styling  imports 
import './StartBuilding.scss'; 

const StartBuilding = (props) => {

    const subject = jwtDecode(localStorage.getItem('token'));  

    const _id = subject.subject; 

    const [ kit, setKit ] = useState({
       id: _id
    }); 

    // using a hook to handle Loading state
    const [ isLoading, setIsLoading ] = useState(false); 

    const getStarted = () => {
        // starting the loader animation.  This is needed because the heroku backend takes several seconds to wake up once it has been inactive for a while
        setIsLoading(true); 

        axios.post(`https://g2-kit-builder.herokuapp.com/api/kits/${_id}` || `http://localhost:5000/api/kits/${_id}`, kit)
        .then(res => {
            // console.log(res); 
            localStorage.setItem('kitId', res.data.kit._id); 
            props.history.push('/design-your-pallet'); 
        })
        .catch(err => {
            // console.log(err); 
        })
    }

    return ( 
        <div className="start-building-container">
            <h1>Welcome to the G2 Kit Builder!</h1>
            {/* <button onClick={getStarted}>Get Started</button> */}
            {isLoading ? 
                    <button className="login-btn">
                        <Loader
                            type="Oval"
                            color="#FFFFFF"
                            height={40}
                            width={40}
                            timeout={10000} //10 secs
                            style={{marginTop: '.2rem'}}
                        />
                    </button> : <button className="login-btn" onClick={getStarted}>Get Started</button>}
        </div>
     );
}
 
export default StartBuilding;