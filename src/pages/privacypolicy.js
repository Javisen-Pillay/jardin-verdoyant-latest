import React from 'react';
import './privacypolicy.scss';  

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      <header>
        <h1>Privacy Policy</h1>
      </header>
      <main>
        <p>
          At Jardin Verdoyant, we value your privacy and are committed to protecting your personal information. 
          This privacy policy outlines how we collect, use, and protect your information when you visit our website or use our services.
        </p>
        <h2>Information Collection</h2>
        <p>
          We collect information that you provide to us directly, such as when you create an account, place an order, 
          or contact customer service. This may include your name, email address, phone number, and payment information.
        </p>
        <h2>Information Use</h2>
        <p>
          We use your information to provide and improve our services, process transactions, communicate with you, 
          and personalize your experience. We do not sell or share your personal information with third parties except as necessary 
          to provide our services or comply with legal obligations.
        </p>
        <h2>Information Protection</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. 
          Your information is stored on secure servers and is only accessible by a limited number of authorized personnel.
        </p>
        <p>
          By using our website or services, you consent to our privacy policy. We may update this policy from time to time, 
          and any changes will be posted on this page. If you have any questions or concerns, please contact us.
        </p>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
