import React from 'react';
import rhyno1 from '../../assets/img2.png';
import rhyno2 from '../../assets/img3.jpg'; // Add another image
import styles from './Rental.module.css';

export default function Rental() {
  return (
    <div className={styles.rentalContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.imageRotation}>
          <img src={rhyno1} alt="Rhyno" className={`${styles.mainImage} ${styles.image1}`} />
          <img src={rhyno2} alt="Rhyno" className={`${styles.mainImage} ${styles.image2}`} />
          
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.rentalLead}>
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno firsthand before committing. Simply visit our authorized dealerships to unlock this opportunity.
          Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
          <span className={styles.downloadApp}>
            Download our rental app: <a href="#">Android</a> | <a href="#">Apple</a>.
          </span>
        </p>
      </div>
    </div>
  );
}
