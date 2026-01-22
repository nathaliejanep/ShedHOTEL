import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Goomah.scss';
import goomahHero from '../../assets/images/goomah/goomah-hero.jpg';
import goomahLogo from '../../assets/images//logos/goomah-logo.svg';
import goomahMouth from '../../assets/images/logos/goomah-mouth.png';
import pizzaBoutit from '../../assets/images/goomah/monthly-pizza.jpg';
import menu from '../../assets/images/goomah/menu.svg';
import menu2 from '../../assets/images/goomah/menu2.svg';
import mrSoprano from '../../assets/images/goomah/pizza-served.jpg';
import Banner from '../../components/Banner/Banner';
import Reservation from '../../components/Reservation/Reservation';
import { useLanguage } from '../../context/LanguageContext';

const Goomah = () => {
  const { language } = useLanguage();
  const [data, setData] = useState(null);
  const [showEntrance, setShowEntrance] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const getData = () => {
    axios
      .get(`api/goomah.${language}.json`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [language]);

  useEffect(() => {
    // Entrance animation sequence
    if (showEntrance) {
      // Make content visible immediately so it's ready when orange slides up
      setContentVisible(true);
      
      // After logo animation and slide up completes, hide entrance overlay
      const timer = setTimeout(() => {
        setShowEntrance(false);
      }, 2500); // Total animation time (1.5s pan + 1s slide up)

      return () => clearTimeout(timer);
    }
  }, [showEntrance]);

  if (!data) return null;
  return (
    <div className={`goomah ${contentVisible ? 'content-visible' : ''}`}>
      {/* Entrance Animation Overlay */}
      {showEntrance && (
        <div className='goomah__entrance'>
          <div className='goomah__entrance-logo-wrapper'>
            <img
              className='goomah__entrance-logo'
              src={goomahLogo}
              alt='Goomah Logo'
            />
          </div>
        </div>
      )}
      
      {/* Page Content */}
      <section className='hero'>
        <img
          className='hero-image'
          src={goomahHero}
          alt='Pizza making at Goomah'
        />

        <img
          className='hero-logo hero-logo'
          src={goomahLogo}
          alt='Goomah Logo'
        />
      </section>

      <div className='goomah__banner-wrapper'>
        <Banner />
      </div>

      <div className='container goomah__container'>
        <section className='container__section goomah__about'>
          <h1>{data.title}</h1>
          <p>
            {data.intro}
          </p>

          <p>
            <a
              href='https://www.instagram.com/shed.goomah/'
              target='_blank'
              rel='noreferrer'
            >
              INSTAGRAM
            </a>
          </p>

          <img
            className='mouth-logo'
            src={goomahMouth}
            alt='Goomah Mouth Logo'
          />
        </section>

        <section className='goomah__book'>
    
          <div className='goomah__book-reservation'>
          <Reservation />
          {/* <div className='goomah__book-btn'>
            <p>
              <a
                href='https://tables.hostmeapp.com/reserve/32514'
                target='_blank'
                rel='noreferrer'
              >
                I'm hungry - Book Now
              </a>
            </p>
          </div> */}
          <div className='goomah__book-groups'>
          <h2>{data.bookTable}</h2>
            <p>
              {data.groupBooking}
            </p>
            <p>
              <a href='tel:+41782260226'>+41 78 226 02 26</a>
            </p>
            <p>
              <a href='mailto:goomah@shedhotels.com?subject=Booking Inquiry&body=Hello, I would like to make a reservation.'>
                goomah@shedhotels.com
              </a>
            </p>
          </div>
          </div>
        </section>

        <section className='card'>
          <div className='card__text goomah__monthly'>
            <p className='font-sans'>{data.featuredPizza.label}</p>

            <h2>
              {data.featuredPizza.name.split(' ')[0]} <br />
              {data.featuredPizza.name.split(' ').slice(1).join(' ')}
            </h2>
            <p className='goomah__monthly-ingredients'>
              {data.featuredPizza.ingredients}
            </p>
          </div>

          <div className='card__image'>
            <img
              src={pizzaBoutit}
              alt='Pizza'
            />
          </div>
        </section>

        <section className='container__section goomah__menu'>
          <img
            src={menu}
            alt='Take Away menu'
          />
          <img
            src={menu2}
            alt='Take Away menu'
          />
        </section>
        <section className='container goomah__menu'>
          <div className='goomah__menu-take-away'>
            <h2>{data.takeAway.title}</h2>
            <p>{data.takeAway.description}</p>
            <button
              className='goomah__menu-btn'
              onClick={() =>
                window.open(
                  'https://mylightspeed.app/OFELXQJO/C-ordering/menu',
                  '_blank'
                )
              }
            >
              {data.takeAway.buttonText}
            </button>
          </div>
          <div className='goomah__menu-delivery'>
            <h2>{data.delivery.title}</h2>
            <p>
              {data.delivery.description}
            </p>
            <button
              className='goomah__menu-btn'
              onClick={() =>
                window.open(
                  'https://mylightspeed.app/WUWNSVOE/C-ordering',
                  '_blank'
                )
              }
            >
              {data.delivery.buttonText}
            </button>
          </div>
        </section>

        <section className='container__section goomah__soprano'>
          <img
            src={mrSoprano}
            alt='Tony Soprano eating'
          />
        </section>
        <Banner />
      </div>
    </div>
  );
};

export default Goomah;
