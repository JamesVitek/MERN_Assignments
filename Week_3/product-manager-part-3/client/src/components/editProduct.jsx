import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Redirect, useHistory } from "react-router-dom";


const EditProduct = () => {

    const { id } = useParams();

    let [productInfo, setProductInfo] = useState({});
    
    const history = useHistory();

    let [errors, setErrors] = useState({})

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findProduct/${id}`)
        .then(res=>{
            console.log("Response: ", res.data.results[0]);
            setProductInfo(res.data.results[0]);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    },[])

    const changeHandler = (e)=> {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, productInfo)
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
                    <form onSubmit={submitHandler} action="">
                        <div className='form-group'>
                            <label htmlFor="">Title: </label>
                            <input className='form-control' name="title" type="text" value={productInfo.title} onChange={changeHandler}/>
                            <p className="text-danger">{errors.title?.message}</p>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Price: </label>
                            <input className='form-control' name="price" type="number" value={productInfo.price} onChange={changeHandler}/>
                            <p className="text-danger">{errors.price?.message}</p>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Description: </label>
                            <input className='form-control' name="description" type="text" value={productInfo.description} onChange={changeHandler}/>
                            <p className="text-danger">{errors.description?.message}</p>
                        </div>
                        <input type="submit" value="Update Product" className='btn btn-success mt-2' />
                    </form>
                </div>
        );
}

export default EditProduct;
