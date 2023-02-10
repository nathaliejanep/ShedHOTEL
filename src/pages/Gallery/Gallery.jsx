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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum iste
          voluptatem reprehenderit consectetur itaque, quam at dolore cum atque
          deleniti.
        </p>
      </section>
      <DynamicMenu items={galleries} />
    </div>
  );
};

export default Gallery;
