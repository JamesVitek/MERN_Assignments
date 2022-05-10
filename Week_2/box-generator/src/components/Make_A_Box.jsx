import React, { useState } from 'react';
    
    
const BoxGenerator = ()=> {
    let [color, setColor] = useState();
    let [size, setSize] = useState();

    let [boxList, setBoxList] = useState([]);

    const submitBox = (e)=>{
        e.preventDefault();

        let box = {color, size}
                
        setBoxList([...boxList, box])

        setColor("");
        setSize("");
    }

    return(
        <>
            <form onSubmit={submitBox}>
                <div className='form-group'>
                    <label htmlFor=''>Color: </label>
                    <input onChange={(e)=>(setColor(e.target.value))} type="text" className='form-control' value={color}/>
                </div>
                <div className='form-group'>
                    <label htmlFor=''>Size: </label>
                    <input onChange={(e)=>(setSize(e.target.value))} type="text" className='form-control' value={size }/>
                </div>
                <input type="submit" value="Create Box" className='btn btn-danger mt-2' />
            </form>
            <hr />
            <div className="flex align-items-center">
                {
                    boxList.map((box, idx)=>{
                        return (
                            <div className='m-2' style={{backgroundColor: box.color, width: box.size+"px", height: box.size+"px"}}></div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BoxGenerator;
