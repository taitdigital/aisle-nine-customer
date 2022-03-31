import React from 'react'
import { logout } from '../../actions/auth.actions'
import { useDispatch } from 'react-redux'

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div>
        <button onClick={(e) => { handleLogout(e) }}>log out</button>
    </div>
  );
}