import { useContext } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';

import { Context } from '../../context/SeasonContext';
import winterHero from '../../assets/images/winter-hero.jpg';
import summerHero from '../../assets/images/summer-hero.jpg';
import shedLogoWhite from '../../assets/images/shed-logo-white.svg';
import fasade from '../../assets/images/fasade-drawing.png';
import roomBiggie from '../../assets/images/room-biggie.jpg';
import pizza from '../../assets/images/pizza.jpg';

import './Home.scss';
import '../../sassStyles/layouts/_page-layout.scss';
import Carousel from '../../components/Carousel/Carousel';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const Home = () => {
  const { winter } = useContext(Context);

  const navigation = useNavigation();
  console.log(winter);

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

        <img className="hero-logo" src={shedLogoWhite} alt="Shed Hotel Logo" />
      </section>
      <div className="container">
        <section className="container__section">
          <h1>Welcome</h1>
          <p>
            About the hotel. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at. Donec imperdiet turpis vitae dictum fringilla.
            Curabitur scelerisque orci facilisis, semper erat non, interdum ex.
            Morbi quis turpis risus. Fusce convallis lectus eros, nec suscipit
            dolor condimentum scelerisque. Sed pulvinar eu dui et cursus.
          </p>

          <img src={fasade} alt="Drawing of Hotel Fasade" />
        </section>
        <section className="container__full-width hero ">
          {/* <h2 className="hero-logo">Biggie</h2> */}
          <NavLink to="/rooms">View Rooms</NavLink>
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
            <NavLink to="/caffegoomah">Caffè Goomah</NavLink>
            <a href="https://shedburgers.ch/">Shed. BURGERS</a>
          </div>
          <div className="card__image">
            <img src={pizza} alt="Pizza" />
          </div>
        </section>

        <section className="container__section">
          <h3>Come ramble with us</h3>
          <p>
            About experience. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at.
          </p>
        </section>

        <Carousel />

        <section className="container__section subscribe">
          <h3>Stay In Touch</h3>
          <input
            className="subscribe__input"
            type="email"
            placeholder="Email Address"
          />
          <button className="subscribe__btn">Subscribe</button>
        </section>
      </div>
    </div>
  );
};

export default Home;
