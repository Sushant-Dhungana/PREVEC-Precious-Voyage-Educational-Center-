import React from 'react'
import axiosBaseURL from '../baseUrl'
import "../styles/aboutus.css"
import banner from "../images/banner.png"

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = React.useState({})
  React.useEffect(()=>{
    axiosBaseURL.get("/api/about-us",{

    })
      .then(res => {
        setAboutUsData(res.data)
      }
      )
      .catch(err => console.log(err))

  },[]);
  console.log(aboutUsData)

  return (
    <div className="about_us_main">
      <div className="about_us_banner">
        <div className="banner">
        <img src={banner} alt="about banner" className='banner_image'/>
        <h4>About Us</h4>
        </div>
      </div>
    </div>
  )
}

export default AboutUs