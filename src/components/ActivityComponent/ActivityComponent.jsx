import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context/SeasonContext';
import './ActivityComponent.scss';

const ActivityComponent = ({ tab }) => {
  const { winter } = useContext(Context);
  return (
    <div>
      {tab}

      <p>{winter ? 'its winter' : 'its summer'}</p>
    </div>
  );
};

export default ActivityComponent;
