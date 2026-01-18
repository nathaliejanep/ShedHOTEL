import React from 'react';
import './Banner.scss';
import { useTranslation } from '../../context/LanguageContext';

const Banner = () => {
  const t = useTranslation();

  const bannerItems = Array(5).fill(null);

  return (
    <div className='banner'>
      <p className='banner__text'>
        {bannerItems.map((_, index) => (
          <React.Fragment key={index}>
            <span className='banner__day'>
              {'\u00A0\u00A0\u00A0'} {t('banner.weekday')}
              {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
              {t('banner.weekend')}
            </span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Banner;
