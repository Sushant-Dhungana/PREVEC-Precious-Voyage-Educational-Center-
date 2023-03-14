import React from 'react'
import '../styles/topbar.css'
import '../styles/responsive.css'
import Logo from "../images/logo.png"
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const TopBar = () => {
    return (
        <div className='topbar_main'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 logo_main">
                        <img src={Logo} alt="logo" className='logo_top' />
                    </div>
                    <div className="col-md-6 top_second">
                        <div className="book_appointment">
                        <BsFillCalendarCheckFill size={30} color="#dc3545ba"/>
                        <Link to='/bookappointment'>Book Appointment</Link>
                        </div>
                    </div>
                    <div className="col-md-3 top_third">
                            <Link to={"/applynow"} className="apply_button">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
