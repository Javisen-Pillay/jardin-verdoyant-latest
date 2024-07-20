import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Reviews from './pages/reviews';
import Services from './pages/services';
import Video from './pages/video';
import Browse from './pages/browse';
import Schedule from './pages/schedule';
import About from './pages/about';
import PrivacyPolicy from './pages/privacypolicy';
import CustomerService from './pages/customerservice';
import GardenSetup from './pages/gardensetup';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import './App.css';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">{translations[language].home}</Link></li>
              <li><Link to="/reviews">{translations[language].reviews}</Link></li>
              <li><Link to="/services">{translations[language].services}</Link></li>
              <li><Link to="/video">{translations[language].video}</Link></li>
              <li><Link to="/browse">{translations[language].browse}</Link></li>
              <li><Link to="/schedule">{translations[language].schedule}</Link></li>
              <li><Link to="/garden-setup">{translations[language].gardenSetup}</Link></li>
              <li><Link to="/faq">{translations[language].faqTitle}</Link></li>
            </ul>
            <div className="language-switch">
              <button onClick={() => switchLanguage('en')}>EN</button>
              <button onClick={() => switchLanguage('fr')}>FR</button>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home language={language} switchLanguage={switchLanguage} />} />
            <Route path="/reviews" element={<Reviews language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route path="/video" element={<Video language={language} />} />
            <Route path="/browse" element={<Browse language={language} />} />
            <Route path="/schedule" element={<Schedule language={language} />} />
            <Route path="/garden-setup" element={<GardenSetup language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy language={language} />} />
            <Route path="/customer-service" element={<CustomerService language={language} />} />
            <Route path="/FAQ" element={<FAQ language={language} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
