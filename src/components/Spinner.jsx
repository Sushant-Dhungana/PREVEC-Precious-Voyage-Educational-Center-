import React from 'react';
import Logo from "../images/logo.png";
import "../styles/spinner.css";

const SpinnerMain = () => {
  return (
    <div className='spinner_main'>
     <img src={Logo} alt="spinner" className='spinner_logo' />
     </div>
  )
}

export default SpinnerMain
 