import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

const AllPets = (props) => {

    const [allPets, setAllPets] = useState([]);

    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log("Response: ", res.data.results);
                setAllPets(res.data.results);
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    }, [toggle, props.newPetToggle])

    allPets.sort((a, b) => (a.type > b.type) ? 1 : -1)

    // const deletePet = (id) => {
    //     axios.delete(`http://localhost:8000/api/deletePet/${id}`)
    //         .then(res => {
    //             console.log("Response: ", res);
    //             setToggle(!toggle);
    //         })
    //         .catch(err => {
    //             console.log("Error: ", err)
    //         })
    // }

    return (
        <div>
            <p><Link to={`/makePet`}>Add Pet to Shelter</Link></p>
            <h3>These Pets are looking for a good home!</h3>
                <table className="table-bordered">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                    {
                        allPets.map((petObj, idx) => {
                            return (
                                <tr key={petObj._id}>
                                    <td>{petObj.name}</td>
                                    <td>{petObj.type}</td>
                                    <td><Link to={`/viewPet/${petObj._id}`} className="btn btn-info">Details</Link></td>
                                    <td><Link to={`/editPet/${petObj._id}`} className="btn btn-secondary">Edit</Link></td>
                                    {/* <td><button onClick={() => { deletePet(petObj._id) }}className="btn btn-danger text-black" >Delete</button></td> */}
                                </tr>
                            )
                        })
                    }
                </table>
        </div>
    )
}
export default AllPets;