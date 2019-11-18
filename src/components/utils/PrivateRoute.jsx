import React from 'react';
import { Route, Redirect } from 'react-router'; 

// Private Route component created to check if the user is signed in before doing getting to certain routes
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
  
  export default PrivateRoute;