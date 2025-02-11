import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/video" element={<VideoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
