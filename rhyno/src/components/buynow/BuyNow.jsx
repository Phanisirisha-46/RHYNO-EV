import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BuyNow.module.css';

const BuyNow = () => {
  return (
    <div>
      <button className={styles.btn22}>
        <a 
          href="https://wa.me/9023987528" 
          target='_blank' 
          rel="noopener noreferrer" 
          className={styles.orderBtnLink}
        >
          <b>Order Now</b>
        </a>
      </button>
    </div>
  );
}

export default BuyNow;
