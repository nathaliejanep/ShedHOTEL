import React from 'react';
import { useState } from 'react';
import './ImageSlider.scss';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlideNr = currentIndex + 1;
  const length = slides.length;

  console.log(length);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="arrows">
        <FaArrowLeft className="arrow__left" onClick={prevSlide} />
        <p>
          {currentSlideNr} / {length}
        </p>
        <FaArrowRight className="arrow__right" onClick={nextSlide} />
      </div>
      <h2 className="hero-logo">{slides[currentIndex].alt}</h2>
      <img
        className=""
        src={slides[currentIndex].src}
        alt={slides[currentIndex].alt}
      />
    </div>
  );
};

export default ImageSlider;
