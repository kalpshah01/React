import React from 'react'
import i1 from "../assets/images/i1.png";
import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import i4 from "../assets/images/i4.png";



function Main() {
  return (
    <div>
<div className="container">
  <h2 className="text-center">Shop By Category</h2>
  <p className="text-center">Daily essentials, engineered for life.</p>

  <div className="row" id='Main'>

    <div className="col-md-3">
      <div className="card">
        <img src={i1} className="card-img-top imgsize" alt="Category" />
        <div className="card-body">
            <h3>RIDGE WALLETS PURE
</h3>
          <p className="card-text">Slim, RFID-blocking, Guaranteed for Life.</p>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src={i2} className="card-img-top imgsize" alt="Category" />
        <div className="card-body">
          <h3>WEDDING BANDS </h3>
          <p className="card-text">Dual bands, Work-ready, Lifetime replacements</p>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src={i3} className="card-img-top imgsize" alt="Category" />
        <div className="card-body">
            <h3>HARDSHELL LUGGAGE</h3>
          <p className="card-text">Weatherproof, Rugged build, Travel-ready</p>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img src={i4} className="card-img-top imgsize" alt="Category" />
        <div className="card-body">
            <h3>MAGNETIC POWER BANK</h3>
            <p className="card-text">5-in-1 power, MagSafe-ready, Cables built-in</p>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default Main 