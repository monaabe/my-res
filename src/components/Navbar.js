import React from "react";
import { Link } from "react-router-dom";
import"./Navbar.css";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  fw-bold sticky-top ">
        <div className="container">
          <Link className="navbar-brand fs-1 me-auto   text-danger   " to="#" >
            Resto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav  ms-auto">
              <Link  className="nav-link   active   text-success" aria-current="page" to="/Home">
                Home
              </Link>
              <Link className="nav-link text-success " to="/About">
                About
              </Link>
              <Link className="nav-link  text-success" to="/Contact">
                Contact us
              </Link>
                     </div>
          </div> 
        </div>
      </nav>
    </>
  );
}
export default Navbar;
