import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import ShedLogo from '../../assets/images/ShedLogo.svg';
import { FaTimes, FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = useLocation();

  const handleClick = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  console.log(path.pathname);
  return (
    <nav className="nav">
      <div className="menu-icon" onClick={handleClick}>
        {open ? '' : <FaBars />}
      </div>

      <div className={open ? 'nav-menu expanded' : 'nav-menu'}>
        <div className="menu-icon" onClick={handleClick}>
          {open ? <FaTimes /> : ''}
        </div>

        <NavLink
          to="/"
          className={({ isActive }) => 'nav-logo' + (isActive ? ' hidden' : '')}
        >
          <img src={ShedLogo} alt="Shed Hotel Logo" onClick={handleClick} />
        </NavLink>
        {path.pathname !== '/caffegoomah' ? (
          <ul>
            <li>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' active' : ' inactive')
                }
                onClick={closeMobileMenu}
              >
                Rooms
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/activities"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' active' : ' inactive')
                }
                onClick={closeMobileMenu}
              >
                Activities
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/caffegoomah"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' active' : ' inactive')
                }
              >
                Caffè Goomah
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' active' : ' inactive')
                }
                onClick={closeMobileMenu}
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' active' : ' inactive')
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' active' : ' inactive')
                }
                onClick={closeMobileMenu}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <button className="green-btn">Reserve</button>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
