import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

export const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  fr: frTranslations,
};

// Detect browser language
const detectBrowserLanguage = () => {
  // Check URL first
  const pathLang = window.location.pathname.split('/')[1];
  if (pathLang === 'en' || pathLang === 'fr') {
    return pathLang;
  }
  
  const stored = localStorage.getItem('language');
  if (stored && (stored === 'en' || stored === 'fr')) {
    return stored;
  }
  
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('fr')) {
    return 'fr';
  }
  return 'en'; // Default to English
};

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const [language, setLanguage] = useState(detectBrowserLanguage);

  useEffect(() => {
    // Sync with URL parameter when location changes
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'en' || pathLang === 'fr') {
      if (pathLang !== language) {
        setLanguage(pathLang);
      }
    }
  }, [location.pathname, language]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    if (lang === 'en' || lang === 'fr') {
      setLanguage(lang);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context.t;
};
