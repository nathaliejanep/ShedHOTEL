import { useContext } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';

import { Context } from '../../context/SeasonContext';
import winterHero from '../../assets/images/home/winter-hero.jpg';
import summerHero from '../../assets/images/summer-hero.jpg';
import shedLogoBlack from '../../assets/images/logos/shed-logo-black.svg';
import shedLogoWhite from '../../assets/images/logos/shed-logo-white.svg';
// import fasade from '../../assets/images/fasade-drawing.png';
import roomBiggie from '../../assets/images/room-biggie.jpg';
import pizza from '../../assets/images/pizza.jpg';

import './Home.scss';
import '../../sassStyles/layouts/_page-layout.scss';
import Carousel from '../../components/Carousel/Carousel';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Subscribe from '../../components/Subscribe/Subscribe';

const Home = () => {
  const { winter } = useContext(Context);

  const navigation = useNavigation();
  // console.log(winter);

  const slides = [
    { src: '../images/room4.jpg', alt: 'room4' },
    { src: '../images/room3.jpg', alt: 'room3' },
    { src: '../images/balcony.jpg', alt: 'balcony' },
    { src: '../images/room2.jpg', alt: 'room2' },
    { src: '../images/room1.jpg', alt: 'room1' },
  ];

  if (navigation.state === 'loading') {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="home">
      <section className="full-width hero">
        <img
          className="hero-image"
          src={winter ? winterHero : summerHero}
          alt={winter ? 'Winter' : 'Summer'}
        />

        <img
          className="hero-logo"
          src={winter ? shedLogoBlack : shedLogoWhite}
          alt="Shed Hotel Logo"
        />
      </section>
      <div className="container">
        <section className="container__section">
          <h1>Welcome</h1>
          <p>
            Only footsteps from the center of Verbier, Shed. Hotel offers
            everything you need and nothing you don't. We're aiming to be the
            cloud cuckoo land for everyone who wants to truly enjoy outdoor
            pursuits in spectacular mountains. We're offering quick access to
            limitless pleasure and in fact, sleeping with us saves you more
            money for other fun activities than any other Verbier hotel.
            <br />
            <br />
            The property is rigged with free wifi, parking spots and ski lockers
            for a comfortable stay and upon arrival, you're always greeted with
            a discount code on ski rentals + the juiciest burger joint in town.
          </p>

          {/* <img
            src={fasade}
            alt="Drawing of Hotel Fasade"
            className="container__section-image"
          /> */}
        </section>
        <section className="container__full-width home__image-slider">
          {/* <h2 className="hero-logo">Biggie</h2> */}
          {/* <img className="hero-image" src={roomBiggie} alt="Biggie Room" /> */}

          <ImageSlider slides={slides} className="hero-image" />
        </section>

        <section className="container__section">
          <h3>Stay with us</h3>
          <p>
            About the rooms. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at. Donec imperdiet turpis vitae dictum.
          </p>
        </section>

        <section className="card">
          <div className="card__text">
            <h2>
              Wine, Dine <br />& Pizza
            </h2>
            <p>
              About restaurant concepts. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. By Shed. GROUP.
            </p>
            <NavLink to="/caffegoomah" className="card-link">
              Caffè Goomah
            </NavLink>
            <a
              href="https://shedburgers.ch/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Shed. BURGERS
            </a>
          </div>
          <div className="card__image">
            <img src={pizza} alt="Pizza" />
          </div>
        </section>

        <section className="container__section">
          <h3>Come ramble with us</h3>
          <p>
            2 hours from Geneva airport Geneva, Verbier offers a mix of Alpine
            charm and international flair. The village’s potential as a ski
            resort was not discovered until 1925 when a group of mountaineers
            hiked up 15km for the sole purpose of skiing back down again. Since
            then, the place has become one of the world’s foremost freeride
            paradises. Today, everyone’s welcome here. Swing from beer-fuelled
            après-skis to high end cocktail bars, from burgers to Michelin
            stars. In Verbier, ski bums and celebs slalom, eat and even
            paraglide in harmony.
          </p>
        </section>

        <Carousel />
        <section className="container__section subscribe">
          <h3>Stay In Touch</h3>
          <Subscribe />
        </section>
      </div>
    </div>
  );
};

export default Home;
