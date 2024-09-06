import React from 'react';
import styles from './WebsitePolicy.module.css';

const WebsitePolicy = () => {
  return (
    <div className={styles.websitePolicyContainer}>
      <div className={styles.websitePolicyMainDiv}>
        <h1>Website Policy</h1>
        {/* <p>Last updated on January 1, 2024</p> */}
      </div>

      <div className={styles.websitePolicyContent}>
        <h3>Terms of Use</h3>
        <p>By accessing or using our website, you agree to comply with these terms. If you do not agree, please do not use our website. We reserve the right to change these terms at any time without notice.</p>
      </div>

      <div className={styles.websitePolicyContent}>
        <h3>Acceptable Use</h3>
        <p>Users must use our website in a lawful manner. You may not use our website to engage in any illegal activities or to harm others. You agree not to misuse our website or its content.</p>
      </div>

      <div className={styles.websitePolicyContent}>
        <h3>Intellectual Property</h3>
        <p>All content on our website, including text, graphics, logos, and images, is the property of our company or its licensors. You may not reproduce, distribute, or create derivative works without our explicit permission.</p>
      </div>

      <div className={styles.websitePolicyContent}>
        <h3>Disclaimer</h3>
        <p>Our website is provided "as is" without warranties of any kind. We do not guarantee the accuracy or completeness of the content. We are not liable for any damages arising from the use of our website.</p>
      </div>
    </div>
  );
};

export default WebsitePolicy;
