import React from 'react';
import './Rooms.scss';
import roomHero from '../../assets/images/rooms/room-hero.jpg';
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import keyLogo from '../../assets/images/logos/key-logo.svg';

const Rooms = () => {
  // const [data, setData] = useState([]);
  // const getData = () => {
  //   axios
  //     .get('api/rooms.json')
  //     .then((res) => {
  //       // console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  //   return;
  // };
  // // console.log(data.room);

  // useEffect(() => {
  //   getData();
  // }, []);

  const roomie = [
    { src: '../images/rooms/roomie/roomie.jpg', alt: 'Roomie' },
    { src: '../images/rooms/roomie/roomie-bedroom.jpg', alt: 'Roomie' },
    { src: '../images/rooms/roomie/roomie-bathroom.jpg', alt: 'Roomie' },
  ];

  const biggie = [
    { src: '../images/rooms/biggie/biggie-balcony.jpg', alt: 'Biggie' },
    { src: '../images/rooms/biggie/biggie.jpg', alt: 'Biggie' },
    { src: '../images/rooms/biggie/biggie-bedroom.jpg', alt: 'Biggie' },
    { src: '../images/rooms/biggie/biggie-bathroom.jpg', alt: 'Biggie' },
  ];

  const suite = [
    {
      src: '../images/rooms/suite/fancy-buddy-suite.jpg',
      alt: 'Fancy Buddy Suite',
    },
    {
      src: '../images/rooms/suite/suite-livingroom.jpg',
      alt: 'Fancy Buddy Suite',
    },
    {
      src: '../images/rooms/suite/suite-balcony.jpg',
      alt: 'Fancy Buddy Suite',
    },
    {
      src: '../images/rooms/suite/suite-bathroom.jpg',
      alt: 'Fancy Buddy Suite',
    },
    {
      src: '../images/rooms/suite/suite-shower.jpg',
      alt: 'Fancy Buddy Suite',
    },
  ];

  const buddy = [
    { src: '../images/rooms/buddy/buddy.jpg', alt: 'Buddy' },
    { src: '../images/rooms/buddy/buddy-entrance.jpg', alt: 'Buddy' },
    { src: '../images/rooms/buddy/buddy-bedroom.jpg', alt: 'Buddy' },
    { src: '../images/rooms/buddy/buddy-bathroom.jpg', alt: 'Buddy' },
  ];

  const loonie = [
    { src: '../images/rooms/loonie/loonie-bedroom.jpg', alt: 'Loonie' },
    { src: '../images/rooms/loonie/loonie.jpg', alt: 'Loonie' },
    { src: '../images/rooms/loonie/loonie-bathroom.jpg', alt: 'Loonie' },
    { src: '../images/rooms/loonie/loonie-desktop.jpg', alt: 'Loonie' },
  ];

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
            Escape to the mountains and experience the ultimate comfort at Shed.
            HOTEL. Our cozy rooms, decorated in scandinavian style, offer
            breathtaking views of the surrounding peaks. Each room is equipped
            with modern amenities to ensure a pleasant stay. Book your mountain
            retreat now and immerse yourself in the beauty of the Alps.
          </p>
        </section>
        <div className="rooms__card-wrapper">
          <div className="rooms__card">
            <div className="rooms__card-image">
              <ImageSlider slides={roomie} />
            </div>
            <div className="rooms__card-text">
              <h3>Roomie</h3>
              <p className="rooms__card-text__capacity">
                2 king size beds + 1 single bed | approx 30m² up to 3 adults
              </p>
              <p>
                A comfortable room for couples or buddies, with a king size bed,
                a cozy corner from where you’ll forget the flat screen TV, to
                focus on the big balcony and its mountain view – a feast for the
                eyes.
              </p>
              <p>
                Featuring a king size bed and a single bed, mini living-room,
                flat screen TV, safe, free WiFi, work desk and chair, bathroom
                with hairdryer and welcome products, baby cot on request.
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
              <ImageSlider slides={biggie} />
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
              <ImageSlider slides={suite} />
            </div>
            <div className="rooms__card-text">
              <h3>Fancy Buddy Suite</h3>
              <p className="rooms__card-text__capacity">
                1 king size bed + 1 sofa bed | approx 45m² up to 2 adults + 2
                children
              </p>
              <p>
                Comfy atmosphere, this is the ideal cozy nest for your holidays.
                Spacious, comfortable, facing the most beautiful mountains of
                the Val de Bagnes ... It is unique and will delight all those
                wishing to share good times as a couple or with friends.
              </p>
              <p>
                Featuring a king size bed, living-room, flat screen TV, safe,
                free WiFi, work desk and chair, bathroom with hairdryer and
                welcome products, additional bed and baby cot on request.
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
              <ImageSlider slides={buddy} />
            </div>
            <div className="rooms__card-text">
              <h3>Buddy</h3>
              <p className="rooms__card-text__capacity">
                1 King size bed | Approx 20m² up to 2 adults + 1 children.
              </p>
              <p>
                With your special someone, this is the best way to spend time in
                Verbier. You will find all the essentials here, enough to build
                up your strength for each day in the mountains. Oriented north,
                the room offer a breathtaking view of some of the biggest
                freerides in Verbier!
              </p>
              <p>
                Featuring a king size bed, flat screen TV, safe, free WiFi,
                bathroom with hairdryer and welcome products.
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
              <ImageSlider slides={loonie} />
            </div>
            <div className="rooms__card-text">
              <h3>Loonie</h3>
              <p className="rooms__card-text__capacity">
                1 large single bed | approx 15m² up to 1 adult
              </p>
              <p>
                Loonie is compact yet comfy – the perfect room for the
                mountaineer. Provided with a single bed, you’re guaranteed a
                good night’s sleep in between your adventures.
              </p>
              <p>
                Featuring 1 large single bed, flat screen TV, safe, free WiFi,
                bathroom with hairdryer and welcome products.
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
            <span>BEDS DRESSED IN COTTON</span>
            <span>MALIN+GOETZ BATHROOM AMENITIES</span>

            <span>HAIR DRYER</span>
            <span>SITTING AREA AND/OR DESK</span>
            <span>USB/USB-C PORTS</span>
            <span>
              CURATED FREE CONTENT ON SAMSUNG LED TVS WITH SCREENCASTING
              CAPABILTIES
            </span>
            <span>DAILY HOUSEKEEPING & LAUNDRY/DRY CLEANING SERVICES</span>
            <span>LES CLEFS D’OR CONCIERGE, RESTAURANT & PARKING</span>
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
