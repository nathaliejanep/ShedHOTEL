import React from 'react';
import './Contact.scss';
import contactHero from '../../assets/images/contact.jpg';
import { useTranslation } from '../../context/LanguageContext';

const Contact = () => {
  const t = useTranslation();
  return (
    <div className="contact">
      <section className="hero">
        <img
          className="hero-image hotel-hero"
          src={contactHero}
          alt="Shed Hotel fasade"
        />
      </section>

      <div className="container">
        <section className="container__section">
          <h1>{t('contact.title')}</h1>
          <p>
            {t('contact.description')}
          </p>
          <br />
          <p>
            <a href="mailto:info@shedhotels.com">{t('contact.email')}</a>
          </p>
          <br />
          <p>
            {t('contact.restaurant.text')}
            <br />
            <a href="tel:+41782260226">{t('contact.restaurant.phone')}</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
