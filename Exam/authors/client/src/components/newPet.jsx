import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

const NewPet = (props) => {
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");

    let [errors, setErrors] = useState({})

    const history = useHistory();

    const addPet = (e) => {
        e.preventDefault();

        let formInfo = {name, type, description, skill1, skill2, skill3}

        axios.post("http://localhost:8000/api/makePet", formInfo)
            .then(res => {
                console.log("Response: ", res)

                if(res.data.error){
                    console.log("Response Errors: ", res.data.error.errors)
                    setErrors(res.data.error.errors)
                }
                else{ 
                    setName("");
                    setType("");
                    setDescription("");
                    setSkill1("");
                    setSkill2("");
                    setSkill3("");
                    history.push("/");

                    props.setNewPetToggle(!props.newPetToggle);
                }

            })
            .catch(err=>console.log("Error: ", err))
    }
        return (
            <div>
                <p><Link to={`/`}>Back to Home</Link></p>
                <h4>Know a Pet Needing a Home?</h4>
                <div className="box">
                        <form onSubmit={addPet} className="d-flex">
                            <div className='spacer'>
                                <div className='form-group'>
                                    <label htmlFor="">Pet Name: </label>
                                    <input className='form-control' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    <p className="text-danger">{errors.name?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Pet Type: </label>
                                    <input className='form-control' type="text" value={type} onChange={(e)=>setType(e.target.value)}/>
                                    <p className="text-danger">{errors.type?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Pet Description: </label>
                                    <input className='form-control' type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                                    <p className="text-danger">{errors.description?.message}</p>
                                </div>
                                <input type="submit" value="Add Pet" className='btn btn-success mt-2' />
                            </div>
                            <div>
                                <div className='form-group'>
                                    <label htmlFor="">Skill 1: </label>
                                    <input className='form-control' type="text" value={skill1} onChange={(e)=>setSkill1(e.target.value)}/>
                                    <p className="text-danger">{errors.skill1?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Skill 2: </label>
                                    <input className='form-control' type="text" value={skill2} onChange={(e)=>setSkill2(e.target.value)}/>
                                    <p className="text-danger">{errors.skill2?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Skill 3: </label>
                                    <input className='form-control' type="text" value={skill3} onChange={(e)=>setSkill3(e.target.value)}/>
                                    <p className="text-danger">{errors.skill3?.message}</p>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        );
}

export default NewPet;
