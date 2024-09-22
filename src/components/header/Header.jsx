import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import rhyno_logo from '../../assets/rhyno_logo.png'; 
import instagramIcon from '../../assets/instagram.png'; 
import LinkedinIcon from '../../assets/linkedin.png'; 

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownChange = (event) => {
    const value = event.target.value;
    if (value) {
      window.location.href = `/${value}`; // Redirect to selected page
    }
  };

  return (
    <div>
      <div className='d-flex flex-wrap justify-content-around header'>
        <div className='logo'> 
          <img src={rhyno_logo} alt="Rhyno Logo" className='logo-icon' />
        </div>
        <div>
          <ul className='nav fs-5 p-3'>
            <li>
              <Link to="/RHYNO/" className='nav-link text-white'>Home</Link>
            </li>
            <li>
              <Link to="/RHYNO/payment" className='nav-link text-white'>Pre-book now</Link>
            </li>
            <li>
              <select 
                name="products" 
                id="products" 
                className="form-select nav-link"
                onChange={handleDropdownChange}
              >
                <option value="">Products</option>
                <option value="RHYNO/se03">SE03</option>
                <option value="RHYNO/se03lite">SE03 Lite</option>
                <option value="RHYNO/se03max">SE03 Max</option>
                <option value="RHYNO/compare">Compare All</option>
              </select>
            </li>
            <li>
              <Link to="/RHYNO/contact" className='nav-link text-white'>Contact us</Link>
            </li>
            <li>
              <Link to="/RHYNO/aboutus" className='nav-link text-white'>About Us</Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/rhyno.in" className='nav-link image'>
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
    </div>
  );
}

export default Header;
