import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
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

function App() {
  // console.log(window.location.pathname);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} loader={determineSeason} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/caffegoomah" element={<Goomah />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/hotelpolicy" element={<Policy />} />
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
      <Footer />
    </>
  );
};
export default App;
