import React from 'react';
import './Rooms.scss';
import roomHero from '../../assets/images/rooms/room-hero.jpg';
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import keyLogo from '../../assets/images/logos/key-logo.svg';
import { mewsReserveLink } from '../../utils/config';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Rooms = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
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
    <div className='rooms'>
      <section className='hero'>
        <img
          className='hero-image'
          src={roomHero}
          alt='Double room'
        />
      </section>

      <div className='container'>
        <section className='container__section'>
          <h1>{t.rooms.title}</h1>
          <p>
            {t.rooms.intro}
          </p>
        </section>
        <div className='rooms__card-wrapper'>
          <div className='rooms__card'>
            <div className='rooms__card-image'>
              <ImageSlider slides={roomie} />
            </div>
            <div className='rooms__card-text'>
              <h3>{t.rooms.roomie.name}</h3>
              <p className='rooms__card-text__capacity'>
                {t.rooms.roomie.capacity} <br /> {t.rooms.roomie.adults}
              </p>
              <p>
                {t.rooms.roomie.description}
              </p>
            </div>
            <a
              href={mewsReserveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='green-btn'
            >
              {t.rooms.bookNow}
            </a>
          </div>

          <div className='rooms__card'>
            <div className='rooms__card-image'>
              <ImageSlider slides={biggie} />
            </div>
            <div className='rooms__card-text'>
              <h3>{t.rooms.biggie.name}</h3>
              <p className='rooms__card-text__capacity'>
                {t.rooms.biggie.capacity} <br />
                {t.rooms.biggie.adults}
              </p>
              <p>
                {t.rooms.biggie.description}
              </p>
            </div>
            <a
              href={mewsReserveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='green-btn'
            >
              {t.rooms.bookNow}
            </a>
          </div>

          <div className='rooms__card'>
            <div className='rooms__card-image'>
              <ImageSlider slides={suite} />
            </div>
            <div className='rooms__card-text'>
              <h3>{t.rooms.suite.name}</h3>
              <p className='rooms__card-text__capacity'>
                {t.rooms.suite.capacity} <br />
                {t.rooms.suite.adults}
              </p>
              <p>
                {t.rooms.suite.description}
              </p>
            </div>
            <a
              href={mewsReserveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='green-btn'
            >
              {t.rooms.bookNow}
            </a>
          </div>

          <div className='rooms__card'>
            <div className='rooms__card-image'>
              <ImageSlider slides={buddy} />
            </div>
            <div className='rooms__card-text'>
              <h3>{t.rooms.buddy.name}</h3>
              <p className='rooms__card-text__capacity'>
                {t.rooms.buddy.capacity} <br />
                {t.rooms.buddy.adults}
              </p>
              <p>
                {t.rooms.buddy.description}
              </p>
            </div>
            <a
              href={mewsReserveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='green-btn'
            >
              {t.rooms.bookNow}
            </a>
          </div>

          <div className='rooms__card'>
            <div className='rooms__card-image'>
              <ImageSlider slides={loonie} />
            </div>
            <div className='rooms__card-text'>
              <h3>{t.rooms.loonie.name}</h3>
              <p className='rooms__card-text__capacity'>
                {t.rooms.loonie.capacity} <br />
                {t.rooms.loonie.adults}
              </p>
              <p>
                {t.rooms.loonie.description}
              </p>
            </div>
            <a
              href={mewsReserveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='green-btn book-now'
            >
              {t.rooms.bookNow}
            </a>
          </div>
        </div>

        <section className='container__section rooms__amenities'>
          <img
            src={keyLogo}
            alt='Logo of Key'
          />
          <h3>
            <span>{t.rooms.amenitiesTitle}</span>
            <span>{t.rooms.amenitiesSubtitle}</span>
          </h3>
          <p>
            <span>{t.rooms.amenities.wifi}</span>
            <span>{t.rooms.amenities.beds}</span>
            <span>{t.rooms.amenities.bathroom}</span>
            <span>{t.rooms.amenities.housekeeping}</span>
            <span>{t.rooms.amenities.concierge}</span>
            <span>{t.rooms.amenities.restaurant}</span>
            <span>{t.rooms.amenities.parking}</span>
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
