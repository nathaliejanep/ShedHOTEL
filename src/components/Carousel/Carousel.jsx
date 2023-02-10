import React from 'react';
import './Carousel.scss';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import fwt from '../../assets/images/events/fwt.JPG';
import palp from '../../assets/images/events/palp.jpg';

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
            <h3>
              <a href="https://palpfestival.ch/">Rocklette</a>
            </h3>
            <p>5 - 14 August</p>
            <p>
              Eat cheese with a view while listening to Jose Gonzalez or
              Graveyard.
            </p>
          </div>
          <Image src={palp} />
        </Slide>
        <Slide index={1} className="gear">
          <div className="carousel__slide-text">
            <a href="https://www.skiservice.com/en">
              <h3>Gear</h3>
            </a>
            <p>Get 20% off your rentals when you stay with us.</p>
          </div>
        </Slide>

        <Slide index={2} className="fwt">
          <div className="carousel__slide-text ">
            <a href="https://www.freerideworldtour.com/">
              <h3>Freeride World Tour</h3>
            </a>
            <p>23 - 30 April</p>
            <p>
              Watch the finals of the famous Freeride World Tour at the top of
              the mountain.
            </p>
          </div>
          <Image src={fwt} />
        </Slide>
        <Slide index={3} className=" concierge">
          <div className="carousel__slide-text">
            <h3>Mountain Concierge</h3>
            <p>
              We can help you book ski lessons, helisking, massage, babysitting.
              Just ask!
            </p>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
