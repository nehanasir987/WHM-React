import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { MdOutlineMenu } from "react-icons/md";

import Sidebar from "../components/Sidebar";
import LiveClock from "../components/LiveClock";
import DashboardBox from "../components/DashboardBox";
import "./Dashboard.css";
import { FaUsers, FaBoxOpen, FaShoppingCart, FaChartLine } from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* ================= HEADER ================= */}
      <header className="dashboard-header">
        <Container>
          <div className="header-inner d-flex align-items-center justify-between">
            {/* Left side Logo */}
            <Link to="/" className="d-flex align-items-center">
              <img
                src="https://gaqm.org/uploads/cert_logos/logo_5347.png"
                alt="Warehouse Logo"
                className="logo"
              />
              <span className="logo-text">WHM</span>
            </Link>

            {/* Right side Menu button */}
            <Button className="menu-btn">
              <MdOutlineMenu size={24} />
            </Button>
          </div>
        </Container>
      </header>

      {/* ================= MAIN AREA ================= */}
      <div className="main d-flex">
        {/* Sidebar */}
        <div className="sidebarWrapper">
          <Sidebar />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="content">
          <h1>Warehouse Management System</h1>
          <p>
            Welcome to the WHM Dashboard. This system helps you efficiently manage 
            warehouse operations like inventory tracking, orders, statistics and 
            reports in one place. Navigate through the sidebar to explore different 
            sections.
          </p>

          {/* Live Clock */}
          <div className="dashboard-clock">
            <h3>Current Time:</h3>
            <LiveClock />
          </div>

          {/* Dashboard Boxes */}
        <div className="right-content w-100">
  <div className="dashboardBoxWrapper">
    <DashboardBox 
      title="Total Users" 
      value="277" 
      icon={FaUsers} 
      color={["#ff7e5f", "#feb47b"]} 
    />

    <DashboardBox 
      title="Total Orders" 
      value="152" 
      icon={FaShoppingCart} 
      color={["#6a11cb", "#2575fc"]} 
    />

    <DashboardBox 
      title="Stock Items" 
      value="1,230" 
      icon={FaBoxOpen} 
      color={["#11998e", "#38ef7d"]} 
    />

    <DashboardBox 
      title="Monthly Sales" 
      value="$12,540" 
      icon={FaChartLine} 
      color={["#fc4a1a", "#f7b733"]} 
    />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
