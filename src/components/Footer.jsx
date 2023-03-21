import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiOutlineCopyright } from "react-icons/ai"

const Footer = ({ footerData }) => {
  const footer = footerData?.setting;
  const studyAbroad = footerData?.abroads;
  const preparation = footerData?.preparation;
  return (
    <div>
      <div className="footer_main">
        <div className="container footer_container">
          <div className="row">
            <div className="col-md-3 quick_links">
              <h5>Quick Links</h5>
              <Link to={'/aboutus'}>
                About Us</Link>
              <Link to={'/gallery'}>
                Gallery</Link>
              <Link to={'/information'}>
                Information</Link>
              <Link to={'/messagefromceo'}>
                Message From CEO</Link>
              <Link to={'/contactus'}>
                Contact Us</Link>
            </div>
            <div className="col-md-3 footer_services">
              <h5>Services</h5>
              {studyAbroad && studyAbroad.map((item, index) => (
                <Link to={`/abroad-study/${item?.id}`} key={index}>
                  {item.title}</Link>
              ))}
              {
                preparation && preparation.map((item, index) => (
                  <Link to={`/preparation/${item?.slug}`} key={index}>
                    {item?.title}</Link>
                ))
              }
              <Link to={'/courses'}>
                Courses</Link>
            </div>
            <div className="col-md-3 other_links">
              <h5>Other Links</h5>
              <Link to={'/'}>
                Privacy Policy</Link>
              <Link to={'/'}>
                Terms and Conditions</Link>
                <Link to={'/bookappointment'}>
                  Book Appointment</Link>
                  <Link to={'/applynow'}>
                  Apply Now</Link>
            </div>
            <div className="col-md-3 map_section">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.27358663339!2d85.317794!3d27.707454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e34b2fb8b9%3A0x5d15f2ed30d392bb!2sPrecious%20Voyage%20Educational%20Centre%20(P)%20Ltd!5e0!3m2!1sen!2snp!4v1679289085192!5m2!1sen!2snp" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='footer'></iframe>
              <div className="social_media_links">
                {footer && footer.map((item, index) => (
                  <div className="social_links" key={index}>
                    <Link to={item?.facebook} target="_blank"><AiFillFacebook size={40} style={{ color: "#fff" }} onMouseOver={({ target }) => target.style.color = "#C75934"} onMouseOut={({ target }) => target.style.color = "#fff"}
                    /></Link>
                    <Link to={item?.instagram} target="_blank"><AiFillInstagram size={40} style={{ color: "#fff" }} onMouseOver={({ target }) => target.style.color = "#C75934"} onMouseOut={({ target }) => target.style.color = "#fff"}
                    /></Link>
                    <Link to={item?.twitter} target="_blank"><AiFillTwitterSquare size={40} style={{ color: "#fff" }} onMouseOver={({ target }) => target.style.color = "#C75934"} onMouseOut={({ target }) => target.style.color = "#fff"}
                    /></Link>
                  </div>
                ))
                }

              </div>
            </div>
            <hr className='my_hr'></hr>
            <div className="col-md-6 copy_right">
              <p><AiOutlineCopyright size={18} />&nbsp;&nbsp;Copyright 2023, PREVEC All Rights Reserved</p>
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
