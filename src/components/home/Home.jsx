import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import rhyno_b from '../../assets/rhyno_bike.jpg';
import rhyno from '../../assets/img2.png';
import rhyno_ from '../../assets/img3.jpg';
import se3 from '../../assets/se03.png';
import se3max from '../../assets/se3max.png';

function Home() {
  const [word, setWord] = useState('Elegance');
  const words = ['Elegance', 'Minimalism', 'Comfort'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Control the speed of transition (ms)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Delay between slides (ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <div className='text-center'>
        <div className='gallery-container'>
          <div className='gallery'>
            <img src={rhyno_b} alt="Rhyno Logo 1" />
            <img src={rhyno} alt="Rhyno Logo 2" />
            <img src={rhyno_} alt="Rhyno Logo 3" />
          </div>
        </div>
      </div>
      <div className="cart-container">
        <div className="cart-content">
          <h1 className="cart-header">
            Let’s Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style <span className="rotating-word">{word}</span>.
          </h1>
        </div>
      </div>
      <br /><br />
      <div className='carousel-container'>
        <Slider {...settings}>
          <div className="card-product">
            <div className="image-container">
              <img src={rhyno} alt="Product" className="main-image" />
            </div>
            <div className="title-container">
              <b className="title">Rhyno SE03 Lite</b>
            </div>
            <div className="price-container">
              <span className="warranty">Battery 1.8Kwh</span>
            </div>
            <div className="button-container">
              <a href="payment">  <button className="checkout-button">Checkout</button></a>
            
            </div>
            <div className="link-container">
              <a href="se03lite" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="card-product">
            <div className="image-container">
              <img src={se3} alt="Product" className="main-image" />
            </div>
            <div className="title-container">
              <b className="title">Rhyno SE03</b>
            </div>
            <div className="price-container">
              <span className="warranty">Battery 2.7Kwh</span>
            </div>
            <div className="button-container">
            <a href="payment">  <button className="checkout-button">Checkout</button></a>
            </div>
            <div className="link-container">
              <a href="se03" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="card-product">
            <div className="image-container">
              <img src={se3max} alt="Product" className="main-image" />
            </div>
            <div className="title-container">
              <b className="title">Rhyno SE03 MAX</b>
            </div>
            <div className="price-container">
              <span className="warranty">Battery 2.7Kwh</span>
            </div>
            <div className="button-container">
            <a href="payment">  <button className="checkout-button">Checkout</button></a>
            </div>
            <div className="link-container">
              <a href="se03max" className="learn-more">Learn More</a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
