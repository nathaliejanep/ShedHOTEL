import React from 'react';
import { NavLink } from 'react-router-dom';

const openInNewWindow = (url) => {
  window.open(url, '_blank');
  console.log('check if we reach this function on deployment');
};

const LinkNewWindow = ({ to, children }) => (
  <NavLink
    to={to}
    onClick={(e) => {
      e.preventDefault();
      openInNewWindow(to);
    }}
    className={({ isActive }) =>
      'nav-links' + (isActive ? ' active' : ' inactive')
    }
  >
    {children}
  </NavLink>
);

export default LinkNewWindow;
