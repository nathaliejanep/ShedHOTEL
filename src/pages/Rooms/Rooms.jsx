import React, { useState, useEffect } from 'react';
import './Rooms.scss';
import roomHero from '../../assets/images/rooms/room-hero.jpg';
import axios from 'axios';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import keyLogo from '../../assets/images/logos/key-logo.svg';
import { mewsReserveLink } from '../../utils/config';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Rooms = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  const [data, setData] = useState(null);

  const getData = () => {
    axios
      .get(`api/rooms.${language}.json`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [language]);

  return (
    <div className='rooms'>
      <section className='hero'>
        <img
          className='hero-image'
          src={roomHero}
          alt='Double room'
        />
      </section>

      <div className='container'>
        <section className='container__section'>
          <h1>{t.rooms.title}</h1>
          <p>{t.rooms.intro}</p>
        </section>

        {data?.rooms && (
          <div className='rooms__card-wrapper'>
            {data.rooms.map((room) => (
              <div key={room.id} className='rooms__card'>
                <div className='rooms__card-image'>
                  <ImageSlider slides={room.images} />
                </div>
                <div className='rooms__card-text'>
                  <h3>{room.name}</h3>
                  <p className='rooms__card-text__capacity'>
                    {room.capacity} <br /> {room.adults}
                  </p>
                  <p>{room.description}</p>
                </div>
                <a
                  href={mewsReserveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='green-btn'
                >
                  {t.rooms.bookNow}
                </a>
              </div>
            ))}
          </div>
        )}

        {data && (
          <section className='container__section rooms__amenities'>
            <img src={keyLogo} alt='Logo of Key' />
            <h3>
              <span>{data.amenitiesTitle}</span>
              <span>{data.amenitiesSubtitle}</span>
            </h3>
            <p>
              {data.amenities.map((amenity, i) => (
                <span key={i}>{amenity}</span>
              ))}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Rooms;
