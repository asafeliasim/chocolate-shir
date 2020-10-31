import React from 'react';
import './sass/main.scss';
import Cookies from "./components/gallery/Cookies";
import CookieDivider from "./components/layout/CookieDivider";
import ImageTransition from "./components/layout/ImageTransition";
import {firstBG,secondBG} from "./components/layout/backGround";
import About from "./components/about/About";
import Footer from './components/layout/footer/Footer';
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
          <CookieDivider />
          <ImageTransition bg={firstBG}/>
          <CookieDivider />
          <Contact />
          <CookieDivider />
          <ImageTransition bg={secondBG}/>

          <CookieDivider />
          <About />
      </main>
        <Footer />
    </>
  );
}

export default App;
