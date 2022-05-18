import React, { useState } from 'react';
import axios from "axios";

const NewProduct = () => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");

    const addProduct = (e) => {
        e.preventDefault();

        let formInfo = {title, price, description}

        axios.post("http://localhost:8000/api/makeProduct", formInfo)
            .then(res => {
                console.log("Response: ", res)
            })
            .catch(err=>console.log("Error: ", err))
    }
        return (
            <div>
                <form onSubmit={addProduct}>
                    <div className='form-group'>
                        <label htmlFor="">Title: </label>
                        <input className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Price: </label>
                        <input className='form-control' type="number" onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Description: </label>
                        <input className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <input type="submit" value="Add Product" className='btn btn-success mt-2' />
                </form>
            </div>
        );
}

export default NewProduct;
