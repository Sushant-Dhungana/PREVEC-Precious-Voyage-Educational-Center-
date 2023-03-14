import React from 'react'
import bannerContact from '../images/banner.png'
import '../styles/contactus.css'
import { IoCall } from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import {ImLocation,ImWhatsapp} from 'react-icons/im'

const ContactUs = () => {
    return (
        <div>
            <div className="banner_main">
                <div className="banner">
                    <img src={bannerContact} alt="information" />
                    <h4>Contact Us</h4>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 appointment_content">
                        <h4>Book Appointment To <span>Get Counselling Form Us</span></h4>
                        <div className="after_line_appointment"></div>
                        <p>Be Sure We Don't Dissapoints Our Students</p>
                    </div>
                    <div className="col-md-12 form_cols">
                        <form className='book_appointment_form'>
                            <div className="book_fields">
                                <label htmlFor="fullname">Full Name<span>*</span></label>
                                <input type="text" name='fullname' required />
                                {/* {error?.fullname && <p className='error'>{error?.fullname}</p>} */}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="email">Email<span>*</span></label>
                                <input type="email" name='email' required />
                                {/* {error?.email && <p className='error'>{error?.email}</p>} */}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="phone">Phone Number<span>*</span></label>
                                <input type="tel" name='phone' required />
                                {/* {error?.phone && <p className='error'>{error?.phone}</p>} */}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="address">Address</label>
                                <input type="text" name='address' />
                                {/* {error?.address && <p className='error'>{error?.address}</p>} */}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="message">Message <span>(if any)</span></label>
                                <textarea name="message" id="message" cols="30" rows="5"></textarea>
                                {/* {error?.query && <p className='error'>{error?.query}</p>} */}
                            </div>
                            <div className="submit_button_abroad">
                                <button type='submit' className='apply_now_abroad'>Book Now</button>
                            </div>
                        </form>
                        {/* <ToastContainer/> */}
                    </div>
                    <div className="col-md-12 address_col">
                        <div className="contact_address">
                            <h4>Contact Info</h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            <div className="contact_individuals_main">
                                <div className="contact_individuals">
                                    <IoCall size={30} style={{ color: "#C75934" }} />
                                    <div className="individual_details">
                                        <h5>Contact</h5>
                                        <p>012345678</p>
                                    </div>
                                </div>
                                <div className="contact_individuals">
                                    <MdEmail size={30} style={{ color: "#C75934" }} />
                                    <div className="individual_details">
                                        <h5>Email</h5>
                                        <p>info@Example.Com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_individuals_main">
                                <div className="contact_individuals">
                                    <ImLocation size={30} style={{ color: "#C75934" }} />
                                    <div className="individual_details">
                                        <h5>Location</h5>
                                        <p>Bagabazar, 16-Pokhara</p>
                                    </div>
                                </div>
                                <div className="contact_individuals">
                                    <ImWhatsapp size={30} style={{ color: "#C75934" }} />
                                    <div className="individual_details">
                                        <h5>WhatsApp</h5>
                                        <p>info@Example.Com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="map_contact">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3182499204363!2d85.3156052155554!3d27.70745853209294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e34b2fb8b9%3A0x5d15f2ed30d392bb!2sPrecious%20Voyage%20Educational%20Centre%20(P)%20Ltd!5e0!3m2!1sen!2snp!4v1678783971303!5m2!1sen!2snp" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs