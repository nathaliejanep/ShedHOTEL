import React from 'react';
import './Goomah.scss';
import shedLogoWhite from '../../assets/images/logos/shed-logo-white.svg';
import goomahHero from '../../assets/images/goomah/goomah-hero.jpg';
import goomahLogo from '../../assets/images//logos/goomah-logo.svg';
import goomahMouth from '../../assets/images/logos/goomah-mouth.png';
import pizzaBoutit from '../../assets/images/goomah/monthly-pizza.jpg';
import menu from '../../assets/images/goomah/menu.svg';
import menu2 from '../../assets/images/goomah/menu2.svg';
import mrSoprano from '../../assets/images/goomah/pizza-served.jpg';
import Banner from '../../components/Banner/Banner';
import { NavLink, useParams } from 'react-router-dom';
import Reservation from '../../components/Reservation/Reservation';
import { useTranslation } from '../../context/LanguageContext';

const Goomah = () => {
  const t = useTranslation();
  const { lang } = useParams();
  const getLocalizedPath = (path) => {
    const currentLang = lang || window.location.pathname.split('/')[1] || 'en';
    return `/${currentLang}${path}`;
  };
  return (
    <div className='goomah'>
      {/* EDIT move to navbar */}
      <div className='goomah__nav'>
        <NavLink
          to={getLocalizedPath('')}
          className='goomah__nav-logo '
        >
          <img
            src={shedLogoWhite}
            alt='Shed Hotel Logo'
          />
        </NavLink>
      </div>

      <section className='hero '>
        <img
          className='hero-image '
          src={goomahHero}
          alt='Pizza making at Goomah'
        />

        <img
          className='hero-logo hero-logo'
          src={goomahLogo}
          alt='Goomah Logo'
        />
      </section>

      <Banner />

      <div className='container'>
        <section className='container__section goomah__about'>
          <h1>{t('goomah.title')}</h1>
          <p>
            {t('goomah.description')}
          </p>

          <p>
            <a
              href='https://www.instagram.com/shed.goomah/'
              target='_blank'
              rel='noreferrer'
            >
              {t('goomah.instagram')}
            </a>
          </p>

          <img
            className='mouth-logo'
            src={goomahMouth}
            alt='Goomah Mouth Logo'
          />
        </section>

        <section className='container__section goomah__book'>
          <h2>{t('goomah.bookTable.title')}</h2>
          <Reservation />
          {/* <div className='goomah__book-btn'>
            <p>
              <a
                href='https://tables.hostmeapp.com/reserve/32514'
                target='_blank'
                rel='noreferrer'
              >
                I'm hungry - Book Now
              </a>
            </p>
          </div> */}
          <div className='goomah__book-groups'>
            <p>
              {t('goomah.bookTable.groups.text')}
            </p>
            <p>
              <a href='tel:+41782260226'>{t('goomah.bookTable.groups.phone')}</a>
            </p>
            <p>
              <a href='mailto:goomah@shedhotels.com?subject=Booking Inquiry&body=Hello, I would like to make a reservation.'>
                {t('goomah.bookTable.groups.email')}
              </a>
            </p>
          </div>
        </section>

        <section className='card'>
          <div className='card__text goomah__monthly'>
            <p className='font-sans'>{t('goomah.monthly.label')}</p>

            <h2>
              {t('goomah.monthly.title')} <br />
              {t('goomah.monthly.titleLine2')}
            </h2>
            <p className='goomah__monthly-ingredients'>
              {t('goomah.monthly.ingredients')}
            </p>
          </div>

          <div className='card__image'>
            <img
              src={pizzaBoutit}
              alt='Pizza'
            />
          </div>
        </section>

        <section className='container__section goomah__menu'>
          <img
            src={menu}
            alt='Take Away menu'
          />
          <img
            src={menu2}
            alt='Take Away menu'
          />
        </section>
        <section className='container goomah__menu'>
          <div className='goomah__menu-take-away'>
            <h2>{t('goomah.takeAway.title')}</h2>
            <p>{t('goomah.takeAway.description')}</p>
            <button
              className='goomah__menu-btn'
              onClick={() =>
                window.open(
                  'https://mylightspeed.app/OFELXQJO/C-ordering/menu',
                  '_blank'
                )
              }
            >
              {t('goomah.takeAway.button')}
            </button>
          </div>
          <div className='goomah__menu-delivery'>
            <h2>{t('goomah.delivery.title')}</h2>
            <p>
              {t('goomah.delivery.description')}
            </p>
            <button
              className='goomah__menu-btn'
              onClick={() =>
                window.open(
                  'https://mylightspeed.app/WUWNSVOE/C-ordering',
                  '_blank'
                )
              }
            >
              {t('goomah.delivery.button')}
            </button>
          </div>
        </section>

        <section className='container__section goomah__soprano'>
          <img
            src={mrSoprano}
            alt='Tony Soprano eating'
          />
        </section>
        <Banner />
      </div>
    </div>
  );
};

export default Goomah;
