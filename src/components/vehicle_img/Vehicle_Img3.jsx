import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Vehicle_Img.css';
import { Link } from 'react-router-dom';
import IMG1 from '../../assets/product3.png'


const Vehicle_Img3 = (props) => {
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
      <div className="vi-maindiv">
        <div className="vi-textdiv" data-aos="flip-right" data-aos-delay="400">
          <h1>SE03 LITE</h1>
          <div className="vi-info">
            <div className="vi-one">
            <small>Range</small>
              <p>100 KMS</p>
            </div>
            <div className="vi-one">
            <small>Top Speed</small>
              <p>55 kmph</p>
            </div>
            <div className="vi-one">
            <small>Charging Time</small>
              <p>3 HRS</p>
            </div>
          </div>
          <div className="vi-btns">
          <Link to="/SE03LITE"><button className='btn' onClick={handleClick}>See More</button></Link>
          <button className="btn"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
          </div>
        </div>
        <div className="vi-imgdiv">
          <img src={IMG1} alt="" />
        </div>
        <div className="vi-btns vi-hidden">
          <Link to="/SE03LITE"><button className='btn' onClick={handleClick}>See More</button></Link>
          <button className="btn"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
          </div>
      </div>
    </div>
  );
};

export default Vehicle_Img3;
