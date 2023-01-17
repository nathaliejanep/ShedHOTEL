import React, { useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home, { determineSeason } from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import Activities from './components/Activities/Activities';
import Goomah from './components/Goomah/Goomah';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import Error from './components/Error/Error';
export const ThemeContext = React.createContext();

function App() {
  console.log(window.location.pathname);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} loader={determineSeason} />
        <Route path="/rooms" element={<Rooms />} />
        <Route
          path="/activities"
          element={<Activities />}
          loader={determineSeason}
        />
        <Route path="/caffegoomah" element={<Goomah />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} loader={determineSeason} />
        <Route path="/*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
