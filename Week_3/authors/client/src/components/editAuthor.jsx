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


const EditAuthor = () => {

    const { id } = useParams();

    let [authorInfo, setAuthorInfo] = useState({});
    
    const history = useHistory();

    let [errors, setErrors] = useState({})

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findAuthor/${id}`)
        .then(res=>{
            console.log("Response: ", res.data.results[0]);
            setAuthorInfo(res.data.results[0]);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    },[])

    const changeHandler = (e)=> {
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, authorInfo)
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
                <p><Link to={`/`} className="btn btn-secondary">Home</Link></p>
                    <form onSubmit={submitHandler} action="">
                        <div className='form-group'>
                            <label htmlFor="">Edit This Author: </label>
                            <input className='form-control' name="author" type="text" value={authorInfo.author} onChange={changeHandler}/>
                            <p className="text-danger">{errors.author?.message}</p>
                        </div>
                        {/* <div className='form-group'>
                            <label htmlFor="">Price: </label>
                            <input className='form-control' name="price" type="number" value={AuthorInfo.price} onChange={changeHandler}/>
                            <p className="text-danger">{errors.price?.message}</p>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Description: </label>
                            <input className='form-control' name="description" type="text" value={AuthorInfo.description} onChange={changeHandler}/>
                            <p className="text-danger">{errors.description?.message}</p>
                        </div> */}
                        <input type="submit" value="Update Author" className='btn btn-success mt-2' />
                    </form>
                    <p><Link to={`/`} className="btn btn-info mt-2">Cancel</Link></p>
                </div>
        );
}

export default EditAuthor;
