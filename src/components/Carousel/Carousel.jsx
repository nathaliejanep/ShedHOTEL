import React from 'react';
import './Carousel.scss';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import fwt from '../../assets/images/events/fwt.jpg';

const Carousel = () => {
  return (
    <CarouselProvider
      visibleSlides={2.5}
      totalSlides={5}
      // step={1}
      currentSlide={1.7}
      naturalSlideWidth={550}
      naturalSlideHeight={550}
      // isIntrinsicHeight={true}
    >
      <Slider>
        <Slide index={0} className="snow-forecast">
          <div className="carousel__slide-text">
            <h3>
              <a
                href="https://www.snow-forecast.com/resorts/Verbier/6day/mid"
                target="_blank"
                rel="noreferrer"
              >
                Snow Forecast
              </a>
            </h3>
            <p>Check out the conditions in Verbier.</p>
          </div>
        </Slide>

        <Slide index={1} className="gear">
          <div className="carousel__slide-text">
            <a
              href="https://www.skiservice.com/en"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Gear</h3>
            </a>
            <p>Get 20% off your rentals when you stay with us.</p>
          </div>
        </Slide>

        <Slide index={2} className="fwt">
          <div className="carousel__slide-text ">
            <a
              href="https://www.freerideworldtour.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Freeride World Tour</h3>
            </a>
            <p>23 - 30 April</p>
          </div>
          <Image src={fwt} />
        </Slide>

        <Slide index={3} className=" concierge">
          <div className="carousel__slide-text">
            <a href="https://www.redbull.com/ch-fr/events/homerun">
              <h3>Red Bull Home Run</h3>
            </a>
            <p>15 April</p>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
