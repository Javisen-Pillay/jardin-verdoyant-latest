import React from 'react';
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
import Footer from './components/Footer';  // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/video">Video</Link></li>
              <li><Link to="/browse">Browse</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/garden-setup">Garden Setup</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/services" element={<Services />} />
            <Route path="/video" element={<Video />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/garden-setup" element={<GardenSetup />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/customer-service" element={<CustomerService />} />
          </Routes>
        </main>
        <Footer />  {/* Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;
