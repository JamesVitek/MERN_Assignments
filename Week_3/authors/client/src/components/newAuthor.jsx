import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

const NewAuthor = (props) => {
    let [author, setAuthor] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    let [errors, setErrors] = useState({})

    const history = useHistory();

    const addAuthor = (e) => {
        e.preventDefault();

        let formInfo = {author, price, description}

        axios.post("http://localhost:8000/api/makeAuthor", formInfo)
            .then(res => {
                console.log("Response: ", res)

                if(res.data.error){
                    console.log("Response Errors: ", res.data.error.errors)
                    setErrors(res.data.error.errors)
                }
                else{ 
                    setAuthor("");
                    setPrice("");
                    setDescription("");
                    history.push("/");

                    props.setNewAuthorToggle(!props.newAuthorToggle);
                }

            })
            .catch(err=>console.log("Error: ", err))
    }
        return (
            <div>
                
                <p><Link to={`/`} className="btn btn-secondary">Home</Link></p>
                <form onSubmit={addAuthor}>
                    <div className='form-group'>
                        <label htmlFor="">Add New Author: </label>
                        <input className='form-control' type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                        <p className="text-danger">{errors.author?.message}</p>
                    </div>
                    {/* <div className='form-group'>
                        <label htmlFor="">Price: </label>
                        <input className='form-control' type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        <p className="text-danger">{errors.price?.message}</p>

                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Description: </label>
                        <input className='form-control' type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <p className="text-danger">{errors.description?.message}</p>

                    </div> */}
                    <input type="submit" value="Add Author" className='btn btn-success mt-2' />
                </form>
                <p><Link to={`/`} className="btn btn-info mt-2">Cancel</Link></p>
            </div>
        );
}

export default NewAuthor;
