import React from 'react'
import { HomeIcon, BeakerIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from '../Logout/Logout'

export default function Home() {

  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <header className="flex items-center justify-between px-5 py-5 bg-gray-700 text-white text-center fixed top-0 left-0 w-screen">
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
        {
          (currentUser) ? 
            <Logout /> : 
            <Link to="/login" className="flex">Login</Link>
        }
    </header>
  );
}

