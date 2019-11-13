import React from 'react';

// style sheet import
import './Login.scss'; 

const Login = () => {
    return ( 
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <form className="form-container">
                <label className="form-label">Email<br /> 
                    <input type="text" className="form-input"/>
                </label>
                <div className="divider"></div>
                <label className="form-label">Password<br />
                    <input type="password" className="form-input"/>
                </label>
                <div className="under-input">
                    <div className="remember-me-container">
                        <label className="remember-me-label">Remember Me<br />
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </div>
                    <p className="forgot-password"><u>Forgot Password?</u></p>
                </div>
                <button className="login-btn">Login</button>
                <p className="create-an-account"><u>Create An Account</u></p>
            </form>
        </div>
     );
}
 
export default Login;