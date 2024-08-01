import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Vehicle_Img.css';
import { Link } from 'react-router-dom';
import ScrollToTop from '../scrolltotop/ScrollToTop';
// import IMG1 from '../../assets/product1.png'
import IMG1 from '../../assets/Product1.png'


const Vehicle_Img_m = (props) => {  
  return (
    <div>
      <div className="vi-maindiv">
        <div className="vi-textdiv">
          <h1>SE03</h1>
          <div className="vi-info">
            <div className="vi-one">
              <small>Range</small>
              <p>150 KMS</p>
            </div>
            <div className="vi-one">
              <small>Top Speed</small>
              <p>55 kmph</p>
            </div>
            <div className="vi-one">
              <small>Charging Time</small>
              <p>4 HRS</p>
            </div>
          </div>
          <div className="vi-btns">
          <Link to="/SE03"><button className='btn'>See More</button></Link>
          <button className="btn"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
          </div>
        </div>
        <div className="vi-imgdiv">
          <img src={IMG1} alt="" />
        </div>
        <div className="vi-btns vi-hidden">
          <Link to="/SE03"><button className='btn'>See More</button></Link>
          <button className="btn"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
          </div>
      </div>
    </div>
  
  );
};

export default Vehicle_Img_m;
