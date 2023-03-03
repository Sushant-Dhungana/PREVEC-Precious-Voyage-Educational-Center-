import React from 'react'
import NavBar from '../components/NavBar';
import Logo from "../images/banner.png";
import "../styles/services.css"
const Services = () => {
  return (
    <div className='services_main'>
             <NavBar />
       <div className='services_banner'>
       <img src={Logo} alt="logo" className='logo_top' />
       </div>

    </div>
  )
}

export default Services
