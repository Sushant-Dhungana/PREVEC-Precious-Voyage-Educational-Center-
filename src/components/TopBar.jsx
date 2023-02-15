import React from 'react'
import './topbar.css'
import Logo from "../images/logo.png"
const TopBar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-2">
                <img src={Logo} alt="logo" className='logo_top'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
