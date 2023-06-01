import React from 'react'
import './App.css'
import Leaderboard from './components/Leaderboard'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Table from './components/Table'
import Form from './components/Form'
import ParticipantsProvider from './context/ParticipantsContext'

function App() {

  return (
    <ParticipantsProvider>
    <div className="App">
      <Routes>
        <Route path='/' element={<Leaderboard />} />
        <Route path='/table' element={<Table />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      <Navbar />
    </div>
    </ParticipantsProvider>
  )
}

export default App
