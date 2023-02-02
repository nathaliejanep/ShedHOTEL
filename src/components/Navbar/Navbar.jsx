import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import ShedLogo from '../../assets/images/ShedLogo.svg';
import { FaTimes, FaBars } from 'react-icons/fa';
// import { Context } from '../../context/SeasonContext';
import SeasonPicker from '../SeasonPicker/SeasonPicker';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const { winter, setWinter } = useContext(Context);
  const path = useLocation();

  const toggleNav = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);
  console.log('open', open);
  return (
    <nav className="nav">
      <div className="burger-season-wrapper">
        {path.pathname !== '/' ? '' : <SeasonPicker />}
      </div>

      {path.pathname !== '/caffegoomah' ? (
        <>
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
                (open ? ' open' : '') +
                (path.pathname === '/caffegoomah' ? ' goomah__nav' : '')
              }
            >
              <img
                src={ShedLogo}
                alt="Shed Hotel Logo"
                onClick={closeMobileMenu}
              />
            </NavLink>
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
                <a
                  href="https://sky-eu1.clock-software.com/spa/pms-wbe/#/hotel/12633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="green-btn"
                >
                  Reserve
                </a>
              </li>
            </ul>{' '}
          </div>
        </>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Navbar;
