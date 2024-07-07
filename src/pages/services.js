import React from 'react';
import { useNavigate } from 'react-router-dom';
import landscapingImg from '../assets/landscaping.jpeg';
import snowRemovalImg from '../assets/landscapewinter.webp';
import patioImg from '../assets/patio1.jpeg';
import './services.scss';  

function Services() {
  const navigate = useNavigate();
  
  return (
    <div className="services-page">
      <h1>Jardin Verdoyant</h1>
      <h2>Services</h2>
      <section>
        <div className="service-item">
          <img src={landscapingImg} alt="Landscaping" />
          <div className="service-text">
            <h3>Softscaping / Landscaping</h3>
            <p>At Jardin Verdoyant, we pride ourselves on delivering top-notch landscaping services that blend aesthetics, functionality, and sustainability. Our team of experienced landscapers and horticulturists work diligently to create outdoor spaces that are not only visually stunning but also enhance the natural environment. We use high-quality materials and innovative techniques to ensure that every project meets our rigorous standards of excellence. Whether it's a lush garden, a tranquil water feature, or a vibrant flower bed, we bring our passion for landscaping to every project, ensuring our clients' satisfaction and the longevity of their outdoor spaces.</p>
          </div>
        </div>
        <div className="service-item">
          <img src={snowRemovalImg} alt="Snow and Ice Removal" />
          <div className="service-text">
            <h3>Snow and Ice Removal</h3>
            <p>Jardin Verdoyant offers reliable and efficient snow removal services designed to keep your property safe and accessible during the harsh winter months. Our team is equipped with state-of-the-art machinery and trained in the best practices to ensure rapid and thorough snow clearance. We understand the importance of maintaining clear pathways and driveways, especially in heavy snowfall conditions. Our commitment to quality means we work around the clock to provide timely service, minimizing disruptions and ensuring that your home or business remains operational and safe from the hazards of snow and ice.</p>
          </div>
        </div>
        <div className="service-item">
          <img src={patioImg} alt="Backyard Interlock Patios" />
          <div className="service-text">
            <h3>Backyard Interlock Patios</h3>
            <p>Transform your backyard with our expertly crafted interlock patios, designed to blend beauty and durability. At Jardin Verdoyant, we specialize in creating interlock patios that are both elegant and resilient, perfect for enhancing your outdoor living space. Our skilled craftsmen use premium materials and precise installation techniques to ensure each patio is built to withstand the elements while retaining its aesthetic appeal. Whether you're looking to create a cozy seating area, a functional outdoor kitchen, or a stylish entertainment space, our interlock patios are tailored to meet your needs and exceed your expectations. Enjoy the perfect balance of form and function with a backyard patio that adds value and charm to your home.</p>
          </div>
        </div>
      </section>
      <footer>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
        <button onClick={() => navigate('/customer-service')}>Customer Service</button>
      </footer>
    </div>
  );
}

export default Services;
