import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Explore from './pages/Explore/Explore';
import Goomah from './pages/Goomah/Goomah';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
import Error from './pages/Error/Error';
import { determineSeason } from './utils/determineSeason';
import Footer from './components/Footer/Footer';
import Policy from './pages/Policy/Policy';
import Terms from './pages/Terms/Terms';
import { LanguageProvider } from './context/LanguageContext';

// Detect browser language for root redirect
const detectLanguage = () => {
  const stored = localStorage.getItem('language');
  if (stored && (stored === 'en' || stored === 'fr')) {
    return stored;
  }
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('fr') ? 'fr' : 'en';
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={<Navigate to={`/${detectLanguage()}`} replace />}
        />
        <Route
          path='/:lang'
          element={<Root />}
        >
          <Route
            index
            element={<Home />}
            loader={determineSeason}
          />
          <Route
            path='rooms'
            element={<Rooms />}
          />
          <Route
            path='explore'
            element={<Explore />}
          />
          <Route
            path='shedgoomah'
            element={<Goomah />}
          />
          <Route
            path='gallery'
            element={<Gallery />}
          />
          <Route
            path='contact'
            element={<Contact />}
          />
          <Route
            path='faq'
            element={<Faq />}
          />
          <Route
            path='hotelpolicy'
            element={<Policy />}
          />
          <Route
            path='terms'
            element={<Terms />}
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Route>
      </>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </LanguageProvider>
  );
};
export default App;
