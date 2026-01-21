import React from 'react';
import './Banner.scss';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Banner = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;

  const fromDay = t.banner.monday;
  const toDay = t.banner.sunday;
  const fromTime = '18:00';
  const toTime = t.banner.late;

  const bannerItems = Array(8).fill(null);

  return (
    <div className='banner'>
      <p className='banner__text'>
        {bannerItems.map((_, index) => (
          <React.Fragment key={index}>
            <span className='banner__day'>
              {'\u00A0\u00A0\u00A0'} {fromDay} - {toDay} {fromTime} - {toTime}
              {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
            </span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Banner;
