import { useContext } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';

import { Context } from '../../context/SeasonContext';
import { useTranslation } from '../../context/LanguageContext';
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
  const t = useTranslation();

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
          <h1>{t('home.welcome.title')}</h1>
          <p>
            {t('home.welcome.text')}
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
          <h3>{t('home.stayWithUs.title')}</h3>
          <p>
            {t('home.stayWithUs.text')}
          </p>
        </section>

        <section className='card'>
          <div className='card__text'>
            <h2>{t('home.shedGroup.title')}</h2>
            <p>
              {t('home.shedGroup.text')}
              <br />
              {t('home.shedGroup.subtext')}
            </p>
            <NavLink
              to={`/${window.location.pathname.split('/')[1] || 'en'}/shedgoomah`}
              className='card-link'
            >
              {t('home.shedGroup.goomah')}
            </NavLink>
            <a
              href='https://shedburgers.ch/'
              className='card-link'
              target='_blank'
              rel='noreferrer'
            >
              {t('home.shedGroup.burgers')}
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
          <h3>{t('home.ramble.title')}</h3>
          <p>
            {t('home.ramble.text')}
          </p>
          <Button />
        </section>

        {/* <Carousel /> */}
        <section className='container__section subscribe'>
          <h3>{t('home.stayInTouch.title')}</h3>
          <Subscribe />
        </section>
      </div>
    </div>
  );
};

export default Home;
