import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicMenu = ({ items }) => {
  const path = useLocation();

  const [active, setActive] = useState('');

  const selectedTab = () => {
    switch (active) {
      case 'Hotel Happenings':
        return <p>Hotel Happenings</p>;
      case 'Wine & Dine':
        return <p>Wine & Dine</p>;
      case 'Lorem Ipsum':
        return <p>Lorem Ipsum</p>;
      case 'Lorem Ipsum2':
        return <p>Lorem Ipsum2</p>;
      case 'Rooms':
        return <p>Rooms</p>;
      case 'Nooks & Cranes':
        return <p>Nooks & Cranes</p>;
      default:
        if (path.pathname === '/gallery') {
          return <p>Rooms</p>;
        }
        return <p>Hotel Happenings</p>;
    }
  };
  console.log(active);

  console.log(items);
  return (
    <div>
      <p>Hello</p>
      <ul>
        {items.map((item, i) => (
          <li key={i} onClick={() => setActive(item)}>
            <h4>{item}</h4>
          </li>
        ))}
      </ul>
      <div id="contains">{selectedTab()}</div>
    </div>
  );
};

export default DynamicMenu;
