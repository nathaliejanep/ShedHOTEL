import { useContext } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';
import { Context } from '../../context/SeasonContext';
import winter from '../../assets/images/winter.jpg';
import shedLogoWhite from '../../assets/images/shed-logo-white.svg';
import fasade from '../../assets/images/fasade-drawing.png';
import roomBiggie from '../../assets/images/room-biggie.jpg';
import pizza from '../../assets/images/pizza.jpg';
import './Home.scss';
import '../../sassStyles/layouts/_page-layout.scss';

const Home = () => {
  const { winter } = useContext(Context);

  const navigation = useNavigation();
  console.log(winter);

  if (navigation.state === 'loading') {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="home">
      {winter ? <p>Its winteeer</p> : <p>Its summeeer</p>}
      <section className="full-width hero">
        <img className="hero-image" src={winter} alt="Winter" />

        <img className="hero-logo" src={shedLogoWhite} alt="Shed Hotel Logo" />
      </section>
      <div className="content-wrapper">
        <section>
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
        <section>
          <h1>Biggie</h1>
          <NavLink to="/rooms">View Rooms</NavLink>
          <img src={roomBiggie} alt="Biggie Room" />
        </section>
        <section>
          <h2>Stay with us</h2>
          <p>
            About the rooms. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at. Donec imperdiet turpis vitae dictum.
          </p>
        </section>
        <section>
          <h2>Come ramble with us</h2>
          <p>
            About experience. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec elit ligula, laoreet et arcu at, dignissim blandit
            ligula. Suspendisse elementum tristique est, eget pulvinar tellus
            tristique at.
          </p>
        </section>
        <section className="food-wrapper">
          <div className="left">
            <h2>Wine & Dine</h2>
            <p>
              About restaurant concepts. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. By Shed. GROUP.
            </p>
            <NavLink to="/caffegoomah">Caffè Goomah</NavLink>
            <a href="https://shedburgers.ch/">Shed. BURGERS</a>
          </div>
          <img src={pizza} alt="Pizza" />
        </section>
      </div>
    </div>
  );
};

export default Home;
