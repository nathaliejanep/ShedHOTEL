import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import './Gallery.scss';
const Gallery = () => {
  const galleries = ['Rooms', 'Hotel'];

  return (
    <div className="container">
      <section className="container__section">
        <h1>Gallery</h1>
        <p>
          Get a glimpse of Shed. HOTEL. Discover the beauty and comfort of our
          rooms, facilities, and surroundings before even booking your stay.
          Explore now.
        </p>
      </section>
      <DynamicMenu items={galleries} />
    </div>
  );
};

export default Gallery;
