import React from "react";
import car from'./Images/car.jpg';
import OIP from'./Images/OIP.jpg';
import R from'./Images/R.jpg';


function Slider(){
  return(
   <>
   
   <div id="carouselExample" className="carousel slide mt-5">
  <div className="carousel-inner bg-body-secondary">
    <div className="carousel-item active">
      <img src={R} className="d-block w-50 h-50  m-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={OIP} className="d-block w-40 h-50 m-auto" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car} className="d-block w-50  h-50 m-auto" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon  bg-success" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next  " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-success" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

   </>
  );
}
export default Slider;