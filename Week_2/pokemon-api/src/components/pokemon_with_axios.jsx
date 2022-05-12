import React, { useState } from "react";
import axios from "axios";

const PokemonWithAxios = () => {
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            console.log("Response: ", response.data.results);
            setPokemonList(response.data.results);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <div>
            <button className = "m-2" onClick={getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, idx)=>{
                    return (
                        <div>
                            <h1>{pokemon.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PokemonWithAxios;