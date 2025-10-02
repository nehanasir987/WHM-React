// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="custom-navbar">
      {/* Left Logo/Text */}
      <div className="custom-logo">
        WH <span style={{ color: "#3B82F6" }}>Management</span>
      </div>

      {/* Center Links */}
      <ul className="custom-nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/salesmen">Salesmen</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>

      {/* Right Button */}
      <button 
        type="button" 
        className="btn1"  
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;
