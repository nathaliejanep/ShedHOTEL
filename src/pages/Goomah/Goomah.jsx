import React from 'react';
import './Goomah.scss';
import shedLogoWhite from '../../assets/images/logos/shed-logo-white.svg';
import goomahHero from '../../assets/images/goomah/goomah-hero.jpg';
import goomahLogo from '../../assets/images//logos/goomah-logo.svg';
import goomahMouth from '../../assets/images/logos/goomah-mouth.png';
import pizzaBoutit from '../../assets/images/goomah/monthly-pizza.jpg';
import menu from '../../assets/images/goomah/take-away-menu.svg';
import mrSoprano from '../../assets/images/goomah/pizza-served.jpg';
import Banner from '../../components/Banner/Banner';
import { NavLink } from 'react-router-dom';

const Goomah = () => {
  return (
    <div className="goomah">
      {/* EDIT move to navbar */}
      <div className="goomah__nav">
        <NavLink to="/" className="goomah__nav-logo ">
          <img src={shedLogoWhite} alt="Shed Hotel Logo" />
        </NavLink>
      </div>

      <section className="hero ">
        <img
          className="hero-image "
          src={goomahHero}
          alt="Pizza making at Goomah"
        />

        <img
          className="hero-logo hero-logo"
          src={goomahLogo}
          alt="Goomah Logo"
        />
      </section>

      <Banner />

      <div className="container">
        <section className="container__section goomah__about">
          <h1>Caffè Goomah</h1>
          <p>
            Perfecting the art of pizza making had been on our bucket list for a
            while - so we drove to Alba, filled the trunk with stone milled
            flour and started experimenting with possibilities for the perfect
            pie.
          </p>
          <p>
            Meant to be shared the Italian way, the food reflects our vibe -
            convivial and loud. Expect a décor infused with a homelike feel,
            dough being tossed in the open kitchen air, and us spinning vinyls
            and natural wines.
          </p>

          <p>
            <a href="https://www.instagram.com/caffegoomah/">INSTAGRAM</a>
          </p>

          <img
            className="mouth-logo"
            src={goomahMouth}
            alt="Goomah Mouth Logo"
          />
        </section>

        <section className="container__section goomah__book">
          <h2>Book your table</h2>
          <p>
            <a href="tel:+41782260226">+41 78 226 02 26</a>
          </p>
          <p>
            Caffè Goomah is a walk-in only restaurant, offering a private
            bookable dining room with an intimate homelike appeal for groups
            bigger than ten persons.
          </p>
        </section>

        <section className="card">
          <div className="card__text goomah__monthly">
            <p className="font-sans">Our Favourite Pick - No.01</p>

            <h2>Robert De Nitro</h2>
            <p className="goomah__monthly-ingredients">
              San Marzano, Fior Di Latte, Pecorino, Salami Piccante, 'Nduja, Red
              Onion, Basil, Oregano, Hot Honey
            </p>
          </div>

          <div className="card__image">
            <img src={pizzaBoutit} alt="Pizza" />
          </div>
        </section>

        <section className="container__section goomah__menu">
          <h2>Take Away</h2>
          <img src={menu} alt="Take Away menu" />
        </section>

        <section className="container__section goomah__soprano">
          <img src={mrSoprano} alt="Tony Soprano eating" />
        </section>
        <Banner />
      </div>
    </div>
  );
};

export default Goomah;
