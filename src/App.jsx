import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Features from './pages/Features/Features'
import Contact from './pages/Contact/Contact'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/features' element={<Features />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
