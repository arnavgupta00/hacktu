import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Forum from './pages/forum/Forum.jsx'
import ParentHome from './pages/parenthome/parenthome.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/parent" element={<ParentHome />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </>
  )
}

export default App
