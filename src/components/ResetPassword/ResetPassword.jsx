import React, { useState, useEffect } from 'react';

// library imports
import axios from 'axios'; 

// stylesheet imports 
import './ResetPassword.scss'; 

const ResetPassword = (props) => {
    const [ state, setState ] = useState({
        username: '',
        password: '', 
        confirmPassword: '',
        update: false, 
        isLoading: true,
        error: false
    }); 

    const [ isLoading, setIsLoading ] = useState(false); 

    useEffect(() => {
        // console.log(props.match.params.token); 
        axios.get('http://localhost:3000/reset', {
            params: {
                resetPasswordToken: props.match.params.token,
            }
        })
        .then(response => {
            // console.log(response); 
            if(response.data.message === 'password reset link a-ok') {
                setState({
                    username: response.data.username,
                    update: false,
                    isLoading: false,
                    error: false,
                });
            } else {
                setState({
                    update: false,
                    isLoading: false,
                    error: true,
                })
            }
        }) 
    }) 

    const handleChange = e => {
        setState({
            [e.target.name]: e.target.value,
        })
    }

    updatePassword = e => {
        e.preventDefault(); 

        axios.put('http://localhost:3000/updatepasswordViaEmail', {
            username: this.state.username,
            password: this.state.password,
        })
        .then(response => {
            // console.log(response.data); 
            if(response.data.message === 'password updated') {
                setState({
                    update: true,
                    error: false,
                })
            } else {
                setState({
                    updated: false,
                    error: true,
                })
            }
        })
    }

    // handling form validation 
    const [touched, setTouched] = useState({
        email: false,
        password: false,
        first_name: false,
        last_name: false,
        company: false
    });

    return ( 
        <div className="reset-password-container">
            {state.error ? 
            <h4>Problem resetting password.  Please <u onClick={() => props.history.push('/account-recovery')}>send another reset link.</u></h4> : null}
            {state.isLoading ? 
            <div>
                <h4>Loading User Data...</h4>
            </div> : 
            <form>
                <label className="form-label">Password<br /> 
                    <input type="text" className="form-input" onChange={handleChange} name='password' value={state.email} onBlur={toggleTouched} />
                    {state.password === '' && touched.password === true ? <p className='required-error'>Password is a required field.</p> : null}
                </label>
            </form>}
            {state.updated && (
                <div>
                    <p>Your password has been successfully reset.  Please <u onClick={() => props.history.push('/login')}>log in</u></p>
                </div>
            )}} 
        </div>
     );
}
 
export default ResetPassword;