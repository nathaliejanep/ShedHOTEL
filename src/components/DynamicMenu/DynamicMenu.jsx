import React, { useState } from 'react';
import './DynamicMenu.scss';
import { useLocation } from 'react-router-dom';
import ActivityComponent from '../ActivityComponent/ActivityComponent';
import GalleryComponent from '../GalleryComponent/GalleryComponent';

const DynamicMenu = ({ items }) => {
  const path = useLocation();
  const urlPath = path.pathname;
  const [active, setActive] = useState('');

  const selectedTab = () => {
    switch (active) {
      case 'Hotel Happenings':
      case 'Wine & Dine':
      case 'Lorem Ipsum':
      case 'Lorem Ipsum2':
        return <ActivityComponent tab={active} />;

      case 'Rooms':
      case 'Nooks & Cranes':
        return <GalleryComponent tab={active} />;

      default:
        if (urlPath === '/activities') {
          setActive('Hotel Happenings');
          return <p>Hotel Happenings</p>;
        }
        setActive('Rooms');
        return <p>Rooms</p>;
    }
  };
  console.log('active', active);

  // console.log(items);
  return (
    <div className="dynamic-menu">
      <ul>
        {items.map((item, i) => (
          <li>
            <button
              key={i}
              onClick={() => setActive(item)}
              className={`dynamic-menu-btn ${active === item ? 'active' : ''}`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div
        id="contains"
        className={`${urlPath === '/activities' ? 'activities' : 'gallery'}`}
      >
        {selectedTab()}
      </div>
    </div>
  );
};

export default DynamicMenu;
