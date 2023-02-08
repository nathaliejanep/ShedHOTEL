import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import ShedLogoBlack from '../../assets/images/logos/shed-logo-black.svg';
// import { Context } from '../../context/SeasonContext';
import SeasonPicker from '../SeasonPicker/SeasonPicker';
import { Squeeze as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [goBack, setGoBack] = useState(false);
  // const { winter, setWinter } = useContext(Context);
  const path = useLocation();
  const browserWidth = window.innerWidth;

  console.log(browserWidth);
  // const toggleNav = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  window.addEventListener('locationchange', function () {});

  // If user clicks back button, don't show logo
  window.onpopstate = (e) => {
    // setGoBack(true);
    // console.log('went back');
    // console.log(goBack);
  };

  return (
    <>
      {path.pathname !== '/caffegoomah' ? (
        <nav className="nav">
          <div className="burger-season-wrapper">
            {path.pathname === '/' ? (
              <div className="season-wrapper">
                <SeasonPicker />
              </div>
            ) : (
              <NavLink to="/" className="nav-logo-phone">
                <img
                  src={ShedLogoBlack}
                  alt="Shed Hotel Logo"
                  onClick={closeMobileMenu}
                />
              </NavLink>
            )}

            <Hamburger toggled={open} toggle={setOpen} />
          </div>

          <div className={open ? 'nav-menu expanded' : 'nav-menu'}>
            <NavLink
              to="/"
              className={'nav-logo' + (open ? ' open' : '')}
              style={({ isActive }) =>
                isActive ? { display: 'none' } : { display: 'block' }
              }
            >
              <img
                src={ShedLogoBlack}
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
                  onClick={closeMobileMenu}
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
