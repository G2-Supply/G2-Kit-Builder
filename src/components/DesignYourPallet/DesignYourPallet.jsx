import React, { useState } from 'react';

// library imports

// stylesheet imports
import './DesignYourPallet.scss'; 

// image imports 
import Model from '../../assets/images/pallet-placeholder.png'; 

const DesignYourPallet = () => {
    // setting up form state
    const [ form, setForm ] = useState({
        styleOfRunner: '',
        lengthOfRunner: '',
        qtyOfRunners: '',
        sideAccess: '',
        woodQuality: '',
        requiredPalletCertifications: '',
        specialNotes: '',
        styleOfTopBoards: '', 
        qtyOfTopBoards: '',
        lengthOfDeckBoards: '',
        styleOfBottomBoards: '',
    })

    const changeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    console.log(form); 
    return (
        <div className="design-your-pallet-container">
            <h1 className="step-1-heading">Step 1 - Build Your Pallet</h1>
            <div className="input-wrapper">
                <label htmlFor="minimizer" className="form-label">Skip this step</label>
                <input type="checkbox" 
                    className="label-input" 
                    name="minimizer" 
                    id="minimizer" 
                    onChange={changeHandler} />
            </div>
            <h2 className="runner-specifications">Runner Specifications</h2>
            <div className="line-1">
                <div className="style-of-runner-container line-1-input">
                    <label htmlFor="style-of-runner" className="form-label">Style of Runner<br /></label>
                    <input type="text" 
                        list="style-of-runner" 
                        className="form-input" 
                        name="styleOfRunner" 
                        onChange={changeHandler} 
                        value={form.styleOfRunner} />
                    <datalist name="styleOfRunner" 
                        className="form-label" 
                        id="style-of-runner">
                        <option value='4" X 4"'>4" X 4"</option>
                        <option value='2" X 4"'>2" X 4"</option>
                    </datalist>
                </div>
                <div className="length-of-runner-container line-1-input">
                    <label htmlFor="length-of-runner" className="form-label">Length of Runner<br /></label>
                    <input type="text" 
                        list="length-of-runner" 
                        className="form-input" 
                        name="lengthOfRunner" 
                        onChange={changeHandler} 
                        value={form.lengthOfRunner} />
                    <datalist name="lengthOfRunner" className="form-label" id="length-of-runner">
                        <option value='24"'>24"</option>
                        <option value='36"'>36"</option>
                        <option value='48"'>48"</option>
                        <option value='60"'>60"</option>
                        <option value='72"'>72"</option>
                    </datalist>
                </div>
                <div className="qty-of-runner-container line-1-input">
                    <label htmlFor="qty-of-runner" className="form-label">Qty. of Runners<br /></label>
                    <input type="number" 
                        className="form-input" 
                        name="qtyOfRunners" 
                        onChange={changeHandler} 
                        value={form.qtyOfRunners} />
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
                    <label htmlFor="wood-quality" className="form-label">Wood Quality<br /></label>
                    <select name="woodQuality" className="form-input" id="wood-quality" onChange={changeHandler}>
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
                        </select>
                    </div>
                    <div className="special-notes-container">
                        <label htmlFor="special-notes" className="form-label">Special Notes<br /></label>
                        <textarea name="specialNotes" 
                            className="form-input" 
                            id="special-notes" cols="30" 
                            rows="10" 
                            onChange={changeHandler} 
                            placeholder="Add any additional information about the pallet runners.">
                        </textarea>
                    </div>

                </div>
                <img src={Model} alt="3d model of the pallet being created" />
            </div>
            <h2 className="runner-specifications">Deck Board Specifications</h2>
            <div className="line-5">
                <div className="style-of-top-boards line-5-input">
                    <label htmlFor="style-of-top-boards" className="form-label">Style of Top Boards<br /></label>
                    <input type="text" list="style-of-top-boards" className="form-input" name="styleOfTopBoards" onChange={changeHandler} />
                    <datalist name="styleOfTopBoards" className="form-label" id="style-of-top-boards">
                        <option value='4" X 7/16"'>4" X 7/16"</option>
                        <option value='4" X 1"'>4" X 1"</option>
                        <option value='6" X 7/16'>6" X 7/16"</option>
                        <option value='6" X 1"'>6" X 1"</option>
                    </datalist>
                </div>
                <div className="qty-of-top-boards line-5-input">
                    <label htmlFor="qty-of-top-boards" className="form-label">Qty. of Top Boards<br /></label>
                    <input type="number" list="qty-of-top-boards" className="form-input" name="qtyOfTopBoards" onChange={changeHandler} value={form.qtyOfTopBoards} />
                </div>
                <div className="length-of-deck-boards-container line-5-input">
                    <label htmlFor="length-of-deck-boards" className="form-label">Length of Deck Boards<br /></label>
                    <input type="text" list="length-of-deck-boards" className="form-input" name="lengthOfDeckBoards" onChange={changeHandler} value={form.lengthOfDeckBoards} />
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
            <div className="line-6">
                <div className="style-of-bottom-boards line-6-input">
                    <label htmlFor="style-of-bottom-boards" className="form-label">Style of Bottom Boards<br /></label>
                    <input type="text" list="style-of-bottom-boards" className="form-input" name="styleOfBottomBoards" value={form.styleOfBottomBoards} onChange={changeHandler} />
                    <datalist className="form-label" id="style-of-bottom-boards">
                        <option value='4" X 7/16"'>4" X 7/16"</option>
                        <option value='4" X 1"'>4" X 1"</option>
                        <option value='6" X 7/16'>6" X 7/16</option>
                        <option value='6" X 1"'>6" X 1"</option>
                    </datalist>
                </div>
            </div>
        </div> 
        
     );
}
 
export default DesignYourPallet;