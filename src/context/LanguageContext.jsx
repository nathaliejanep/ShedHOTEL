import React, { useState, useEffect, createContext, useContext } from 'react';

// Create the context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  // Get language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('shedhotel-language');
    return savedLanguage || 'en';
  });

  // Persist language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shedhotel-language', language);
  }, [language]);

  // Function to switch language
  const switchLanguage = (newLanguage) => {
    if (newLanguage === 'en' || newLanguage === 'fr') {
      setLanguage(newLanguage);
    }
  };

  const value = {
    language,
    setLanguage,
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
