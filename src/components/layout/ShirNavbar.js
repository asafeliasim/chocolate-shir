import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import shirLogo from '../../asserts/images/‏‏shirlogo.PNG';
import {FaCookieBite} from 'react-icons/fa';

const ShirNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="shir_navbar pl-4">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto shir_navbar_list">
                    <Nav.Link href="#gallery" className="shir_navbar_link mx-5"> גלריית טעימות</Nav.Link>
                    <Nav.Link href="#contact" className="shir_navbar_link mx-5">צור קשר</Nav.Link>
                    <Nav.Link href="#about" className="shir_navbar_link mx-5">טעימה עלינו</Nav.Link>
                    <Nav.Link href="#about" className="shir_navbar_link mx-5">
                        <FaCookieBite style={{marginLeft:'1rem',width:'2.5rem'}}/>
                        סל העוגיות שלי

                    </Nav.Link>
                </Nav>
                <Nav>

                    <Navbar.Brand href="#" className="pr-4 brand">
                        <img
                            src={shirLogo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
/*
           {/!* /!* <nav className="navbar navbar_shir">
            <ul className="navbar_container">
                <li className="navbar_link">
                    <a href="#gallery" className="navbar_link">
                        גלריית טעימות
                    </a>

                </li>
                <li className="navbar_link">
                    <a href="#contact" className="navbar_link">
                        צור קשר
                    </a>

                </li>
                <li className="navbar_link">
                    <a href="#about" className="navbar_link">
                        טעימה עלינו
                    </a>
                </li>

            </ul>*!/}
      {/!*  </nav>*!/}*/


    );
};

export default ShirNavbar;
