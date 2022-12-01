import React from "react";
import logo from './logo.png'
import './Navbar.css'
const Navbar=()=>{
    return(
        <div className="startt">
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">So<img src={logo} alt="logo" />arity.in</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Our mission</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Logistics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Analytics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Measures</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


 
<div className="content">
       <div className="heading">
        Invest in Future
       </div>
       <div className="text">
            We strive to provide the best sustainable energy solutions in the solar energy sector to help the world transition to green energy.
        </div>
       <button className="btn">Explore</button>
</div><br /><br /><br />
        </div>
    )
}
export default Navbar;