import React from 'react';
import LOGO from '../Assests/logo.jpg'
function Footer() {
  return (
  <div className='footer' style={{marginTop:"79px"}}>
<>
  {/* Remove the container if you want to extend the Footer to full width. */}
    <footer className="text-center text-lg-start text-white" style={{backgroundColor:"#000",textDecoration:"none"}}>
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row ">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div
              className="
               shadow-1-strong d-flex align-items-center 
               justify-content-center mb-4 me-auto
                my-5"
              style={{ width: 150, height: 150 }}
            >
              <img
                src={LOGO}
                height={120}
                alt=""
                loading="fast"
              />
            </div>
            {/* <p className="text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

            </p> */}
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a className="text-white px-2" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a className="text-white ps-2" href="#!">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 my-5">
            <h5 className="text-uppercase mb-4">Lorem Ipsum</h5>
            <ul className="list-unstyled">
              <li className="mb-2" >
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3"  />
                  When your pet is missing
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Recently found
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  How to adopt?
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Pets for adoption
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Material gifts
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Help with walks
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 my-5">
            <h5 className="text-uppercase mb-4">Lorem Ipsum</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  General information
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white" style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  About the shelter
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Statistic data
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Job
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Tenders
                </a>
              </li>
              <li className="mb-2">
                <a href="#!" className="text-white"  style={{textDecoration:"none"}}>
                  <i className="fas fa-paw pe-3" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 my-5">
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-map-marker-alt pe-2" />
                  Warsaw, 57 Street, Poland
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone pe-2" />+ 01 234 567 89
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope pe-2 mb-0" />
                  contact@example.com
                </p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        {/* <a className="text-white" href="#"> */}
          abc@company.com
        {/* </a> */}
      </div>
      {/* Copyright */}
    </footer>
  
  {/* End of .container */}
</>


  </div>
     
    
  )
}

export default Footer