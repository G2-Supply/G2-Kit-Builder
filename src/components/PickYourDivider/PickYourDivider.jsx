import React, { useState } from 'react'

// library imports 
import jwtDecode from 'jwt-decode'; 
import axios from 'axios'; 

// stylesheet imports
import './PickYourDivider.scss';

// image imports 
import Model from '../../assets/images/pallet-placeholder.png'; 

const PickYourDivider = (props) => {
    // state that is handling the forms 
    const [ form, setForm ] = useState({
        typeOfDivider: null,
        corrugated: {
            boardGrade: '',
            lengthOfBox: '',
            widthOfBox: '',
            heightOfBox: '',
            numberOfCells: '',
            airPockets: '',
            allCellsUsed: '',
            coatings: '',
            assembled: '',
            partOfKit: '',
            qtyPerKit: '',
        }
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

        axios.post(`http://localhost:5000/api/boxes/${_id}`, form)
            .then(res => {
                console.log(res); 
                props.history.push('/design-your-box-lid'); 
            })
            .catch(err => {
                console.log(err); 
            })
    }

    console.log('re-render testing', form); 

    return ( 
        <div className="pick-your-divider-container">
            <h1 className="design-your-box-heading">
                Step 5 - Pick Your Divider
            </h1>
            <div className="button-container skip">
                <button className="next-step" id="skip" onClick={() => props.history.push('/design-your-foam')}>Skip This Step</button>
            </div>
            <div className="type-of-divider">
                <label htmlFor="typeOfDivider" className="form-label">Type of Divider<br/></label>
                <select name="typeOfDivider" id="typeOfDivider" className="form-input" value={form.corrugated.typeOfDivider} onChange={changeHandler}>
                    <option>Select an option</option>
                    <option value="Corrugated">Corrugated</option>
                    <option value="Chipboard">Chipboard</option>
                    <option value="Paper">Paper</option>
                    <option value="Cloth">Cloth</option>
                    <option value="Pcorr (Plastic Corrugated)">Pcorr (Plastic Corrugated)</option>
                </select>
            </div>
            <div className="button-container skip">
                <button className="next-step" id="skip" onClick={() => props.history.push('/design-your-box-lid')}>Skip This Step</button>
            </div>
            {form.typeOfDivider === 'Corrugated' ? 
                <div className="corrugated-form-container">
                    <div className="board-grade-container line-1-input">
                        <label htmlFor="boardGrade" className="form-label">Board Grade<br /></label>
                        <input type="text" 
                            list="boardGrade" 
                            className="form-input" 
                            name="boardGrade" 
                            onChange={changeHandler} 
                            value={form.corrugated.boardGrade} />
                        <datalist name="boardGrade" id="boardGrade" className="form-input">
                            <option value="32C (single wall)">32C (single wall)</option>
                            <option value="200C (single wall)">200C (single wall)</option>
                            <option value="44C (single wall)">44C (single wall)</option>
                            <option value="48BC (double wall)">48BC (double wall)</option>
                            <option value="350BC (double wall)">350BC (double wall)</option>
                        </datalist>
                    </div>
                    <div className="line-1" style={{"margin-top": "0"}}>
                        <div className="length-of-box-container line-2-input">
                            <label htmlFor="lengthOfBox" className="form-label">Length of Box<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="lengthOfBox" 
                                onChange={changeHandler} 
                                value={form.corrugated.lengthOfBox} />
                        </div>
                        <div className="width-of-box-container line-2-input">
                            <label htmlFor="widthOfBox" className="form-label">Width of Box<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="widthOfBox" 
                                onChange={changeHandler} 
                                value={form.corrugated.widthOfBox} />
                        </div>
                        <div className="height-of-box-container line-2-input">
                            <label htmlFor="heightOfBox" className="form-label">Height of Box<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="heightOfBox" 
                                onChange={changeHandler} 
                                value={form.corrugated.heightOfBox} />
                        </div>
                    </div>
                    <div className="line-1" style={{"margin-top": "0"}}>
                        <div className="length-of-box-container line-2-input">
                            <label htmlFor="numberOfCells" className="form-label">Number of Cells<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="numberOfCells" 
                                onChange={changeHandler} 
                                value={form.corrugated.numberOfCells} />
                        </div>
                        <div className="width-of-box-container line-2-input">
                            <label htmlFor="airPockets" className="form-label">Air Pockets?<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="airPockets" 
                                onChange={changeHandler} 
                                value={form.corrugated.airPockets} />
                        </div>
                        <div className="height-of-box-container line-2-input">
                            <label htmlFor="allCellsUsed" className="form-label">All Cells Used?<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="allCellsUsed" 
                                onChange={changeHandler} 
                                value={form.corrugated.allCellsUsed} />
                        </div>
                    </div>
                </div> 
            : null}
            
        </div>
     );
}
 
export default PickYourDivider;