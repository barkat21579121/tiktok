import React, { useState } from 'react'
import '../SignUp/signIn.css'
import Navbar from '../Navbar/Navbar'

const SignIn = () => {
    const [input , setInput]= useState('');
    const [pass , setPass]= useState('');
    const [birth , setBirth]= useState('');



    const handleSubmit = (e)=>{
        e.preventDefault()
        const values = {
            input ,pass,birth
        }
        setInput('');
        setPass('');
        setBirth('');
        console.log(values)
    }

    return (<>
    <Navbar/>
    <div className='container' onSubmit={handleSubmit}>
        <form className='main' >
            <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={input} name="email" required onChange={(e)=>setInput(e.target.value)} />

    <label htmlFor="password">Password:</label>
    <input type="password" id="password" value={pass} name="password" required onChange={(e)=>setPass(e.target.value)}/>

    <label  htmlFor="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday" value={birth} required onChange={(e)=>setBirth(e.target.value)}/>

    <button type="submit">Sign Up</button>

        </form>
<div className='terms'><input  className='checkbox' type='checkbox' placeholder=''/>
<p>By continuing, you agree to TikTok’s Terms of Service and confirm that you have read TikTok’s Privacy Policy.</p></div>
<div className='alreadyAccount ' >
    <p>Already Have an Account</p>
<a href='/'> Sign In</a>
</div></div>
</>
    )
}

export default SignIn