import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Forum from './pages/forum/Forum.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/parent" element={<ParentHome />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
