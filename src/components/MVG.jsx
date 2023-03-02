import React from 'react'
import "../styles/mvg.css"
const mvgUrl = process.env.baseUrl || "http://192.168.1.12:8000/images/feature/"
const MVG = ({feature}) => {
    const regex = /(<([^>]+)>)/ig;
    const MVGcontent = feature;

  return (
    <div>  
    <div className="container-fluid banner_below">
                <div className="row">
                {
            MVGcontent && MVGcontent.map((item, index) => (
                <div key={index} className={`col-md-4 ${index %2===0 ? " mission":" vision"}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 main_logo" style={{color:"#fff"}}>
                        <img src={mvgUrl +item.image} alt="logo" />
                      </div>
                      <div className="col-md-9 mvg_main">
                        <h5>{item.title}</h5>
                        <p>{item.description.replace(regex, '').substring(0, 200)}</p>
                      </div>
                    </div>
                  </div>
                  </div>
             
            ))
        }
   </div>
  </div>
  </div>
  )
}

export default MVG