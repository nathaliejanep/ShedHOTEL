import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Context } from '../../context/SeasonContext';

const Activities = () => {
  // const season = useLoaderData();
  const { season } = useContext(Context);
  return (
    <div>
      Activities
      <p>{season}</p>
    </div>
  );
};

export default Activities;
