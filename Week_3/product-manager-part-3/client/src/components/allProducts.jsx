import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

const AllProducts = (props) => {

    const [allProducts, setAllProducts ] = useState([]);

    const [toggle, setToggle] = useState(false)

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log("Response: ", res.data.results);
            setAllProducts(res.data.results);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    },[toggle, props.newProductToggle])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then(res=>{
            console.log("Response: ", res);
            setToggle(!toggle);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    }

    return(
        <div>
            <h2>All Products:</h2>
            {
                allProducts.map((productObj, idx) => {
                    return (
                        <div key = {productObj._id} className="card mx-auto m-5" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/viewProduct/${productObj._id}`}> {productObj.title}</Link></h5>
                                <h6 className="card-subtitle mb-2 text-muted">{productObj.description}</h6>
                                <p className="card-number">{formatter.format(productObj.price)}</p>
                                <p><Link to={`/editProduct/${productObj._id}`} className="btn btn-info">Edit {productObj.title}</Link></p>
                                <button onClick={()=>{deleteProduct(productObj._id)}} className="btn btn-danger">Delete {productObj.title}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default AllProducts;