import React, { useState } from 'react';
    
    
const Menu = ()=>{

        let[firstName, setFirstName] = useState("");
        let[lastName, setLastName] = useState("");
        let[email, setEmail] = useState("");
        let[password, setPassword] = useState("");
        let[con_password, setCon_Password] = useState("");

        return (
                <div>
                <form className='container'>
                    <div className='form-group'>
                        <label htmlFor="">First Name: </label>
                        <input type="text" onChange={(e)=>setFirstName(e.target.value)} name="firstName" id="" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Last Name: </label>
                        <input type="text" onChange={(e)=>setLastName(e.target.value)} name="lastName" id="" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Email: </label>
                        <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" id="" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Password: </label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Confirm Password: </label>
                        <input type="password" onChange={(e)=>setCon_Password(e.target.value)} name="con_password" id="" />
                    </div>
                </form>
                <hr />
                <h3>Your Form Data:</h3>
                <p>Name is: {firstName} {lastName}</p>
                <p>Email is: {email}</p>
                <p>Password is: {password}</p>
                <p>Confirmation Password is: {con_password}</p>
                {
                    password===con_password? <p>Passwords Match!</p>: <p>Passwords do NOT match!</p>
                }
            </div>
        )
    }

export default Menu;
