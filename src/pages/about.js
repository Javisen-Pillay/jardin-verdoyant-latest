import React from 'react';
import './about.scss';
import { translations } from '../translations';

function About({ language }) {
  return (
    <div className="about-page">
      <header>
        <h1>{translations[language].aboutTitle}</h1>
      </header>
      <main>
        <p>{translations[language].aboutContent}</p>
      </main>
    </div>
  );
}

export default About;
