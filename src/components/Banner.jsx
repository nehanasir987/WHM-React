import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div className="custom-banner">
      <img
        src="https://media.istockphoto.com/id/2209196269/photo/empty-hall-exhibition-centre-the-backdrop-for-exhibition-stands-booth-market-trade-show.webp?a=1&b=1&s=612x612&w=0&k=20&c=AFdeW34CmQpkNv5UfRSbqJng2dDGs6fQ155wIf91JsQ="
        className="img-fluid"
        alt="Banner"
      />
      <h1 className="custom-banner-heading">Welcome to WH Management</h1>
    </div>
  );
};

export default Banner;
