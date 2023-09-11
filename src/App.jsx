import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home'
import NotifyAll from './NotifyAll'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifyAll" element={<NotifyAll />} />
        </Routes>
      </Router>
      <Toaster/>
    </>
  )
}

export default App
