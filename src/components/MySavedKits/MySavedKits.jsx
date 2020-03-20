import React, { useState, useEffect } from "react";

// library imports
import { axiosWithAuth } from "../utils/axiosWithAuth";
import jwtDecode from "jwt-decode";

//styling imports
import "./MySavedKits.scss";

const MySavedKits = props => {
  // eslint-disable-next-line
  const [kits, setKits] = useState();
  const subject = jwtDecode(localStorage.getItem("token"));
  const _id = subject.subject;

  useEffect(() => {
    axiosWithAuth()
      .get(`${process.env.REACT_APP_AJAX_URL}/api/kits/${_id}`)
      .then(res => {
        setKits(res.data);
        // console.log(res);
      })
      .catch(err => {
        // console.log(err);
      });
  // eslint-disable-next-line
  }, []);
  return (
    <div className="my-saved-kits-container">
      {/* {kits && kits.map(kit => <Kit kit={kit}/> )} */}
    </div>
  );
};

export default MySavedKits;
