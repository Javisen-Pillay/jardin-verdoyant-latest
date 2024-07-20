import React from 'react';
import { useNavigate } from 'react-router-dom';
import landscapingImg from '../assets/landscaping.jpeg';
import snowRemovalImg from '../assets/landscapewinter.webp';
import patioImg from '../assets/patio1.jpeg';
import './services.scss';
import { translations } from '../translations';

function Services({ language }) {
  const navigate = useNavigate();

  return (
    <div className="services-page" lang={language}>
      <header>
        <h1>Jardin Verdoyant</h1>
      </header>
      <main>
        <h2>{translations[language].services}</h2>
        <section>
          <div className="service-item">
            <img src={landscapingImg} alt="Softscaping and Landscaping service" />
            <div className="service-text">
              <h3>{translations[language].softscapingLandscaping}</h3>
              <p>{translations[language].softscapingLandscapingDesc}</p>
            </div>
          </div>
          <div className="service-item">
            <img src={snowRemovalImg} alt="Snow and Ice Removal service" />
            <div className="service-text">
              <h3>{translations[language].snowRemoval}</h3>
              <p>{translations[language].snowRemovalDesc}</p>
            </div>
          </div>
          <div className="service-item">
            <img src={patioImg} alt="Backyard Interlock Patios service" />
            <div className="service-text">
              <h3>{translations[language].backyardPatios}</h3>
              <p>{translations[language].backyardPatiosDesc}</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <button onClick={() => navigate('/about')} aria-label="Learn more about us">{translations[language].about}</button>
        <button onClick={() => navigate('/privacy-policy')} aria-label="Read our privacy policy">{translations[language].privacyPolicy}</button>
        <button onClick={() => navigate('/customer-service')} aria-label="Contact customer service">{translations[language].customerService}</button>
      </footer>
    </div>
  );
}

export default Services;
