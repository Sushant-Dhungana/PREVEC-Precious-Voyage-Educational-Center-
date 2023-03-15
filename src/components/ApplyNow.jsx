import React from 'react';
import { FiMail } from "react-icons/fi";
import '../styles/applyNow.css';
import axiosBaseURL from '../baseUrl';
import { toast, ToastContainer } from 'react-toastify';

const ApplyNow = (props) => {
    const [applyOnline, setApplyOnline] = React.useState({
        fullname: '',
        email: '',
        address: '',
        english_score_type: '',
        english_score: '',
        message: '',
        phone_number: '',
    });
    const [error, setError] = React.useState(false);
    const { fullname, email, address, english_score_type, english_score, message, phone_number } = applyOnline;

    const handleChange = (e) => {
        setApplyOnline({
            ...applyOnline,
            [e.target.name]: e.target.value
        });
    }

    var bodyFormData = new FormData();
    Object.entries(applyOnline).forEach(([key, value]) => {
        bodyFormData.append(key, value);
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosBaseURL.post(`/api/abroad-study/${props.id}`, bodyFormData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                (res) => {
                    toast.success("Applied Successfully")
                    console.log(res)
                    setApplyOnline({
                        fullname: '',
                        email: '',
                        address: '',
                        english_score_type: '',
                        english_score: '',
                        message: '',
                        phone_number: '',
                    })
                    setError(" ")
                }
            )
            .catch((res) => {
                setError(res?.response?.data?.errors)
                toast.error("Please Fill All Fields")
            });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="apply_online_form">
                            <div className="icon_apply">
                                <div className="icon_main">
                                    <FiMail style={{ color: "black" }} />
                                </div>
                                <h4>Apply online</h4>
                            </div>
                            <form className='apply_online' onSubmit={handleSubmit} >
                                <div className="fields">
                                    <label htmlFor="fullname">Name<span>*</span></label>
                                    <input type="text" name='fullname' required value={fullname} onChange={handleChange} />
                                    {error?.fullname && <p className="error">{error.fullname}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="email">Email<span>*</span></label>
                                    <input type="email" name='email' required value={email} onChange={handleChange} />
                                    {error?.email && <p className="error">{error.email}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name='address' required value={address} onChange={handleChange} />
                                    {error?.address && <p className="error">{error.address}</p>}
                                </div>
                                <div className="fields">
                                    <label>
                                        Select Score Type:
                                        <select
                                            name="english_score_type"
                                            value={english_score_type}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="itels">IELTS</option>
                                            <option value="Toefl">TOEFL</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="fields">
                                    <label htmlFor="ielts">Ielts/Toefl Score<span>*</span></label>
                                    <input type="text" name='english_score' required value={english_score} onChange={handleChange} />
                                    {error?.english_score && <p className="error">{error.english_score}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="phone">Phone no<span>*</span></label>
                                    <input type="tel" name='phone_number' required value={phone_number} onChange={handleChange} />
                                    {error?.phone_number && <p className="error">{error.phone_number}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="message">Message (if any)</label>
                                    <textarea name="message" cols="30" rows="2" required value={message} onChange={handleChange}></textarea>
                                </div>
                                <div className="submit_button_abroad">
                                    <button type='submit' className='apply_now_abroad'>Submit</button>
                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyNow