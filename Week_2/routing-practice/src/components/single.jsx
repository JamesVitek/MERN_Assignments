import React from "react";
import { useParams } from "react-router";

const SingleInput = () => {
    const {id} = useParams();
    console.log("Variables is: ", id);

    return(
        <>
            {
                isNaN(id)?
                <h1>The Word is: {id}</h1>:
                <h1>The Number is: {id}</h1>
            }
        </>
    )
}
export default SingleInput;