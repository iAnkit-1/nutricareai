import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import FoodIntakeTracker from './components/FoodIntakeTracker/FoodIntakeTracker'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <FoodIntakeTracker/>
      <Routes>
        <Route path='/uome' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
