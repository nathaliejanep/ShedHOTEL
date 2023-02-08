import React from 'react';
import './Rooms.scss';
import roomHero from '../../assets/images/room-hero.jpg';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import keyLogo from '../../assets/images/logos/key-logo.svg';

const Rooms = () => {
  const [data, setData] = useState([]);

  const slides = [
    { src: '../images/room4.jpg', alt: 'room4' },
    { src: '../images/room3.jpg', alt: 'room3' },
    { src: '../images/balcony.jpg', alt: 'balcony' },
    { src: '../images/room2.jpg', alt: 'room2' },
    { src: '../images/room1.jpg', alt: 'room1' },
  ];

  const getData = () => {
    axios
      .get('api/rooms.json')
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
    return;
  };
  // console.log(data.room);

  useEffect(() => {
    getData();
  }, []);

  // console.log(data.rooms);
  return (
    <div className="rooms">
      <section className="hero">
        <img className="hero-image" src={roomHero} alt="Double room" />
      </section>

      <div className="container">
        <section className="container__section">
          <h1>Our Rooms</h1>
          <p>
            About the rooms. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at. Donec imperdiet turpis vitae dictum.
          </p>
        </section>
        <div className="rooms__card-wrapper">
          <div className="rooms__card">
            <div className="rooms__card-image">
              <ImageSlider slides={slides} />
            </div>
            <div className="rooms__card-text">
              <h3>Biggie</h3>
              <p className="rooms__card-text__capacity">
                2 king size beds + 1 single bed | approx 45m² up to 4 adults + 3
                children
              </p>
              <p>
                With extra floor space, this is the perfect room for longer
                stays and when you want to spread out. After a day on the
                slopes, you can unwind in this two-bedroom and take in
                spectacular views from your big sunny balcony.
              </p>
              <p>
                Featuring two king-size beds, one single bed, mini living room,
                flat screen TV, safe, free WiFi, work desk and chair, bathroom
                with a hairdryer, and welcome products. Baby cot on request.
              </p>
            </div>
            <a
              href="https://sky-eu1.clock-software.com/spa/pms-wbe/#/hotel/12633"
              target="_blank"
              rel="noopener noreferrer"
              className="green-btn"
            >
              Book Now
            </a>
          </div>

          <div className="rooms__card">
            <div className="rooms__card-image">
              <ImageSlider slides={slides} />
            </div>
            <div className="rooms__card-text">
              <h3>Siggie</h3>
              <p className="rooms__card-text__capacity">
                2 king size beds + 1 single bed | approx 45m² up to 4 adults + 3
                children
              </p>
              <p>
                With extra floor space, this is the perfect room for longer
                stays and when you want to spread out. After a day on the
                slopes, you can unwind in this two-bedroom and take in
                spectacular views from your big sunny balcony.
              </p>
              <p>
                Featuring two king-size beds, one single bed, mini living room,
                flat screen TV, safe, free WiFi, work desk and chair, bathroom
                with a hairdryer, and welcome products. Baby cot on request.
              </p>
            </div>
            <a
              href="https://sky-eu1.clock-software.com/spa/pms-wbe/#/hotel/12633"
              target="_blank"
              rel="noopener noreferrer"
              className="green-btn"
            >
              Book Now
            </a>
          </div>

          <div className="rooms__card">
            <div className="rooms__card-image">
              <ImageSlider slides={slides} />
            </div>
            <div className="rooms__card-text">
              <h3>Triggie</h3>
              <p className="rooms__card-text__capacity">
                2 king size beds + 1 single bed | approx 45m² up to 4 adults + 3
                children
              </p>
              <p>
                With extra floor space, this is the perfect room for longer
                stays and when you want to spread out. After a day on the
                slopes, you can unwind in this two-bedroom and take in
                spectacular views from your big sunny balcony.
              </p>
              <p>
                Featuring two king-size beds, one single bed, mini living room,
                flat screen TV, safe, free WiFi, work desk and chair, bathroom
                with a hairdryer, and welcome products. Baby cot on request.
              </p>
            </div>
            <a
              href="https://sky-eu1.clock-software.com/spa/pms-wbe/#/hotel/12633"
              target="_blank"
              rel="noopener noreferrer"
              className="green-btn book-now"
            >
              Book Now
            </a>
          </div>
        </div>

        <section className="container__section rooms__amenities">
          <img src={keyLogo} alt="Logo of Key" />
          <h3>
            <span>Guest Room Experience</span>
            <span>and Hotel Amenities</span>
          </h3>
          <p>
            <span>
              Possibly list info about the rooms (label on bed linen etc.)
            </span>
            <span>BEDS DRESSED IN XXX</span>
            <span>XXX BATHROOM AMENITIES</span>
            <span>
              XXX SLIPPERS & ROBE 24-HOUR IN-ROOM DINING & BEVERAGE COOLER
            </span>
            <span>GARMENT STEAMER, HAIR DRYER</span>
            <span>
              SITTING AREA AND/OR DESK, USB/USB-C PORTS, & LAPTOP SAFE
            </span>
            <span>
              CURATED FREE CONTENT ON SAMSUNG LED TVS WITH SCREENCASTING
              CAPABILTIES
            </span>
            <span>
              FITNESS CENTER WITH PRECOR EQUIPMENT, PELOTON BIKES & THE MIRROR
              BY XXX
            </span>
            <span>DAILY HOUSEKEEPING & LAUNDRY/DRY CLEANING SERVICES</span>
            <span>
              LES CLEFS D’OR CONCIERGE, BUSINESS CENTER, & VALET PARKING
            </span>
          </p>
        </section>
        {/* DYNAMIC SOLUTION */}
        {/* {data?.rooms?.map((room, i) => (
          <div key={i} className="card rooms__card">
            <div className="card__text">
              <h3>{room.type}</h3>
              <p>
                {room.beds} | {room.size} | {room.maxCapacity}
              </p>
              <p>{room.description}</p>
            </div>
            <div className="card__image">
              {room.images.map((image, i) => (
                <ImageSlider key={i} slides={image} />
                // <div key={i}>
                //   <img src={image.src} alt={image.alt} />
                // </div>
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Rooms;
