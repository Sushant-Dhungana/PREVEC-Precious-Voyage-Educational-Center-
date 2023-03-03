import React,{useState} from 'react'
import "../styles/callback.css"
import mobile from "../images/mobile.png"
import axiosBaseURL from "../baseUrl";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Callback = () => {

    const [phone_number, setNumber] = useState("")
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    var bodyFormData = new FormData();
    bodyFormData.append('phone_number', phone_number);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(phone_number.match(phoneno)){
        axiosBaseURL.post("/api/get-call-back", bodyFormData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(console.log)
        .catch(console.error);
        toast.success("We will contact you with in 24 Hours")
        }else{
            toast.error("Please Enter Valid Number of 10 digits")
        }
    }

  return (
    <div>
        <div className="callback_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="callback_image">
                            <img src={mobile} alt="mobile" />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="callback_content">
                            <h2>Get a Callback From Our Experts</h2>
                            <form className='callback_form' onSubmit={handleSubmit}>
                                <input type="number" placeholder="Enter Your Number" name="phone_number" value={phone_number}  onChange={(e) => setNumber(e.target.value)} required maxLength={10}  minLength={10}/>
                                <button type='submit'>Request</button>
                                <ToastContainer />
                            </form>
                            </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Callback;