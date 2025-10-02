// src/pages/Home.jsx
import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import './Home.css'; // optional for padding

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Home;
