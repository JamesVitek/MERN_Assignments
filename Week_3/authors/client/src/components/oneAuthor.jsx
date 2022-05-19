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


const OneAuthor = () => {

    const { id } = useParams();

    const history = useHistory();

    let [author, setAuthor] = useState({});

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
        .then(res=>{
            console.log("Response: ", res);
            history.push("/");
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findAuthor/${id}`)
        .then(res=>{
            console.log("Response: ", res.data.results[0]);
            setAuthor(res.data.results[0]);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    },[])

    return (
        <div className="mt-5">
            <h3>Author: {author.author}</h3>
            {/* <p>Price: {formatter.format(Author.price)}</p>
            <p>Description: {Author.description}</p> */}
            <button onClick={deleteAuthor} className="btn btn-danger decoration-none">Delete</button>
        </div>
    );
}

export default OneAuthor;
