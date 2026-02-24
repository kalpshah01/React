import React from 'react'
import i1 from "../assets/images/i1.png";
import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import i4 from "../assets/images/i4.png";

function Main() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Shop By Category</h2>
      <p className="text-center mb-4">Daily essentials, engineered for life.</p>

      <div className="row g-4" id="Main">

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src={i1} className="card-img-top img-fluid" alt="Category" />
            <div className="card-body text-center">
              <h5 className="card-title">RIDGE WALLETS PURE</h5>
              <p className="card-text">Slim, RFID-blocking, Guaranteed for Life.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src={i2} className="card-img-top img-fluid" alt="Category" />
            <div className="card-body text-center">
              <h5 className="card-title">WEDDING BANDS</h5>
              <p className="card-text">Dual bands, Work-ready, Lifetime replacements</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src={i3} className="card-img-top img-fluid" alt="Category" />
            <div className="card-body text-center">
              <h5 className="card-title">HARDSHELL LUGGAGE</h5>
              <p className="card-text">Weatherproof, Rugged build, Travel-ready</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src={i4} className="card-img-top img-fluid" alt="Category" />
            <div className="card-body text-center">
              <h5 className="card-title">MAGNETIC POWER BANK</h5>
              <p className="card-text">5-in-1 power, MagSafe-ready, Cables built-in</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main
