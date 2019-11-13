import React from 'react';

// style sheet import
import './SignUp.scss'; 

const SignUp = () => {
    return ( 
        <div className="signup-container">
            <h1 className="signup-heading">Sign Up</h1>
            <form className="form-container">
                <label className="form-label">Email<br /> 
                    <input type="text" className="form-input"/>
                </label>
                <div className="divider"></div>
                <label className="form-label">Password<br />
                    <input type="password" className="form-input"/>
                </label>
                {/* <div className="under-input">
                    <div className="remember-me-container">
                        <label className="remember-me-label">Remember Me<br />
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </div>
                    <p className="forgot-password"><u>Forgot Password?</u></p>
                </div> */}
                <button className="signup-btn">Register</button>
                <p className="create-an-account"><u>Sign In</u></p>
            </form>
        </div>
     );
}
 
export default SignUp;