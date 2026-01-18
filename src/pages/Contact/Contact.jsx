import React from 'react';
import './Contact.scss';
import contactHero from '../../assets/images/contact.jpg';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Contact = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  
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
          <h1>{t.contact.title}</h1>
          <p>
            {t.contact.intro}
          </p>
          <br />
          <p>
            <a href="mailto:info@shedhotels.com">info@shedhotels.com</a>
          </p>
          <br />
          <p>
            {t.contact.restaurantQuestion}
            <br />
            <a href="tel:+41782260226">078 226 02 26</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
