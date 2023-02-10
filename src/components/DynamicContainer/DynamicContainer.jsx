import React, { useState } from 'react';
import './DynamicContainer.scss';
import { useLocation } from 'react-router-dom';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import GalleryComponent from '../GalleryComponent/GalleryComponent';

const DynamicContainer = ({ items }) => {
  const path = useLocation();
  const urlPath = path.pathname;
  const [active, setActive] = useState('');

  const selectedTab = () => {
    switch (active) {
      case 'Activities':
      case 'Wine & Dine':
        return <ActivityComponent tab={active} />;

      case 'Hotel':
      case 'Rooms':
        return <GalleryComponent tab={active} />;

      default:
        if (urlPath === '/activities') {
          setActive('Activities');
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
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${urlPath === '/activities' ? 'activities' : 'gallery'}`}
      >
        {selectedTab()}
      </div>
    </div>
  );
};

export default DynamicContainer;
