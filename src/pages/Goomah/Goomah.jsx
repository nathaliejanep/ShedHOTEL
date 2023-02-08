import React from 'react';
import './Goomah.scss';
import shedLogoWhite from '../../assets/images/logos/shed-logo-white.svg';
import goomahHero from '../../assets/images/goomah/goomah-hero.jpg';
import goomahLogo from '../../assets/images/goomah-logo.svg';
import goomahMouth from '../../assets/images/Goomah_mouth.png';
import pizzaBoutit from '../../assets/images/goomah/monthly-pizza.jpg';
import menu from '../../assets/images/goomah/take-away-menu.svg';
import mrSoprano from '../../assets/images/goomah/pizza-served.jpg';
import Banner from '../../components/Banner/Banner';
import { NavLink } from 'react-router-dom';

const Goomah = () => {
  return (
    <div className="goomah">
      <NavLink to="/" className="nav-logo goomah__nav">
        <img src={shedLogoWhite} alt="Shed Hotel Logo" />
      </NavLink>

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
            About Goomah. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at.
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
            <a href="tel:+41772699795">+41 77 269 97 95</a>
          </p>
          <p>
            About Goomah. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at.
          </p>
        </section>

        <section className="card">
          <div className="card__text goomah__monthly">
            <p className="font-sans">Monthly Special - No.01</p>

            <h2>Pizzaflette</h2>
            <p className="goomah__monthly-ingredients">
              Creme fraîche, Fior Di Latte, Potato, Confit Onion, Lardons,
              Taleggio, Thyme
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
