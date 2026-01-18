import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelector.scss';

const LanguageSelector = () => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== language) {
      switchLanguage(newLanguage);
    }
  };

  return (
    <div className='language-selector'>
      <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => handleLanguageChange('en')}
        aria-label='Switch to English'
      >
        EN
      </button>
      <span className='separator'>|</span>
      <button
        className={language === 'fr' ? 'active' : ''}
        onClick={() => handleLanguageChange('fr')}
        aria-label='Switch to French'
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
