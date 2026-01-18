import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import './Navbar.scss';
import ShedLogoBlack from '../../assets/images/logos/shed-logo-black.svg';
import SeasonPicker from '../SeasonPicker/SeasonPicker';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { Squeeze as Hamburger } from 'hamburger-react';
// import LinkNewWindow from '../../utils/linkNewWindow';
import Button from '../Button/Button';
import { useTranslation } from '../../context/LanguageContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = useLocation();
  const { lang } = useParams();
  const t = useTranslation();

  // const toggleNav = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  window.addEventListener('locationchange', function () {});

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getLocalizedPath = (path) => {
    const currentLang = lang || window.location.pathname.split('/')[1] || 'en';
    return `/${currentLang}${path}`;
  };

  return (
    <>
      {!path.pathname.includes('/shedgoomah') ? (
        <nav className='nav'>
          <div className='burger-season-wrapper'>
            {path.pathname === `/${lang || 'en'}` || path.pathname === '/' ? (
              <div className='season-wrapper'>
                <SeasonPicker />
                <LanguageSelector />
              </div>
            ) : (
              <>
                <NavLink
                  to={getLocalizedPath('')}
                  className='nav-logo-phone'
                >
                  <img
                    src={ShedLogoBlack}
                    alt='Shed Hotel Logo'
                    onClick={closeMobileMenu}
                  />
                </NavLink>
                <LanguageSelector />
              </>
            )}

            <Hamburger
              toggled={open}
              toggle={setOpen}
            />
          </div>

          <div className={open ? 'nav-menu expanded' : 'nav-menu'}>
            <NavLink
              to={getLocalizedPath('')}
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
              to={getLocalizedPath('')}
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
                  to={getLocalizedPath('/rooms')}
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t('navbar.rooms')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={getLocalizedPath('/explore')}
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t('navbar.explore')}
                </NavLink>
              </li>

              <li onClick={closeMobileMenu}>
                {/* Use this to open in new window - not working on deployment on Netlify, should work on goDaddy */}
                {/* <LinkNewWindow to="/shedgoomah">Caffè Goomah</LinkNewWindow> */}
                <NavLink
                  to={getLocalizedPath('/shedgoomah')}
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t('navbar.eat')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={getLocalizedPath('/gallery')}
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t('navbar.gallery')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={getLocalizedPath('/contact')}
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t('navbar.contact')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={getLocalizedPath('/faq')}
                  className={({ isActive }) =>
                    'nav-links' + (isActive ? ' active' : ' inactive')
                  }
                  onClick={closeMobileMenu}
                >
                  {t('navbar.faq')}
                </NavLink>
              </li>
              <li>
                <Button />
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
