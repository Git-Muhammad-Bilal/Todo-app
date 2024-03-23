import React from 'react'
import '../../styles/auth.css'
import Auth from './auth';
import UserModal from '../../modals/UserModal';


const fields = [
  {
    type: 'text',
    name: 'email',
    placeholder: 'email',
    email:'email'
    
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'password',
    password:'password',
    autoComplete:'on'
  },
  {
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'confirmPassword',
    confirmPassword:'confirmPassword',
    autoComplete:'on'
  }
]

export default function SignUp({setEmail}) {

    let userModal = new UserModal()
    return (
        <Auth 
        fields={fields}  
        userApi = {userModal.createUser} 
        btnText = {'SignUp'}  
        linkUrl = {'/'}
        setEmail ={setEmail}
        />
    )

}




