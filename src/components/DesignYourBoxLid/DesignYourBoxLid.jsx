import React, { useState } from 'react';

// library imports 
import jwtDecode from 'jwt-decode'; 
import axios from 'axios'; 

// stylesheet imports
import './DesignYourBoxLid.scss';

// image imports 
import Model from '../../assets/images/boxlid.jpg'; 

// component imports 
// import UniversalForm from '../FormComponents/UniversalForm/UniversalForm';

const DesignYourBoxLid = (props) => {
    // handling form state 
    const [ form, setForm ] = useState({
        kitId: localStorage.getItem('kitId'),
        styleOfBoxLid: '',
        boardGrade: '',
        lengthOfBoxLid: '',
        widthOfBoxLid: '',
        heightOfBoxLid: '',
        // orderFrequency: '',
        // qtyOfOrder: '',
        // partOfKit: '',
        jointConstruction: '',
        print: '',
        locationOfPrint: '',
        boxLidSpecialNotes: '',
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

        axios.post(`https://g2-kit-builder.herokuapp.com/api/box-lids/${_id}` || `http://localhost:5000/api/box-lids/${_id}`, form)
            .then(res => {
                // console.log(res); 
                props.history.push('/pick-your-divider'); 
            })
            .catch(err => {
                // console.log(err); 
            })
    }

    // console.log('re-render testing', form); 

    return ( 
        <div className="design-your-box-container">
            <h1 className="design-your-box-heading">
                Step 3 - Design Your Box Lid
            </h1>
            <div className="button-container skip">
                <button className="next-step" id="skip" onClick={() => props.history.push('/pick-your-divider')}>Skip This Step</button>
            </div>
            <div className="line-1">
                <div className="style-of-box-container line-1-input">
                    <label htmlFor="styleOfBoxLid" className="form-label">Style of Box Lid<br /></label>
                    <input type="text" 
                        list="styleOfBoxLid"
                        className="form-input" 
                        name="styleOfBoxLid" 
                        onChange={changeHandler} 
                        value={form.styleOfBoxLid} />
                    <datalist name="styleOfBoxLid" id="styleOfBoxLid" className="form-input">
                        <option value="RSC">RSC</option>
                        <option value="HSC">HSC</option>
                        <option value="Tray">Tray</option>
                        <option value="HSC Top/Flange Bottom">HSC Top/Flange Bottom</option>
                        <option value="5 Panel Folder">5 Panel Folder</option>
                        <option value="FOL">FOL</option>
                        <option value="Shroud">Shroud</option>
                        <option value="Die Cut">Die Cut</option>
                    </datalist>
                </div>
                <div className="board-grade-container line-1-input">
                    <label htmlFor="boardGrade" className="form-label">Board Grade<br /></label>
                    <input type="text" 
                        list="boardGrade" 
                        className="form-input" 
                        name="boardGrade" 
                        onChange={changeHandler} 
                        value={form.boardGrade} />
                    <datalist name="boardGrade" id="boardGrade" className="form-input">
                        <option value="32C (single wall)">32C (single wall)</option>
                        <option value="200C (single wall)">200C (single wall)</option>
                        <option value="44C (single wall)">44C (single wall)</option>
                        <option value="48BC (double wall)">48BC (double wall)</option>
                        <option value="350BC (double wall)">350BC (double wall)</option>
                    </datalist>
                </div>
            </div>
            <div className="line-1" style={{"marginTop": "0"}}>
                <div className="length-of-box-lid-container line-2-input">
                    <label htmlFor="lengthOfBoxLid" className="form-label">Length of Box Lid<br /></label>
                    <input type="text" 
                        className="form-input" 
                        name="lengthOfBoxLid" 
                        onChange={changeHandler} 
                        value={form.lengthOfBoxLid} />
                </div>
                <div className="width-of-box-lid-container line-2-input">
                    <label htmlFor="widthOfBoxLid" className="form-label">Width of Box Lid<br /></label>
                    <input type="textLid" 
                        className="form-input" 
                        name="widthOfBoxLid" 
                        onChange={changeHandler} 
                        value={form.widthOfBoxLid} />
                </div>
                <div className="height-of-box-lid-container line-2-input">
                    <label htmlFor="heightOfBoxLid" className="form-label">Height of Box Lid<br /></label>
                    <input type="text" 
                        className="form-input" 
                        name="heightOfBoxLid" 
                        onChange={changeHandler} 
                        value={form.heightOfBoxLid} />
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
                     <datalist 
                        className="form-input" 
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
                    <input type="text" 
                        list="jointConstruction"
                        className="form-input" 
                        name="jointConstruction" 
                        onChange={changeHandler} 
                        value={form.jointConstruction} />
                    <datalist name="jointConstruction" id="jointConstruction">
                        <option>Select an option</option>
                        <option value="Glued">Glued</option>
                        <option value="Flat">Flat</option>
                        <option value="Stapled">Stapled</option>
                    </datalist>
                </div>
                <div className="print-container line-2-input">
                    <label htmlFor="print" className="form-label" >Print<br /></label>
                    <input type="text" list="print" className="form-input" value={form.print} name="print" onChange={changeHandler} />
                     <datalist 
                        className="form-input" 
                        name="print"
                        id="print" 
                        placeholder="Choose option or input custom print">
                            <option value="Standard Part Number + BMC">Standard Part Number + BMC</option>
                            <option value="Custom Print">Custom Print</option>
                    </datalist>
                </div>
                <div className="location-of-print-container line-2-input">
                    <label htmlFor="locationOfPrint" className="form-label">Location of Print</label>
                    <select name="locationOfPrint" id="locationOfPrint" className="form-input" value={form.locationOfPrint} onChange={changeHandler}>
                        <option>Select an option</option>
                        <option value="N/A">N/A</option>
                        <option value="Side">Side</option>
                        <option value="End">End</option>
                        <option value="Top">Top</option>
                    </select>
                </div>
            </div>
            <div className="bottom-container">
                <div className="line-3-line-4-container">
                    {/* <div className="upload-container">
                        <label htmlFor="upload" className="form-label">Upload a File<br /></label>
                        <input type="file" className="form-input" id="upload" />
                    </div> */}
                    <div className="special-notes-container">
                        <label htmlFor="box-lid-special-notes" className="form-label">Special Notes for Box<br /></label>
                        <textarea name="boxLidSpecialNotes" 
                            className="form-input" 
                            id="box-lid-special-notes" cols="30" 
                            rows="10" 
                            onChange={changeHandler} 
                            value={form.boxLidSpecialNotes}
                            placeholder="Add any additional information.">
                        </textarea>
                    </div>

                </div>
                <img src={Model} style={{"width": "40%"}}alt="3d model of the pallet being created" />
            </div>
            {/* <UniversalForm /> */}
            <div className="button-container">
                <button className="next-step" onClick={saveAndContinue}>Save and Continue</button>
            </div>
        </div>
     );
}
 
export default DesignYourBoxLid;