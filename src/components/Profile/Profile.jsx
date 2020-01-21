import React, { useState, useEffect } from 'react';

// library imports 
import axios from 'axios'; 
import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import Loader from 'react-loader-spinner'; 
import jwtDecode from 'jwt-decode'; 

// style sheet import
import './Profile.scss'; 
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

    // using a hook to handle editing state
    const [ editing, setEditing ] = useState(false); 

    // hook to determine success as failure of the request
    const [ messages, setMessages ] = useState({
        success: false,
        failure: false
    })

    // updating the state every time the user adds new information to the fields 
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value 
        }); 
    }

    const token = jwtDecode(localStorage.getItem('token'));

    // makes a GET request on the first render to load all of the initial user information
    useEffect(() => {
        axiosWithAuth().get(`http://localhost:5000/api/users/${token.subject}`)
            .then(res => {
                // console.log(res); 
                setUser(res.data.docs)
            })
            .catch(err => {
                // console.log(err); 
            })
    }, [])

    const handleSubmit = (event) => {
        // preventing the page from rerendering onSubmit
        event.preventDefault(); 

        // switching isLoading to true so the loader animation shows up
        setIsLoading(true);  

        // console.log(subject); 
        // PUTing the updated user when the user submits, using either the API url or localhost (for testing) 
        axiosWithAuth().put(`http://localhost:5000/api/users/${token.subject}`, user)
        .then(res => {
            setMessages({
                ...messages,
                success: true,
            }) 
            setTimeout(() => {
                // props.history.push('/kit-builder'); 
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
            // console.log(err); 
        }); 
    }

    // function to handle setting editing state
    const handleEditing = () => {
        setEditing(!editing); 

        setUser({...user});  
    }

    // funciton to make a PUT request to the API and save the updated user information 

    const saveEdits = () => {
        setEditing(false); 

        axiosWithAuth().put(`http://localhost:5000/api/users/${token.subject}`, user)
            .then(res => {
                // console.log(res); 
            })
            .catch(err => {
                // console.log(err); 
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
    
      const toggleTouched = e => {
        setTouched({
          ...touched,
          [e.target.name]: true
        });
      };


    // console.log(user);   
    // console.log(editing); 
    return ( 
        <div className="signup-container">
            <h1 className="signup-heading">Profile</h1>}
            {editing ? 
                <form className="form-container" onSubmit={handleSubmit} >
                    <div className="name-container">
                        <label className="form-label">First Name<br />
                            <input type="text" className="form-input" onChange={handleChange} name='first_name' value={user.first_name} />
                        </label>
                        <label className="form-label" id="last-name">Last Name<br />
                            <input type="text" className="form-input" onChange={handleChange} name='last_name' value={user.last_name} />
                        </label>
                    </div>
                    <label className="form-label">Email<br /> 
                        <input type="email" className="form-input" onChange={handleChange} name='email' value={user.email} onBlur={toggleTouched} />
                        {user.email === '' && touched.email === true ? <p className='required-error'>Email is a required field.</p> : null}
                    </label>
                    <div className="divider"></div>
                    <label className="form-label">Company<br />
                        <input type="text" className="form-input" onChange={handleChange} name='company' value={user.company} />
                    </label>
                    {/* {messages.success ? <h2 className="messages messages-success">Account edited successfully.</h2> : null }
                    {messages.failure ? <h2 className="messages">There was an error when editing your account.  Please make sure you filled out the form correctly.</h2> : null } */}
                    {/* {isLoading ? 
                        <button className="login-btn">
                            <Loader
                                type="Oval"
                                color="#FFFFFF"
                                height={40}
                                width={40}
                                timeout={10000} //10 secs
                                style={{marginTop: '.2rem'}}
                            />
                        </button> : <button className="signup-btn" onClick={handleEditing}>Edit</button>
                    } disabled={!user.email || !user.password} <-- button attribute */}
                    <div className="profile-btn-container">
                        <button className="signup-btn" onClick={handleEditing}>Cancel</button>
                        <button className="edit-btn" onClick={saveEdits}>Save</button>
                    </div>
                </form>
            : 
                <form className="form-container" onSubmit={handleSubmit} >
                    <div className="name-container">
                        <label className="form-label">First Name<br />
                            <input type="text" className="form-input" name='first_name' value={user.first_name} readOnly="readonly" />
                        </label>
                        <label className="form-label" id="last-name">Last Name<br />
                            <input type="text" className="form-input" name='last_name' value={user.last_name} readOnly="readonly"/>
                        </label>
                    </div>
                    <label className="form-label">Email<br /> 
                        <input type="email" className="form-input" name='email' value={user.email} onBlur={toggleTouched} readOnly="readonly" />
                        {user.email === '' && touched.email === true ? <p className='required-error'>Email is a required field.</p> : null}
                    </label>
                    <div className="divider"></div>
                    <label className="form-label">Company<br />
                        <input type="text" className="form-input" name='company' value={user.company} readOnly="readonly" />
                    </label>
                    {/* {messages.success ? <h2 className="messages messages-success">Account edited successfully.</h2> : null }
                    {messages.failure ? <h2 className="messages">There was an error when editing your account.  Please make sure you filled out the form correctly.</h2> : null } */}
                    {/* {isLoading && editing ? 
                        <button className="login-btn">
                            <Loader
                                type="Oval"
                                color="#FFFFFF"
                                height={40}
                                width={40}
                                timeout={10000} //10 secs
                                style={{marginTop: '.2rem'}}
                            />
                    </button> : <button className="signup-btn" onClick={handleEditing}>Edit</button>
                    } {/* disabled={!user.email || !user.password} */}
                    <div className="profile-btn-container">
                        <button className="signup-btn" onClick={handleEditing}>Edit</button>
                        <button className="edit-btn" onClick={saveEdits}>Save</button>
                    </div>
                </form>}
        </div>
     );
}
 
export default SignUp;