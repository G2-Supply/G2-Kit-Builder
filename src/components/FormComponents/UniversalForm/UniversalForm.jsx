import React, { useState } from 'react';

// styling imports
import './UniversalForm.scss'; 

// image imports 
import Model from '../../../assets/images/pallet-placeholder.png'; 

const UniversalForm = () => {
    // setting up form state
    const [ form, setForm ] = useState({
        styleOfRunner: '',
        lengthOfRunner: '',
        qtyOfRunners: '',
        sideAccess: '',
        runnerWoodQuality: '',
        requiredPalletCertifications: '',
        runnerSpecialNotes: '',
        styleOfTopBoards: '', 
        qtyOfTopBoards: '',
        lengthOfDeckBoards: '',
        styleOfBottomBoards: '',
        qtyOfBottomBoards: '',
        deckBoardWoodQuality: '',
        deckBoardSpecialNotes: '',
    }) 

    // function used to save pallet infgo to the backend
    // const saveAndContinue = () => {
    //     const subject = jwtDecode(localStorage.getItem('token'));  
    //     const _id = subject.subject; 

    //     axios.post(`http://localhost:5000/api/pallets/${_id}`, form)
    //         .then(res => {
    //             console.log(res); 
    //             props.history.push('/build-your-box'); 
    //         })
    //         .catch(err => {
    //             console.log(err); 
    //         })
    // }

    const changeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }


    return ( 
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
                        <label htmlFor="runner-special-notes" className="form-label">Special Notes for Runner<br /></label>
                        <textarea name="runnerSpecialNotes" 
                            className="form-input" 
                            id="runner-special-notes" cols="30" 
                            rows="10" 
                            onChange={changeHandler} 
                            placeholder="Add any additional information about the pallet runners.">
                        </textarea>
                    </div>

                </div>
                <img src={Model} alt="3d model of the pallet being created" />
            </div>
     );
}
 
export default UniversalForm;