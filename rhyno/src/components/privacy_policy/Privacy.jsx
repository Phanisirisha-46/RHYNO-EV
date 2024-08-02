import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.privacyOverall}>
      <div className={styles.privacyMainDiv}>
        <h1>Privacy Policy</h1>
        {/* <p>Last updated on January 1, 2024</p> */}
      </div>

     

      <div className={styles.privacyPoints}>
        <h3>Information We Collect</h3>
        <span>1. Personal Information</span>
        <p>We only collect the following personal information, such as your name, email address, phone number, and company name, when you voluntarily provide it through our website forms or other communication channels.</p>
      </div>

      <div className={styles.privacyAbout}>
        <p>Techcompose solutions pvt. ltd, a provider of IT services and web solutions, is committed to protecting the privacy of its users. This Privacy Policy outlines the types of information we collect, how we use it, and the choices you have regarding your information. By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>
      </div>
    </div>
  );
};

export default Privacy;
