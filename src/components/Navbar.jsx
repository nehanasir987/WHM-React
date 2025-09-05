
{/* Hooks is used in react functional components --- Hooks name always start with the use  --- Hooks always written at the components  */}
import { Link, useNavigate } from "react-router-dom";  // useNavigate import 
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();  // hook call 

  return (
    <nav className="custom-navbar">

      {/* Left: Logo */}
      <div className="custom-logo">
        WH <span style={{ color: "#3B82F6" }}>Management</span>
      </div>

      {/* Center: Links */}
      <ul className="custom-nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        {/*<div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>*/}
        <li><Link to="/salesmen">Salesmen</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>

      {/* Right: Button */}
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
