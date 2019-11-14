import React, { useState } from 'react';

// library imports
import axios from 'axios';
import Loader from 'react-loader-spinner'; 

// stylesheet imports 
import './ForgotPassword.scss'; 
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; 

const ForgotPassword = (props) => {
    const [ state, setState ] = useState({
        email: '',
        showError: false,
        messageFromServer: '',
    })

    const handleChange = e => {
        // form handling
        setState({
            [e.target.name]: e.target.value,
        })
    }

    const [ isLoading, setIsLoading ] = useState(false); 

    const sendEmail = e => {
        // preventing rerender on submit
        e.preventDefault(); 

        if(state.email === '') {
            setState({
                showError: false,
                messageFromServer: '',
            })
        } else {
            axios.post('http://localhost:5000/api/users/forgot-password', {
                email: state.email,
            })
                .then(response => {
                    console.log(response.data); 
                    if(response.data === 'This email is not associated with an account.') {
                        setState({
                            showError: true,
                            messageFromServer: '',
                        }); 
                    } else if (response.data === 'Recovery email sent.') {
                        setState({
                            showError: false,
                            messageFromServer: 'Recovery email sent.',
                        }); 
                    }
                })
                .catch(err => {
                    console.log(err); 
                })
        }
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
        <>
            <h1 className="login-heading">Account Recovery</h1>
            <form onSubmit={sendEmail}>
                <label className="form-label">Email<br /> 
                    <input type="text" className="form-input" onChange={handleChange} name='email' value={state.email} onBlur={toggleTouched} />
                    {state.email === '' && touched.email === true ? <p className='required-error'>Email is a required field.</p> : null}
                </label>
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
                    </button> : <button className="login-btn" disabled={!state.email}>Send Recovery Email</button>}
            </form>
            {state.showError && (
                <div>
                    <p>
                        That email address isn't associated with an account.  Please check for typos, or <u onClick={() => props.history.push('/')}>register for a new account.</u>
                    </p>
                </div>
            )}
            {state.messageFromServer === 'Recovery email sent.' && (
                <div>
                    <h3>Password Reset Email Successfully Sent!</h3>
                </div>
            )}
        </>
     );
}
 
export default ForgotPassword;