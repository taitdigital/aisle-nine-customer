import React from 'react'
import useToken from '../../services/useToken'

const API_URL = 'http://localhost:8000/api/logout'

async function logoutUser(token) {
    return fetch(API_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({})
    }).then(data => data.json())
}

export default function Preferences({ deleteToken }) {

  const { token } = useToken()

  const handleLogout = async (e, token) => {
    e.preventDefault()
    await logoutUser(token);
    sessionStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div>
        <h2>Preferences</h2>
        <button onClick={(e) => { handleLogout(e, token) }}>log out</button>
    </div>
  );
}