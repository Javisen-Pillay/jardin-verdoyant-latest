import React from 'react';
import { useNavigate } from 'react-router-dom';
import './reviews.scss';
import review1 from '../assets/review1.png';
import review2 from '../assets/review2.png';
import review3 from '../assets/review3.png';
import review4 from '../assets/review4.png';
import { translations } from '../translations';

function Reviews({ language }) {
  const navigate = useNavigate();

  return (
    <div className="reviews-page" lang={language}>
      <header>
        <div className="header-container">
          <h1>Jardin Verdoyant</h1>
          <nav aria-label="Main Navigation">
            <ul>
              <li>{translations[language].home}</li>
              <li>{translations[language].services}</li>
              <li>Canada</li>
              <li><input type="text" placeholder="Search" aria-label="Search" /></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h2>{translations[language].reviewsTitle}</h2>
        <section className="reviews">
          <div className="review">
            <img src={review1} alt="Review from Sarah Thompson in June 2024" />
            <p>{translations[language].review1} - Sarah Thompson, June 2024</p>
          </div>
          <div className="review">
            <img src={review2} alt="Review from David Martinez in May 2024" />
            <p>{translations[language].review2} - David Martinez, May 2024</p>
          </div>
          <div className="review">
            <img src={review3} alt="Review from Emily Watson in April 2024" />
            <p>{translations[language].review3} - Emily Watson, April 2024</p>
          </div>
          <div className="review">
            <img src={review4} alt="Review from Mark Johnson in March 2024" />
            <p>{translations[language].review4} - Mark Johnson, March 2024</p>
          </div>
        </section>
        <button className="add-review" aria-label="Add a review">{translations[language].addReview}</button>
      </main>
      <footer>
        <button onClick={() => navigate('/about')} aria-label="Learn more about us">{translations[language].about}</button>
        <button onClick={() => navigate('/privacy-policy')} aria-label="Read our privacy policy">{translations[language].privacyPolicy}</button>
        <button onClick={() => navigate('/customer-service')} aria-label="Contact customer service">{translations[language].customerService}</button>
      </footer>
    </div>
  );
}

export default Reviews;
