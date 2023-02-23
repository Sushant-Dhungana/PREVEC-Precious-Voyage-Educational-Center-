import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Services from './pages/Services';
import TopBar from './components/TopBar';
import "./styles/button.css"
const App = () => {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

