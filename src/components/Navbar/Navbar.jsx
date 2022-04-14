import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";


const Navbar = () => {
  return (

<div className="navbar-container">


<div className="pre-navbar">
  <div className="row">

    <div className="col-md-5 navbar-item1">
        <p> Contact me: 064 55 75 689 </p>
        
      
    </div>

    <div className="col-md-2 navbar-item2">
      <i className="fa-brands fa-facebook fa-xl"></i>
      <i className="fa-brands fa-instagram fa-xl"></i>
      <i className="fa-brands fa-youtube fa-xl"></i>
      <i className="fa-brands fa-linkedin fa-xl"></i>

    </div>

  </div>
</div>


<div className="logo-navbar">
    <img src={logo} alt="logo" />

</div>

<div className='navbar'>
     
     <div className="link">
       <Link to="/">Home</Link>
     </div>

     <div className="link">
       <Link to="/">About me</Link>
     </div>

     <div className="link">
       <Link to="/">News</Link>
     </div>

     <div className="link">
       <Link to="/">Contact</Link>
     </div>

 </div>


</div>
  


   
  )
}

export default Navbar