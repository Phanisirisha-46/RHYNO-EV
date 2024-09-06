import React from 'react';
import styles from './Refund.module.css';

const Refund = () => {
  return (
    <div className={styles.refundOverall}>
      <div className={styles.refundMainDiv}>
        <h1>Refund Policy</h1>
        {/* <p>Last updated on January 1, 2024</p> */}
      </div>

      <div className={styles.refundPoints}>
        <h3 >Eligibility for Refunds</h3>
        <p className='eligible'>We offer refunds for products or services under the following conditions:</p>
        <ul>
          <li>The product is returned within 30 days of purchase.</li>
          <li>The product is unused and in the same condition that you received it.</li>
          <li>The product is in its original packaging.</li>
          <li>A receipt or proof of purchase is provided.</li>
        </ul>
      </div>

      <div className={styles.refundAbout}>
        <h3>Non-Refundable Items</h3>
        <p>Several types of goods are exempt from being returned. Perishable goods, custom products, and digital products cannot be returned. Additionally, gift cards and downloadable software products are non-refundable.</p>
      </div>

      <div className={styles.refundAbout}>
        <h3>Processing Refunds</h3>
        <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days.</p>
      </div>
    </div>
  );
};

export default Refund;
