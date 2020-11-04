import React from 'react';
import './sass/main.scss';
import Cookies from "./components/gallery/Cookies";
import CookieDivider from "./components/layout/CookieDivider";
import ImageTransition from "./components/layout/ImageTransition";
import {firstBG,secondBG} from "./components/layout/backGround";
import About from "./components/about/About";
import Footer from './components/layout/footer/Footer';
import OrderList from "./components/order/OrderList";
// components

import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import {FaShoppingCart} from "react-icons/fa";
import ShirNavbar from "./components/layout/ShirNavbar";



const CartIcon = () => {
    return (
        <div className="navbar_link-cart">
            <a href="#about" className="navbar_link">
                <FaShoppingCart className="navbar_link-cart-icon"/>
            </a>
        </div>
    )
}

function App() {
  return (
    <>
      <ShirNavbar />
      <Header />
      <CookieDivider />
      <main>
          <Cookies />
          <OrderList />
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
