import React, { useEffect, useState } from "react";
import axios from "axios";

const AllProducts = () => {

    const [allProducts, setAllProducts ] = useState([]);

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
    },[])

    return(
        <div>
            <h2>All Products:</h2>
            {
                allProducts.map((productObj, idx) => {
                    return (
                        <div key = {productObj._id} className="card mx-auto m-5" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{productObj.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{productObj.description}</h6>
                                <p className="card-number">{formatter.format(productObj.price)}</p>
                                {/* <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default AllProducts;