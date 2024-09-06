import React from 'react';
import rhyno_logo from '../../assets/rhyno_logo.png'; // Adjusted path
import './Contactus.css'; // Ensure you import the CSS file

function Contactus() {
  return (
    
      <div className="contact-product">
        <div className="image-container">
          <img src={rhyno_logo} alt="Product" className="main-image" />
        </div>
        <div className="title-container">
          <b className="title">Rhyno EY</b>
        </div>
        <div className="link-container">
          <a href="https://rhyno.in/" className="learn-more">RHYNO WEBSITE</a>
        </div>
        <div className="contact-info">
          <p className='contact-title'><strong>Contact Us:</strong></p>
          <p>Mail: <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
          <p>Mobile no.: <a href="tel:+919023987528">+91-9023987528</a></p>
          <p>Location: Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
        </div>
     
    </div>
  );
}

export default Contactus;




