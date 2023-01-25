import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';

const Gallery = () => {
  const galleries = ['Rooms', 'Nooks & Cranes', 'Lorem Ipsum', 'Lorem Ipsum2'];
  return (
    <div>
      <h1>Gallery</h1>
      <DynamicMenu items={galleries} />
    </div>
  );
};

export default Gallery;
