import React from 'react'
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home  from './pages/Home';
import Footer from './components/Footer';
import Services from './pages/Services';
import TopBar from './components/TopBar';
const App = () => {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

