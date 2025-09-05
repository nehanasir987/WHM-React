import React from "react";
import Banner from "../components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";


const Home = () => {
  return (
    <div>
      <Banner />
      <h1 className="custom-banner-heading">Welcome to WH Management</h1>
    </div>
  );
};

export default Home;











{/* Passing Data in props: 
  Data jo parent component child component ko bhejta hai. === passes data from parents to childs ---- props are immutables (values cannot be chnages , added or deleted --- used for between components  -- short for properties -- mechanism for passing data  -- Read-only by default -- data flow one way (downwards))

  Ek parent component (App.js) apne child component (jaise Dashboard, ProductsPage) ko data bhejne ka tareeqa hota hai.
  */}