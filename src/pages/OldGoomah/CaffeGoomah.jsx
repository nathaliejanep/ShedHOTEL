import React from 'react';
import { NavLink } from 'react-router-dom';

const CaffeGoomah = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
      }}
    >
      <NavLink to='/shedgoomah'>
        Incorrect link! Click here: Shed. Goomah
      </NavLink>
    </div>
  );
};

export default CaffeGoomah;
