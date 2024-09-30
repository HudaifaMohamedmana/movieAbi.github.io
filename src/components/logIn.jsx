import React from 'react'
import Form from './Form'
import { useState } from 'react'


function LogIn() {
    const [userLogedIn,setUserLogedIn] = useState(false)

    function logInHandle() {
      if (userLogedIn) {
        setUserLogedIn(false)
      }else{
        setUserLogedIn(true)
      }
    }
  return (
    <div>
        <Form />
        <img src="https://cdn-icons-png.flaticon.com/512/4208/4208408.png" alt="" className='faverit'/>
        {userLogedIn ? <button onClick={logInHandle}>logOut</button> : <button onClick={logInHandle}>logIn</button>}
    </div>
  )
}

export default LogIn