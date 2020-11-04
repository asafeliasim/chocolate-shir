import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
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
            </ul>
        </nav>
    );
};

export default Navbar;
