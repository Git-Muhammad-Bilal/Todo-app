import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout({lgednUser}) {
      
    let token = localStorage.getItem('jwtToken')
    function logout() {
        if (token) {
            localStorage.removeItem('jwtToken')
        }
    }
    return (
    <div className='lg-out'>
       <Link to = '/' onClick={logout}>
        <button onClick={logout}>Logout</button>
       </Link> 
       <strong className='user-name'>{lgednUser}</strong>
    </div>
  )
}
