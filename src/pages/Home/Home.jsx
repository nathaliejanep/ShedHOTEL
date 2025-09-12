import { useContext } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';

import { Context } from '../../context/SeasonContext';
import winterHero from '../../assets/images/home/view.jpg';
import summerHero from '../../assets/images/home/summer-hero.jpg';
import shedLogoWhite from '../../assets/images/logos/shed-logo-white.svg';
import fasade from '../../assets/images/home/fasade-drawing.gif';
import pizza from '../../assets/images/home/pizza.jpg';

import './Home.scss';
import '../../sassStyles/layouts/_page-layout.scss';
// import Carousel from '../../components/Carousel/Carousel';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Subscribe from '../../components/Subscribe/Subscribe';
import Button from '../../components/Button/Button';

const Home = () => {
  const { winter } = useContext(Context);

  const navigation = useNavigation();

  const slides = [
    { src: '../images/rooms/biggie/biggie.jpg', alt: 'Biggie' },
    {
      src: '../images/rooms/suite/fancy-buddy-suite.jpg',
      alt: 'Fancy Buddy Suite',
    },
    { src: '../images/rooms/buddy/buddy.jpg', alt: 'Buddy' },
    { src: '../images/rooms/roomie/roomie.jpg', alt: 'Roomie' },
    { src: '../images/rooms/loonie/loonie.jpg', alt: 'loonie' },
  ];

  if (navigation.state === 'loading') {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='home'>
      <section className='full-width hero'>
        {/* <img
          className='hero-image'
          src={winter ? winterHero : summerHero}
          alt={winter ? 'Winter' : 'Summer'}
        /> */}
        {winter ? (
          <video
            className='hero-video'
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src='/videos/hero-video.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className='hero-image'
            src={summerHero}
            alt='Summer'
          />
        )}

        <img
          className='hero-logo'
          src={shedLogoWhite}
          alt='Shed Hotel Logo'
        />
      </section>
      <div className='container'>
        <section className='container__section'>
          <h1>Welcome</h1>
          <p>
            Footsteps from the center of Verbier, Shed. HOTEL offers everything
            you need and nothing you don't. Renovated and rebranded in 2022 by
            three Swedish friends, the building now houses a vibrant, intimate
            sportique hotel with spacious rooms, a stone-baked pizza restaurant,
            a bold feel at home energy, and a personal team that caters to your
            most spontaneous requests.
          </p>

          <img
            src={fasade}
            alt='Drawing of Hotel Fasade'
            className='container__section-image fasade-drawing'
          />
        </section>
        <section className='container__full-width home__image-slider'>
          {/* <h2 className="hero-logo">Biggie</h2> */}
          {/* <img className="hero-image" src={roomBiggie} alt="Biggie Room" /> */}

          <ImageSlider
            slides={slides}
            className='hero-image'
          />
        </section>

        <section className='container__section'>
          <h3>Stay with us</h3>
          <p>
            Our selection of 16 newly renovated rooms feature contemporary
            comfort in an alpine-scandi setting. In airy spaces, abstract art
            and eccentric books co-exist with luxurious duvets, while Tom Dixon
            carpets and views of craggy mountains create a contrast between
            industrial landscapes and nature.
          </p>
        </section>

        <section className='card'>
          <div className='card__text'>
            <h2>Shed. GROUP</h2>
            <p>
              It all started with a dream about turning our strong gastronomic
              affinity into passion projects.
              <br />
              This is Shed. GROUP.
            </p>
            <NavLink
              to='/shedgoomah'
              className='card-link'
            >
              Shed. GOOMAH
            </NavLink>
            <a
              href='https://shedburgers.ch/'
              className='card-link'
              target='_blank'
              rel='noreferrer'
            >
              Shed. BURGERS
            </a>
          </div>
          <div className='card__image'>
            <img
              src={pizza}
              alt='Pizza'
            />
          </div>
        </section>

        <section className='container__section home__ramble'>
          <h3>Come ramble with us</h3>
          <p>
            Shed. HOTEL welcomes everyone to step into comfortable living with a
            youthful and personal touch. It's your holiday home where you sleep
            like a log, eat like De Niro and get treated like family.
          </p>
          <Button />
        </section>

        {/* <Carousel /> */}
        <section className='container__section subscribe'>
          <h3>Stay In Touch</h3>
          <Subscribe />
        </section>
      </div>
    </div>
  );
};

export default Home;
