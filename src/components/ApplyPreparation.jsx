import React from 'react'
import { FiMail } from "react-icons/fi"
import { toast, ToastContainer } from 'react-toastify';
import axiosBaseURL from '../baseUrl';

const ApplyPreparation = ({id}) => {
    const initialState = {
        fullname: '',
        email: '',
        address: '',
        phone: '',
        country: '',
    }
    const [error, setError] = React.useState(false);
    const [applyPreparation, setApplyPreperation] = React.useState(initialState);
    const { fullname, email, address, phone, country } = applyPreparation;
    const handleChange = (e) => {
        setApplyPreperation({
            ...applyPreparation,
            [e.target.name]: e.target.value
        });
    }

    var bodyFormData = new FormData();
    Object.entries(applyPreparation).forEach(([key, value]) => {
        bodyFormData.append(key, value);
    });
 

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosBaseURL.post(`/api/preparation/${id}`, bodyFormData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                (res) => {
                    toast.success("Applied Successfully")
                    console.log(res)
                    setApplyPreperation(initialState)
                    setError(false);
                }
            )
            .catch((res) => {
                console.log(res)
                setError(res?.response?.data?.errors)
                toast.error("Please Fill All Fields")
            });
    }
    return (
        <div className='apply_preprn_main'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="apply_online_form">
                            <div className="icon_apply">
                                <div className="icon_main">
                                    <FiMail style={{ color: "black", marginTop:"3px" }} />
                                </div>
                                <h4>Apply online</h4>
                            </div>
                            <form className='apply_online' onSubmit={handleSubmit}>
                                <div className="fields">
                                    <label htmlFor="fullname">Name<span>*</span></label>
                                    <input type="text" name='fullname' required value={fullname} onChange={handleChange} />
                                    {error?.fullname && <p className="error">{error.fullname}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="email">Email<span>*</span></label>
                                    <input type="email" name='email' required value={email} onChange={handleChange}/>
                                    {error?.email && <p className="error">{error.email}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name='address' value={address} onChange={handleChange} />
                                    {error?.address && <p className="error">{error.address}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="address">Phone <span>*</span></label>
                                    <input type="tel" name='phone' required value={phone} onChange={handleChange} />
                                    {error?.phone && <p className="error">{error.phone}</p>}
                                </div>
                                <div className="fields">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name='country' value={country} onChange={handleChange} />
                                    {error?.country && <p className="error">{error.country}</p>}
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

export default ApplyPreparation