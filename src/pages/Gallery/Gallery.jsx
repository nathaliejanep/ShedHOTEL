import React from 'react';
import DynamicMenu from '../../components/DynamicContainer/DynamicContainer';
import './Gallery.scss';
import { useTranslation } from '../../context/LanguageContext';

const Gallery = () => {
  const t = useTranslation();
  const galleries = [t('gallery.tabs.hotel'), t('gallery.tabs.rooms')];

  return (
    <div className="container">
      <section className="container__section">
        <h1>{t('gallery.title')}</h1>
        <p>{t('gallery.description')}</p>
      </section>
      <DynamicMenu items={galleries} />
    </div>
  );
};

export default Gallery;
