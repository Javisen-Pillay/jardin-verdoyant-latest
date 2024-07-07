import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';  
import logo from '../assets/logo.png';
import backyard from '../assets/backyard.jpeg';
import backyard2 from '../assets/backyard2.jpeg';
import garden1 from '../assets/garden1.jpeg';
import garden2 from '../assets/garden2.png';
import landscaping from '../assets/landscaping.webp';
import patio from '../assets/patio.jpeg';
import snow from '../assets/snow.jpeg';

function Home() {
    
  const navigate = useNavigate();

  return (
    <div className="home">
      <header>
        <div className="header-container">
          <h1>Jardin Verdoyant</h1>
          <nav>
          </nav>
          <div className="account-info">
            <span>Canada</span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <img src={logo} alt="Jardin Verdoyant Logo" />
            <h2>Build the garden of your dreams!</h2>
          </div>
        </section>
        <section className="services">
          <div className="service">
            <h2>Softscaping / Landscaping</h2>
            <img src={landscaping} alt="Landscaping" />
            <button onClick={() => navigate('/video')}>View Video Example</button>
          </div>
          <div className="service">
            <h2>Snow and Ice Removal</h2>
            <img src={snow} alt="Snow Removal" />
            <button onClick={() => navigate('/services')}>Learn More</button>
          </div>
          <div className="service">
            <h2>Backyard Interlock Patios</h2>
            <img src={patio} alt="Interlock Patios" />
            <button onClick={() => navigate('/services')}>Learn More</button>
          </div>
        </section>
        <section className="design-build-maintain">
          <div className="design">
            <h2>Design</h2>
            <img src={backyard} alt="Design" />
            <button onClick={() => navigate('/services')}>Learn More</button>

          </div>
          <div className="build">
            <h2>Build</h2>
            <img src={backyard2} alt="Build" />
            <button onClick={() => navigate('/reviews')}>View Reviews</button>
          </div>
          <div className="maintain">
            <h2>Maintain</h2>
            <img src={garden1} alt="Maintain" />
            <button onClick={() => navigate('/browse')}>View Plants</button>
          </div>
        </section>
      </main>
      <footer>
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
          <button onClick={() => navigate('/customer-service')}>Customer Service</button>
        </footer>
    </div>
  );
}

export default Home;
