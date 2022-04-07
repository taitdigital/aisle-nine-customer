import React from 'react'
import { logout } from '../../actions/auth.actions'
import { useDispatch } from 'react-redux'
import { LogoutIcon } from '@heroicons/react/solid'


export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div className="flex items-center">
        <LogoutIcon className="h-8 w-8 pr-2" />
        <button onClick={(e) => { handleLogout(e) }}>
          log out
        </button>
    </div>
  );
}