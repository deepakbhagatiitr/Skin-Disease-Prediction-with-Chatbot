import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/HomePage/Home'
import Blog from './components/Blog/Blog'
import AboutUs from './components/AboutUs/AboutUs'
import UploadPhoto from './components/UploadPhotoSection/UploadPhoto'
import ChatBox from './components/ChatBot/ChatBox'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/UploadPhoto" element={<UploadPhoto />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
