import React, { useState, useEffect } from 'react';

// library imports 
import axios from 'axios'; 
import Loader from 'react-loader-spinner'; 

// style sheet import
import './SignUp.scss'; 
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; 

const SignUp = (props) => {
    // setting initial state with React hooks
    const [ user, setUser ] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        company: '',
    }); 

    // using a hook to handle Loading state
    const [ isLoading, setIsLoading ] = useState(false); 

    // hook to determine success as failure of the request
    const [ messages, setMessages ] = useState({
        success: false,
        failure: false
    })

    // if the user is already logged in, we want to push them back to kit-builder
    useEffect(() => {
        const token = localStorage.getItem('token'); 

        if(token) {
            props.history.push('/design-your-pallet'); 
        }
    }, [])

    // updating the state every time the user adds new information to the fields 
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }); 
    }

    const handleSubmit = (event) => {
        // preventing the page from rerendering onSubmit
        event.preventDefault(); 

        // switching isLoading to true so the loader animation shows up
        setIsLoading(true); 

        // POSTing the new user when the user submits, using either the API url or localhost (for testing) 
        axios.post('http://localhost:5000/api/users', user)
        .then(res => {
            setMessages({
                ...messages,
                success: true,
            })
            localStorage.setItem('token', res.data.token); 
            setTimeout(() => {
                props.history.push('/kit-builder'); 
            }, 3000)
        })
        .catch(err => {
            setTimeout(() => {
                setIsLoading(false)
                setMessages({
                    ...messages,
                    failure: true,
                })
            }, 3000); 
            console.log(err); 
        }); 
    }

    // handling form validation 
    const [touched, setTouched] = useState({
        email: false,
        password: false,
        first_name: false,
        last_name: false,
        company: false
      });
    
      const toggleTouched = e => {
        setTouched({
          ...touched,
          [e.target.name]: true
        });
      };

    return ( 
        <div className="signup-container">
            <h1 className="signup-heading">Sign Up</h1>
            <form className="form-container" onSubmit={handleSubmit} >
                <label className="form-label">Email<br /> 
                    <input type="email" className="form-input" onChange={handleChange} name='email' value={user.email} onBlur={toggleTouched} />
                    {user.email === '' && touched.email === true ? <p className='required-error'>Email is a required field.</p> : null}
                </label>
                <div className="divider"></div>
                <label className="form-label">Password<br />
                    <input type="password" className="form-input" onChange={handleChange} name='password' value={user.password} onBlur={toggleTouched} />
                    {user.password === '' && touched.password === true ? <p className='required-error'>Password is a required field.</p> : null}
                </label>
                <div className="name-container">
                    <label className="form-label">First Name<br />
                        <input type="text" className="form-input" onChange={handleChange} name='first_name' value={user.first_name} />
                    </label>
                    <label className="form-label" id="last-name">Last Name<br />
                        <input type="text" className="form-input" onChange={handleChange} name='last_name' value={user.last_name} />
                    </label>
                </div>
                <label className="form-label">Company<br />
                    <input type="text" className="form-input" onChange={handleChange} name='company' value={user.company} />
                </label>
                {messages.success ? <h2 className="messages messages-success">Account created successfully.  Welcome!</h2> : null }
                {messages.failure ? <h2 className="messages">Credentials invalid.  Please make sure you filled out the form correctly.</h2> : null }
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
                    </button> : <button className="signup-btn" disabled={!user.email || !user.password}>Register</button>}
                <p className="create-an-account" onClick={() => props.history.push('/login')}><u>Sign In</u></p>
            </form>
        </div>
     );
}
 
export default SignUp;