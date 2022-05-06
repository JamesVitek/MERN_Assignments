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
                    {
                        firstName===""?null:<>
                        {
                            firstName.length < 2?<p>Name must be more than two characters!</p>:null
                        }
                        </>
                    }
                    <div className='form-group'>
                        <label htmlFor="">Last Name: </label>
                        <input type="text" onChange={(e)=>setLastName(e.target.value)} name="lastName" id="" />
                    </div>
                    {
                        lastName===""?null:<>
                        {
                            lastName.length < 2?<p>Name must be more than two characters!</p>:null
                        }
                        </>
                    }
                    <div className='form-group'>
                        <label htmlFor="">Email: </label>
                        <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" id="" />
                    </div>
                    {
                        email===""?null:<>
                        {
                            email.length < 5?<p>Email must be more than five characters!</p>:null
                        }
                        </>
                    }
                    <div className='form-group'>
                        <label htmlFor="">Password: </label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="" />
                    </div>
                    {
                        password===""?null:<>
                        {
                            password.length < 8?<p>Password must be more than eight characters!</p>:null
                        }
                        </>
                    }
                    <div className='form-group'>
                        <label htmlFor="">Confirm Password: </label>
                        <input type="password" onChange={(e)=>setCon_Password(e.target.value)} name="con_password" id="" />
                    </div>
                    {
                        con_password===""?null:<>
                        {
                            password===con_password? <p>Passwords Match!</p>: <p>Passwords do NOT match!</p>
                        }
                        </>
                    }
                </form>
                <hr />
            </div>
        )
    }

export default Menu;
