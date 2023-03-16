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
import Courses from './pages/Courses';
import Information from './pages/Information';
import IndividualInfo from './pages/IndividualInfo';
import BookAppointment from './pages/BookAppointment';
import ContactUs from './pages/ContactUs';
import ApplyNowTop from './pages/ApplyNowTop';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
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
        <Route path="/courses" element={<Courses/>} />
        <Route path="/information" element ={<Information/>}/>
        <Route path="/information/:id" element={<IndividualInfo/>} />
        <Route path="/bookappointment" element={<BookAppointment/>}/>
        <Route path="/contactus"  element={<ContactUs/>} />
        <Route path="/applynow" element={<ApplyNowTop/>} />
        <Route path="/events" element={<Events/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
      <Footer />
      </>
}
</div>
  )
}

export default App

