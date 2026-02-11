import React from 'react'

function Hero({imgprops,title,desc}) {
  return (
    <div>
<div className ="card mb-3 py-4">
  <img src={imgprops} className ="card-img-top" alt="Hero Image" />
  <div className ="card-body ">
    <h5 className ="card-title">{title}</h5>
    <p className ="card-text">{desc}    </p>
    <p className ="card-text"><small className ="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>


    </div>
    
  )
}

export default Hero 