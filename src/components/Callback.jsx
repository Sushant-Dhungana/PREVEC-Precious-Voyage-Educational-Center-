// import React,{useState} from 'react'
// import "../styles/callback.css"
// import mobile from "../images/mobile.png"
// import axiosBaseURL from "../baseUrl";
// import axios from 'axios';

// const Callback = () => {

//     const [phone_number, setNumber] = useState("")

//     var bodyFormData = new FormData();
//     bodyFormData.append('phone_number', phone_number);

//     const handleSubmit = (e) => {
//         axios.post("http://192.168.1.12:8000/api/get-call-back", bodyFormData, { headers: { 'Content-Type': 'multipart/form-data' } })
//         .then(console.log)
//         .catch(console.error);
//      e.preventDefault();
//     }
//     console.log(phone_number)

//   return (
//     <div>
//         <div className="callback_main">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="callback_image">
//                             <img src={mobile} alt="mobile" />
//                         </div>
//                     </div>
//                     <div className="col-md-9">
//                         <div className="callback_content">
//                             <h2>Get a Callback From Our Experts</h2>
//                             <form className='callback_form' onSubmit={handleSubmit}>
//                                 <input type="number" placeholder="Enter Your Number" name="phone_number" value={phone_number}  onChange={(e) => setNumber(e.target.value)} required maxLength={10}/>
//                                 <button type='submit'>Request</button>
//                             </form>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//     </div>
//   )
// }

// export default Callback