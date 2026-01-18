import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';
import './Explore.scss';

const Explore = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  
  // Use English keys for tab logic, DynamicContainer will handle translation display
  const explore = ['Explore', 'Wine & Dine'];

  // console.log(active);
  return (
    <div className="container">
      <section className="container__section">
        <h1>{t.explore.title}</h1>
        <p>
          {t.explore.intro}
        </p>
        <div className="season-section">
          <SeasonPicker />
        </div>
      </section>

      <DynamicMenu items={explore} />
    </div>
  );
};

export default Explore;
