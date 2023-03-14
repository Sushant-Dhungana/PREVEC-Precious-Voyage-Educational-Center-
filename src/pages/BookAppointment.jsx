import React from 'react'
import bannerAppointment from '../images/banner.png'
import '../styles/bookappointment.css'
import axiosBaseURL from '../baseUrl'
import { toast, ToastContainer } from 'react-toastify'
import {MdContactPhone} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import {IoCall} from 'react-icons/io5'
import {BiMailSend} from 'react-icons/bi'


const BookAppointment = () => {
    const initialState= {
        fullname: '',
        email: '',
        phone: '',
        address: '',
        interest_in: '',
        appointment_date: '',
        query: '',
    }
    const [appointmentData, setAppointmentData] = React.useState(initialState);
    const [error, setError] = React.useState(false);
    const { fullname, email, phone, address, interest_in, appointment_date, query } = appointmentData;
    const handleChange = (e) => {
        setAppointmentData({
            ...appointmentData,
            [e.target.name]: e.target.value
        });
    }
    var bodyFormData = new FormData();
    Object.entries(appointmentData).forEach(([key, value]) => {
        bodyFormData.append(key, value);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosBaseURL.post('/api/appointment', bodyFormData).then((res) => {
            toast.success("Appointment Booked Successfully")
            console.log(res)
            setAppointmentData(initialState)
            setError(false);
        }
        ).catch((err) => {
            console.log(err)
            setError(err?.response?.data?.errors)
            toast.error("Please Fill All Fields")
        });
    }

    return (
        <div>
            <div className="banner_main">
                <div className="banner">
                    <img src={bannerAppointment} alt="appointment" />
                    <h4>Book Appointment</h4>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 appointment_content">
                        <h4>Book Appointment To <span>Get Counselling Form Us</span></h4>
                        <div className="after_line_appointment"></div>
                        <p>Be Sure We Don't Dissapoints Our Students</p>
                    </div>
                    <div className="col-md-8 form_cols">
                        <form className='book_appointment_form' onSubmit={handleSubmit}>
                            <div className="book_fields">
                                <label htmlFor="fullname">Full Name<span>*</span></label>
                                <input type="text" name='fullname' required value={fullname} onChange={handleChange} />
                                {error?.fullname && <p className='error'>{error?.fullname}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="email">Email<span>*</span></label>
                                <input type="email" name='email' required value={email} onChange={handleChange}/>
                                {error?.email && <p className='error'>{error?.email}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="phone">Phone Number<span>*</span></label>
                                <input type="tel" name='phone' required value={phone} onChange={handleChange}/>
                                {error?.phone && <p className='error'>{error?.phone}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="address">Address</label>
                                <input type="text" name='address'  value={address} onChange={handleChange}/>
                                {error?.address && <p className='error'>{error?.address}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="interest_in">Interested In</label>
                                <input type="text" name='interest_in' value={interest_in} onChange={handleChange} />
                                {error?.interest_in && <p className='error'>{error?.interest_in}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="datetime">Appointment Date</label>
                                <input type="date"  min={new Date().toISOString().split('T')[0]} name='appointment_date' value={appointment_date} onChange={handleChange} />
                                {error?.appointment_date && <p className='error'>{error?.appointment_date}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="query">Query <span>(if any)</span></label>
                                <textarea name="query" id="query" cols="30" rows="5" value={query} onChange={handleChange}></textarea>
                                {error?.query && <p className='error'>{error?.query}</p>}
                            </div>
                            <div className="submit_button_abroad">
                                <button type='submit' className='apply_now_abroad'>Book Now</button>
                            </div>
                        </form>
                        <ToastContainer/>
                    </div>
                    <div className="col-md-4 contact">
                        <div className="contact_details">
                            <div className="contact_head">
                                <MdContactPhone size={35} style={{color:"#cf6c4b"}}/>
                                <h5>Quick Contact</h5>
                                
                            </div>
                            <hr className='my_hr'/>
                            <div className="contact_data">
                                <ImLocation size={25}/>
                                <h6>Bagbazar,15-Kathmandu</h6>
                            </div>
                            <div className="contact_data">
                                <IoCall size={25}/>
                                <h6>+977-9804106809, 01415567, 02123456</h6>
                            </div>
                            <div className="contact_data">
                                <BiMailSend size={25}/>
                                <h6>Bagbazar,15-Kathmandu</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment