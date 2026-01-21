import React, { useState } from 'react';
import './DynamicContainer.scss';
import { useLocation } from 'react-router-dom';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import GalleryComponent from '../GalleryComponent/GalleryComponent';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const DynamicContainer = ({ items }) => {
  const path = useLocation();
  const urlPath = path.pathname;
  const [active, setActive] = useState('');
  const { language } = useLanguage();
  const t = language === 'fr' ? translationsFR : translationsEN;
  
  // Map English keys to translated display text
  const getDisplayText = (key) => {
    const displayMap = {
      'Explore': t.explore.explore,
      'Wine & Dine': t.explore.wineDine,
      'Hotel': 'Hotel',
      'Rooms': t.nav.rooms
    };
    return displayMap[key] || key;
  };

  const selectedTab = () => {
    switch (active) {
      case 'Explore':
      case 'Wine & Dine':
        return <ActivityComponent tab={active} />;

      case 'Hotel':
      case 'Rooms':
        return <GalleryComponent tab={active} />;

      default:
        if (urlPath === '/explore') {
          setActive('Explore');
          return <ActivityComponent tab={active} />;
        }
        setActive('Hotel');
        return <GalleryComponent tab={active} />;
    }
  };
  // console.log('active', active);

  // console.log(items);
  return (
    <div className="dynamic-container">
      <div className="dynamic-menu">
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => setActive(item)}
                className={`dynamic-menu-btn ${
                  active === item ? 'active' : ''
                }`}
              >
                {getDisplayText(item)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${urlPath === '/explore' ? 'activity-content' : 'gallery-content'}`}>
        {selectedTab()}
      </div>
    </div>
  );
};

export default DynamicContainer;
