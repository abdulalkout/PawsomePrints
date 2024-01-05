import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky-nav">
      <div className="navbar">
        <img
          className="logo"
          src="https://cdn0.iconfinder.com/data/icons/pet-grooming-hazel-vol-1/256/Pet-navigation-512.png"
          alt="Logo"
        />
        <div className={`pageLinks ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-links">
            <h3>Home</h3>
          </Link>
          <Link to="/animals" className="nav-links">
            <h3>Animals</h3>
          </Link>
          <a className="nav-links">
            {" "}
            <h3>Stories</h3>{" "}
          </a>
          <Link to="/about" className="nav-links">
            <h3>About</h3>
          </Link>
        </div>

        <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>
    </div>
  );
}

export default Nav;
