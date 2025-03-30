import React from 'react';
import './Goomah.scss';
import shedLogoWhite from '../../assets/images/logos/shed-logo-white.svg';
import goomahHero from '../../assets/images/goomah/goomah-hero.jpg';
import goomahLogo from '../../assets/images//logos/goomah-logo.svg';
import goomahMouth from '../../assets/images/logos/goomah-mouth.png';
import pizzaBoutit from '../../assets/images/goomah/monthly-pizza.jpg';
import menu from '../../assets/images/goomah/menu.svg';
import menu2 from '../../assets/images/goomah/menu2.svg';
import mrSoprano from '../../assets/images/goomah/pizza-served.jpg';
import Banner from '../../components/Banner/Banner';
import { NavLink } from 'react-router-dom';

const Goomah = () => {
  return (
    <div className='goomah'>
      {/* EDIT move to navbar */}
      <div className='goomah__nav'>
        <NavLink
          to='/'
          className='goomah__nav-logo '
        >
          <img
            src={shedLogoWhite}
            alt='Shed Hotel Logo'
          />
        </NavLink>
      </div>

      <section className='hero '>
        <img
          className='hero-image '
          src={goomahHero}
          alt='Pizza making at Goomah'
        />

        <img
          className='hero-logo hero-logo'
          src={goomahLogo}
          alt='Goomah Logo'
        />
      </section>

      <Banner />

      <div className='container'>
        <section className='container__section goomah__about'>
          <h1>Shed. GOOMAH</h1>
          <p>
            Shed. GOOMAH brings Little Italy to Verbier, blending American
            favourites with luxurious Italian cuisine. Everything is homemade
            with a creative twist on classic dishes. Don't miss the entrecôte
            with bone marrow butter or the taleggio and black truffle arancini.
            At GOOMAH each bite is crafted with passion and originality.
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

        <section className='container__section goomah__book'>
          <h2>Book your table</h2>

          <div className='goomah__book-btn'>
            <p>
              <a
                href='https://tables.hostmeapp.com/reserve/32514'
                target='_blank'
                rel='noreferrer'
              >
                I'm hungry - Book Now
              </a>
            </p>
          </div>
          <div className='goomah__book-groups'>
            <p>
              For groups larger than 12 guests, we offer a private dining room
              with an intimate homelike appeal. To book this space, please
              contact us directly via phone or email.
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
        </section>

        <section className='card'>
          <div className='card__text goomah__monthly'>
            <p className='font-sans'>Our Favourite Pick</p>

            <h2>
              Robert <br />
              De Nitro 2.0
            </h2>
            <p className='goomah__monthly-ingredients'>
              San Marzano, Fior Di Latte, Pecorino, Salami Piccante, 'Nduja,
              Pickled Jalapeños, Basil, Oregano
            </p>
          </div>

          <div className='card__image'>
            <img
              src={pizzaBoutit}
              alt='Pizza'
            />
          </div>
        </section>

        {/* <section className='container__section goomah__menu'> */}
        <section className='container goomah__section goomah__menu'>
          <img
            src={menu}
            alt='Take Away menu'
          />
          <img
            src={menu2}
            alt='Take Away menu'
          />
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
