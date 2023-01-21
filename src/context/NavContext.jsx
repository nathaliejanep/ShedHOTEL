import React, { useState } from 'react';
// import { determineSeason } from '../utils/determineSeason';

export const Context = React.createContext();
export const NavContext = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
  );
};
