import React from 'react';
import './Style.css';
import LOGO from '../Assests/logo.jpg';

function Header() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#000"}}>
  <div className="container-fluid">
    <a className="navbar-brand me-4" href="#">
        <img  src={LOGO}  className='logo'/>
    </a>
    <button
      className="navbar-toggler bg-light"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" style={{color:"#000"}}  />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <center>
      <ul className="navbar-nav mx-auto mb-4 mb-lg-0 " style={{fontSize:19}}>
        <li className="nav-item">
          <a className="nav-link active" 
          aria-current="page" 
          href="#"
          style={{color:"#fff"}}
          >
            Home
          </a> 
        </li>
        <li  className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff"}}
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff"}}
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff"}}
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link active"
        aria-current="page"
        href="#"
        style={{color:"#fff"}}
        >
            Contact us
          </a>
        </li>
      </ul>
    </center>
      <form className="d-flex ms-auto" role="search">
      <div className='btnn'>
      <button className="btn btn-secondary mx-4" type="submit">
          Search
        </button>
        <button className="btn btn-outline-light mx-3" type="submit">
          Search
        </button>
        </div>
      </form>
    </div>
  </div>
  
</nav>
    
    
    </>
  )
}

export default Header