import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import instagramIcon from '../../assets/instagram.png';
import LinkedinIcon from '../../assets/linkedin.png';

function Footer() {
  return (
    <div className='d-flex flex-wrap justify-content-around footer'>
      <div>
        <ul className='nav fs-5 p-3'>
          <li>
            <Link to="/contact" className='nav-link text-white'>Contact us</Link>
          </li>
          <li>
            <Link to="/privacy" className='nav-link text-white'>Privacy policy</Link>
          </li>
          <li>
            <Link to="/refund-policy" className='nav-link text-white'>Refund policy</Link>
          </li>
          <li>
            <Link to="/website-policy" className='nav-link text-white'>Website policy</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='nav fs-5 p-3'>
          <li>
            <Link to="/" className='nav-link text-white'>Products</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/company/rhyno-wheels/" className='nav-link text-white'>Career</Link>
          </li>
          <li>
            <Link to="rent" className='nav-link text-white'>Rentals</Link>
          </li>
          <li>
            <a href="https://www.instagram.com/rhyno.in" className='nav-link'>
              <img src={instagramIcon} alt="Instagram" className='footer-icon' />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/rhyno-wheels/" className='nav-link'>
              <img src={LinkedinIcon} alt="LinkedIn" className='footer-icon' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
