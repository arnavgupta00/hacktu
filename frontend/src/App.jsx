import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Forum from './pages/forum/Forum.jsx'
import ParentDetail from './pages/parentDetail/parentDetail.jsx'
import Leaderboard from './pages/leaderboard/leaderboard.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/forum" element={<Forum />} />
        <Route path="/parentDetail" element={<ParentDetail />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  )
}

export default App
