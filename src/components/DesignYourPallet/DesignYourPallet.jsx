import React, { useState } from 'react';

// library imports

// stylesheet imports
import './DesignYourPallet.scss'; 

// image imports 
import Model from '../../assets/images/pallet-placeholder.png'; 

const DesignYourPallet = () => {
    // setting up form state
    const [ form, setForm ] = useState({
        minimizer: '',
        styleOfRunner: '',
        lengthOfRunner: '',
        qtyOfRunners: '',
        sideAccess: '',
        woodQuality: '',
        requiredPalletCertifications: '',
        specialNotes: ''
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
                <input type="checkbox" className="label-input" name="minimizer" id="minimizer" onChange={changeHandler} />
            </div>
            <h2 className="runner-specifications">Runner Specifications</h2>
            <div className="line-1">
                <div className="style-of-runner-container line-1-input">
                    <label htmlFor="style-of-runner" className="form-label">Style of Runner<br /></label>
                    <input type="text" list="style-of-runner" className="form-input" name="styleOfRunner" onChange={changeHandler} />
                    <datalist name="style-of-runner" className="form-label" id="style-of-runner">
                        <option value={form.styleOfRunner}>4" X 4"</option>
                        <option value={form.styleOfRunner}>2" X 4"</option>
                    </datalist>
                </div>
                <div className="length-of-runner-container line-1-input">
                    <label htmlFor="length-of-runner" className="form-label">Length of Runner<br /></label>
                    <input type="text" list="length-of-runner" className="form-input" name="lengthOfRunner" onChange={changeHandler} value={form.lengthOfRunner} />
                    <datalist name="length-of-runner" className="form-label" id="length-of-runner">
                        <option value={form.lengthOfRunner}>24"</option>
                        <option value={form.lengthOfRunner}>36"</option>
                        <option value={form.lengthOfRunner}>48"</option>
                        <option value={form.lengthOfRunner}>60"</option>
                        <option value={form.lengthOfRunner}>72"</option>
                    </datalist>
                </div>
                <div className="qty-of-runner-container line-1-input">
                    <label htmlFor="qty-of-runner" className="form-label">Qty. of Runners<br /></label>
                    <input type="number" className="form-input" name="qtyOfRunners" onChange={changeHandler} value={form.qtyOfRunners} />
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
                        <select name="requiredPalletCertifications" className="form-input"          id="required-pallet-certifications" cols="30" rows="10" onChange={changeHandler}>
                            <option>Select an option</option>
                            <option value="Export Stamped">Export Stamped</option>
                        </select>
                    </div>
                    <div className="special-notes-container">
                        <label htmlFor="special-notes" className="form-label">Special Notes<br /></label>
                        <textarea name="specialNotes" className="form-input" id="special-notes" cols="30" rows="10" onChange={changeHandler}></textarea>
                    </div>

                </div>
                <img src={Model} alt="3d model of the pallet being created" />
            </div>
        </div> 
        // <div className="design-your-pallet-container">
        //     <h1>Step 1 - Design Your Pallet</h1>
        //     <div className="form-minimizer-container">
        //         <h4>I don't need one</h4>
        //         <input type="checkbox" className="form-input" />
        //     </div>
        //     <h2>Runner Specifications</h2>
        //     <div className="top-form">
        //         <label className="form-label">Style of Runner<br />
        //             <select name="style-of-runner" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">2" X 4"</option>
        //                 <option value="">4" X 4"</option>
        //             </select>
        //         </label>
        //         <label className="form-label">Length of Runner<br />
        //             <select name="length-of-runner" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">24" (2 Feet)</option>
        //                 <option value="">36" (3 Feet)</option>
        //                 <option value="">48" (4 Feet)</option>
        //                 <option value="">60" (5 Feet)</option>
        //                 <option value="">72" (6 Feet)</option>
        //                 <option value="">84" (7 Feet)</option>
        //                 <option value="">96" (8 Feet)</option>
        //                 <option value="">108" (9 Feet)</option>
        //                 <option value="">120" (10 Feet)</option>
        //             </select>
        //         </label>
        //         <label className="form-label">Qty. of Runners<br/>
        //             <input type="number" name="runner-quantity" className="form-input" />
        //         </label>
        //     </div>
        //     {/* <div className="middle-form">
        //         <label className="form-label">Side Access<br /></label>
        //         <select name="side-access" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">Yes</option>
        //                 <option value="">No</option>
        //         </select>
        //         <label className="form-label" htmlFor="wood-quality">Wood Quality<br /></label>
        //         <select name="wood-quality" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">Heat Treated</option>
        //                 <option value="">Green Rough</option>
        //         </select>
        //     </div> */}
        //     <div className="middle-form">
        //         <div className="testing">
        //             <label className="form-label">Side Access<br />
        //                 <select name="side-access" className="form-input">
        //                     <option value="">Select Option</option>
        //                     <option value="">Yes</option>
        //                     <option value="">No</option>
        //                 </select>
        //             </label>
        //         </div>
        //         <label className="form-label">Wood Quality<br />
        //             <select name="wood-quality" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">Heat Treated</option>
        //                 <option value="">Green Rough</option>
        //             </select>
        //         </label>
        //     </div>
        //         <div className="bottom-container">
        //             <div>
        //                 <label className="form-label">Upload File<br />
        //                     <input type="file" name="upload" className="form-input"/>
        //                 </label>
        //                 <label className="form-label">Special Notes<br />
        //                     <textarea name="special-notes" cols="30" rows="10" className="form-input"></textarea>
        //                 </label>
        //             </div>
        //             <img src={Model} alt="pallet model"/>
        //         </div>
        //     <h2>Deck Board Specifications</h2>
        //     <div className="top-form">
        //         <label className="form-label">Style of Top Boards<br />
        //             <select name="style-of-top-boards" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">2" X 4"</option>
        //                 <option value="">4" X 4"</option>
        //             </select>
        //         </label>
        //         <label className="form-label">Length of Runner<br />
        //             <select name="length-of-runner" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">24" (2 Feet)</option>
        //                 <option value="">36" (3 Feet)</option>
        //                 <option value="">48" (4 Feet)</option>
        //                 <option value="">60" (5 Feet)</option>
        //                 <option value="">72" (6 Feet)</option>
        //                 <option value="">84" (7 Feet)</option>
        //                 <option value="">96" (8 Feet)</option>
        //                 <option value="">108" (9 Feet)</option>
        //                 <option value="">120" (10 Feet)</option>
        //             </select>
        //         </label>
        //         <label className="form-label">Qty. of Runners<br />
        //             <input type="number" name="runner-quantity" className="form-input" />
        //         </label>
        //     </div>
        //     <div className="middle-form">
        //         <label className="form-label">Side Access<br />
        //             <select name="side-access" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">Yes</option>
        //                 <option value="">No</option>
        //             </select>
        //         </label>
        //         <label className="form-label">Wood Quality<br />
        //             <select name="wood-quality" className="form-input">
        //                 <option value="">Select Option</option>
        //                 <option value="">Heat Treated</option>
        //                 <option value="">Green Rough</option>
        //             </select>
        //         </label>
        //         <div className="bottom-container">
        //             <div>
        //                 <label className="form-label">Upload File<br />
        //                     <input type="file" name="upload" className="form-input"/>
        //                 </label>
        //                 <label className="form-label">Special Notes<br />
        //                     <textarea name="special-notes" cols="30" rows="10" className="form-input"></textarea>
        //                 </label>
        //             </div>
        //             <img src={Model} alt="pallet model"/>
        //         </div>
        //     </div>
        //     <label className="form-label">Required Pallet Certifications<br />
        //         <select name="style-of-top-boards" className="form-input">
        //             <option value="">Select Option</option>
        //             <option value="">Export Stamped</option>
        //         </select>
        //     </label>
        // </div>
     );
}
 
export default DesignYourPallet;