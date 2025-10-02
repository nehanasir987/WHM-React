// src/components/Banner.jsx
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

const Banner = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide custom-banner"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://www.istockphoto.com/photo/business-logistics-technology-concept-gm1435491075-476815442?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fware-house-mangement&utm_medium=affiliate&utm_source=unsplash&utm_term=ware+house+mangement%3A%3Aad-balancing-template%3Aexperiment"
            alt="Business logistics technology concept"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
          src="/images/banner1.jpg" alt="Banner 1" />

        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1484852942/photo/smart-warehouse-inventory-management-system-concept.jpg?s=612x612&w=0&k=20&c=h37nJ7rpMIU9SFLx2kErCkQF3PzAJcLNXxmfGBavGqQ="
            alt="Smart warehouse inventory management"
          />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
