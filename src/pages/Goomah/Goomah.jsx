import React from 'react';
import './Goomah.scss';
import shedLogo from '../../assets/images/ShedLogo.svg';
import goomahHero from '../../assets/images/goomah-hero.jpg';
import goomahLogo from '../../assets/images/goomah-logo.svg';
import goomahMouth from '../../assets/images/Goomah_mouth.png';
import pizzaBoutit from '../../assets/images/pizza-boutit.jpg';
import menu from '../../assets/images/menu.svg';
import mrSoprano from '../../assets/images/mr-soprano.jpg';
import Banner from '../../components/Banner/Banner';
import { NavLink } from 'react-router-dom';
const Goomah = () => {
  return (
    <div className="goomah">
      <NavLink to="/" className="nav-logo goomah__nav">
        <img src={shedLogo} alt="Shed Hotel Logo" />
      </NavLink>
      <section className="hero">
        <img
          className="hero-image "
          src={goomahHero}
          alt="Pizza making at Goomah"
        />

        <img
          className="hero-logo goomah__hero-logo"
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
          <div className="card__text goomah__weekly">
            <p className="font-sans">Weekly Special - No.01</p>

            <h2>Porchetta Boutit</h2>
            <p className="goomah__weekly-ingredients">
              Porchetta, Taleggio, Red Onion, Garlic, Basil, Fennel Seed, Olive
              Oil, Lemon
            </p>
          </div>

          <div className="card__image">
            <img src={pizzaBoutit} alt="Pizza" />
          </div>
        </section>

        <section className="container__section goomah__menu">
          <img src={menu} alt="Goomah's menu" />
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
