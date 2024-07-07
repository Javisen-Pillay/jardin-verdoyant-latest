import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';  

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
      <button onClick={() => navigate('/customer-service')}>Customer Service</button>
    </footer>
  );
}

export default Footer;
