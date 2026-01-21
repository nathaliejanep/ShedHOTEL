import React from 'react';
import './ReserveButton.scss';
import { mewsReserveLink } from '../../utils/config';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';
import { HiArrowRight } from 'react-icons/hi2';

const ReserveButton = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;

  return (
    <a
      href={mewsReserveLink}
      target='_blank'
      rel='noopener noreferrer'
      className='book-btn'
    >
      <span className='book-btn__text'>
        {t.nav.reserve}
      </span>
      <HiArrowRight className='book-btn__arrow' />
    </a>
  );
};

export default ReserveButton;
