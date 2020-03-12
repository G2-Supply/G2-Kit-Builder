import React, { useState } from 'react';

// library imports 
import axios from 'axios'; 
import jwtDecode from 'jwt-decode'; 
import Loader from 'react-loader-spinner'; 

// styling imports 
import './KitComplete.scss'; 

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

    // using a hook to handle Loading state
    const [ isLoading, setIsLoading ] = useState(false); 

    // hook to determine success as failure of the request
    const [ messages, setMessages ] = useState({
        success: false,
        failure: false
    })

    const sendForQuote = (e) => {
        e.preventDefault(); 

        // switching isLoading to true so the loader animation shows up
        setIsLoading(true); 
        // `http://localhost:5000/api/quote/${_id}` || 
        axios.post(`https://g2-kit-builder.herokuapp.com/api/quote/${_id}`, kit)
            .then(res => {
                // console.log(res)
                setMessages({
                    ...messages,
                    success: true,
                })
                // console.log(res)
                setTimeout(() => {
                    props.history.push('/start-building'); 
                }, 3000); 

            })
            .catch(err => {
                setTimeout(() => {
                    setIsLoading(false)
                    setMessages({
                        ...messages,
                        failure: true,
                    })
                }, 3000); 
            })
    }       

    // console.log(kit); 
    // console.log(subject); 
    return ( 
        <div className="start-building-container">
            <h1>Kit Complete!</h1>
            {messages.success ? <h2 className="messages messages-success">Quote sent successfully!  A representative will contact you soon.</h2> : null }
            {messages.failure ? <h2 className="messages">Quote failed.  Try again later.</h2> : null }
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
                    </button> : <button onClick={sendForQuote}>Send for Quote</button>}
        </div>
     );
}
 
export default KitComplete;