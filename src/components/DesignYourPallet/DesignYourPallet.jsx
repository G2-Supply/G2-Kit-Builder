import React from 'react';

// library imports

// stylesheet imports
import './DesignYourPallet'; 

// image imports 
import Model from '../../assets/icons/hamburger-menu.svg'; 

const DesignYourPallet = () => {
    return ( 
        <>
            <h1>Step 1 - Design Your Pallet</h1>
            <div className="form-minimizer-container">
                <h4>I don't need one</h4>
                <input type="checkbox" className="form-input" />
            </div>
            <h2>Runner Specifications</h2>
            <div className="top-form">
                <label className="form-label">Style of Runner<br />
                    <select name="style-of-runner" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">2" X 4"</option>
                        <option value="">4" X 4"</option>
                    </select>
                </label>
                <label className="form-label">Length of Runner<br />
                    <select name="length-of-runner" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">24" (2 Feet)</option>
                        <option value="">36" (3 Feet)</option>
                        <option value="">48" (4 Feet)</option>
                        <option value="">60" (5 Feet)</option>
                        <option value="">72" (6 Feet)</option>
                        <option value="">84" (7 Feet)</option>
                        <option value="">96" (8 Feet)</option>
                        <option value="">108" (9 Feet)</option>
                        <option value="">120" (10 Feet)</option>
                    </select>
                </label>
                <label className="form-label">Qty. of Runners<br />
                    <input type="number" name="runner-quantity" className="form-input" />
                </label>
            </div>
            <div className="middle-form">
                <label className="form-label">Side Access<br />
                    <select name="side-access" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </label>
                <label className="form-label">Wood Quality<br />
                    <select name="wood-quality" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">Heat Treated</option>
                        <option value="">Green Rough</option>
                    </select>
                </label>
                <div className="bottom-container">
                    <div>
                        <label className="form-label">Upload File<br />
                            <input type="file" name="upload" className="form-input"/>
                        </label>
                        <label className="form-label">Special Notes<br />
                            <textarea name="special-notes" cols="30" rows="10" className="form-input"></textarea>
                        </label>
                    </div>
                    <img src={Model} alt="pallet model"/>
                </div>
            </div>
            <h2>Deck Board Specifications</h2>
            <div className="top-form">
                <label className="form-label">Style of Top Boards<br />
                    <select name="style-of-top-boards" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">2" X 4"</option>
                        <option value="">4" X 4"</option>
                    </select>
                </label>
                <label className="form-label">Length of Runner<br />
                    <select name="length-of-runner" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">24" (2 Feet)</option>
                        <option value="">36" (3 Feet)</option>
                        <option value="">48" (4 Feet)</option>
                        <option value="">60" (5 Feet)</option>
                        <option value="">72" (6 Feet)</option>
                        <option value="">84" (7 Feet)</option>
                        <option value="">96" (8 Feet)</option>
                        <option value="">108" (9 Feet)</option>
                        <option value="">120" (10 Feet)</option>
                    </select>
                </label>
                <label className="form-label">Qty. of Runners<br />
                    <input type="number" name="runner-quantity" className="form-input" />
                </label>
            </div>
            <div className="middle-form">
                <label className="form-label">Side Access<br />
                    <select name="side-access" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </label>
                <label className="form-label">Wood Quality<br />
                    <select name="wood-quality" className="form-input">
                        <option value="">Select Option</option>
                        <option value="">Heat Treated</option>
                        <option value="">Green Rough</option>
                    </select>
                </label>
                <div className="bottom-container">
                    <div>
                        <label className="form-label">Upload File<br />
                            <input type="file" name="upload" className="form-input"/>
                        </label>
                        <label className="form-label">Special Notes<br />
                            <textarea name="special-notes" cols="30" rows="10" className="form-input"></textarea>
                        </label>
                    </div>
                    <img src={Model} alt="pallet model"/>
                </div>
            </div>
        </>
     );
}
 
export default DesignYourPallet;