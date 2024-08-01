import React, { useState } from 'react';
import './ColorChange.css';
import navImg1 from '../../assets/1.png';
import navImg2 from '../../assets/2.png';
import navImg3 from '../../assets/5.png'; 
import navImg4 from '../../assets/8.png'; 

const ColorChange = () => {
  const [imageIndex, setImageIndex] = useState(0); // Initial image index state
  const images = [navImg1, navImg2, navImg3, navImg4]; // Array of image sources

  // Function to handle image change
  const changeImage = () => {
    // Increment image index and loop back to the start if it exceeds the array length
    setImageIndex((imageIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="cc-maindiv">
        <img src={images[imageIndex]} alt="" id="img1" onClick={changeImage} />
        <small>* Click on the image for color options.</small>
      </div>
    </div>
  );
};

export default ColorChange;
