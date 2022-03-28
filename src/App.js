import logo from './logo.svg'
import './App.css'

import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences'
import useToken from './services/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/preferences" element={<Preferences/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
