import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home'
import NotifyAll from './NotifyAll'
import Spinner from './Spinner'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notifyAll" element={<NotifyAll/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
