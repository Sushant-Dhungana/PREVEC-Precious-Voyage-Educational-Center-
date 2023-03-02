import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare,AiOutlineCopyright } from "react-icons/ai"

const Footer = () => {
  return (
    <div>
      <div className="footer_main">
        <div className="container footer_container">
          <div className="row">
            <div className="col-md-3 quick_links">
              <h5>Quick Links</h5>
              <Link to={'/'}>
                Scholarships</Link>
              <Link to={'/'}>
                Courses</Link>
              <Link to={'/'}>
                Gallery</Link>
              <Link to={'/'}>
                Information</Link>
              <Link to={'/'}>
                Information</Link>
            </div>
            <div className="col-md-3 footer_services">
              <h5>Services</h5>
              <Link to={'/'}>
                Study In Japan</Link>
              <Link to={'/'}>
                Study In Australia</Link>
              <Link to={'/'}>
                Study In Canada</Link>
              <Link to={'/'}>
                Study In Europe</Link>
              <Link to={'/'}>
                Test Preperation</Link>
            </div>
            <div className="col-md-3 other_links">
              <h5>Other Links</h5>
              <Link to={'/'}>
                Book Appointment</Link>
              <Link to={'/'}>
                Apply Online</Link>
              <Link to={'/'}>
                Destinations</Link>
              <Link to={'/'}>
                Privacy Policy</Link>
              <Link to={'/'}>
                Terms and Conditions</Link>
            </div>
            <div className="col-md-3 map_section">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3176348385077!2d85.31731110048891!3d27.707477529278858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e34b2fb8b9%3A0x5d15f2ed30d392bb!2sPrecious%20Voyage%20Educational%20Centre%20(P)%20Ltd!5e0!3m2!1sen!2snp!4v1677734364811!5m2!1sen!2snp" title='precious voyage'></iframe>
              <div className="social_media_links">
                <Link to={'https://www.facebook.com/login/'} target="_blank"><AiFillFacebook size={40} style={{ color: "#fff" }} onMouseOver={({ target }) => target.style.color = "#C75934"} onMouseOut={({ target }) => target.style.color = "#fff"}
                /></Link>
                <Link to={'https://www.facebook.com/login/'} target="_blank"><AiFillInstagram size={40} style={{ color: "#fff" }} onMouseOver={({ target }) => target.style.color = "#C75934"} onMouseOut={({ target }) => target.style.color = "#fff"}
                /></Link>
                <Link to={'https://www.facebook.com/login/'} target="_blank"><AiFillTwitterSquare size={40} style={{ color: "#fff" }} onMouseOver={({ target }) => target.style.color = "#C75934"} onMouseOut={({ target }) => target.style.color = "#fff"}
                /></Link>
              </div>
            </div>
            <hr className='my_hr'></hr>
            <div className="col-md-6 copy_right">
              <p><AiOutlineCopyright size={20}/>&nbsp;&nbsp;Copyright 2023, PREVEC All Rights Reserved</p>
              </div>
              <div className="col-md-6 onviro">
              <p>Developed And Designed By <Link to={'https://onvirotech.com/'} target="_blank">OnviroTech Pvt. Ltd</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
