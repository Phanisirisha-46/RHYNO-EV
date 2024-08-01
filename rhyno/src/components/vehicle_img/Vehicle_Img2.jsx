import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Vehicle_Img.css';
import { Link } from 'react-router-dom';
import IMG1 from '../../assets/Product2.png'


const Vehicle_Img2 = (props) => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 800) {
      Aos.init({
        duration: 600,
        easing: 'ease',
        once: true,
      });
    }
  }, []);
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <div>
      <div className="vi-maindiv vi-bg ">
        
        <div className="vi-imgdiv">
          <img src={IMG1} alt="" className='vi-flip'/>
        </div>
        
        <div className="vi-textdiv paddd" data-aos="flip-right" data-aos-delay="400">
          <h1>SE03 MAX</h1>
          <div className="vi-info">
            <div className="vi-one">
              <small>Range</small>
              <p>120 KMS</p>
            </div>
            <div className="vi-one">
              <small>Top Speed</small>
              <p>65 kmph</p>
            </div>
            <div className="vi-one">
              <small>Charging Time</small>
              <p>4 HRS</p>
            </div>
          </div>
          <div className="vi-btns">
          <Link to="/SE03MAX"><button className='btn' onClick={handleClick}>See More</button></Link>
          <button className="btn"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
          </div>
        </div>
        <div className="vi-btns vi-hidden">
          <Link to="/SE03MAX"><button className='btn' onClick={handleClick}>See More</button></Link>
          <button className="btn"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
          </div>
      </div>
    </div>
  );
};

export default Vehicle_Img2;
