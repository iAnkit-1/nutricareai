import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
