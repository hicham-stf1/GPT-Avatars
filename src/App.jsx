import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './layout';

function App() {

  return (
    <Router>
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<Layout><LandingPage /></Layout>} />
      {/* <Route path="/about" element={<Layout><About /></Layout>} /> */}
    </Routes>
  </Router>
  )
}

export default App
