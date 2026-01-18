import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import ShedLogoBlack from '../../assets/images/logos/shed-logo-black.svg';
import SeasonPicker from '../SeasonPicker/SeasonPicker';
import { Squeeze as Hamburger } from 'hamburger-react';
// import LinkNewWindow from '../../utils/linkNewWindow';
import Button from '../Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = useLocation();
  const { language } = useLanguage();

  // Load translations based on current language
  const t = language === 'fr' ? translationsFR : translationsEN;

  // const toggleNav = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  window.addEventListener('locationchange', function () {});

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {path.pathname !== '/shedgoomah' ? (
        <nav className='nav'>
          <div className='burger-season-wrapper'>
            {path.pathname === '/' ? (
              <div className='season-wrapper'>
                <SeasonPicker />
              </div>
            ) : (
              <NavLink
                to='/'
                className='nav-logo-phone'
              >
                <img
                  src={ShedLogoBlack}
                  alt='Shed Hotel Logo'
                  onClick={closeMobileMenu}
                />
              </NavLink>
            )}

            <Hamburger
              toggled={open}
              toggle={setOpen}
            />
          </div>

          <div className={open ? 'nav-menu expanded' : 'nav-menu'}>
            <NavLink
              to='/'
              className={'nav-logo' + (open ? ' open' : '')}
              style={({ isActive }) =>
                isActive ? { display: 'none' } : { display: 'block' }
              }
            >
              <img
                src={ShedLogoBlack}
                alt='Shed Hotel Logo'
                onClick={closeMobileMenu}
              />
            </NavLink>

            {/* Show this on expanded phone */}
            <NavLink
              to='/'
              className={'nav-logo phone' + (open ? ' open' : '')}
            >
              <img
                src={ShedLogoBlack}
                alt='Shed Hotel Logo'
                onClick={closeMobileMenu}
              />
            </NavLink>
            <ul>
              <li>
                <NavLink
                  to='/rooms'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t.nav.rooms}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/explore'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t.nav.explore}
                </NavLink>
              </li>

              <li onClick={closeMobileMenu}>
                {/* Use this to open in new window - not working on deployment on Netlify, should work on goDaddy */}
                {/* <LinkNewWindow to="/shedgoomah">Caffè Goomah</LinkNewWindow> */}
                <NavLink
                  to='/shedgoomah'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t.nav.eat}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/gallery'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t.nav.gallery}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t.nav.contact}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to='/faq'
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t.nav.faq}
                </NavLink>
              </li>
    
              <li>
                <Button />
              </li>
              <li>
                <LanguageSelector />
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
