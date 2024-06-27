import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:question_id" element={<Detail/>}/>
    </Routes>      
  )
}

export default App
