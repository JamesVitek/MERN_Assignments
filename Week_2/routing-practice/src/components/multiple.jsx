import React from "react";
import { useParams } from "react-router";

const MultipleInput = () => {
    const {id, color1, color2} = useParams();
    console.log("Variables is: ", id);

    return(
        <>
            <div style = {{backgroundColor: color2}}>
                {
                    isNaN(id)?
                    <h1 style = {{color: color1}}>The Word is: {id}</h1>:
                    <h1 style = {{color: color1}}>The Number is: {id}</h1>
                }
            </div>
        </>
    )
}
export default MultipleInput;