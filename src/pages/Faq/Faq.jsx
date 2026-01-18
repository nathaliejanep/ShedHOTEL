import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Faq.scss';
import { useTranslation } from '../../context/LanguageContext';

// import { useLoaderData } from 'react-router-dom';

const Faq = () => {
  const t = useTranslation();
  const { lang } = useParams();
  const getLocalizedPath = (path) => {
    const currentLang = lang || window.location.pathname.split('/')[1] || 'en';
    return `/${currentLang}${path}`;
  };
  // const season = useLoaderData();
  return (
    <div className='container faq'>
      <section className='container__section'>
        <h3>{t('faq.checkIn.question')}</h3>
        <p>
          {t('faq.checkIn.answer')}
        </p>
        <h3>{t('faq.ageLimit.question')}</h3>
        <p>
          {t('faq.ageLimit.answer')}
        </p>
        <h3>{t('faq.pets.question')}</h3>
        <p>
          {t('faq.pets.answer')}
        </p>
        <h3>{t('faq.breakfast.question')}</h3>
        <p>
          {t('faq.breakfast.answer')}
        </p>
        <h3>{t('faq.restaurant.question')}</h3>
        <p>
          {t('faq.restaurant.answer')}{' '}
          <NavLink to={getLocalizedPath('/shedgoomah')}> {t('faq.restaurant.link')}</NavLink>
        </p>
        <h3>{t('faq.payment.question')}</h3>
        <p>
          {t('faq.payment.answer')}
        </p>
        <h3>{t('faq.airport.question')}</h3>
        <p>
          {t('faq.airport.answer')}
        </p>
        <h3>{t('faq.parking.question')}</h3>
        <p>
          {t('faq.parking.answer')}
        </p>
      </section>
    </div>
  );
};

export default Faq;
