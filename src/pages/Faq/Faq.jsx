import React from 'react';
import { NavLink } from 'react-router-dom';
import './Faq.scss';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

// import { useLoaderData } from 'react-router-dom';

const Faq = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  
  // const season = useLoaderData();
  return (
    <div className='container faq'>
      <section className='container__section'>
        <h3>{t.faq.checkInOut.question}</h3>
        <p>{t.faq.checkInOut.answer}</p>
        
        <h3>{t.faq.ageLimit.question}</h3>
        <p>{t.faq.ageLimit.answer}</p>
        
        <h3>{t.faq.pets.question}</h3>
        <p>{t.faq.pets.answer}</p>
        
        <h3>{t.faq.breakfast.question}</h3>
        <p>{t.faq.breakfast.answer}</p>
        
        <h3>{t.faq.restaurant.question}</h3>
        <p>
          {t.faq.restaurant.answer}
          <NavLink to='/shedgoomah'> Shed. GOOMAH</NavLink>
        </p>
        
        <h3>{t.faq.payment.question}</h3>
        <p>{t.faq.payment.answer}</p>
        
        <h3>{t.faq.airportTransfer.question}</h3>
        <p>{t.faq.airportTransfer.answer}</p>
        
        <h3>{t.faq.parking.question}</h3>
        <p>{t.faq.parking.answer}</p>
      </section>
    </div>
  );
};

export default Faq;
