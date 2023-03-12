import React, {useEffect} from 'react'
import { FiMail } from "react-icons/fi"
import axiosBaseURL from '../baseUrl';

const ApplyPreparation = ({props}) => {
    const initialState = {
        fullname: '',
        email: '',
        address: '',
        phone: '',
        country: '',
    }
    const id = props?.id;
    console.log(id);
    const [applyPreperation, setApplyPreperation] = React.useState(initialState);

     useEffect(() => {
       axiosBaseURL.post((`/api/preparation/${props?.id}`), applyPreperation)

    }, [applyPreperation])
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
                            <form className='apply_online'>
                                <div className="fields">
                                    <label htmlFor="fullname">Name<span>*</span></label>
                                    <input type="text" name='fullname' />
                                </div>
                                <div className="fields">
                                    <label htmlFor="email">Email<span>*</span></label>
                                    <input type="email" name='Email' />
                                </div>
                                <div className="fields">
                                    <label htmlFor="address">Name</label>
                                    <input type="text" name='Address' />
                                </div>
                                <div className="fields">
                                    <label htmlFor="address">Phone <span>*</span></label>
                                    <input type="tel" name='Address' />
                                </div>
                                <div className="fields">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name='country' />
                                </div>
                                <div className="submit_button_abroad">
                                    <button type='submit' className='apply_now_abroad'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyPreparation