import React, { useState } from 'react';
import './video.scss';  

const videos = {
  landscaping: {
    title: 'Softscaping / Landscaping',
    src: 'https://www.youtube.com/embed/video_id1',
    description: 'Jardin Verdoyant uses a heritage of creative and quality landscape design to achieve optimal and beautiful results. Our patio and garden designs paved the way for Jardin Verdoyant to become the leading design and construction company in the Ottawa area. Working with homeowners, our approach ensures ideal landscaping, improves overall curb appeal, increases property value and can often save money in the long run.'
  },
  snowRemoval: {
    title: 'Snow and Ice Removal',
    src: 'https://www.youtube.com/embed/video_id2',
    description: 'Our snow and ice removal services ensure that your property remains accessible and safe during the harsh winter months. Jardin Verdoyant’s team is equipped to handle the toughest snowstorms, ensuring your driveway and pathways are clear and safe.'
  },
  customPatio: {
    title: 'Designing a Custom Patio',
    src: 'https://www.youtube.com/embed/video_id3',
    description: 'Watch our experts design and build custom patios that are both functional and aesthetically pleasing. From the initial consultation to the final build, see how Jardin Verdoyant can transform your outdoor space into a beautiful patio.'
  },
  maintenance: {
    title: 'Maintaining Your Garden',
    src: 'https://www.youtube.com/embed/video_id4',
    description: 'Proper maintenance is key to a beautiful garden. Learn from our experts the best practices for keeping your garden in top condition, including pruning, fertilizing, and pest control techniques.'
  }
};

function Video() {
  const [currentVideo, setCurrentVideo] = useState('landscaping');

  return (
    <div className="video-page">
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
        <h2>{videos[currentVideo].title}</h2>
        <iframe
          src={videos[currentVideo].src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videos[currentVideo].title}
        ></iframe>
        <p>{videos[currentVideo].description}</p>
        <div className="video-navigation">
          <button onClick={() => setCurrentVideo('landscaping')}>Landscaping</button>
          <button onClick={() => setCurrentVideo('snowRemoval')}>Snow Removal</button>
          <button onClick={() => setCurrentVideo('customPatio')}>Custom Patio</button>
          <button onClick={() => setCurrentVideo('maintenance')}>Maintenance</button>
        </div>
      </main>
    </div>
  );
}

export default Video;
