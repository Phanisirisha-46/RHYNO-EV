import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`main-navdiv ${isOpen ? "open" : ""}`}>
      <Link to="/" onClick={closeNavbar}>
        <img src={Logo} alt="" className="logo" />
      </Link>
      <input
        type="checkbox"
        name=""
        id="nav-toggler"
        className="fas fa-bars"
        checked={isOpen}
        onChange={handleToggle}
      />
      <nav className="navbar">
        <a data-text="home" onClick={closeNavbar}>
          <Link to="/">Home</Link>
        </a>
        <a data-text="se03" onClick={closeNavbar}>
          <Link to="/SE03">se03</Link>
        </a>
        <a data-text="se03 max" onClick={closeNavbar}>
          <Link to="/SE03MAX">se03 max</Link>
        </a>
        <a data-text="se03 lite" onClick={closeNavbar}>
          <Link to="/SE03LITE">se03 lite</Link>
        </a>
        <a data-text="compare" onClick={closeNavbar}>
          <Link to="/Compare">compare</Link>
        </a>
        <a data-text="about" onClick={closeNavbar}>
          <Link to="/About">about</Link>
        </a>
        <a data-text="contact" onClick={closeNavbar}>
          <Link to="/Contact">contact</Link>
        </a>
        <div className="background-image"></div>
        <div className="social">
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
