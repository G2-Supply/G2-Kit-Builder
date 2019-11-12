import React from 'react';

const Login = () => {
    return ( 
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <form className="form-container">
                <label className="form-label">Email
                    <input type="text" className="form-input"/>
                </label>
                <label className="form-label">Password
                    <input type="password" className="form-input"/>
                </label>
                <div className="under-input">
                    <div className="remember-me-container">
                        <label className="remember-me-label">Remember Me
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