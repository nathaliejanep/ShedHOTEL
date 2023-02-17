import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import './Gallery.scss';
const Gallery = () => {
  const galleries = ['Hotel', 'Rooms'];

  return (
    <div className="container">
      <section className="container__section">
        <h1>Gallery</h1>
        <p>Take a visual stroll through our place, people and projects.</p>
      </section>
      <DynamicMenu items={galleries} />
    </div>
  );
};

export default Gallery;
