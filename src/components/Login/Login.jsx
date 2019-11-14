import React, { useState } from 'react';

// library imports 
import axios from 'axios'; 
import Loader from 'react-loader-spinner'; 

// style sheet import
import './Login.scss'; 
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; 

const Login = (props) => {
    // setting initial state with React hooks
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    }); 

    // using a hook to handle Loading state
    const [ isLoading, setIsLoading ] = useState(false); 

    // updating the state every time the user adds new information to the fields 
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
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

    const handleSubmit = (event) => {
        // preventing the page from rerendering onSubmit
        event.preventDefault(); 

        // switching isLoading to true so the loader animation shows up 
        setIsLoading(true); 

        // POSTing the new user when the user submits, using either the API url or localhost (for testing) 
        axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                localStorage.setItem(res.data.token); 
                props.history.push('/kit-builder'); 
            })
            .catch(err => {
                setIsLoading(false); 
                console.log(err); 
            }); 
    }

    return ( 
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <form className="form-container" onSubmit={handleSubmit} >
                <label className="form-label">Email<br /> 
                    <input type="text" className="form-input" onChange={handleChange} name='email' value={user.email} onBlur={toggleTouched} />
                    {user.email === '' && touched.email === true ? <p className='required-error'>Email is a required field.</p> : null}
                </label>
                <div className="divider"></div>
                <label className="form-label">Password<br />
                    <input type="password" className="form-input" onChange={handleChange} name='password' value={user.password} onBlur={toggleTouched} />
                    {user.password === '' && touched.password === true ? <p className='required-error'>Password is a required field.</p> : null}
                </label>
                <div className="under-input">
                    <div className="remember-me-container">
                        <label className="remember-me-label">Remember Me
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </div>
                    <p className="forgot-password" onClick={() => props.history.push('/account-recovery')}><u>Forgot Password?</u></p>
                </div>
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
                    </button> : <button className="login-btn" disabled={!user.email || !user.password}>Sign In</button>}
                <p className="create-an-account" onClick={() => props.history.push('/')}><u>Register</u></p>
            </form>
        </div>
     );
}
 
export default Login;