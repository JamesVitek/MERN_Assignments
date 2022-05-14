import React, { useState } from "react";
import { useHistory } from "react-router-dom"

const Main = () => {
    let [category, setCategory] = useState();
    let [id, setId] = useState();

    const history = useHistory();

    const search = (e)=> {
        e.preventDefault();

        history.push(`/${category}/${id}`);
    }

    return (
        <div className="container">
            <form action="" onSubmit={search}>
                <div className="d-flex justify-content-center">
                    <div className="m-2">
                        <label className="m-2" htmlFor="">Search for: </label>
                        <select name="" id="" onChange={(e)=>{setCategory(e.target.value)}} defaultValue={"default"}>
                            <option value="default" disabled>Select a Category</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="starships">StarShips</option>
                            <option value="species">Species</option>
                            <option value="films">Films</option>
                        </select>
                    </div>
                    <div className="m-2">
                        <label className="m-2" htmlFor="">ID: </label>
                        <input type="number" name="" id="" onChange={(e)=>{setId(e.target.value)}}/>
                    </div>
                    <input type="submit" name="" id="" value="Search" />
                </div>
            </form>

            <p></p>
        </div>
    )
}
export default Main;