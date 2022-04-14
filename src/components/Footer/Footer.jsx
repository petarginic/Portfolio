import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">

          <div className="footer-content d-flex justify-content-between align-items-center">


            <div className="col-md-4">
              <p>Copyright © Petar Ginić 2022 </p>
            </div>

            <div className="col-md-4">
              <Link to='https://www.facebook.com/petar.ginic.1'>
                <i className="fa-brands fa-facebook fa-xl"></i>
              </Link>

              <Link to="https://www.instagram.com/car.accessories.beograd/">
                <i className="fa-brands fa-instagram fa-xl"></i>
              </Link>


              <Link to="https://www.linkedin.com/in/petar-ginic-a47861146/">
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </Link>
              

            </div>


            <div className="col-md-4">
              <p> Email: petarginic@gmail.com</p>
              <p> Contact number: 064 55 75 689   </p>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Footer