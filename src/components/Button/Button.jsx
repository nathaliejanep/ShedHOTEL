import React from 'react';
import './Button.scss';
import { mewsReserveLink } from '../../utils/config';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Button = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;

  return (
    <a
      href={mewsReserveLink}
      target='_blank'
      rel='noopener noreferrer'
      className='green-btn'
    >
      {t.nav.reserve}
    </a>
  );
};

export default Button;
