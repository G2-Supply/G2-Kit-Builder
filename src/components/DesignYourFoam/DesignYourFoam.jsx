import React, { useState } from "react";

// library imports
import { axiosWithAuth } from "../../components/utils/axiosWithAuth";
import jwtDecode from "jwt-decode";

// styling and image imports
import "./DesignYourFoam.scss";
import Model from "../../assets/images/foam.png";

const DesignYourFoam = props => {
  //state management for the form
  const [form, setForm] = useState({
    kitId: localStorage.getItem("kitId"),
    lengthOfFoam: "",
    widthOfFoam: "",
    heightOfFoam: "",
    material: "",
    color: "",
    density: "",
    lbPerCubicFoot: "",
    dieCut: "",
    drawingAvailable: ""
  });

  // function used to save pallet infgo to the backend
  const saveAndContinue = () => {
    const subject = jwtDecode(localStorage.getItem("token"));
    const _id = subject.subject;

    axiosWithAuth()
      .post(`${process.env.REACT_APP_AJAX_URL}/api/foam/${_id}`, form)
      .then(res => {
        // console.log(res);
        props.history.push("/order-details");
      })
      .catch(err => {
        // console.log(err);
      });
  };

  // handles form state
  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="design-your-box-container">
      <h1 className="design-your-box-heading">Step 5 - Design Your Foam</h1>
      <div className="line-1" style={{ marginTop: "3rem" }}>
        <div className="length-of-box-container line-2-input">
          <label htmlFor="lengthOfFoam" className="form-label">
            Length of Foam
            <br />
          </label>
          <input
            type="text"
            className="form-input"
            name="lengthOfFoam"
            onChange={changeHandler}
            value={form.lengthOfFoam}
          />
        </div>
        <div className="width-of-box-container line-2-input">
          <label htmlFor="widthOfFoam" className="form-label">
            Width of Foam
            <br />
          </label>
          <input
            type="text"
            className="form-input"
            name="widthOfFoam"
            onChange={changeHandler}
            value={form.widthOfFoam}
          />
        </div>
        <div className="height-of-box-container line-2-input">
          <label htmlFor="heightOfFoam" className="form-label">
            Height of Foam
            <br />
          </label>
          <input
            type="text"
            className="form-input"
            name="heightOfFoam"
            onChange={changeHandler}
            value={form.heightOfFoam}
          />
        </div>
      </div>
      <div className="line-1" style={{ marginTop: "3rem" }}>
        <div className="material-container line-2-input">
          <label htmlFor="material" className="form-label">
            Foam Material
            <br />
          </label>
          <select
            className="form-input"
            name="material"
            onChange={changeHandler}
            value={form.material}
          >
            <option value="Select an option">Select an option</option>
            <option value="EPE">EPE</option>
            <option value="EPP">EPP</option>
            <option value="Crosslink">Crosslink</option>
            <option value="PE">PE</option>
            <option value="HDPE">HDPE</option>
          </select>
        </div>
        <div className="color-container line-2-input">
          <label htmlFor="color" className="form-label">
            Foam Color
            <br />
          </label>
          <select
            className="form-input"
            name="color"
            onChange={changeHandler}
            value={form.color}
          >
            <option>Select an option</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Gray">Gray</option>
          </select>
        </div>
        <div className="line-2-input">
          <label htmlFor="density" className="form-label">
            Foam Density
            <br />
          </label>
          <input
            type="text"
            className="form-input"
            name="density"
            onChange={changeHandler}
            value={form.density}
          />
        </div>
      </div>
      <div className="line-1" style={{ marginTop: "3rem" }}>
        <div className="lbPerCubicFoot-container line-2-input">
          <label htmlFor="lbPerCubicFoot" className="form-label">
            Lbs per Cubic Foot
            <br />
          </label>
          <input
            type="text"
            className="form-input"
            name="lbPerCubicFoot"
            onChange={changeHandler}
            value={form.lbPerCubicFoot}
          />
        </div>
        <div className="dieCut-container line-2-input">
          <label htmlFor="dieCut" className="form-label">
            Die Cut?
            <br />
          </label>
          <select
            name="dieCut"
            className="form-input"
            onChange={changeHandler}
            value={form.dieCut}
          >
            <option>Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="line-2-input">
          <label htmlFor="drawingAvailable" className="form-label">
            Drawing Available?
            <br />
          </label>
          <select
            name="drawingAvailable"
            className="form-input"
            onChange={changeHandler}
            value={form.drawingAvailable}
          >
            <option>Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <img
        src={Model}
        style={{
          width: "40%",
          margin: "3rem auto",
          textAlign: "center",
          display: "block"
        }}
        alt="3d model of the pallet being created"
      />
      <div className="button-container">
        <button className="next-step" onClick={saveAndContinue}>
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default DesignYourFoam;
