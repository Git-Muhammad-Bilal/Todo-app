import React from 'react'
import UserModal from '../../modals/UserModal'
import '../../styles/auth.css'
import Auth from './auth';

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

  }
]

export default function Login({setEmail}) {

  let userModal = new UserModal()
  
  return (
      <Auth 
      fields={fields}  
      userApi = {userModal.getUser} 
      btnText = {'Login'} 
      linkUrl = {'/SignUp'} 
      setEmail = {setEmail}
      />
  )
}















































































// import React, { useState } from 'react'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import UserModal from '../../actions/UserModal'
// import '../../styles/auth.css'
// import { useForm } from "react-hook-form";

// const fields = [
//   {
//     type: 'text',
//     name: 'email',
//     placeholder: 'email',
//     enable: false

//   },
//   {
//     type: 'text',
//     name: 'password',
//     placeholder: 'password',
//     enable: true
//   }
// ]

// export default function Login() {
//   const {
//     register,
//     handleSubmit, 
//     setError,
//     watch,
//     formState:{errors, isSubmitting}
//   } = useForm()
//  console.log(errors,'erros');
//   const navigate = useNavigate();
//   let userModal = new UserModal()
//   let token = localStorage.getItem('jwtToken')
  
//   if (token) {
//     return <Navigate  to='/todos' />
//   }

// const loginUser = async (data) => {
//     console.log(data,'data');
   
//   let d = await userModal.getUser(data)
//     if (d.error) {
//       setError('root',{
//            message:d.error
//         })
//     } else {
//       navigate('/todos')

//     }

//   }
  
//   let inpFields = fields.map((inp, index) => {
//     const { placeholder, name, type } = inp
//     return <div className={name} key={index}>
//     <input
//         style={{ border: errors[name] ? '2px solid red' : 'none' }}
//         type={type}
//         placeholder={placeholder}
//         name={name}
//         {...register(name ,{
//            required:`${name} is required`, 
//            minLength:{
//               value:name === 'password' && 8,
//               message:name === 'password' && 'Atleast 8 characters'
//            } 
//         }
//         )}
        
//      />  
//          {errors[name] && <p className='required'>{errors[name]?.message} </p>}
//         </div>
//   })
  
//   return (
//     <div className="auth-container">
//       <div className='auth'>

//         <h1 style={{ color: 'white' }}>Don't forget Todo </h1>
//       <form onSubmit={handleSubmit(loginUser)}>
//         {inpFields}        
//         <div className="lgn-btn">
//           <button onClick={loginUser}>{isSubmitting?'...loading':'Login'}</button>
//           <Link to='/signUp'>
//             <button>Sign Up</button>
//           </Link>
//         </div>
//        </form>
//         <div className='error'>
//           {errors.root ? <h3 style={{ color: 'red' }}>{errors.root.message}</h3> : null}
//         </div>
//       </div>
//     </div>
//   )
// }






















        // <div className="email">
        //   <input
        //     style={{ border: reqEmaTrue ? '2px solid red' : 'none' }}
        //     type="text"
        //     placeholder='email'
        //     name='email'
        //     value={user.email}
        //     onChange={(e) => handlerUserLogin(e)}
        //     />
        //   <p className='required' style={{ display: reqEmaTrue ? 'block' : 'none' }} >email is required</p>
        // </div>
        // <div className="password">
        //   <input
        //     style={{ border: reqPassTrue ? '2px solid red' : 'none' }}
        //     type="text"
        //     placeholder='password'
        //     name='password'
        //     value={user.passwor}
        //     onChange={(e) => handlerUserLogin(e)}
        //     onKeyDown={(e) => {
        //       if (e.key === 'Enter') {
        //         loginUser()
        //       }
        //     }}
        //   />

        //   <p className='required' style={{ display: reqPassTrue ? 'block' : 'none' }}>password is required</p>

        // </div>
              // const showInputRequiredFieldError = () => {
              //   if (!user.email || !user.password || reqEmaTrue || reqPassTrue) {
              //     setRquiredFieldError(() => {
              //       return {
              //         email: !user.email,
              //         password: !user.password,
              //       }
            
              //     })
              //     return true
              //   }
              //   return false;
              // }