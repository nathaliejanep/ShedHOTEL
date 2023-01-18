import React, { useState } from 'react';
import { determineSeason } from '../utils/determineSeason';

export const Context = React.createContext();
export const SeasonContext = ({ children }) => {
  const [season, setSeason] = useState(determineSeason);

  return (
    <Context.Provider value={{ season, setSeason }}>
      {children}
    </Context.Provider>
  );
};
