import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationContext } from '../../context/ContextProvider';
const Test = () => {
  const { pages } = useContext(NavigationContext);
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.name}>
          <NavLink to={page.path}>{page.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Test;
