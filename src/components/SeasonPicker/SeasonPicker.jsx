import React, { useContext } from 'react';
import { Context } from '../../context/SeasonContext';
import './SeasonPicker.scss';

const SeasonPicker = () => {
  const { winter, setWinter } = useContext(Context) || { winter: true };

  const winterOnClick = () => {
    setWinter(true);
  };
  const summerOnClick = () => {
    setWinter(false);
  };

  return (
    <div className="season-picker">
      <button onClick={winterOnClick} className={winter ? 'active-season' : ''}>
        Winter
      </button>
      <button onClick={summerOnClick} className={winter ? '' : 'active-season'}>
        Summer
      </button>
    </div>
  );
};

export default SeasonPicker;
