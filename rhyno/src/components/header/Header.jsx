import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { userLoginContext } from "../../contexts/userLoginContext";
import rhyno_logo from '../../assets/rhyno_logo.png'; // Adjusted path

function Header() {
  const { logoutUser, userLoginStatus } = useContext(userLoginContext);

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

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='d-flex flex-wrap justify-content-around header'>
      <div>
        <div className='logo'> 
          <img src={rhyno_logo} alt="rhyno_logo" className='logo-icon' />
        </div>
      </div>
      <div>
        <ul className='nav fs-5 p-3'>
          <li>
            <Link to="" className='nav-link text-white'>Home</Link>
          </li>
          <li>
            <Link to="products" className='nav-link text-white'>Products</Link>
          </li>
          <li className='nav-item'>
            <Link to="aboutus" className='nav-link text-white'>About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
