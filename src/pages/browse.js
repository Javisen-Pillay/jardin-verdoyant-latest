import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './browse.scss';  
import tree from '../assets/tree.png';
import bush2 from '../assets/bush2.png';
import bush3 from '../assets/bush3.png';
import tree2 from '../assets/tree2.png';

function Browse() {
    const navigate = useNavigate();
  const [category, setCategory] = useState('flowers');

  const renderProducts = () => {
    switch (category) {
      case 'flowers':
        return (
          <>
            <div className="product">
              <img src={tree} alt="Magnolia Stellata 'Royal Star'" />
              <h3>Magnolia Stellata 'Royal Star'</h3>
              <p>$159.99</p>
              <button>View Details</button>
            </div>
            {/* Add more flower products here */}
          </>
        );
      case 'plants':
        return (
          <>
            <div className="product">
              <img src={bush2} alt="Buxus x 'Green Velvet'" />
              <h3>Buxus x 'Green Velvet'</h3>
              <p>$28.99</p>
              <button>View Details</button>
            </div>
            {/* Add more plant products here */}
          </>
        );
      case 'shrubs':
        return (
          <>
            <div className="product">
              <img src={bush3} alt="Taxus x Media 'Hicksii'" />
              <h3>Taxus x Media 'Hicksii'</h3>
              <p>$53.99</p>
              <button>View Details</button>
            </div>
            {/* Add more shrub products here */}
          </>
        );
      case 'fruits':
        return (
          <>
            <div className="product unavailable">
              <img src={tree2} alt="Abies Koreana 'Silver Show'" />
              <h3>Abies Koreana 'Silver Show'</h3>
              <p>From $149.99</p>
              <span>Currently Unavailable</span>
              <button>View Details</button>
            </div>
            {/* Add more fruit products here */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="browse">
      <header>
        <div className="header-container">
          <h1>Jardin Verdoyant</h1>
          <nav>
            <div className="account-info">
              <span>Canada</span>
              <input type="text" placeholder="Search" />
            </div>
          </nav>
        </div>
      </header>
      <main>
        <h2>Browse {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <div className="category-buttons">
          <button onClick={() => setCategory('flowers')}>Flowers</button>
          <button onClick={() => setCategory('plants')}>Plants</button>
          <button onClick={() => setCategory('shrubs')}>Shrubs</button>
          <button onClick={() => setCategory('fruits')}>Fruits</button>
        </div>
        <section className="products">
          {renderProducts()}
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

export default Browse;
