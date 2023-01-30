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

const Home = () => {
  const { winter } = useContext(Context);

  const navigation = useNavigation();
  console.log(winter);

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
        <section className="container__full-width">
          <h2>Biggie</h2>
          <NavLink to="/rooms">View Rooms</NavLink>
          <img src={roomBiggie} alt="Biggie Room" />
        </section>
        <section className="container__section">
          <h2>Stay with us</h2>
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
          <h2>Come ramble with us</h2>
          <p>
            About experience. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at.
          </p>
        </section>

        <Carousel />
      </div>
    </div>
  );
};

export default Home;
