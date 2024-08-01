import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import instagramIcon from '../../assets/instagram.png'; // Adjusted path
import LinkedinIcon from '../../assets/linkedin.png'; // Adjusted path

function Footer() {
  return (
    
    <div className='d-flex flex-wrap justify-content-around footer'>
      <div>
       
        <ul className='nav fs-5 p-3'>
          <li>
            <Link to="contact" className='nav-link text-white'>Contact us</Link>
          </li>
          <li>
            <Link to="https://rhyno.in/" className='nav-link text-white'>Privacy policy</Link>
          </li>
          <li>
            <Link to="https://rhyno.in/" className='nav-link text-white'>Refund policy</Link>
          </li>
          <li>
            <Link to="https://rhyno.in/" className='nav-link text-white'>Website policy</Link>
          </li>
        
        </ul>
      </div>
      <div>
        <ul className='nav fs-5 p-3'>
        <li>
            <Link to="/home" className='nav-link text-white'>Products</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/company/rhyno-wheels/" className='nav-link text-white'>Career</Link>
          </li>
          <li>
            <Link to="rental" className='nav-link text-white'>Rentals</Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/rhyno.in?igsh=MXFwb2VkcnN1bWlhNw%3D%3D" className='nav-link'>
              <img src={instagramIcon} alt="Instagram" className='footer-icon' />
            </Link>
          </li>
          <Link to="https://www.linkedin.com/company/rhyno-wheels/" className='nav-link'>
              <img src={LinkedinIcon} alt="Linkedin" className='footer-icon' />
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer
