import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout({ lgednUser }) {

    let token = localStorage.getItem('todoJwtToken')
    function logout() {
        if (token) {
            localStorage.removeItem('todoJwtToken')
        }
    }
    return (
        <div className='lg-out'>
            <Link to='/' onClick={logout}>
                <button onClick={logout}>Logout</button>
            </Link>
            <div className='user-name'>
                <strong >{lgednUser}</strong>
            </div>
        </div>
    )
}
