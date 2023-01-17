import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Activities = () => {
  const season = useLoaderData();
  return (
    <div>
      Activities<p>{season}</p>
    </div>
  );
};

export default Activities;
