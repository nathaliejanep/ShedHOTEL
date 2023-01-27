import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import './Gallery.scss';
const Gallery = () => {
  const galleries = ['Rooms', 'Nooks & Cranes', 'Lorem Ipsum', 'Lorem Ipsum2'];

  return (
    <div className="container">
      <section className="container__section">
        <h1>Gallery</h1>
        <p>
          About gallery. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Quasi perferendis voluptatem dolorem laboriosam maxime error at
          culpa ipsum qui accusantium molestias laborum quae praesentium
          possimus hic consequuntur maiores iure ipsa totam necessitatibus,
          ipsam eius dolores. Quam porro recusandae commodi ipsa!
        </p>
      </section>
      <DynamicMenu items={galleries} />
    </div>
  );
};

export default Gallery;
