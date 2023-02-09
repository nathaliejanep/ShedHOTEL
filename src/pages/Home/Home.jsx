import { useContext } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';

import { Context } from '../../context/SeasonContext';
import winterHero from '../../assets/images/home/view.jpg';
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
    { src: '../images/rooms/roomie.jpg', alt: 'Roomie' },
    { src: '../images/rooms/biggie.jpg', alt: 'Biggie' },
    { src: '../images/rooms/fancy-buddy-suite.jpg', alt: 'Fancy Buddy Suite' },
    { src: '../images/rooms/buddy.jpg', alt: 'Buddy' },
    { src: '../images/rooms/loonie.jpg', alt: 'loonie' },
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
            Footsteps from the center of Verbier, Shed. HOTEL offers everything
            you need and nothing you don't. Newly renovated and reopened by
            three Swedish friends, our contemporary sportique hotel is the go-to
            retreat if you want to feel at home while enjoying outdoor pursuits
            in the Swiss mountains. Looking for a place where you sleep like a
            log, eat like Robert de Niro and are treated like family? You've
            just found it.
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
            Our selection of 16 newly renovated rooms feature contemporary
            comfort in an alpine-scandi setting. In airy spaces, abstract art
            and lifestyle books blend with luxurious duvets and a clean
            botanical scent, while Tom Dixon carpets and views of craggy
            mountain peaks create a contrast between industrial landscapes and
            nature.
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
