import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import ShedLogo from '../../assets/images/ShedLogo.svg';
import { FaTimes, FaBars } from 'react-icons/fa';
// import { Context } from '../../context/SeasonContext';
import SeasonPicker from '../SeasonPicker/SeasonPicker';
import { Squeeze as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [goBack, setGoBack] = useState(false);
  // const { winter, setWinter } = useContext(Context);
  const path = useLocation();

  const toggleNav = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  window.addEventListener('locationchange', function () {});

  // If user clicks back button, don't show logo
  window.onpopstate = (e) => {
    setGoBack(true);
    console.log('went back');
    console.log(goBack);
  };

  // console.log('open', open);
  return (
    <>
      {path.pathname !== '/caffegoomah' ? (
        <nav className="nav">
          <div className="burger-season-wrapper">
            {path.pathname !== '/' ? '' : <SeasonPicker />}
          </div>

          <NavLink
            to="/"
            className="nav-logo phone"
            style={({ isActive }) =>
              isActive ? { display: 'none' } : { display: 'block' }
            }
          >
            <img
              src={ShedLogo}
              alt="Shed Hotel Logo"
              onClick={closeMobileMenu}
            />
          </NavLink>

          <Hamburger toggled={open} toggle={setOpen} />
          {/* <div className="menu-icon" onClick={toggleNav}>
            {open ? '' : <FaBars />}
          </div> DELETE */}
          <div className={open ? 'nav-menu expanded' : 'nav-menu'}>
            {/* <div className="menu-icon" onClick={toggleNav}>
              {open ? <FaTimes /> : ''}
            </div> DELETE */}
            <NavLink
              to="/"
              className={
                // 'nav-logo' +
                // (path.pathname === '/' ? ' hidden' : '') +
                // (open ? ' open' : '')
                ({ isActive }) =>
                  'nav-logo' +
                  (isActive ? ' hidden' : '') +
                  (open ? ' open' : '')
              }
              style={({ isActive }) =>
                isActive ? { display: 'none' } : { display: 'block' }
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
            </ul>
          </div>
        </nav>
      ) : (
        ''
      )}
    </>
  );
};

export default Navbar;
