import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import ShedLogo from '../../assets/images/ShedLogo.svg';
import { FaTimes, FaBars } from 'react-icons/fa';
// import { Context } from '../../context/SeasonContext';
import SeasonPicker from '../../components/SeasonPicker/SeasonPicker';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const { winter, setWinter } = useContext(Context);
  const path = useLocation();

  const toggleNav = () => setOpen(!open);
  // const closeMobileMenu = () => setOpen(false);

  console.log(path.pathname);

  return (
    <nav className="nav">
      <div className="burger-season-wrapper">
        {path.pathname !== '/' ? '' : <SeasonPicker />}
      </div>

      <div className="menu-icon" onClick={toggleNav}>
        {open ? '' : <FaBars />}
      </div>

      <div className={open ? 'nav-menu expanded' : 'nav-menu'}>
        <div className="menu-icon" onClick={toggleNav}>
          {open ? <FaTimes /> : ''}
        </div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            'nav-logo' +
            (isActive ? ' hidden' : '') +
            (path.pathname === '/caffegoomah' ? ' goomah__nav' : '')
          }
        >
          <img src={ShedLogo} alt="Shed Hotel Logo" onClick={toggleNav} />
        </NavLink>

        {path.pathname !== '/caffegoomah' ? (
          <ul>
            <li>
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  'nav-links' + (isActive ? ' active' : ' inactive')
                }
                onClick={toggleNav}
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
                onClick={toggleNav}
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
                onClick={toggleNav}
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
                onClick={toggleNav}
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
                onClick={toggleNav}
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
                onClick={toggleNav}
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
