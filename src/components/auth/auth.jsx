import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import '../../styles/auth.css'

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    })
    .required()

export default function Auth({ fields, userApi, btnText, linkUrl }) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: yupResolver(schema)})

    const [showPass, setShowPass] = useState({
        password: false,
        confirmPassword: false
    })
    
    const navigate = useNavigate();
    
    
    let token = localStorage.getItem('todoJwtToken')
    let parsedTkn = JSON.parse(token)
    
    if (parsedTkn && parsedTkn[0]?.jwtToken) {
        return <Navigate to='/todos' />
    }

    const submitUser = async (data) => {
        let d = await userApi(data)
        if (d.error) {
            setError('root', {
                message: d.error
            })
        } else {
            navigate('/todos')
        }

    }

    let inpFields = fields.map((inp, index) => {

        const { placeholder, name, type, email, password, confirmPassword, autoComplete } = inp
        const hideShowPass = (password && showPass.password) || (confirmPassword && showPass.confirmPassword)

        return <div className={name} key={index}>
            <input
                autoComplete='on'
                style={{ border: errors[name] ? '2px solid red' : 'none' }}
                type={hideShowPass ? `text` : type}
                placeholder={placeholder}
                name={name}
                {...register(name)}

            />

            {(password || confirmPassword) &&
                <img
                    className='passhide'
                    src='hide.png'
                    onClick={() => setShowPass({ ...showPass, [name]: !showPass[name] })}
                />}

            {errors[name] && <p className='required'>{errors[name]?.message} </p>}
        </div>
    })


    return (
        <div className="auth-container">
            <div className='auth'>
                <h1 style={{ color: 'white' }}>Don't forget Todo </h1>
                <form onSubmit={handleSubmit(submitUser)}>
                    {inpFields}
                    <div className="lgn-btn">
                        <button type='submit'>{isSubmitting ? '...loading' : `${btnText}`}</button>
                        <Link to={linkUrl}>
                            {btnText === 'SignUp' ? 'Login' : 'SignUp'}
                        </Link>
                    </div>
                </form>
                <div className='error'>
                    {errors.root ? <h3 style={{ color: 'red' }}>{errors.root.message}</h3> : null}
                </div>
            </div>
        </div>
    )

}





