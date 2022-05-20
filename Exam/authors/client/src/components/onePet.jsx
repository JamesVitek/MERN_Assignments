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


const OnePet = () => {

    const { id } = useParams();

    const history = useHistory();

    let [pet, setPet] = useState({});

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/deletePet/${id}`)
        .then(res=>{
            console.log("Response: ", res);
            history.push("/");
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findPet/${id}`)
        .then(res=>{
            console.log("Response: ", res);
            setPet(res.data.results[0]);
        })
        .catch(err=>{
            console.log("Error: ", err)
        })
    },[])

    return (
        <div>
            <p><Link to={`/`} className="mt-2 justify-content-end">Back to Home</Link></p>
            <div className="d-flex justify-content-between my-4">
                <h4>Details about: {pet.name}</h4>
                <button onClick={deletePet} className="btn btn-danger decoration-none">Adopt {pet.name}</button>
            </div>
            <div className="box d-flex">
                <div className="spacer">
                    <p>Pet Type:</p>
                    <p>Description:</p>
                    <p>Skills:</p>
                </div>
                <div>
                    <p>{pet.type}</p>
                    <p>{pet.description}</p>
                    <div className="skills">
                        <ul>
                            <li>{pet.skill1}</li>
                            <li>{pet.skill2}</li>
                            <li>{pet.skill3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnePet;
