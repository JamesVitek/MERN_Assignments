import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

const LukeSkywalker = () => {
    let {category, id} = useParams();
    let [detail, setDetail] = useState({});

    let [error, setError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response => {
            console.log("Response: ", response.data);
            setDetail(response.data);
            setError(false)
        }).catch(err=>{
            console.log(err);
            setError(true)
        });

    },[id])

    return (
        <div>
            {
                error == true?
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg" width="200px" alt="" />
                    {/* {
                        setError(false)
                    } */}
                </div>
                :category == "people"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <h1>Height: {detail.height}</h1>
                    <h1>Mass: {detail.mass}</h1>
                    <h1>Gender: {detail.gender}</h1>
                </div>
                :category == "planets"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <h1>Climate: {detail.climate}</h1>
                    <h1>Terrain: {detail.terrain}</h1>
                    <h1>Population: {detail.population}</h1>
                </div>
                :category == "vehicles"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <h1>Model: {detail.model}</h1>
                    <h1>Passengers: {detail.passengers}</h1>
                    <h1>Manufacturer: {detail.manufacturer}</h1>
                </div>
                :category == "films"?
                <div>
                    <h1>Title: {detail.title}</h1>
                    <h1>Episode: {detail.episode_id}</h1>
                    <h1>Director: {detail.director}</h1>
                    <h1>Release Date: {detail.release_date}</h1>
                </div>
                :category == "starships"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <h1>Model: {detail.model}</h1>
                    <h1>Passengers: {detail.passengers}</h1>
                    <h1>Cargo Capacity: {detail.cargo_capacity}</h1>
                </div>
                :category == "species"?
                <div>
                    <h1>Name: {detail.name}</h1>
                    <h1>Classification: {detail.classification}</h1>
                    <h1>Average Height: {detail.average_height}</h1>
                    <h1>Average Lifespan: {detail.average_lifespan}</h1>
                </div>
                :
                <div>
                    <h1>Not a category</h1>
                </div>
            }
        </div>
    )
}
export default LukeSkywalker;