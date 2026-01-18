import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import './LanguageSelector.scss';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleLanguageChange = (newLang) => {
    if (newLang === language) return;
    
    changeLanguage(newLang);
    
    // Update URL with new language
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '');
    navigate(`/${newLang}${pathWithoutLang || ''}`, { replace: true });
  };

  return (
    <div className="language-selector">
      <button
        onClick={() => handleLanguageChange('en')}
        className={language === 'en' ? 'active-language' : ''}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('fr')}
        className={language === 'fr' ? 'active-language' : ''}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
