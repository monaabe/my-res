import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand  me-auto" to="#">
            Navbar
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
              <Link  className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
              <Link className="nav-link" to="/About">
                About
              </Link>
              <Link className="nav-link" to="/Contact">
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
