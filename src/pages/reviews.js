import React from 'react';
import { useNavigate } from 'react-router-dom';
import './reviews.scss';  
import review1 from '../assets/review1.png';
import review2 from '../assets/review2.png';
import review3 from '../assets/review3.png';
import review4 from '../assets/review4.png';

function Reviews() {
    const navigate = useNavigate();
  return (
    <div className="reviews-page">
      <header>
        <div className="header-container">
          <h1>Jardin Verdoyant</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Canada</li>
              <li><input type="text" placeholder="Search" /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h2>Reviews</h2>
        <section className="reviews">
          <div className="review">
            <img src={review1} alt="Review 1" />
            <p>"I recently hired Jardin d'Émeraude to redesign my backyard, and I couldn't be happier with the results! From the initial consultation to the final touches, their team was professional, knowledgeable, and attentive to my needs. I highly recommend Jardin d'Émeraude to anyone looking to enhance their outdoor space!" - Sarah Thompson, June 2024</p>
          </div>
          <div className="review">
            <img src={review2} alt="Review 2" />
            <p>"Jardin d'Émeraude exceeded all my expectations with their exceptional landscaping services. I wanted a low-maintenance garden that still looked beautiful, and they delivered beyond my wildest dreams. If you're looking for top-notch landscaping services, Jardin d'Émeraude is the way to go!" - David Martinez, May 2024</p>
          </div>
          <div className="review">
            <img src={review3} alt="Review 3" />
            <p>"Working with Jardin d'Émeraude was an absolute pleasure! Their team transformed my neglected yard into a breathtaking garden that is now the envy of my neighborhood. I highly recommend Jardin d'Émeraude to anyone seeking a reliable and talented landscaping company." - Emily Watson, April 2024</p>
          </div>
          <div className="review">
            <img src={review4} alt="Review 4" />
            <p>"I cannot praise Jardin d'Émeraude enough for the incredible job they did on my garden. From start to finish, their team demonstrated a high level of professionalism and creativity. Thank you, Jardin d'Émeraude, for your outstanding work and dedication to excellence!" - Mark Johnson, March 2024</p>
          </div>
        </section>
        <button className="add-review">Add Review</button>
      </main>
      <footer>
          <button onClick={() => navigate('/about')}>About</button>
          <button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
          <button onClick={() => navigate('/customer-service')}>Customer Service</button>
        </footer>
    </div>
  );
}

export default Reviews;
