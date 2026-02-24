import React from 'react'
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

function Product() {
  return (
    <div id='Products' className="container py-5">
      <h2 className='text-center mb-4'>Shop By Collection</h2>

      <div className="row g-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100">
            <img src={p1} className="card-img-top img-fluid" alt="Category" />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100">
            <img src={p2} className="card-img-top img-fluid" alt="Category" />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100">
            <img src={p3} className="card-img-top img-fluid" alt="Category" />
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100">
            <img src={p4} className="card-img-top img-fluid" alt="Category" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
