import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import rhyno_logo from '../../assets/rhyno_logo.png'; // Adjusted path
import instagramIcon from '../../assets/instagram.png'; // Adjusted path
import LinkedinIcon from '../../assets/linkedin.png'; // Adjusted path

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) { // Adjust scroll position as needed
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component amount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle dropdown change
  const handleDropdownChange = (event) => {
    const value = event.target.value;
    if (value !== "") {
      window.location.href = `/${value}`; // Redirect to selected page
    }
  };

  return (
    <div>
      <div className='d-flex flex-wrap justify-content-around header'>
        <div>
          <div className='logo'> 
            <img src={rhyno_logo} alt="Rhyno Logo" className='logo-icon' />
          </div>
        </div>
        <div>
          <ul className='nav fs-5 p-3'>
            <li>
              <Link to="/" className='nav-link text-white'>Home</Link>
            </li>
            <li>
              <Link to="/rentals" className='nav-link text-white'>Pre-book now</Link>
            </li>
            <li>
              <select 
                name="products" 
                id="products" 
                className="form-select nav-link"
                onChange={handleDropdownChange}
              >
                <option value="">Products</option>
                <option value="SE03LITE">SE03 Lite</option>
                <option value="SE03">SE03</option>
                <option value="SE03MAX">SE03 Max</option>
                <option value="compare">Compare All</option>
              </select>
            </li>
            <li>
              <Link to="/contact" className='nav-link text-white'>Contact us</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className='nav-link text-white'>About Us</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/rhyno.in?igsh=MXFwb2VkcnN1bWlhNw%3D%3D" className='nav-link image'>
                <img src={instagramIcon} alt="Instagram" className='footer-icon' />
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/company/rhyno-wheels/" className='nav-link image'>
                <img src={LinkedinIcon} alt="LinkedIn" className='footer-icon' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className='nav fs-5 p-3'>
          <li>
            <Link to="/home" className='nav-link text-white'>Home</Link>
          </li>

          <li>
            <Link to="payment" className='nav-link text-white'>Pre-book now</Link>
          </li>
          
          <li>
            <select 
              name="products" 
              id="products" 
              className="form-select nav-link  " 
              onChange={handleDropdownChange}
            >
              <option value="">Products</option>
              <option value="se03-lite">SE03 Lite</option>
              <option value="se03">SE03</option>
              <option value="se03-max">SE03 Max</option>
              
              <option value="compare-all">Compare All</option>
            </select>
          </li>
          <li>
            <Link to="contact" className='nav-link text-white'>Contact us</Link>
          </li>

          <li className='nav-item'>
            <Link to="aboutus" className='nav-link text-white'>About Us</Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/rhyno.in?igsh=MXFwb2VkcnN1bWlhNw%3D%3D" className='nav-link image'>
              <img src={instagramIcon} alt="Instagram" className='footer-icon' />
            </Link>
          </li>
          <Link to="https://www.linkedin.com/company/rhyno-wheels/" className='nav-link image'>
              <img src={LinkedinIcon} alt="Linkedin" className='footer-icon' />
            </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
