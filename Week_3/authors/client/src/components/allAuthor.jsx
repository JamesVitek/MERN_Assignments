import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

const AllAuthors = (props) => {

    const [allAuthors, setAllAuthors] = useState([]);

    const [toggle, setToggle] = useState(false)

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("Response: ", res.data.results);
                setAllAuthors(res.data.results);
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [toggle, props.newAuthorToggle])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
            .then(res => {
                console.log("Response: ", res);
                setToggle(!toggle);
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }

    return (
        <div>
            <h4><Link to={`/makeAuthor`}>Add Author</Link></h4>
            <p>We Have Quotes By:</p>
                <table className="table-bordered">
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                        <th></th>
                    </tr>
                    {
                        allAuthors.map((authorObj, idx) => {
                            return (
                                <tr key={authorObj._id}>
                                    <td>{authorObj.author}</td>
                                    {/* <td><Link to={`/viewAuthor/${authorObj._id}`}> {authorObj.author}</Link></td> */}
                                    <td><Link to={`/editAuthor/${authorObj._id}`} className="btn btn-info">Edit</Link></td>
                                    <td><button onClick={() => { deleteAuthor(authorObj._id) }} className="btn btn-danger text-black" >Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
        </div>
    )
}
export default AllAuthors;