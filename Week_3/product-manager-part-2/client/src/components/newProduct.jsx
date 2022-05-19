import React, { useState } from 'react';
import axios from "axios";

const NewProduct = () => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    let [errors, setErrors] = useState({})

    const addProduct = (e) => {
        e.preventDefault();

        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/makeProduct", formInfo)
            .then(res => {
                console.log("Response: ", res)

                if(res.data.error){
                    console.log("Response Errors: ", res.data.error.errors)
                    setErrors(res.data.error.errors)
                }
                else{ 
                    setTitle("");
                    setPrice("");
                    setDescription("");
                }

            })
            .catch(err=>console.log("Error: ", err))
    }
        return (
            <div>
                <form onSubmit={addProduct}>
                    <div className='form-group'>
                        <label htmlFor="">Title: </label>
                        <input className='form-control' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        <p className="text-danger">{errors.title?.message}</p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Price: </label>
                        <input className='form-control' type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        <p className="text-danger">{errors.price?.message}</p>

                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Description: </label>
                        <input className='form-control' type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <p className="text-danger">{errors.description?.message}</p>

                    </div>
                    <input type="submit" value="Add Product" className='btn btn-success mt-2' />
                </form>
            </div>
        );
}

export default NewProduct;
