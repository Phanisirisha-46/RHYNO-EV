import React from 'react';
import './Home.css';
import rhyno_img from '../../assets/rhyno_img.png'; 
import rhyno from '../../assets/img2.png'; 
import rhyno_ from '../../assets/img3.jpg'; 
import Carousel from '../carousel/Carousel'; 

function Open() {
  return (
    <div className='text-center'>
      <div className='gallery-container'>
        <div className='gallery'>
          <img src={rhyno_img} alt="Rhyno Logo 1" />
          <img src={rhyno} alt="Rhyno Logo 2" />
          <img src={rhyno_} alt="Rhyno Logo 3" />
        </div>
        <Carousel />
      </div>

    



    </div>

  );
}

export default Open;
