import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';
import './Gallery.scss';

const Gallery = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  
  const galleries = ['Hotel', 'Rooms'];

  return (
    <div className="container">
      <section className="container__section">
        <h1>{t.nav.gallery}</h1>
        <p>{t.gallery.intro}</p>
      </section>
      <DynamicMenu items={galleries} />
    </div>
  );
};

export default Gallery;
