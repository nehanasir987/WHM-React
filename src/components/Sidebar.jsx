import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // optional for extra styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">WHM DashBoard</h3>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/stats">Statistics</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
