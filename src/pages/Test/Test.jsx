// import React, { useState, useEffect } from 'react';
// import { NavLink, useLocation, withRouter } from 'react-router-dom';

// const Test = (props) => {
//   const [location, setLocation] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);

//   const path = useLocation().pathname;

//   useEffect(() => {
//     setLocation(path);
//   }, [path]);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return location === '/goomah' ? (
//     <div style={{ textAlign: 'center' }}>
//       <img src="/logo.png" alt="Logo" />
//     </div>
//   ) : (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '1rem',
//       }}
//     >
//       <NavLink to="/" style={{ flex: '1', textAlign: 'center' }}>
//         <img src="/logo.png" alt="Logo" />
//       </NavLink>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-end',
//         }}
//       >
//         <button onClick={handleMenuToggle}>
//           {menuOpen ? 'Close' : 'Open'}
//         </button>
//         {menuOpen && (
//           <ul
//             style={{
//               backgroundColor: 'lightgray',
//               listStyle: 'none',
//               padding: '1rem',
//               margin: 0,
//             }}
//           >
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Test;

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  const [location, setLocation] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const path = useLocation().pathname;

  useEffect(() => {
    setLocation(path);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [path]);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'lightgray',
      }}
    >
      {windowWidth >= 768 ? (
        <>
          {location !== '/' && (
            <NavLink to="/" style={{ flex: '1', textAlign: 'center' }}>
              <img src="/logo.png" alt="Logo" />
            </NavLink>
          )}
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ marginRight: '1rem' }}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li style={{ marginRight: '1rem' }}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </>
      ) : (
        <>
          <NavLink to="/" style={{ flex: '1', textAlign: 'center' }}>
            <img src="/logo.png" alt="Logo" />
          </NavLink>
          <button onClick={handleMenuToggle}>
            {menuOpen ? 'Close' : 'Open'}
          </button>
          {menuOpen && (
            <ul
              style={{
                backgroundColor: 'lightgray',
                listStyle: 'none',
                padding: '1rem',
                margin: 0,
              }}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
