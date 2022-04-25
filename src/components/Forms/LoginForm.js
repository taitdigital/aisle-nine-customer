import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

import Loading from '../UI/Loading'
import { login } from '../../actions/auth.actions'
import { getSavedRecipes, getUserMealplans, getShoppinglists } from '../../actions/user.actions'




export default function LoginForm() {
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        dispatch(login({ email, password })).then(() => {
            dispatch(getSavedRecipes())
            //dispatch(getUserMealplans())
            //dispatch(getShoppinglists())

            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }

    if (isLoggedIn) {
        return <Navigate to="/user-dashboard" />
    }

    return (
        <>
            {
                (loading) ? <Loading /> : 
                <form onSubmit={handleSubmit}>
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

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            }
        </>
    )
}

