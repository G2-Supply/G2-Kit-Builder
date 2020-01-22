import React, { useState, useEffect } from 'react';

// library imports
import axios from 'axios'; 
import jwtDecode from 'jwt-decode';

// stylesheet imports
import './DesignYourPallet.scss'; 

// image imports 
import Stringer from '../../assets/images/2x4.jpg'; 
import DeckBoard from '../../assets/images/1x6.jpg'; 
import Question from '../../assets/images/question-64px.png'; 

const DesignYourPallet = (props) => {
    // setting up form state
    const [ form, setForm ] = useState({
        kitId: localStorage.getItem('kitId'),
        styleOfStringer: '',
        lengthOfStringer: '',
        qtyOfStringers: '',
        sideAccess: '',
        runnerWoodQuality: '',
        requiredPalletCertifications: '',
        runnerSpecialNotes: '',
        styleOfTopBoards: '', 
        lengthOfDeckBoards: '',
        styleOfBottomBoards: '',
        qtyOfBottomBoards: '',
        deckBoardWoodQuality: '',
        deckBoardSpecialNotes: '',
    }) 

    // function used to save pallet infgo to the backend
    const saveAndContinue = () => {
        const subject = jwtDecode(localStorage.getItem('token'));  

        const _id = subject.subject; 

        axios.post(`https://g2-kit-builder.herokuapp.com/api/pallets/${_id}` || `https://``http://localhost:5000/api/pallets/${_id}`, form)
            .then(res => {
                console.log(res); 
                
                props.history.push('/design-your-box'); 
            })
            .catch(err => {
                // console.log(err); 
            })
    }

    const changeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    // console.log(jwtDecode(localStorage.getItem('token')))

    // console.log(form); 
    return (
        <div className="design-your-pallet-container">
            <h1 className="step-1-heading">Step 1 - Build Your Pallet</h1>
            <div className="button-container skip">
                <button className="next-step" id="skip" onClick={() => props.history.push('/design-your-box')}>Skip This Step</button>
            </div>
            <h2 className="runner-specifications">Stringer Specifications</h2>
            <a href='https://oneway-solutions.com/blog/pallet-stringers-explained.html' target="_blank">
                <h4 
                    className="runner-specifications" 
                    style={{"textDecoration": "underline", "fontSize": "1.4rem", "color": "black"}}>What's a Stringer?
                    <img src={Question} alt="question mark icon" className="question-icon" />
                </h4>
            </a>
            <div className="line-1">
                <div className="style-of-runner-container line-1-input">
                    <label htmlFor="style-of-runner" className="form-label">Style of Stringer<br /></label>
                    <input type="text" 
                        list="style-of-runner" 
                        className="form-input" 
                        name="styleOfStringer" 
                        onChange={changeHandler} 
                        value={form.styleOfStringer} />
                    <datalist name="styleOfStringer" 
                        className="form-label" 
                        id="style-of-runner">
                        <option value='4" X 4"'>4" X 4"</option>
                        <option value='2" X 4"'>2" X 4"</option>
                    </datalist>
                </div>
                <div className="length-of-runner-container line-1-input">
                    <label htmlFor="length-of-runner" className="form-label">Length of Stringer<br /></label>
                    <input type="text" 
                        list="length-of-runner" 
                        className="form-input" 
                        name="lengthOfStringer" 
                        onChange={changeHandler} 
                        value={form.lengthOfStringer} />
                    <datalist name="lengthOfStringer" className="form-label" id="length-of-runner">
                        <option value='24"'>24"</option>
                        <option value='36"'>36"</option>
                        <option value='48"'>48"</option>
                        <option value='60"'>60"</option>
                        <option value='72"'>72"</option>
                    </datalist>
                </div>
                <div className="qty-of-runner-container line-1-input">
                    <label htmlFor="qty-of-runner" className="form-label">Qty. of Stringers<br /></label>
                    <input type="number" 
                        className="form-input" 
                        name="qtyOfStringers" 
                        onChange={changeHandler} 
                        value={form.qtyOfStringers} />
                </div>
            </div>
            <div className="line-2">
                <div className="side-access-container line-2-input">
                    <label htmlFor="side-access" className="form-label">Side Access<br /></label>
                    <select name="sideAccess" className="form-input" id="side-access" onChange={changeHandler}>
                        <option>Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="wood-quality-container line-2-input">
                    <label htmlFor="runner-wood-quality" className="form-label">Stringer Wood Quality<br /></label>
                    <select name="runnerWoodQuality" className="form-input" id="runner-wood-quality" onChange={changeHandler}>
                        <option>Select an option</option>
                        <option value="Heat Treated">Heat Treated</option>
                        <option value="Green Rough">Green Rough</option>
                    </select>
                </div>
            </div>
            <div className="bottom-container">
                <div className="line-3-line-4-container">
                    {/* <div className="upload-container">
                        <label htmlFor="upload" className="form-label">Upload a File<br /></label>
                        <input type="file" className="form-input" id="upload" />
                    </div>  */}
                    <div className="required-pallet-certifications-container">
                        <label htmlFor="required-pallet-certifications" className="form-label">Required Pallet Certifications<br /></label>
                        <select name="requiredPalletCertifications" 
                            className="form-input" 
                            id="required-pallet-certifications" 
                            cols="30" 
                            rows="10" 
                            onChange={changeHandler}>
                            <option>Select an option</option>
                            <option value="Export Stamped">Export Stamped</option>
                            <option value="Company Stamp">Company Stamp</option>
                        </select>
                    </div>
                    <div className="special-notes-container">
                        <label htmlFor="runner-special-notes" className="form-label">Special Notes for Stringer<br /></label>
                        <textarea name="runnerSpecialNotes" 
                            className="form-input" 
                            id="runner-special-notes" cols="30" 
                            rows="10" 
                            onChange={changeHandler} 
                            value={form.runnerSpecialNotes}
                            placeholder="Add any additional information about the pallet stringers.">
                        </textarea>
                    </div>

                </div>
                <img src={Stringer} alt="3d model of the pallet being created" />
            </div>
            <h2 className="deck-board-specifications runner-specifications">Deck Board Specifications</h2>
            <a href='https://nazpallet.com/pallets/pallet-terminology/' target="_blank">
                <h4 
                    className="runner-specifications" 
                    style={{"textDecoration": "underline", "fontSize": "1.4rem", "color": "black"}}>What's a Deck Board?
                    <img src={Question} alt="question mark icon" className="question-icon" />
                </h4>
            </a>
            <div className="line-5">
                <div className="style-of-top-boards line-5-input">
                    <label htmlFor="style-of-top-boards" className="form-label">Style of Top Boards<br /></label>
                    <input type="text" 
                        list="style-of-top-boards" 
                        className="form-input" 
                        name="styleOfTopBoards" 
                        onChange={changeHandler} />
                    <datalist name="styleOfTopBoards" className="form-label" id="style-of-top-boards">
                        <option value='4" X 7/16"'>4" X 7/16"</option>
                        <option value='4" X 1"'>4" X 1"</option>
                        <option value='6" X 7/16'>6" X 7/16"</option>
                        <option value='6" X 1"'>6" X 1"</option>
                    </datalist>
                </div>
                <div className="qty-of-top-boards line-5-input">
                    <label htmlFor="qty-of-top-boards" className="form-label">Qty. of Top Boards<br /></label>
                    <input type="number" 
                        list="qty-of-top-boards" 
                        className="form-input" 
                        name="qtyOfTopBoards" 
                        onChange={changeHandler} 
                        value={form.qtyOfTopBoards} />
                </div>
                <div className="length-of-deck-boards-container line-5-input">
                    <label htmlFor="length-of-deck-boards" className="form-label">Length of Deck Boards<br /></label>
                    <input type="text" 
                        list="length-of-deck-boards" 
                        className="form-input" 
                        name="lengthOfDeckBoards" 
                        onChange={changeHandler} 
                        value={form.lengthOfDeckBoards} />
                    <datalist name="lengthOfDeckBoards" className="form-label" id="length-of-deck-boards">
                        <option value='40"'>40"</option>
                        <option value='42"'>42"</option>
                        <option value='45"'>45"</option>
                        <option value='48"'>48"</option>
                        <option value='54"'>54"</option>
                        <option value='68"'>68"</option>
                    </datalist>
                </div>
            </div>
            <div className="line-5">
                <div className="style-of-bottom-boards line-5-input">
                    <label htmlFor="style-of-bottom-boards" className="form-label">Style of Bottom Boards<br /></label>
                    <input type="text" 
                        list="style-of-bottom-boards" 
                        className="form-input" 
                        name="styleOfBottomBoards" 
                        value={form.styleOfBottomBoards} 
                        onChange={changeHandler} />
                    <datalist className="form-label" id="style-of-bottom-boards">
                        <option value='4" X 7/16"'>4" X 7/16"</option>
                        <option value='4" X 1"'>4" X 1"</option>
                        <option value='6" X 7/16'>6" X 7/16</option>
                        <option value='6" X 1"'>6" X 1"</option>
                    </datalist>
                </div>
                <div className="qty-of-bottom-boards line-5-input">
                    <label htmlFor="qty-of-bottom-boards" className="form-label">Qty. of Bottom Boards<br /></label>
                    <input type="number" 
                        list="qty-of-bottom-boards" 
                        className="form-input" 
                        name="qtyOfBottomBoards" 
                        onChange={changeHandler} 
                        value={form.qtyOfBottomBoards} />
                </div>
                <div className="wood-quality-container line-5-input">
                    <label htmlFor="deck-board-wood-quality" className="form-label">Deck Board Wood Quality<br /></label>
                    <select name="deckBoardWoodQuality" 
                        className="form-input" 
                        id="deck-board-wood-quality" 
                        onChange={changeHandler}
                        value={form.deckBoardWoodQuality}>
                        <option>Select an option</option>
                        <option value="Heat Treated">Heat Treated</option>
                        <option value="Green Rough">Green Rough</option>
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
                        <label htmlFor="deck-board-special-notes" className="form-label">Special Notes for Deck Board<br /></label>
                        <textarea name="deckBoardSpecialNotes" 
                            className="form-input" 
                            id="deck-board-special-notes" cols="30" 
                            rows="10" 
                            onChange={changeHandler} 
                            placeholder="Add any additional information about the pallet runners.">
                        </textarea>
                    </div>

                </div>
                <img src={DeckBoard} style={{"width": "50%"}} alt="3d model of the pallet being created" />
            </div>
            <div className="button-container">
                <button className="next-step" onClick={saveAndContinue}>Save and Continue</button>
            </div>
        </div> 
        
     );
}
 
export default DesignYourPallet;
