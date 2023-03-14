import React from 'react'
import bannerApplynow from '../images/banner.png'
import '../styles/bookappointment.css'

const ApplyNowTop = () => {
    return (
        <div>
            <div className="banner_main">
                <div className="banner">
                    <img src={bannerApplynow} alt="appointment" />
                    <h4>Apply Now</h4>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 form_cols">
                        <form className='book_appointment_form'>
                            <div className="book_fields">
                                <label htmlFor="fullname">Full Name<span>*</span></label>
                                <input type="text" name='fullname' required />
                            </div>
                            <div className="book_fields">
                                <label htmlFor="email">Email<span>*</span></label>
                                <input type="email" name='email' required />
                            </div>
                            <div className="book_fields">
                                <label htmlFor="phone">Phone Number<span>*</span></label>
                                <input type="tel" name='phone' required />
                            </div>
                            <div className="book_fields">
                                <label htmlFor="address">Address</label>
                                <input type="text" name='address' />
                            </div>
                            <div className="book_fields">
                                <label htmlFor="interested_in">Address</label>
                                <input type="text" name='address' />
                            </div>
                            <div className="book_fields">
                                <label htmlFor="english_score">Ielts/Toefl Score</label>
                                <input type="text" name='english_score' />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="book_fields">
                                        <label htmlFor="slc">Slc Score</label>
                                        <input type="text" name='slc_score' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="book_fields">
                                        <label htmlFor="plus2">+2 Score</label>
                                        <input type="text" name='plus2_score' />
                                    </div>
                                </div>
                            </div>
                            <div className="submit_button_abroad">
                                <button type='submit' className='apply_now_abroad'>Apply Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyNowTop