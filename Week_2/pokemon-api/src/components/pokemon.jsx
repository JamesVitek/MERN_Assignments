import React, { useState } from "react";

const Pokemon = () => {
    let [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            return response.json(10);
        }).then(response => {
            console.log("Response: ", response.results);
            setPokemonList(response.results);
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
export default Pokemon;