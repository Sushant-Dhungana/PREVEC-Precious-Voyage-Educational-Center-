import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Services from './pages/Services';
import TopBar from './components/TopBar';
import "./styles/button.css"
import axiosBaseURL from './baseUrl';
import NavBar from './components/NavBar';
import SpinnerMain from './components/Spinner';
import Abroad from './pages/Abroad';
import AboutUs from './pages/AboutUs';
import MessageCEO from './pages/MessageCEO';
import Preparation from './pages/Preparation';
const App = () => {
  const [indexData, setIndexData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosBaseURL.get("/api/index", {
    }).then((res) => {
      setIndexData(res.data);
      setLoading(false);
    })
  }, [setIndexData])
  // console.log(indexData);
  // const studyAbroad = homeData.abroads;

  return (
    <div className='body'>
    {
      loading? <SpinnerMain/> :
    
    <>
      <TopBar />
      <div className="nav_global">
      <NavBar navData={indexData} />
      </div>
      <Routes>
        <Route path="/" element={<Home homeData = {indexData} />} />
        <Route path="/services/:slug" element={<Services />} />
        <Route path="/abroad-study/:id" element={<Abroad/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path='/messagefromceo' element={<MessageCEO/>} />
        <Route path="/preparation/:slug" element={<Preparation/>} />
      </Routes>
      <Footer />
      </>
}
</div>
  )
}

export default App

