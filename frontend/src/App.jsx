import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Forum from './pages/forum/Forum.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </>
  )
}

export default App
