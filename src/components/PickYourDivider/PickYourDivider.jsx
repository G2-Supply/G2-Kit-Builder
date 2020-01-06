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
        },
        chipboard: {

        },
        paper: {
            lengthOfBox: '',
            widthOfBox: '',
            heightOfBox: '',
            numberOfCells: '',
            airPockets: '',
            coated: '',
        },
        cloth: {
            lengthOfBox: '',
            widthOfBox: '',
            heightOfBox: '',
            numberOfCells: '',
            airPockets: '',
            material: '',
        },
        pcorr: {

        }

    }); 

    const changeHandler = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    const corrugatedChangeHandler = (e) => {
        setForm({
            ...form, 
            corrugated: {
                ...form.corrugated,
                [e.target.name]: e.target.value
            }
        })
    }

    const chipboardChangeHandler = (e) => {
        setForm({
            ...form, 
            chipboard: {
                ...form.chipboard,
                [e.target.name]: e.target.value
            }
        })
    }

    const paperChangeHandler = (e) => {
        setForm({
            ...form, 
            paper: {
                ...form.paper,
                [e.target.name]: e.target.value
            }
        })
    }

    const clothChangeHandler = (e) => {
        setForm({
            ...form, 
            cloth: {
                ...form.cloth,
                [e.target.name]: e.target.value
            }
        })
    }

    const pcorrChangeHandler = (e) => {
        setForm({
            ...form, 
            p: {
                ...form.p,
                [e.target.name]: e.target.value
            }
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
            {form.typeOfDivider === 'Corrugated' ? 
                <div className="corrugated-form-container">
                    {/* <div className="board-grade-container line-1">
                        <label htmlFor="boardGrade" className="form-label">Board Grade<br /></label>
                        <input type="text" 
                            list="boardGrade" 
                            className="form-input" 
                            name="boardGrade" 
                            onChange={corrugatedChangeHandler} 
                            value={form.corrugated.boardGrade} />
                        <datalist name="boardGrade" id="boardGrade" className="form-input">
                            <option value="32C (single wall)">32C (single wall)</option>
                            <option value="200C (single wall)">200C (single wall)</option>
                            <option value="44C (single wall)">44C (single wall)</option>
                            <option value="48BC (double wall)">48BC (double wall)</option>
                            <option value="350BC (double wall)">350BC (double wall)</option>
                        </datalist>
                    </div> */}
                    <div className="line-1" style={{"margin-top": "0"}}>
                        <div className="length-of-box-container line-2-input">
                            <label htmlFor="lengthOfBox" className="form-label">Length of Box<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="lengthOfBox" 
                                onChange={corrugatedChangeHandler} 
                                value={form.corrugated.lengthOfBox} />
                        </div>
                        <div className="width-of-box-container line-2-input">
                            <label htmlFor="widthOfBox" className="form-label">Width of Box<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="widthOfBox" 
                                onChange={corrugatedChangeHandler} 
                                value={form.corrugated.widthOfBox} />
                        </div>
                        <div className="height-of-box-container line-2-input">
                            <label htmlFor="heightOfBox" className="form-label">Height of Box<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="heightOfBox" 
                                onChange={corrugatedChangeHandler} 
                                value={form.corrugated.heightOfBox} />
                        </div>
                    </div>
                    <div className="line-2" style={{"margin-top": "0"}}>
                        <div className="length-of-box-container line-2-input">
                            <label htmlFor="numberOfCells" className="form-label">Number of Cells<br /></label>
                            <input type="text" 
                                className="form-input" 
                                name="numberOfCells" 
                                onChange={corrugatedChangeHandler} 
                                value={form.corrugated.numberOfCells} />
                        </div>
                        <div className="width-of-box-container line-2-input">
                            <label htmlFor="airPockets" className="form-label">Air Pockets?<br /></label>
                            <select
                                className="form-input" 
                                name="airPockets" 
                                onChange={corrugatedChangeHandler} 
                                value={form.corrugated.airPockets}
                            >
                                <option>Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="height-of-box-container line-2-input">
                            <label htmlFor="allCellsUsed" className="form-label">All Cells Used?<br /></label>
                            <select
                                className="form-input" 
                                name="allCellsUsed" 
                                onChange={corrugatedChangeHandler} 
                                value={form.corrugated.allCellsUsed} 
                            >
                                <option>Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div> 
            : null}
            {form.typeOfDivider === 'Paper' ?
            <div className="paper-form-container form-container">
                <div className="line-1" style={{"margin-top": "0"}}>
                    <div className="length-of-box-container line-2-input">
                        <label htmlFor="lengthOfBox" className="form-label">Length of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="lengthOfBox" 
                            onChange={paperChangeHandler} 
                            value={form.paper.lengthOfBox} />
                    </div>
                    <div className="width-of-box-container line-2-input">
                        <label htmlFor="widthOfBox" className="form-label">Width of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="widthOfBox" 
                            onChange={paperChangeHandler} 
                            value={form.paper.widthOfBox} />
                    </div>
                    <div className="height-of-box-container line-2-input">
                        <label htmlFor="heightOfBox" className="form-label">Height of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="heightOfBox" 
                            onChange={paperChangeHandler} 
                            value={form.paper.heightOfBox} />
                    </div>
                </div>
                <div className="line-1" style={{"margin-top": "0"}}>
                    <div className="length-of-box-container line-2-input">
                        <label htmlFor="numberOfCells" className="form-label">Number of Cells<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="numberOfCells" 
                            onChange={paperChangeHandler} 
                            value={form.paper.numberOfCells} />
                    </div>
                    <div className="width-of-box-container line-2-input">
                        <label htmlFor="airPockets" className="form-label">Air Pockets?<br /></label>
                        <select
                            className="form-input" 
                            name="airPockets" 
                            onChange={paperChangeHandler} 

                            value={form.paper.airPockets}
                        >
                            <option>Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="height-of-box-container line-2-input">
                        <label htmlFor="coated" className="form-label">Coated?<br /></label>
                        <select
                            className="form-input" 
                            name="coated" 
                            onChange={paperChangeHandler} 
                            value={form.paper.coated} 
                        >
                            <option>Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>                                                
                    </div>
                </div>
            </div>
            : null }
            {form.typeOfDivider === 'Cloth' ?
            <div className="paper-form-container form-container">
                <div className="line-1" style={{"margin-top": "0"}}>
                    <div className="length-of-box-container line-2-input">
                        <label htmlFor="lengthOfBox" className="form-label">Length of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="lengthOfBox" 
                            onChange={clothChangeHandler} 
                            value={form.cloth.lengthOfBox} />
                    </div>
                    <div className="width-of-box-container line-2-input">
                        <label htmlFor="widthOfBox" className="form-label">Width of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="widthOfBox" 
                            onChange={clothChangeHandler} 
                            value={form.cloth.widthOfBox} />
                    </div>
                    <div className="height-of-box-container line-2-input">
                        <label htmlFor="heightOfBox" className="form-label">Height of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="heightOfBox" 
                            onChange={clothChangeHandler} 
                            value={form.cloth.heightOfBox} />
                    </div>
                </div>
                <div className="line-1" style={{"margin-top": "0"}}>
                    <div className="length-of-box-container line-2-input">
                        <label htmlFor="numberOfCells" className="form-label">Number of Cells<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="numberOfCells" 
                            onChange={clothChangeHandler} 
                            value={form.cloth.numberOfCells} />
                    </div>
                    <div className="width-of-box-container line-2-input">
                        <label htmlFor="airPockets" className="form-label">Air Pockets?<br /></label>
                        <select
                            className="form-input" 
                            name="airPockets" 
                            onChange={clothChangeHandler} 
                            
                            value={form.cloth.airPockets}
                        >
                            <option>Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="height-of-box-container line-2-input">
                        <label htmlFor="material" className="form-label">Material<br /></label>
                        <select
                            className="form-input" 
                            name="material" 
                            onChange={clothChangeHandler} 
                            value={form.cloth.material} 
                        >
                            <option>Select an option</option>
                            <option value="Blue Brushed Polyester">Blue Brushed Polyester</option>
                            <option value="Gray Spunbound Polyester">Gray Spunbound Polyester</option>
                            <option value="White Spunbound Polyester">White Spunbound Polyester</option>
                        </select>                                                
                    </div>
                </div>
            </div>
            : null }
        </div>
     );
}
 
export default PickYourDivider;