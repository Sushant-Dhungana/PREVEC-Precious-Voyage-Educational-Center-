import React,{useState} from 'react'
import "../styles/callback.css"
import mobile from "../images/mobile.png"
import axiosBaseURL from "../baseUrl";

const Callback = () => {

    const [phone_number, setNumber] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosBaseURL.post('/api/get-call-back', phone_number)
      .then((response) => {
        setNumber(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    const handleChange = (e) => {
        setNumber(e.target.value)
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
                                <input type="tel" placeholder="Enter Your Number" name="phone_number" value={phone_number.name}  onChange={handleChange} required/>
                                <button type='submit'>Request</button>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Callback