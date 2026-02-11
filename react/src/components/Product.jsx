import React from 'react'
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

function Product() {
  return (
    <div>
<div className="row">
<h2 className='text-center'> Shop By Collection</h2>
    <div className="col-md-3">
      <div className="card">
        <img src={p1} className="card-img-top" alt="Category" />
       
      </div>
    </div>
     <div className="col-md-3">
      <div className="card">
        <img src={p2} className="card-img-top" alt="Category" />
      
      </div>
    </div>
     <div className="col-md-3">
      <div className="card">
        <img src={p3} className="card-img-top" alt="Category" />
     
      </div>
    </div>
     <div className="col-md-3">
      <div className="card">
        <img src={p4} className="card-img-top" alt="Category" />
       
      </div>
    </div>
</div>
    </div>
  )
}

export default Product 