import React, { useState } from 'react';
    
    
const ToDoList = ()=> {
    let [task, setTask] = useState();
    let [checked, setChecked] = useState(false);

    let [taskList, setTaskList] = useState([]);

    const submitBox = (e)=>{
        e.preventDefault();

        let taskItem = {task, checked}
                
        setTaskList([taskItem, ...taskList])

        setTask("");
    };

    const handleChange = (e, idx) => {

        let [...copyTaskList] = taskList;

        copyTaskList[idx].checked = e.target.checked;

        setTaskList(copyTaskList);
    };
    
    const handleDelete = (e, idx) => {

        let copyTaskList =taskList.filter((task, i) =>{
            return i != idx
        }
        )

        setTaskList(copyTaskList);
    };

    return(
        <>
            <form onSubmit={submitBox} className="container">
                <div className='form-group'>
                    <label htmlFor=''>To-Do: </label>
                    <input onChange={(e)=>(setTask(e.target.value))} type="text" className='form-control' value={task}/>
                </div>
                <input type="submit" value="Add To-Do" className='btn btn-success mt-2' />
            </form>
            <hr />
            <div className="flex align-items-center">
                {
                    taskList.map((taskItem, idx)=>{
                        return (
                            <div className='d-flex align-items-center justify-content-center m-2'>
                                <p className='m-2' style={{textDecoration: taskItem.checked? "line-through": "none"}}>{taskItem.task}</p>
                                <input type="checkbox" onChange={(e) => handleChange(e, idx)}/>
                                <button className='btn m-2 btn-danger' onClick={(e) => handleDelete(e, idx)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ToDoList;
