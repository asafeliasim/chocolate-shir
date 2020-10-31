import React from 'react';
import './sass/main.scss';
import Cookies from "./components/gallery/Cookies";
import CookieDivider from "./components/layout/CookieDivider";
import ImageTransition from "./components/layout/ImageTransition";
// components

import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <CookieDivider />
      <main>
          <Cookies />
          <ImageTransition />
          <CookieDivider />
          <Contact />
      </main>
    </>
  );
}

export default App;
