import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './browse.scss';
import tree from '../assets/tree.png';
import bush2 from '../assets/bush2.png';
import bush3 from '../assets/bush3.png';
import tree2 from '../assets/tree2.png';
import plants1 from '../assets/plants1.jpg';
import fruits3 from '../assets/fruits3.jpg';
import fruits2 from '../assets/fruits2.jpg';
import fruits1 from '../assets/fruits1.jpg';
import flower3 from '../assets/flower3.jpg';
import flower2 from '../assets/flower2.webp';
import flower1 from '../assets/flower1.webp';
import bush6 from '../assets/bush6.jpg';
import bush4 from '../assets/bush4.webp';

const productsData = {
  flowers: [
    { id: 1, name: "Magnolia Stellata 'Royal Star'", price: 159.99, image: tree },
    { id: 5, name: "Rosa 'Queen Elizabeth'", price: 29.99, image: flower1 },
    { id: 6, name: "Tulipa 'Golden Apeldoorn'", price: 19.99, image: flower2 },
    { id: 7, name: "Dahlia 'Bishop of Llandaff'", price: 14.99, image: flower3 },
  ],
  plants: [
    { id: 2, name: "Buxus x 'Green Velvet'", price: 28.99, image: bush2 },
    { id: 8, name: "Ficus lyrata", price: 45.99, image: plants1 },
  ],
  shrubs: [
    { id: 3, name: "Taxus x Media 'Hicksii'", price: 53.99, image: bush3 },
    { id: 9, name: "Hydrangea paniculata 'Limelight'", price: 39.99, image: bush4 },
    { id: 10, name: "Viburnum opulus 'Roseum'", price: 49.99, image: bush6 },
  ],
  fruits: [
    { id: 4, name: "Abies Koreana 'Silver Show'", price: 149.99, image: tree2, unavailable: true },
    { id: 11, name: "Malus domestica 'Honeycrisp'", price: 25.99, image: fruits1 },
    { id: 12, name: "Prunus avium 'Bing'", price: 35.99, image: fruits2 },
    { id: 13, name: "Vaccinium corymbosum 'Bluecrop'", price: 29.99, image: fruits3 },
  ],
};

function Browse() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('flowers');
  const [sortPrice, setSortPrice] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; 

  const handleSortPrice = (order) => {
    setSortPrice(order);
  };

  const renderProducts = () => {
    let products = productsData[category];
    if (sortPrice) {
      products = products.sort((a, b) => sortPrice === 'asc' ? a.price - b.price : b.price - a.price);
    }
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

    return paginatedProducts.map((product) => (
      <div className={`product ${product.unavailable ? 'unavailable' : ''}`} key={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        {product.unavailable ? (
          <span>Currently Unavailable</span>
        ) : (
          <button>View Details</button>
        )}
      </div>
    ));
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
        <div className="sort-buttons">
          <button onClick={() => handleSortPrice('asc')}>Sort by Price: Low to High</button>
          <button onClick={() => handleSortPrice('desc')}>Sort by Price: High to Low</button>
        </div>
        <section className="products">
          {renderProducts()}
        </section>
        <div className="pagination">
          {[...Array(10)].map((_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Browse;
