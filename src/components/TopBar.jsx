import React from 'react'
import '../styles/topbar.css'
import Logo from "../images/logo.png"
import { BsFillCalendarCheckFill } from 'react-icons/bs'
const TopBar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Logo} alt="logo" className='logo_top' />
                    </div>
                    <div className="col-md-6 top_second">
                        <div className="book_appointment">
                        <BsFillCalendarCheckFill size={30} color="#dc3545ba"/>
                        <a href='/'>Book Appointment</a>
                        </div>
                        <div className="event_registration">
                        <BsFillCalendarCheckFill size={30} color="#dc3545ba"/>
                        <a href='/'>Event Registration</a>
                        </div>
                    </div>
                    <div className="col-md-3 top_third">
                            <button className="apply_button">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
