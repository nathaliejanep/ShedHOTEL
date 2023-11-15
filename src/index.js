import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavContext } from './context/NavContext';
import { SeasonContext } from './context/SeasonContext';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';
import './sassStyles/_global.scss';
import './sassStyles/_typography.scss';
import './sassStyles/layouts/_page-layout.scss';

ReactGA.initialize('G-3W52HPJEYW');

// Send pageview with a custom path
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

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
