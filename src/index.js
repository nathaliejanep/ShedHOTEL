import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavContext } from './context/NavContext';
import { SeasonContext } from './context/SeasonContext';
import reportWebVitals from './reportWebVitals';
import './sassStyles/_global.scss';
import './sassStyles/_typography.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavContext>
      <SeasonContext>
        <App />
      </SeasonContext>
    </NavContext>
  </React.StrictMode>
);

reportWebVitals();
