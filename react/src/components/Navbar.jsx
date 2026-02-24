import React from 'react'
import logo from "../assets/images/logo.png";
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className ="container-fluid">
    <img src={logo} alt="Logo" className="img-fluid" id="logo-img" />
    <a className ="navbar-brand" href="#">Ring </a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <a className ="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#Products">Product</a>
        </li>
        <li className='nav-item'>
<a href="#About" className='nav-link'>About</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#Contact">Contact</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#Review">Review  </a>
        </li>
      </ul>
      <form className ="d-flex" role="search">
        <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className ="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar