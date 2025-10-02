import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // optional styling file

function Footer() {
  return (
    <footer className="custom-footer">
      {/* Top Section Links */}
      <div className="footer-links">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/salesmen">Salesmen</Link>
        <Link to="/reports">Reports</Link>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WH Management. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
