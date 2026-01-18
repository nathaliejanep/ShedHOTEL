import React from 'react';
import './Button.scss';
import { mewsReserveLink } from '../../utils/config';
import { useTranslation } from '../../context/LanguageContext';

const Button = () => {
  const t = useTranslation();
  return (
    <a
      href={mewsReserveLink}
      target='_blank'
      rel='noopener noreferrer'
      className='green-btn'
    >
      {t('button.reserve')}
    </a>
  );
};

export default Button;
