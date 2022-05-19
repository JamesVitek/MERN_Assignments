import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


const OneProduct = () => {

    const { id } = useParams();

    let [product, setProduct] = useState({});

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

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
        </div>
    );
}

export default OneProduct;
