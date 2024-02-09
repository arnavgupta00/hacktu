import React, { useEffect } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Forum from './pages/forum/Forum.jsx'

import {Login} from './pages/login/login.jsx'
import {SignUp} from './pages/signup/signup.jsx'

import { storeObject } from './components/variableSet/variableSet.jsx'
import { Home } from './pages/home/home.jsx'
import ParentHome from './pages/parenthome/parenthome.jsx'




function App() {
  useEffect(() => {
    storeObject("Arnav", false)
  }, [])
  return (
    <>
      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
