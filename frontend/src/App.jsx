import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './video.css';
import './text.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'
import Text from './pages/Text';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar">
      <Navbar/>
    </div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/video" element={<VideoPage/>}/>
            <Route path="/text" element={<Text/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
