import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About/About'

import Navbar from './Components/Navbar'

import "./App.scss"
import { Podcasts } from './Components/Podcasts'


export default function App() {
  return (
    <div className='Container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </Router>
    </div>
  )
}
