import React from 'react';
import './FAQ.scss';
import { translations } from '../translations';

function FAQ({ language }) {
  return (
    <div className="faq">
      <h1>{translations[language].faqTitle}</h1>
      <div className="faq-item">
        <h3>1. {translations[language].faqQuestion1}</h3>
        <p>{translations[language].faqAnswer1}</p>
      </div>
      <div className="faq-item">
        <h3>2. {translations[language].faqQuestion2}</h3>
        <p>{translations[language].faqAnswer2}</p>
      </div>
      <div className="faq-item">
        <h3>3. {translations[language].faqQuestion3}</h3>
        <p>{translations[language].faqAnswer3}</p>
      </div>
      <div className="faq-item">
        <h3>4. {translations[language].faqQuestion4}</h3>
        <p>{translations[language].faqAnswer4}</p>
      </div>
      <div className="faq-item">
        <h3>5. {translations[language].faqQuestion5}</h3>
        <p>{translations[language].faqAnswer5}</p>
      </div>
      <div className="faq-item">
        <h3>6. {translations[language].faqQuestion6}</h3>
        <p>{translations[language].faqAnswer6}</p>
      </div>
      <div className="faq-item">
        <h3>7. {translations[language].faqQuestion7}</h3>
        <p>{translations[language].faqAnswer7}</p>
      </div>
      <div className="faq-item">
        <h3>8. {translations[language].faqQuestion8}</h3>
        <p>{translations[language].faqAnswer8}</p>
      </div>
      <div className="faq-item">
        <h3>9. {translations[language].faqQuestion9}</h3>
        <p>{translations[language].faqAnswer9}</p>
      </div>
      <div className="faq-item">
        <h3>10. {translations[language].faqQuestion10}</h3>
        <p>{translations[language].faqAnswer10}</p>
      </div>
    </div>
  );
}

export default FAQ;
