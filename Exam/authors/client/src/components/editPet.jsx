import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";


const EditPet = () => {

    const { id } = useParams();

    let [petInfo, setPetInfo] = useState({});
    
    const history = useHistory();

    let [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findPet/${id}`)
        .then(res=>{
            console.log("Response: ", res.data.results[0]);
            setPetInfo(res.data.results[0]);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    },[])

    const changeHandler = (e)=> {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updatePet/${id}`, petInfo)
        .then(res=>{
            console.log("Response: ", res);
            if(res.data.errors){
                console.log("Response Errors: ", res.data.errors)
                setErrors(res.data.errors)
            }
            else{
                history.push("/");
            }
        })
        .catch(err=>console.log("Error: ", err))
    }


        return (
            <div>
                <p><Link to={`/`}>Home</Link></p>
                <h4 htmlFor="">Edit {petInfo.name}</h4>
                <div className="box">
                        <form onSubmit={submitHandler} className="d-flex">
                            <div className='spacer'>
                                <div className='form-group'>
                                    <label htmlFor="">Pet Name:</label>
                                    <input className='form-control' name="name" type="text" value={petInfo.name} onChange={changeHandler}/>
                                    <p className="text-danger">{errors.name?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Pet Type:</label>
                                    <input className='form-control' name="type" type="text" value={petInfo.type} onChange={changeHandler}/>
                                    <p className="text-danger">{errors.type?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Pet Description:</label>
                                    <input className='form-control' name="description" type="text" value={petInfo.description} onChange={changeHandler}/>
                                    <p className="text-danger">{errors.description?.message}</p>
                                </div>
                                <input type="submit" value="Edit Pet" className='btn btn-success mt-2' />
                            </div>
                            <div>
                                <div className='form-group'>
                                    <label htmlFor="">Skill 1:</label>
                                    <input className='form-control' name="skill1" type="text" value={petInfo.skill1} onChange={changeHandler}/>
                                    <p className="text-danger">{errors.skill1?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Skill 2:</label>
                                    <input className='form-control' name="skill2" type="text" value={petInfo.skill2} onChange={changeHandler}/>
                                    <p className="text-danger">{errors.skill2?.message}</p>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="">Skill 3:</label>
                                    <input className='form-control' name="skill3" type="text" value={petInfo.skill3} onChange={changeHandler}/>
                                    <p className="text-danger">{errors.skill3?.message}</p>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        );
}

export default EditPet;
