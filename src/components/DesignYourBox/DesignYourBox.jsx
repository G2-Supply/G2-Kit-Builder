import React, { useState } from 'react';

// library imports 
import jwtDecode from 'jwt-decode'; 
import axios from 'axios'; 


// stylesheet imports
import './DesignYourBox.scss';

// image imports 
import RSC from '../../assets/images/rsc.jpg'
import HSC from '../../assets/images/hsc.jpg'
import Tray from '../../assets/images/tray.jpg'
import FivePanel from '../../assets/images/5-panel-folder.png'
import FOL from '../../assets/images/FOL.jpg'
import Die from '../../assets/images/die.jpg'
import Shroud from '../../assets/images/shroud.png'
// import RSC from '../../assets/images/rsc.jpg'

// component imports 
// import UniversalForm from '../FormComponents/UniversalForm/UniversalForm';

const DesignYourBox = (props) => {
    // handling form state 
    const [ form, setForm ] = useState({
        kitId: localStorage.getItem('kitId'),
        styleOfBox: '',
        lengthOfBox: '',
        widthOfBox: '',
        heightOfBox: '',
        boardGrade: '',
        boxSpecialNotes: '',
    }); 
    
    const changeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    // function used to save pallet infgo to the backend
    const saveAndContinue = () => {
        const subject = jwtDecode(localStorage.getItem('token'));  
        const _id = subject.subject; 

        axios.post(`https://g2-kit-builder.herokuapp.com/api/boxes/${_id}` || `http://localhost:5000/api/boxes/${_id}`, form)
            .then(res => {
                // console.log(res); 
                props.history.push('/design-your-box-lid'); 
            })
            .catch(err => {
                // console.log(err); 
            })
    }


    console.log('re-render testing', form); 

    return ( 
        <div className="design-your-box-container">
            <h1 className="design-your-box-heading">
                Step 2 - Design Your Box
            </h1>
            {/* <div className="button-container skip">
                <button className="next-step" id="skip" onClick={() => props.history.push('/design-your-box-lid')}>Skip This Step</button>
            </div> */}
            <div className="line-1">
                <div className="style-of-box-container line-1-input">
                    <label htmlFor="styleOfBox" className="form-label">Style of Box<br /></label>
                    <select  
                        list="styleOfBox"
                        className="form-input" 
                        name="styleOfBox" 
                        onChange={changeHandler} 
                        value={form.styleOfBox}>
                        <option value="Select an option">Select an option</option>
                        <option value="RSC">RSC</option>
                        <option value="HSC">HSC</option>
                        <option value="Tray">Tray</option>
                        <option value="HSC Top/Flange Bottom">HSC Top/Flange Bottom</option>
                        <option value="5 Panel Folder">5 Panel Folder</option>
                        <option value="FOL">FOL</option>
                        <option value="Shroud">Shroud</option>
                        <option value="Die Cut">Die Cut</option>
                    </select>
                </div>
                <div className="board-grade-container line-1-input">
                    <label htmlFor="boardGrade" className="form-label">Board Grade<br /></label>
                    <select 
                        list="boardGrade" 
                        className="form-input" 
                        name="boardGrade" 
                        onChange={changeHandler} 
                        value={form.boardGrade}>
                        <option value="Select an option">Select an option</option>
                        <option value="32C (single wall)">32C (single wall)</option>
                        <option value="200C (single wall)">200C (single wall)</option>
                        <option value="44C (single wall)">44C (single wall)</option>
                        <option value="48BC (double wall)">48BC (double wall)</option>
                        <option value="350BC (double wall)">350BC (double wall)</option>
                    </select>
                </div>
            </div>
            <div className="line-1" style={{"marginTop": "0"}}>
                <div className="length-of-box-container line-2-input">
                    <label htmlFor="lengthOfBox" className="form-label">Length of Box<br /></label>
                    <input type="text" 
                        className="form-input" 
                        name="lengthOfBox" 
                        onChange={changeHandler} 
                        value={form.lengthOfBox} />
                </div>
                <div className="width-of-box-container line-2-input">
                    <label htmlFor="widthOfBox" className="form-label">Width of Box<br /></label>
                    <input type="text" 
                        className="form-input" 
                        name="widthOfBox" 
                        onChange={changeHandler} 
                        value={form.widthOfBox} />
                </div>
                <div className="height-of-box-container line-2-input">
                    <label htmlFor="heightOfBox" className="form-label">Height of Box<br /></label>
                    <input type="text" 
                        className="form-input" 
                        name="heightOfBox" 
                        onChange={changeHandler} 
                        value={form.heightOfBox} />
                </div>
            </div>
            {/* <div className="line-1">
                <div className="qty-of-order-container line-2-input">
                    <label htmlFor="qtyOfOrder" className="form-label">Qty. of Order<br /></label>
                    <input type="text" 
                        list="qtyOfOrder"
                        className="form-input" 
                        name="qtyOfOrder" 
                        onChange={changeHandler} 
                        value={form.qtyOfOrder} />
                </div>
                <div className="order-frequency-container line-2-input">
                    <label htmlFor="orderFrequency" className="form-label">Order Frequency<br /></label>
                    <input type="text" list="orderFrequency" className="form-input" name="orderFrequency" value={form.orderFrequency} onChange={changeHandler}/>
                        name="orderFrequency"
                        id="orderFrequency" 
                        onChange={changeHandler} 
                        value={form.orderFrequency}>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </datalist>
                </div>
                <div className="part-of-kit-container line-2-input">
                    <label htmlFor="partOfKit" className="form-label">Part of a Kit?</label>
                    <select name="partOfKit" id="partOfKit" className="form-input">
                        <option>Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div> */}
            <div className="line-1">
                <div className="joint-construction-container line-2-input">
                    <label htmlFor="jointConstruction" className="form-label">Joint Construction<br /></label>
                    <select
                        list="jointConstruction"
                        className="form-input" 
                        name="jointConstruction" 
                        onChange={changeHandler} 
                        value={form.jointConstruction} >
                        <option>Select an option</option>
                        <option value="Glued">Glued</option>
                        <option value="Flat">Flat</option>
                        <option value="Stapled">Stapled</option>
                    </select>
                </div>
                <div className="print-container line-2-input">
                    <label htmlFor="print" className="form-label">Print<br /></label>
                     <select 
                        onChange={changeHandler} 
                        name="print" 
                        value={form.print}
                        className="form-input" 
                        id="print" 
                        placeholder="Choose option or input custom print">
                            <option value="Standard Part Number + BMC">Standard Part Number + BMC</option>
                            <option value="Custom Print">Custom Print</option>
                    </select>
                </div>
                <div className="location-of-print-container line-2-input">
                    <label htmlFor="locationOfPrint" className="form-label">Location of Print</label>
                    <select name="locationOfPrint" id="locationOfPrint" className="form-input" value={form.locationOfPrint} onChange={changeHandler}>
                        <option>Select an option</option>
                        <option value="N/A">N/A</option>
                        <option value="Side">Side</option>
                        <option value="End">End</option>
                        <option value="Bottom">Bottom</option>
                    </select>
                </div>
            </div>
            <div className="bottom-container">
                <div className="line-3-line-4-container">
                    {/* <div className="upload-container">
                        <label htmlFor="upload" className="form-label">Upload a File<br /></label>
                        <input type="file" className="form-input" id="upload" />
                    </div> */} 
                    <div className="special-notes-container"> <label htmlFor="box-special-notes" className="form-label">Special Notes for Box<br /></label> <textarea name="boxSpecialNotes" className="form-input" 
                            id="box-special-notes" cols="30" 
                            rows="10" 
                            onChange={changeHandler} 
                            value={form.boxSpecialNotes}
                            placeholder="Add any additional information.">
                        </textarea>
                    </div>

                </div>
            </div>
            {/* <UniversalForm /> */}
            {form.styleOfBox === "RSC" ? <img src={RSC} alt="RSC Box" style={{"display": "block", "margin": "0 auto", "textAlign": "center"}}style={{"display": "block", "margin": "0 auto", "textAlign": "center"}}/> :  
            form.styleOfBox === "HSC" ? <img src={HSC} alt="HSC Box" style={{"display": "block", "margin": "0 auto", "textAlign": "center"}} /> : 
            form.styleOfBox === "Tray" ? <img src={Tray} alt="Tray" style={{"display": "block", "margin": "3rem auto", "textAlign": "center", "width": "60%"}} /> : 
            form.styleOfBox === "5 Panel Folder" ? <img src={FivePanel} alt="FivePanel" style={{"display": "block", "margin": "0 auto", "textAlign": "center", "width": "40%"}} /> : 
            form.styleOfBox === "FOL" ? <img src={FOL} alt="FOL" style={{"display": "block", "margin": "0 auto", "textAlign": "center", "width": "40%"}} /> : 
            form.styleOfBox === "Die Cut" ? <img src={Die} alt="Die" style={{"display": "block", "margin": "0 auto", "textAlign": "center", "width": "40%"}} /> : 
            form.styleOfBox === "Shroud" ? <img src={Shroud} alt="Shroud" style={{"display": "block", "margin": "0 auto", "textAlign": "center", "width": "40%"}} /> : null }
            <div className="button-container">
                <button className="next-step" onClick={saveAndContinue}>Save and Continue</button>
            </div>
        </div>
    );
}

export default DesignYourBox; 
