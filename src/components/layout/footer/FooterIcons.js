import React from 'react';
import {AiOutlineWhatsApp} from "react-icons/ai";
import {FaFacebook, FaInstagram} from "react-icons/fa";

const FooterIcons = () => {
    return (
        <div className="footer_container-icons d-flex pt-5 justify-content-around">
            <AiOutlineWhatsApp className="icon"/>
            <FaInstagram className="icon"/>
            <FaFacebook className="icon"/>
        </div>
    );
};

export default FooterIcons;
