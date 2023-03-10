import React from 'react'

const abroadUrl = process.env.baseUrl || "http://precious-voyage.onvirotech.com/images/abroad/"

const StudyInIndividual = ({abroadindividual}) => {
    const abroad = abroadindividual;
  return (
    <div><div className="container">
    <div className="row">
        {
            abroad && abroad.map((item, index) => (
<div className="col-md-3 functions_column" key={index}>
        <div className="function_section">
          <div className="circle">
            <img src={abroadUrl + item.image} alt="logo" />
          </div>
          <h5>{item.title}</h5>
        </div>
      </div>
            )
            )
        }
      
    </div>
  </div></div>
  )
}

export default StudyInIndividual