import React, { useState, useContext } from 'react';
import './DynamicContainer.scss';
import { useLocation } from 'react-router-dom';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import GalleryComponent from '../GalleryComponent/GalleryComponent';
import { LanguageContext } from '../../context/LanguageContext';

const DynamicContainer = ({ items }) => {
  const path = useLocation();
  const urlPath = path.pathname;
  const [active, setActive] = useState('');
  const { t } = useContext(LanguageContext);

  // Map translated tab names back to English for component logic
  const getTabKey = (tabName) => {
    if (tabName === t('explore.tabs.explore') || tabName === 'Explore') return 'Explore';
    if (tabName === t('explore.tabs.wineDine') || tabName === 'Wine & Dine') return 'Wine & Dine';
    if (tabName === t('gallery.tabs.hotel') || tabName === 'Hotel') return 'Hotel';
    if (tabName === t('gallery.tabs.rooms') || tabName === 'Rooms') return 'Rooms';
    return tabName;
  };

  const selectedTab = () => {
    const tabKey = getTabKey(active);
    switch (tabKey) {
      case 'Explore':
      case 'Wine & Dine':
        return <ActivityComponent tab={tabKey} />;

      case 'Hotel':
      case 'Rooms':
        return <GalleryComponent tab={tabKey} />;

      default:
        if (urlPath.includes('/explore')) {
          setActive(t('explore.tabs.explore'));
          return <ActivityComponent tab="Explore" />;
        }
        setActive(t('gallery.tabs.hotel'));
        return <GalleryComponent tab="Hotel" />;
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
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${urlPath === '/explore' ? 'explore' : 'gallery'}`}>
        {selectedTab()}
      </div>
    </div>
  );
};

export default DynamicContainer;
