import React, { useState } from 'react'

// library imports 
import jwtDecode from 'jwt-decode'; 
import axios from 'axios'; 

// stylesheet imports
import './PickYourDivider.scss';

// image imports 
import Corrugated from '../../assets/images/divider.jpg'; 
import Cloth from '../../assets/images/fabric-divider.jpg'; 
import Paper from '../../assets/images/paper-divider.jpg'; 
import Pcorr from '../../assets/images/pcorr-divider.jpg'; 

const PickYourDivider = (props) => {
    // state that is handling the forms 
    const [ form, setForm ] = useState({
        typeOfDivider: null,
        kitId: localStorage.getItem('kitId'),
        corrugated: {
            boardGrade: '',
            lengthOfBox: '',
            widthOfBox: '',
            heightOfBox: '',
            numberOfCells: '',
            airPockets: '',
            allCellsUsed: '',
            // coatings: '',
            // assembled: '',
            // partOfKit: '',
            // qtyPerKit: '',
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
            lengthOfBox: '',
            widthOfBox: '',
            heightOfBox: '',
            numberOfCells: '',
            airPockets: '',
            coated: '',
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
            pcorr: {
                ...form.pcorr,
                [e.target.name]: e.target.value
            }
        })
    }

    // function used to save pallet infgo to the backend
    const saveAndContinue = () => {
        const subject = jwtDecode(localStorage.getItem('token'));  
        const _id = subject.subject; 

        axios.post(`https://g2-kit-builder.herokuapp.com/api/dividers/${_id}` || `http://localhost:5000/api/dividers/${_id}`, form)
            .then(res => {
                // console.log(res); 

                props.history.push('/design-your-foam'); 
            })
            .catch(err => {
                // console.log(err); 
            })
    }

    // console.log('re-render testing', form); 

    return ( 
        <div className="pick-your-divider-container">
            <h1 className="design-your-box-heading">
                Step 4 - Pick Your Divider
            </h1>
            {/* <div className="button-container skip">
                <button className="next-step" id="skip" onClick={() => props.history.push('/design-your-foam')}>Skip This Step</button>
            </div> */}
            <div className="type-of-divider">
                <label htmlFor="typeOfDivider" className="form-label">Type of Divider<br/></label>
                <select name="typeOfDivider" id="typeOfDivider" className="form-input" value={form.corrugated.typeOfDivider} onChange={changeHandler}>
                    <option>Select an option</option>
                    <option value="Corrugated">Corrugated</option>
                    <option value="Paper">Paper</option>
                    <option value="Cloth">Cloth</option>
                    <option value="Pcorr (Plastic Corrugated)">Pcorr (Plastic Corrugated)</option>
                </select>
            </div>
            {form.typeOfDivider === 'Corrugated' ? 
                <div className="corrugated-form-container">
                    <div className="line-1">
                        <div className="board-grade-container">
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
                                <option value="Chipboard">Chipboard</option>
                            </datalist>
                        </div>
                    </div>
                    <div className="line-1" style={{"marginTop": "0"}}>
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
                    <div className="line-2" style={{"marginTop": "0"}}>
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
                    <img src={Corrugated} style={{"display": "block", "width": "40%", "textAlign": "center", "margin": "3rem auto"}} alt="3d model of the pallet being created" />
                </div> 
            : null}
            {form.typeOfDivider === 'Paper' ?
            <div className="paper-form-container form-container">
                <div className="line-1" style={{"": "0"}}>
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
                <div className="line-1" style={{"marginTop": "0"}}>
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
                <img src={Paper} style={{"width": "40%", "textAlign": "center", "margin": "3rem auto"}} alt="3d model of the pallet being created" />
            </div>
            : null }
            {form.typeOfDivider === 'Cloth' ?
            <div className="paper-form-container form-container">
                <div className="line-1" style={{"marginTop": "0"}}>
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
                <div className="line-1" style={{"marginTop": "0"}}>
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
                <img src={Cloth} style={{"width": "40%", "textAlign": "center", "margin": "3rem auto"}} alt="3d model of the pallet being created" />
            </div>
            : null}
            {form.typeOfDivider === 'Pcorr (Plastic Corrugated)' ?
            <div className="paper-form-container form-container">
                <div className="line-1" style={{"marginTop": "0"}}>
                    <div className="length-of-box-container line-2-input">
                        <label htmlFor="lengthOfBox" className="form-label">Length of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="lengthOfBox" 
                            onChange={pcorrChangeHandler} 
                            value={form.pcorr.lengthOfBox} />
                    </div>
                    <div className="width-of-box-container line-2-input">
                        <label htmlFor="widthOfBox" className="form-label">Width of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="widthOfBox" 
                            onChange={pcorrChangeHandler} 
                            value={form.pcorr.widthOfBox} />
                    </div>
                    <div className="height-of-box-container line-2-input">
                        <label htmlFor="heightOfBox" className="form-label">Height of Box<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="heightOfBox" 
                            onChange={pcorrChangeHandler} 
                            value={form.pcorr.heightOfBox} />
                    </div>
                </div>
                <div className="line-1" style={{"marginTop": "0"}}>
                    <div className="length-of-box-container line-2-input">
                        <label htmlFor="numberOfCells" className="form-label">Number of Cells<br /></label>
                        <input type="text" 
                            className="form-input" 
                            name="numberOfCells" 
                            onChange={pcorrChangeHandler} 
                            value={form.pcorr.numberOfCells} />
                    </div>
                    <div className="width-of-box-container line-2-input">
                        <label htmlFor="airPockets" className="form-label">Air Pockets?<br /></label>
                        <select
                            className="form-input" 
                            name="airPockets" 
                            onChange={pcorrChangeHandler} 

                            value={form.pcorr.airPockets}
                        >
                            <option>Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="height-of-box-container line-2-input">
                        <label htmlFor="coated" className="form-label">Coatings<br /></label>
                        <select
                            className="form-input" 
                            name="coated" 
                            onChange={pcorrChangeHandler} 
                            value={form.pcorr.coated} 
                        >
                            <option>Select an option</option>
                            <option value="Spunbound">Spunbound</option>
                            <option value="Brushed Polyester">Brushed Polyester</option>
                            <option value="Soft Edge">Soft Edge</option>
                        </select>                                                
                    </div>
                </div>
                <img src={Pcorr} style={{"width": "40%", "textAlign": "center", "margin": "3rem auto"}} alt="3d model of the pallet being created" />
            </div>
            : null }
            <div className="button-container">
                <button className="next-step" onClick={saveAndContinue}>Save and Continue</button>
            </div>
        </div>
     );
}
 
export default PickYourDivider;