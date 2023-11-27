import React, { useState } from 'react'
import '../home/home.css'
import Navbar from '../Navbar/Navbar'




const Home = () => {
  const [input ,setInput ]= useState('');
  const [pass , setPass]= useState('');
   const handlleSubmit =(e)=>{
    e.preventDefault()
const user ={
  input , pass
}
setInput('');
setPass('');
console.log(user)
   }

  return (<>
  <Navbar/>
    <form className='main' onSubmit={handlleSubmit}>
      <input type='text' placeholder=' Enter User Name' required  value={input} onChange={(e)=>setInput(e.target.value)}/>
      <input type='password' placeholder='Enter Password' required value={pass} onChange={(e)=>setPass(e.target.value)} />


      <button type='submit'> Sigin in </button>

    </form>
    <div className='alreadyAccountExist'>
      <p>Don’t have an account?
      </p><a  href='/signUp'>Sign Up</a>
    </div>
  </>






  )
}

export default Home