import React from 'react';
import './Carousel.scss';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import hotelHappening from '../../assets/images/hotel-happening.jpg';
import hikingBridge from '../../assets/images/hiking-bridge.jpg';
import fwt from '../../assets/images/fwt.jpeg';

const Carousel = () => {
  return (
    <CarouselProvider
      visibleSlides={2.5}
      totalSlides={5}
      // step={1}
      currentSlide={1.8}
      naturalSlideWidth={550}
      naturalSlideHeight={550}
      // isIntrinsicHeight={true}
    >
      <Slider>
        <Slide index={0}>
          <div className="carousel__slide-text">
            <h3>Verbier Music Festival</h3>
            <p>23 - 30 April</p>
            <p>There's a buzz in the air</p>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="carousel__slide-text">
            <h3>Hanging bridge event</h3>
            <p>23 - 30 April</p>
            <p>Walk over the bridge and see amazing views</p>
          </div>
          <Image src={hikingBridge} />
        </Slide>
        <Slide index={2}>
          <div className="carousel__slide-text">
            <h3>FWT VERBIER</h3>
            <p>23 - 30 April</p>
            <p>
              <a href="https://www.freerideworldtour.com/">
                Freeride World Tour
              </a>
            </p>
          </div>
          <Image src={fwt} />
        </Slide>
        <Slide index={3}>
          <div className="carousel__slide-text">
            <h3>Verbier DJ Awards</h3>
            <p>26 March</p>
            <p>
              <a href="https://www.freerideworldtour.com/">Le Rouge</a>
            </p>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
