import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import logo from '../assets/logo.png';
import backyard from '../assets/backyard.jpeg';
import backyard2 from '../assets/backyard2.jpeg';
import garden1 from '../assets/garden1.jpeg';
import landscaping from '../assets/landscaping.webp';
import patio from '../assets/patio.jpeg';
import snow from '../assets/snow.jpeg';
import { translations } from '../translations';

function Home({ language, switchLanguage }) {
  const navigate = useNavigate();

  return (
    <div className="home" lang={language}>
      <header>
        <div className="header-container">
          <h1>Jardin Verdoyant</h1>
          <nav aria-label="Main Navigation">
            <ul>
              <li><button onClick={() => switchLanguage('en')} aria-label="Switch to English">EN</button></li>
              <li><button onClick={() => switchLanguage('fr')} aria-label="Switch to French">FR</button></li>
            </ul>
          </nav>
          <div className="account-info">
            <span>Canada</span>
            <input type="text" placeholder="Search" aria-label="Search" />
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <img src={logo} alt="Jardin Verdoyant Logo" />
            <h2>{translations[language].buildGarden}</h2>
          </div>
        </section>
        <section className="services">
          <div className="service">
            <h2>{translations[language].softscapingLandscaping}</h2>
            <img src={landscaping} alt="Landscaping service" />
            <button onClick={() => navigate('/video')} aria-label="View video example">{translations[language].viewVideoExample}</button>
          </div>
          <div className="service">
            <h2>{translations[language].snowRemoval}</h2>
            <img src={snow} alt="Snow and ice removal service" />
            <button onClick={() => navigate('/services')} aria-label="Learn more about snow removal">{translations[language].learnMore}</button>
          </div>
          <div className="service">
            <h2>{translations[language].backyardPatios}</h2>
            <img src={patio} alt="Backyard interlock patios" />
            <button onClick={() => navigate('/services')} aria-label="Learn more about backyard patios">{translations[language].learnMore}</button>
          </div>
        </section>
        <section className="design-build-maintain">
          <div className="design">
            <h2>{translations[language].design}</h2>
            <img src={backyard} alt="Garden design" />
            <button onClick={() => navigate('/services')} aria-label="Learn more about design services">{translations[language].learnMore}</button>
          </div>
          <div className="build">
            <h2>{translations[language].build}</h2>
            <img src={backyard2} alt="Garden build" />
            <button onClick={() => navigate('/reviews')} aria-label="View reviews">{translations[language].viewReviews}</button>
          </div>
          <div className="maintain">
            <h2>{translations[language].maintain}</h2>
            <img src={garden1} alt="Garden maintenance" />
            <button onClick={() => navigate('/browse')} aria-label="View plants">{translations[language].viewPlants}</button>
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

export default Home;
