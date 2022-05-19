import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const OneProduct = () => {

    const { id } = useParams();

    const history = useHistory();

    let [product, setProduct] = useState({});

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then(res=>{
            console.log("Response: ", res);
            history.push("/");
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findProduct/${id}`)
        .then(res=>{
            console.log("Response: ", res.data.results[0]);
            setProduct(res.data.results[0]);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    },[])

    return (
        <div className="mt-5">
            <h3>Title: {product.title}</h3>
            <p>Price: {formatter.format(product.price)}</p>
            <p>Description: {product.description}</p>
            <button onClick={deleteProduct} className="btn btn-danger decoration-none">Delete</button>
        </div>
    );
}

export default OneProduct;
