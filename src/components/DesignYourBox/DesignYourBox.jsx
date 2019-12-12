import React, { useState } from 'react';

// library imports

// stylesheet imports
import './DesignYourBox.scss'; 

// component imports 
import UniversalForm from '../FormComponents/UniversalForm/UniversalForm';

const DesignYourBox = () => {
    // handling form state 
    const [ form, setForm ] = useState({
        styleOfBox: '',
        boardGrade: '',
        lengthOfBox: '',
        widthOfBox: '',
        heightOfBox: '',
        orderFrequency: '',
        qtyPerOrder: '',
        partOfKit: '',
        jointConstruction: '',
        print: '',
        locationOfPrint: '',
    }); 
    
    const changeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <div className="design-your-box-container">
            <h1 className="design-your-box-heading">
                Step 2 - Design Your Box
            </h1>
            <div className="button-container skip">
                <button className="next-step" id="skip">Skip This Step</button>
            </div>
            <div className="line-1">
                <div className="style-of-box-container line-1-input">
                    <label htmlFor="styleOfBox" className="form-label">Style of Box<br /></label>
                    <input type="text" 
                        list="styleOfBox"
                        className="form-input" 
                        name="styleOfBox" 
                        onChange={changeHandler} 
                        value={form.styleOfBox} />
                    <datalist name="styleOfBox" id="styleOfBox" className="form-input">
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
                        name="lengthOfRunner" 
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
            <div className="line-1">
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
            <UniversalForm />
        </div>
     );
}
 
export default DesignYourBox;