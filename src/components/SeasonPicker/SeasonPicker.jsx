import React, { useContext } from 'react';
import { Context } from '../../context/SeasonContext';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';
import './SeasonPicker.scss';

const SeasonPicker = () => {
  const { winter, setWinter } = useContext(Context) || { winter: true };
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;

  const winterOnClick = () => {
    setWinter(true);
  };
  const summerOnClick = () => {
    setWinter(false);
  };

  return (
    <div className="season-picker">
      <button onClick={winterOnClick} className={winter ? 'active-season' : ''}>
        {t.season.winter}
      </button>
      <button onClick={summerOnClick} className={winter ? '' : 'active-season'}>
        {t.season.summer}
      </button>
    </div>
  );
};

export default SeasonPicker;
