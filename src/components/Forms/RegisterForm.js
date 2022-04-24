import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

import Loading from '../UI/Loading'
import { register } from '../../actions/auth.actions'

export default function RegisterForm() {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [loading, setLoading] = useState(false);

    // if (isLoggedIn) {
    //     return <Navigate to="/user-dashboard" />
    // }

    const handleSubmit = async e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            console.warn('passwords do not match')
        } else {
            setLoading(true)

            dispatch(register({ name, email, password, confirmPassword})).then(() => {
                setLoading(false)
            }).catch(() => {
                setLoading(false)
            })
        }
    }

    return (
        <>
            {
                (loading) ? <Loading /> : 
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="name" 
                            type="text" 
                            placeholder="Username"
                            onChange={e => setName(e.target.value)} 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="text" 
                            placeholder="Email Address"
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            placeholder="******************"
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input 
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password_confirm" 
                            type="password" 
                            placeholder="******************"
                            onChange={e => setConfirmPassword(e.target.value)} 
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register for Beta
                        </button>
                    </div>
                </form>
            }
        </>
    )
}
