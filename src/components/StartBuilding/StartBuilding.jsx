import React, { useState } from "react";

// library imports
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import axios from 'axios'
import jwtDecode from "jwt-decode";
import Loader from "react-loader-spinner";

// styling  imports
import "./StartBuilding.scss";

const StartBuilding = props => {
  const subject = jwtDecode(localStorage.getItem("token"));

  const _id = subject.subject;
  // eslint-disable-next-line
  const [kit, setKit] = useState({
    id: _id
  });

  // using a hook to handle Loading state
  const [isLoading, setIsLoading] = useState(false);

  const getStarted = () => {
    // starting the loader animation.  This is needed because the heroku backend takes several seconds to wake up once it has been inactive for a while
    setIsLoading(true);
    // console.log(process.env.REACT_APP_AJAX_URL)
    axiosWithAuth()
      .post(`${process.env.REACT_APP_AJAX_URL}/api/kits/${_id}`, kit)
      .then(res => {
        localStorage.setItem("kitId", res.data.kit._id);
        props.history.push("/design-your-pallet");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="start-building-container">
      <h1>Welcome to the G2 Kit Builder!</h1>
      {isLoading ? (
        <button className="login-btn">
          <Loader
            type="Oval"
            color="#FFFFFF"
            height={40}
            width={40}
            // 20 secs - it's only this long for occasions when heroku backend has to "wake up" and it takes significantly longer than normal
            timeout={20000}
            style={{ marginTop: ".2rem" }}
          />
        </button>
      ) : (
        <button className="login-btn" onClick={getStarted}>
          Get Started
        </button>
      )}
    </div>
  );
};

export default StartBuilding;
