import React from 'react'
import bannerApplynow from '../images/banner.png'
import '../styles/bookappointment.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { toast, ToastContainer } from 'react-toastify';
import axiosBaseURL from '../baseUrl';

const ApplyNowTop = () => {
    const initialStates = {
        full_name: '',
        email: '',
        phone_number: '',
        address: '',
        interested_in: '',
        english_score: '',
        slc_score: '',
        plus2_score: '',
        bachelor_score: '',
        master_score: '',
    }

    const [applyNowData, setApplyNowData] = React.useState(initialStates);
    const { full_name, email, phone_number, address, interested_in, english_score, slc_score, plus2_score, bachelor_score, master_score } = applyNowData;
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    
    const handleChange = (e) => {
        setApplyNowData({
            ...applyNowData,
            [e.target.name]: e.target.value
        })
    }
    var bodyFormData = new FormData();
    Object.entries(applyNowData).forEach(([key, value]) => {
        bodyFormData.append(key, value);
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosBaseURL.post(`api/apply-now`, bodyFormData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                (res) => {
                    toast.success("Applied Successfully")
                    console.log(res)
                    setApplyNowData({
                        fullname: '',
                        email: '',
                        phone_number: '',
                        address: '',
                        interested_in: '',
                        english_score: '',
                        slc_score: '',
                        plus2_score: '',
                        bachelor_score: '',
                        master_score: '',

                    })
                    setError(" ")
                }
            )
            .catch((res) => {
                setError(res?.response?.data?.errors)
                toast.error("Please Fill All Fields")
                console.log(res)
            });
    }

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
                        <form className='book_appointment_form' onSubmit={handleSubmit}>
                            <div className="book_fields">
                                <label htmlFor="fullname">Full Name<span>*</span></label>
                                <input type="text" name='full_name' required value={full_name} onChange={handleChange}/>
                                {error?.full_name && <p className='error'>{error?.full_name}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="email">Email<span>*</span></label>
                                <input type="email" name='email' required value={email} onChange={handleChange} />
                                {error?.email && <p className='error'>{error?.email}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="phone">Phone Number<span>*</span></label>
                                <input type="tel" name='phone_number' required value={phone_number} onChange={handleChange}/>
                                {error?.phone_number && <p className='error'>{error?.phone_number}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="address">Address</label>
                                <input type="text" name='address' value={address} onChange={handleChange} />
                                {error?.address && <p className='error'>{error?.address}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="interested_in">Interested In</label>
                                <input type="text" name='interested_in' value={interested_in} onChange={handleChange}/>
                                {error?.interested_in && <p className='error'>{error?.interested_in}</p>}
                            </div>
                            <div className="book_fields">
                                <label htmlFor="english_score">Ielts/Toefl Score</label>
                                <input type="text" name='english_score' value={english_score} onChange={handleChange}/>
                                {error?.english_score && <p className='error'>{error?.english_score}</p>}
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="book_fields">
                                        <label htmlFor="slc">Slc Score</label>
                                        <input type="text" name='slc_score' value={slc_score} onChange={handleChange}/>
                                        {error?.slc_score && <p className='error'>{error?.slc_score}</p>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="book_fields">
                                        <label htmlFor="plus2">+2 Score</label>
                                        <input type="text" name='plus2_score' value={plus2_score} onChange={handleChange}/>
                                        {error?.plus2_score && <p className='error'>{error?.plus2_score}</p>}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                <Collapse in={open}>
                                        <div id="example-fade-text">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="book_fields">
                                                        <label htmlFor="bachelor_score">Bachelor score</label>
                                                        <input type="text" name='bachelor_score' value={bachelor_score} onChange={handleChange}/>
                                                        {error?.bachelor_score && <p className='error'>{error?.bachelor_score}</p>}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="book_fields">
                                                        <label htmlFor="master_score">Master score</label>
                                                        <input type="text" name='master_score' value={master_score} onChange={handleChange}/>
                                                        {error?.master_score && <p className='error'>{error?.master_score}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                                <div className="col-md-4">
                                    <Button
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-fade-text"
                                        aria-expanded={open}
                                        className='add_education'
                                    >{open ? '-Remove Education' : '+ Add Education'}
                                        </Button>
                                </div>
                            </div>
                            <div className="submit_button_abroad">
                                <button type='submit' className='apply_now_abroad'>Apply Now</button>
                            </div>
                        </form>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyNowTop