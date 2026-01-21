import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';
import './Explore.scss';
import roomHero from '../../assets/images/explore/explore-hero.jpg';

const Explore = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  
  // Use English keys for tab logic, DynamicContainer will handle translation display
  const explore = ['Explore', 'Wine & Dine'];

  // console.log(active);
  return (
    <div className='explore'>
      <section className='hero'>
        <img
          className='explore-hero-image'
          src={roomHero}
          alt='Explore'
        />
        <div className="hero-content">
          <h1>{t.explore.title}</h1>
          <p>{t.explore.intro}</p>
        </div>
      </section>

      <div className="container">
      <div className="season-section">
        <h2 className='season-section__title'>Explore Verbier</h2>
            <SeasonPicker />
          </div>
        <DynamicMenu items={explore} />
      </div>
    </div>
  );
};

export default Explore;
