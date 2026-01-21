import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import ShedLogoBlack from '../../assets/images/logos/shed-logo-black.svg';
import ShedLogoWhite from '../../assets/images/logos/shed-logo-white.svg';
import SeasonPicker from '../SeasonPicker/SeasonPicker';
import { Squeeze as Hamburger } from 'hamburger-react';
// import LinkNewWindow from '../../utils/linkNewWindow';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import translationsEN from '../../translations/en.json';
import translationsFR from '../../translations/fr.json';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when navbar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      {path.pathname !== '/shedgoomah' ? (
        <nav className={`nav ${scrolled && !open ? 'scrolled' : ''}`}>
          {/* Logo on left when scrolled */}
          <NavLink to='/' className={`nav-logo-left ${!open && (path.pathname !== '/' || scrolled) ? 'visible' : ''}`}>
            <img src={ShedLogoWhite} alt='Shed Hotel Logo' />
          </NavLink>
          
          <div className='burger-season-wrapper'>
              <div className='season-wrapper'>
                <SeasonPicker />
              </div>
            <Hamburger
              toggled={open}
              toggle={setOpen}
            />
          </div>

          <div className={open ? 'nav-menu expanded' : 'nav-menu'}>
            {/* <NavLink
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
            </NavLink> */}

            {/* Show this on expanded phone */}
            <NavLink
              to='/'
              className={'nav-logo phone' + (open ? ' open' : '')}
            >
              <img
                src={ShedLogoWhite}
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
                    
            {/* SeasonPicker in menu on mobile */}
            <li className='season-wrapper-menu'>
              <SeasonPicker />
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
