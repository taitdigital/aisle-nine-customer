import React from 'react'
import { HomeIcon, BeakerIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { logout } from '../../actions/auth.actions'

export default function Home() {
  const dispatch = useDispatch()
  const { user: currentUser } = useSelector((state) => state.auth)

  const handleLogout = async e => {
    e.preventDefault()

    dispatch(logout()).then(() => {
        return <Navigate to="/login" />
    }).catch((err) => {
        console.warn('error', err)
    })
}

  return (
    <header className="flex items-center justify-between px-5 py-5 bg-gray-700 text-white text-center fixed top-0 left-0 w-screen z-10">
        <div></div>
        <ul className="flex">
          <li className="px-4">
            <Link to="/home" className="flex">
                <HomeIcon className="h-6 w-6 pr-2" />
                <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="flex">
                <BeakerIcon className="h-6 w-6 pr-2" />
                <span>Recipes</span>
            </Link>
          </li>
        </ul>        
        { currentUser 
        ? <div><button onClick={handleLogout}>Logout</button></div> 
        : <div className="flex"><Link to="/register" className="flex">Register</Link><span className="px-1">/</span><Link to="/login" className="flex">Login</Link></div> }
    </header>
  );
}

