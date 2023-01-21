import React, { useState } from 'react';
import { determineSeason } from '../utils/determineSeason';

export const Context = React.createContext();
export const SeasonContext = ({ children }) => {
  const [winter, setWinter] = useState(determineSeason);

  return (
    <Context.Provider value={{ winter, setWinter }}>
      {children}
    </Context.Provider>
  );
};
