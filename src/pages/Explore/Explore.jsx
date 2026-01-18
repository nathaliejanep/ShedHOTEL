import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';
import './Explore.scss';
import { useTranslation } from '../../context/LanguageContext';

const Explore = () => {
  const t = useTranslation();
  const explore = [t('explore.tabs.explore'), t('explore.tabs.wineDine')];

  // console.log(active);
  return (
    <div className="container">
      <section className="container__section">
        <h1>{t('explore.title')}</h1>
        <p>
          {t('explore.description')}
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
