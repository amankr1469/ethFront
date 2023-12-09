import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Admin from './Components/Admin'
import User from './Components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Navbar/>
     <Home/>
    </>
  )
}

export default App
